"use client"

import * as React from "react"
import { useInView } from "framer-motion"

import { cn } from "@/lib/utils"

// VerticalTestimonial
interface VerticalTestimonialProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalTestimonial = React.forwardRef<
  HTMLDivElement,
  VerticalTestimonialProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center gap-5 text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
VerticalTestimonial.displayName = "VerticalTestimonial"

// VerticalTestimonialContent
const VerticalTestimonialContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-pretty text-2xl leading-snug tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
VerticalTestimonialContent.displayName = "VerticalTestimonialContent"

// VerticalTestimonialHighlight
interface VerticalTestimonialHighlightProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  resetKey?: number
}

const VerticalTestimonialHighlight = React.forwardRef<
  HTMLSpanElement,
  VerticalTestimonialHighlightProps
>(({ className, children, resetKey = 0, ...props }, ref) => {
  const highlightRef = React.useRef(null)
  const isInView = useInView(highlightRef, { once: false })
  const [shouldAnimate, setShouldAnimate] = React.useState(false)

  React.useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    }
  }, [isInView])

  React.useEffect(() => {
    setShouldAnimate(false)
    const timer = setTimeout(() => {
      if (isInView) {
        setShouldAnimate(true)
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [resetKey, isInView])

  return (
    <span
      ref={highlightRef}
      className={cn("relative inline-block", className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-yellow-100 from-50% to-yellow-100/20",
          shouldAnimate && "animate-highlight"
        )}
        aria-hidden="true"
      />
    </span>
  )
})
VerticalTestimonialHighlight.displayName = "VerticalTestimonialHighlight"

// VerticalTestimonialAvatar
interface VerticalTestimonialAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
}

const VerticalTestimonialAvatar = React.forwardRef<
  HTMLDivElement,
  VerticalTestimonialAvatarProps
>(({ className, src, alt, ...props }, ref) => {
  return (
    <div
      className="h-10 w-10 overflow-hidden rounded-full bg-muted"
      ref={ref}
      {...props}
    >
      {src && (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      )}
    </div>
  )
})
VerticalTestimonialAvatar.displayName = "VerticalTestimonialAvatar"

// VerticalTestimonialInfo
const VerticalTestimonialInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col justify-start gap-0.5", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})
VerticalTestimonialInfo.displayName = "VerticalTestimonialInfo"

// VerticalTestimonialName
const VerticalTestimonialName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm leading-4 text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
VerticalTestimonialName.displayName = "VerticalTestimonialName"

// VerticalTestimonialRole
const VerticalTestimonialRole = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm leading-4 text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
VerticalTestimonialRole.displayName = "VerticalTestimonialRole"

export {
  VerticalTestimonial,
  VerticalTestimonialContent,
  VerticalTestimonialHighlight,
  VerticalTestimonialAvatar,
  VerticalTestimonialInfo,
  VerticalTestimonialName,
  VerticalTestimonialRole,
}
