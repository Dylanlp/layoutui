import {
  Name,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialCarousel,
  TestimonialContent,
  TestimonialDate,
  TestimonialHeader,
  TestimonialHighlight,
  TestimonialInfo,
  TestimonialStars,
  Username,
} from "@/registry/new-york/ui/testimonial"

export default function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel>
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
          The <TestimonialHighlight>attention to detail</TestimonialHighlight>{" "}
          and user experience is outstanding. This is exactly what I've been
          looking for!
        </TestimonialContent>
        <TestimonialDate>Posted 3 days ago</TestimonialDate>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialHeader>
          <TestimonialAvatar src="/faces/2.jpg" alt="Emily Chen" />
          <TestimonialInfo>
            <Name>Emily Chen</Name>
            <Username>@emilyc</Username>
          </TestimonialInfo>
        </TestimonialHeader>
        <TestimonialStars />
        <TestimonialContent>
          I'm <TestimonialHighlight>impressed</TestimonialHighlight> by how
          intuitive and well-designed this is. Makes my workflow so much
          smoother!
        </TestimonialContent>
        <TestimonialDate>Posted 1 week ago</TestimonialDate>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialHeader>
          <TestimonialAvatar src="/faces/3.jpg" alt="Michael Brown" />
          <TestimonialInfo>
            <Name>Michael Brown</Name>
            <Username>@michaelb</Username>
          </TestimonialInfo>
        </TestimonialHeader>
        <TestimonialStars />
        <TestimonialContent>
          The <TestimonialHighlight>customization options</TestimonialHighlight>{" "}
          are fantastic. I can make it look exactly how I want!
        </TestimonialContent>
        <TestimonialDate>Posted 2 weeks ago</TestimonialDate>
      </TestimonialCard>
    </TestimonialCarousel>
  )
}
