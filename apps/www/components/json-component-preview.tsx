import * as React from "react"
import { transform } from "@babel/standalone"
import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"
import { ThemeWrapper } from "@/components/theme-wrapper"
import {
  Achievement,
  Achievements,
  Metric,
  Stat,
} from "@/registry/new-york/ui/achievements"
import { Button } from "@/registry/new-york/ui/button"
import { StarImage, Stars } from "@/registry/new-york/ui/stars"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

interface JsonComponentData {
  content: string
}

interface JsonComponentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: JsonComponentData
  hideCode?: boolean
}

// Registry of available components
const AVAILABLE_COMPONENTS = {
  Button,
  Stars,
  StarImage,
  Achievement,
  Achievements,
  Metric,
  Stat,
}

export function JsonComponentPreview({
  data,
  className,
  hideCode = false,
  ...props
}: JsonComponentPreviewProps) {
  const [error, setError] = React.useState<string | null>(null)

  const Preview = React.useMemo(() => {
    try {
      // Remove import statement and export statement
      const cleanCode = data.content
        .replace(/import React.*?;\n/, "")
        .replace(/import \{[^}]+\} from "@\/registry\/.*?";\n/g, "")
        .replace(/export default.*?;/, "")
        // Remove type annotations
        .replace(/:\s*React\.FC(\<.*?\>)?/g, "")

      console.log("Clean code:", cleanCode)

      // Transform JSX to JavaScript
      const { code } = transform(cleanCode, {
        presets: ["react"],
        filename: "component.tsx",
      })

      if (!code) {
        throw new Error("Failed to transform code")
      }

      console.log("Transformed code:", code)

      // Extract the component name
      const componentNameMatch = code.match(/const\s+(\w+)\s*=/)
      if (!componentNameMatch) {
        throw new Error("Could not find component name")
      }
      const componentName = componentNameMatch[1]

      console.log("Component name:", componentName)

      // Create a function that returns the component
      const fn = new Function(
        "React",
        ...Object.keys(AVAILABLE_COMPONENTS),
        `
        try {
          ${code}
          console.log('Component defined:', typeof ${componentName});
          return ${componentName};
        } catch (e) {
          console.error('Error in component definition:', e);
          return null;
        }
      `
      )

      const Component = fn(React, ...Object.values(AVAILABLE_COMPONENTS))
      console.log("Component result:", Component)

      return () => {
        try {
          if (typeof Component === "function") {
            const element = React.createElement(Component)
            console.log("Created element:", element)
            return element
          }
          setError("Component is not a valid React component")
          return null
        } catch (e) {
          console.error("Render error:", e)
          setError(
            e instanceof Error ? e.message : "Failed to render component"
          )
          return null
        }
      }
    } catch (e) {
      console.error("Compilation error:", e)
      setError(e instanceof Error ? e.message : "Failed to compile component")
      return () => null
    }
  }, [data.content])

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-end p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={data.content}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
              />
            </div>
          </div>
          <ThemeWrapper defaultTheme="dark">
            <div className="preview flex w-full justify-center p-10">
              <div className="component-preview w-full">
                {error ? (
                  <div className="text-sm text-red-500">{error}</div>
                ) : (
                  <Preview />
                )}
              </div>
            </div>
          </ThemeWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              <div
                data-rehype-pretty-code-fragment
                className="relative overflow-hidden rounded-lg bg-zinc-950  dark:bg-zinc-900"
              >
                <pre className="overflow-x-auto bg-zinc-950 px-4 ">
                  <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
                    {data.content.split("\n").map((line, i) => (
                      <span key={i} className="line block">
                        {line}
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
