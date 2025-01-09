"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

// TestimonialCard
interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-80 flex-col gap-4 rounded-2xl border-[0.5px] border-border bg-background p-4 shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

// TestimonialHeader - New component to handle avatar + name/username layout
const TestimonialHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex items-center gap-2 text-left", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})
TestimonialHeader.displayName = "TestimonialHeader"

// TestimonialAvatar
interface TestimonialAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
}

const TestimonialAvatar = React.forwardRef<
  HTMLDivElement,
  TestimonialAvatarProps
>(({ className, src, alt, ...props }, ref) => {
  return (
    <div
      className="h-10 w-10 overflow-hidden rounded-full"
      ref={ref}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-muted" />
      )}
    </div>
  )
})
TestimonialAvatar.displayName = "TestimonialAvatar"

// TestimonialInfo - New component to wrap Name and Username
const TestimonialInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col justify-start gap-0.5 text-left", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})
TestimonialInfo.displayName = "TestimonialInfo"

// Name
const Name = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-left text-sm leading-4 text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
Name.displayName = "Name"

// Username
const Username = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-left text-sm leading-4 text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
Username.displayName = "Username"

// Stars component
const TestimonialStars = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("flex items-center", className)} ref={ref} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="h-5 w-5 fill-current text-orange-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
})
TestimonialStars.displayName = "TestimonialStars"

// TestimonialContent
const TestimonialContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
TestimonialContent.displayName = "TestimonialContent"

// TestimonialHighlight
const TestimonialHighlight = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-yellow-100 to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})
TestimonialHighlight.displayName = "TestimonialHighlight"

// TestimonialDate
const TestimonialDate = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
TestimonialDate.displayName = "TestimonialDate"

// TestimonialCarousel
interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number // Duration in seconds for one complete cycle
  pauseOnHover?: boolean
  direction?: "ltr" | "rtl"
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    {
      className,
      children,
      speed = 30, // Increased default speed to 30 seconds
      direction = "ltr", // Added direction prop with default left-to-right
      pauseOnHover = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className="relative flex w-full overflow-hidden"
        ref={ref}
        {...props}
      >
        <motion.div
          className="flex gap-4 px-4"
          animate={{
            x: direction === "ltr" ? ["-50%", "0%"] : ["0%", "-50%"], // Changed animation direction
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" },
          })}
        >
          {children}
          {children} {/* Duplicate children for seamless loop */}
        </motion.div>
      </div>
    )
  }
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export {
  TestimonialCard,
  TestimonialHeader,
  TestimonialAvatar,
  TestimonialInfo,
  Name,
  Username,
  TestimonialStars,
  TestimonialContent,
  TestimonialHighlight,
  TestimonialDate,
  TestimonialCarousel,
}
