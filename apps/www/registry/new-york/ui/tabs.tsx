"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const defaultTriggerClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground"

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const [activeRect, setActiveRect] = React.useState<DOMRect | null>(null)
  const [listHeight, setListHeight] = React.useState<number | null>(null)
  const [listPadding, setListPadding] = React.useState<string>("p-1")
  const [activeTabClasses, setActiveTabClasses] = React.useState<string>("")
  const listRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const updateMeasurements = () => {
      const activeTab = listRef.current?.querySelector(
        '[role="tab"][data-state="active"]'
      ) as HTMLElement
      if (activeTab && listRef.current) {
        const tabRect = activeTab.getBoundingClientRect()
        const listRect = listRef.current.getBoundingClientRect()
        const listStyle = window.getComputedStyle(listRef.current)
        const paddingClass =
          listRef.current?.className.match(/p-\d+/)?.[0] || "p-1"
        setListPadding(paddingClass)

        setActiveRect({
          width: tabRect.width,
          height: tabRect.height,
          top: tabRect.top - listRect.top,
          left: tabRect.left - listRect.left,
          x: tabRect.left - listRect.left,
          y: tabRect.top - listRect.top,
          bottom: tabRect.bottom - listRect.top,
          right: tabRect.right - listRect.left,
          toJSON: () => ({
            x: tabRect.left - listRect.left,
            y: tabRect.top - listRect.top,
            width: tabRect.width,
            height: tabRect.height,
            top: tabRect.top - listRect.top,
            right: tabRect.right - listRect.left,
            bottom: tabRect.bottom - listRect.top,
            left: tabRect.left - listRect.left,
          }),
        })
        setListHeight(listRect.height)
        setActiveTabClasses(
          activeTab.className.replace(defaultTriggerClasses, "").trim()
        )
      }
    }

    updateMeasurements()
    window.addEventListener("resize", updateMeasurements)

    const observer = new MutationObserver(updateMeasurements)
    observer.observe(listRef.current!, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-state", "class"],
    })

    return () => {
      window.removeEventListener("resize", updateMeasurements)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative">
      <TabsPrimitive.List
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
          listRef.current = node
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          className
        )}
        {...props}
      />
      {listHeight && (
        <div
          className={cn("pointer-events-none absolute inset-0")}
          style={{ height: `${listHeight}px` }}
        >
          {activeRect && (
            <motion.div
              layoutId="activeTab"
              className={cn(
                defaultTriggerClasses,
                "relative z-10 bg-background shadow-sm",
                activeTabClasses
              )}
              style={{
                width: activeRect.width,
                height: activeRect.height,
                top: activeRect.top,
                left: activeRect.left,
                zIndex: 10,
              }}
              initial={false}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
        </div>
      )}
    </div>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(defaultTriggerClasses, "relative z-20", className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
