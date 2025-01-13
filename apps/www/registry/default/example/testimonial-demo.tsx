import {
  Name,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialContent,
  TestimonialDate,
  TestimonialHeader,
  TestimonialHighlight,
  TestimonialInfo,
  TestimonialStars,
  Username,
} from "@/registry/default/ui/testimonial"

export default function TestimonialDemo() {
  return (
    <TestimonialCard>
      <TestimonialHeader>
        <TestimonialAvatar src="/faces/1.jpg" alt="Sarah Wilson" />
        <TestimonialInfo>
          <Name>Sarah Wilson</Name>
          <Username>@sarahw</Username>
        </TestimonialInfo>
      </TestimonialHeader>
      <TestimonialStars />
      <TestimonialContent>
        The <TestimonialHighlight>attention to detail</TestimonialHighlight> and
        user experience is outstanding. This is exactly what I've been looking
        for!
      </TestimonialContent>
      <TestimonialDate>Posted 3 days ago</TestimonialDate>
    </TestimonialCard>
  )
}
