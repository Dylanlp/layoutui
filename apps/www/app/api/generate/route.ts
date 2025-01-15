import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("Missing ANTHROPIC_API_KEY environment variable")
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const COMPONENT_REGEX = /```jsx\s*(import[\s\S]*?export default[\s\S]*?;)\s*```/

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const prompt = formData.get("prompt") as string
    const image = formData.get("image") as File | null

    let imageContext = ""
    if (image) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const base64Image = buffer.toString("base64")
      imageContext = `Here is an image of the website for context. Please use this as inspiration for the component's design and functionality: data:${image.type};base64,${base64Image}\n\n`
    }

    const message = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `${imageContext}Create a React component based on this description: ${prompt}

Please follow this exact format and guidelines:
1. Start with a \`\`\`jsx codeblock
2. You have access to these components from our registry:
   - Button from "@/registry/new-york/ui/button"
   - Stars and StarImage from "@/registry/new-york/ui/stars"
   - Achievement, Achievements, Metric, Stat from "@/registry/new-york/ui/achievements"
3. Use a function component
4. Use TailwindCSS classes for styling
5. Export the component as default
6. End with a semicolon after the export
7. End the codeblock with \`\`\`

Here are examples of how to use the components:

Button example:
\`\`\`jsx
import { Button } from "@/registry/new-york/ui/button";

const ButtonDemo = () => {
  return (
    <Button variant="outline" className="gap-2">
      Click Me
    </Button>
  );
};

export default ButtonDemo;
\`\`\`

Stars example:
\`\`\`jsx
import { StarImage, Stars } from "@/registry/new-york/ui/stars";

const StarsDemo = () => {
  return (
    <Stars count={400} text="Trusted by">
      <StarImage src="/faces/9.jpg" />
      <StarImage src="/faces/2.jpg" />
      <StarImage src="/faces/3.jpg" />
      <StarImage src="/faces/28.jpg" />
    </Stars>
  );
};

export default StarsDemo;
\`\`\`

Achievements example:
\`\`\`jsx
import {
  Achievement,
  Achievements,
  Metric,
  Stat,
} from "@/registry/new-york/ui/achievements";

const AchievementsDemo = () => {
  return (
    <Achievements>
      <Achievement>
        <Stat>10000</Stat>
        <Metric>Downloads</Metric>
      </Achievement>
      <Achievement>
        <Stat>1000</Stat>
        <Metric>Stars</Metric>
      </Achievement>
      <Achievement>
        <Stat>500</Stat>
        <Metric>Contributors</Metric>
      </Achievement>
    </Achievements>
  );
};

export default AchievementsDemo;
\`\`\`

The components work as follows:
- Button: Basic button component with variants (outline, default, etc.)
- Stars: Shows star rating with avatars
- StarImage: Individual avatar in Stars component
- Achievements: Container for achievement stats
- Achievement: Individual achievement with decorative borders
- Stat: Animated number that counts up when in view
- Metric: Label text below the stat

Now create your component following these examples. Return ONLY the code block, no explanation or additional text.`,
        },
      ],
    })

    const content = message.content[0]
    if ("type" in content && content.type === "text") {
      const match = content.text.match(COMPONENT_REGEX)
      if (!match) {
        throw new Error("Generated code does not match expected format")
      }
      return NextResponse.json({ code: match[1] })
    }
  } catch (error) {
    console.error("Error generating code:", error)
    return NextResponse.json(
      { error: "Failed to generate code" },
      { status: 500 }
    )
  }
}
