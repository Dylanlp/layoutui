import {
  VerticalTestimonial,
  VerticalTestimonialAvatar,
  VerticalTestimonialContent,
  VerticalTestimonialHighlight,
  VerticalTestimonialInfo,
  VerticalTestimonialName,
  VerticalTestimonialRole,
} from "@/registry/new-york/ui/verticaltestimonial"

export default function VerticalTestimonialDemo() {
  return (
    <VerticalTestimonial>
      <VerticalTestimonialContent>
        The attention to detail and the user experience is{" "}
        <VerticalTestimonialHighlight>
          absolutely phenomenal
        </VerticalTestimonialHighlight>
      </VerticalTestimonialContent>
      <VerticalTestimonialAvatar src="/avatars/01.png" alt="Sarah Wilson" />
      <VerticalTestimonialInfo>
        <VerticalTestimonialName>Sarah Wilson</VerticalTestimonialName>
        <VerticalTestimonialRole>Product Designer</VerticalTestimonialRole>
      </VerticalTestimonialInfo>
    </VerticalTestimonial>
  )
}
