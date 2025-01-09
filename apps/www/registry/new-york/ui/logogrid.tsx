"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface LogoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  interval?: number
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
        className={cn("h-10 w-10 overflow-hidden rounded-full", className)}
        {...props}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    )
  }
)
Logo.displayName = "Logo"

const LogoGrid = React.forwardRef<HTMLDivElement, LogoGridProps>(
  ({ className, interval = 3000, children, ...props }, ref) => {
    const logos = React.Children.toArray(children)
    const [visibleLogos, setVisibleLogos] = React.useState<number[]>([])
    const [nextLogoIndex, setNextLogoIndex] = React.useState(4) // Start after initial 4
    const [isInitialRender, setIsInitialRender] = React.useState(true)

    // Initialize with first 4 logos
    React.useEffect(() => {
      const initialLogos = Array.from({ length: 4 }, (_, i) => i % logos.length)
      setVisibleLogos(initialLogos)
      setIsInitialRender(false)
    }, [logos.length])

    // Handle the rotation
    React.useEffect(() => {
      if (isInitialRender || logos.length <= 4) return

      const timer = setInterval(() => {
        setVisibleLogos((prev) => {
          const next = [...prev]
          const replaceIndex = Math.floor(Math.random() * 4)

          // Replace with next logo
          next[replaceIndex] = nextLogoIndex % logos.length
          return next
        })

        setNextLogoIndex((current) => (current + 1) % logos.length)
      }, interval)

      return () => clearInterval(timer)
    }, [interval, logos.length, isInitialRender, nextLogoIndex])

    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-4 gap-8", className)}
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
