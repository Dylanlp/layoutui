"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

// FoundersNote container
interface FoundersNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded?: boolean
  onToggle?: () => void
}

const FoundersNote = React.forwardRef<HTMLDivElement, FoundersNoteProps>(
  ({ className, children, isExpanded = false, onToggle, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onToggle}
        className={cn(
          "relative mx-auto flex max-w-md cursor-pointer flex-col gap-8 rounded-3xl border-[0.5px] border-border/60 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FoundersNote.displayName = "FoundersNote"

// Content container
interface FoundersNoteContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean
}

const FoundersNoteContent = React.forwardRef<
  HTMLDivElement,
  FoundersNoteContentProps
>(({ className, children, isExpanded, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex flex-col gap-4 text-pretty", className)}
      {...props}
    >
      {children}
      {!isExpanded && (
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
      )}
    </div>
  )
})
FoundersNoteContent.displayName = "FoundersNoteContent"

// Headline text
const FoundersNoteHeadline = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-md font-medium text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
FoundersNoteHeadline.displayName = "FoundersNoteHeadline"

// Subtext
const FoundersNoteSubtext = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
})
FoundersNoteSubtext.displayName = "FoundersNoteSubtext"

// Expandable content
interface FoundersNoteExpandableProps
  extends Omit<HTMLMotionProps<"div">, "ref"> {
  isExpanded: boolean
}

const FoundersNoteExpandable = React.forwardRef<
  HTMLDivElement,
  FoundersNoteExpandableProps
>(({ className, children, isExpanded, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{ overflow: "hidden" }}
      className={cn("flex flex-col gap-4 pt-4", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
})
FoundersNoteExpandable.displayName = "FoundersNoteExpandable"

// Footer container
const FoundersNoteFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  )
})
FoundersNoteFooter.displayName = "FoundersNoteFooter"

// Author section
const FoundersNoteAuthor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-6", className)}
      {...props}
    >
      {children}
    </div>
  )
})
FoundersNoteAuthor.displayName = "FoundersNoteAuthor"

// Avatar container
interface FoundersNoteAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarSrc: string
  signatureSrc: string
}

const FoundersNoteAvatar = React.forwardRef<
  HTMLDivElement,
  FoundersNoteAvatarProps
>(({ className, avatarSrc, signatureSrc, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex h-10 w-10 items-center", className)}
      {...props}
    >
      <img src={avatarSrc} alt="avatar" className="h-10 w-10 rounded-full" />
      <img
        src={signatureSrc}
        alt="signature"
        className="absolute -bottom-1 -right-4 min-w-12"
      />
    </div>
  )
})
FoundersNoteAvatar.displayName = "FoundersNoteAvatar"

// Author info
const FoundersNoteInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-0.5", className)}
      {...props}
    >
      {children}
    </div>
  )
})
FoundersNoteInfo.displayName = "FoundersNoteInfo"

// Author name
const FoundersNoteName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium leading-4", className)}
      {...props}
    >
      {children}
    </p>
  )
})
FoundersNoteName.displayName = "FoundersNoteName"

// Author role
const FoundersNoteRole = React.forwardRef<
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
FoundersNoteRole.displayName = "FoundersNoteRole"

export {
  FoundersNote,
  FoundersNoteContent,
  FoundersNoteHeadline,
  FoundersNoteSubtext,
  FoundersNoteExpandable,
  FoundersNoteFooter,
  FoundersNoteAuthor,
  FoundersNoteAvatar,
  FoundersNoteInfo,
  FoundersNoteName,
  FoundersNoteRole,
}
