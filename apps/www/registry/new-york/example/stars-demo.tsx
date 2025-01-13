import { StarImage, Stars } from "@/registry/new-york/ui/stars"

export default function StarsDemo() {
  return (
    <Stars count={400} text="Trusted by">
      <StarImage src="/faces/9.jpg" />
      <StarImage src="/faces/2.jpg" />
      <StarImage src="/faces/3.jpg" />
      <StarImage src="/faces/28.jpg" />
    </Stars>
  )
}
