"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface LogoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  interval?: number
  quantity?: number
  children: React.ReactNode
}

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt?: string
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, src, alt = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-8 w-28 items-center justify-center bg-transparent p-1",
          className
        )}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    )
  }
)
Logo.displayName = "Logo"

const LogoGrid = React.forwardRef<HTMLDivElement, LogoGridProps>(
  ({ className, interval = 3000, quantity = 6, children, ...props }, ref) => {
    const logos = React.Children.toArray(children)
    const [visibleLogos, setVisibleLogos] = React.useState<number[]>([])
    const [nextLogoIndex, setNextLogoIndex] = React.useState(0)

    // Initialize with first N unique logos (or less if fewer logos provided)
    React.useEffect(() => {
      const numLogosToShow = Math.min(quantity, logos.length)
      const initialLogos = Array.from({ length: numLogosToShow }, (_, i) => i)
      setVisibleLogos(initialLogos.slice(0, quantity))
      setNextLogoIndex(numLogosToShow)
    }, [logos.length, quantity])

    // Handle the rotation only if we have more logos than quantity
    React.useEffect(() => {
      if (logos.length <= quantity) return

      const timer = setInterval(() => {
        setVisibleLogos((prev) => {
          if (prev.length >= quantity) {
            // Find a random position to replace
            const replaceIndex = Math.floor(Math.random() * quantity)

            // Find the next available logo that isn't currently visible
            let nextIndex = nextLogoIndex % logos.length
            while (prev.includes(nextIndex)) {
              nextIndex = (nextIndex + 1) % logos.length
            }

            const next = [...prev]
            next[replaceIndex] = nextIndex
            return next.slice(0, quantity)
          }
          return prev
        })

        setNextLogoIndex((current) => (current + 1) % logos.length)
      }, interval)

      return () => clearInterval(timer)
    }, [interval, logos.length, nextLogoIndex, quantity])

    return (
      <div
        ref={ref}
        className={cn(
          `grid gap-x-10 gap-y-7 ${
            quantity <= 3 ? "grid-cols-" + quantity : "grid-cols-3"
          }`,
          className
        )}
        {...props}
      >
        <AnimatePresence mode="popLayout">
          {visibleLogos.map((logoIndex, i) => (
            <motion.div
              key={`${logoIndex}-${i}`}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                transition: {
                  opacity: { duration: 0.8 },
                  filter: { duration: 0.6 },
                  scale: { duration: 0.6 },
                },
              }}
              exit={{
                opacity: 0,
                filter: "blur(10px)",
                scale: 0.8,
                transition: {
                  opacity: { duration: 0.8 },
                  filter: { duration: 0.6 },
                  scale: { duration: 0.6 },
                },
              }}
              style={{
                willChange: "opacity, filter, transform",
              }}
            >
              {logos[logoIndex]}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)
LogoGrid.displayName = "LogoGrid"

export { LogoGrid, Logo }
