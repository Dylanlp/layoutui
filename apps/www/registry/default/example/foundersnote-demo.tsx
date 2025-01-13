import * as React from "react"

import {
  FoundersNote,
  FoundersNoteAuthor,
  FoundersNoteAvatar,
  FoundersNoteContent,
  FoundersNoteExpandable,
  FoundersNoteFooter,
  FoundersNoteHeadline,
  FoundersNoteInfo,
  FoundersNoteName,
  FoundersNoteRole,
  FoundersNoteSubtext,
} from "@/registry/default/ui/foundersnote"

export default function FoundersNoteDemo() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <FoundersNote
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <FoundersNoteContent isExpanded={isExpanded}>
        <FoundersNoteHeadline>
          Out of the 12+ million landing pages online, only 8% will convert more
          than 1% of visitors.
        </FoundersNoteHeadline>

        <FoundersNoteSubtext>
          Yup - while it&apos;s easier than ever to build a landing page,
          it&apos;s harder than ever to make it convert.
        </FoundersNoteSubtext>

        <FoundersNoteExpandable isExpanded={isExpanded}>
          <p className="text-sm text-muted-foreground">
            Most landing pages have two challenges with conversion:
            <br />
            <br />
            1. Getting visitors to take the first action
            <br />
            2. Getting those who do to come back
          </p>
          <p className="text-sm text-muted-foreground">
            That&apos;s why I built Layout UI - to give developers and startups
            the components they need to build high-converting pages.
          </p>

          <p className="text-sm text-muted-foreground">
            In the last 7 years, I&apos;ve helped startups increase conversion
            with optimized landing pages. I&apos;d love for you to give these
            components a try.
          </p>
        </FoundersNoteExpandable>
      </FoundersNoteContent>

      <FoundersNoteFooter>
        <FoundersNoteAuthor>
          <FoundersNoteAvatar
            avatarSrc="https://cal.com/api/avatar/122580ed-bc99-4f13-9b97-c609fecdb335.png"
            signatureSrc="/signature.svg"
          />
          <FoundersNoteInfo>
            <FoundersNoteName>Dylan</FoundersNoteName>
            <FoundersNoteRole>Founder, Layout UI</FoundersNoteRole>
          </FoundersNoteInfo>
        </FoundersNoteAuthor>
      </FoundersNoteFooter>
    </FoundersNote>
  )
}
