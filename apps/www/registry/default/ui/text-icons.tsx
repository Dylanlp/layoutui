"use client"

import { Children, FC, ReactNode, isValidElement, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface TextIconsProps {
  children: ReactNode
  className?: string
}

export const TextIcons: FC<TextIconsProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(targetRef, {
    margin: "-50% 0px 0px 0px",
    once: true,
  })

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  })

  const elements: ReactNode[] = []
  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child.split(" ").forEach((word) => {
        if (word) elements.push(word)
      })
    } else if (isValidElement(child)) {
      if (child.type === "br") {
        // Create a proper React element for line breaks
        elements.push(<div key={`br-${elements.length}`} className="w-full" />)
      } else {
        elements.push(child)
      }
    }
  })

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className={"min-h-[300px] max-w-5xl items-center"}>
        <p
          className={
            "flex flex-wrap p-5 text-2xl font-medium leading-loose tracking-tighter text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:text-4xl xl:text-[50px]"
          }
        >
          {elements.map((element, i) => {
            const start = i / elements.length
            const end = start + 0.5 / elements.length

            if (
              isValidElement(element) &&
              element.type === "div" &&
              element.props.className === "w-full"
            ) {
              return element // Return the line break element directly
            }

            if (isValidElement(element)) {
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isInView={isInView}
                >
                  {element}
                </Word>
              )
            }

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isInView={isInView}
              >
                {element}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: any
  range: [number, number]
  isInView: boolean
}

const Word: FC<WordProps> = ({ children, progress, range, isInView }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const fadeOutOpacity = useTransform(progress, range, [0.3, 0]) // Adjusted from 0.4 to 0.3

  if (isValidElement(children)) {
    return (
      <span className="relative mx-1 my-0.5 inline-block lg:mx-2 lg:my-3">
        <motion.span
          className="absolute text-black/20 dark:text-white/20"
          initial={{ opacity: 0.3 }}
          style={{ opacity: isInView ? fadeOutOpacity : 0.3 }}
        >
          {children}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          style={{ opacity: isInView ? opacity : 0 }}
          className="relative text-black dark:text-white"
        >
          {children}
        </motion.span>
      </span>
    )
  }

  return (
    <span className="xl:lg-3 relative mx-1 my-0.5 lg:mx-2 lg:my-3">
      <motion.span
        className="absolute text-black/20 dark:text-white/20"
        initial={{ opacity: 0.3 }}
        style={{ opacity: isInView ? fadeOutOpacity : 0.3 }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        style={{ opacity: isInView ? opacity : 0 }}
        className="relative text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  )
}

export default TextIcons
