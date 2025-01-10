import * as React from "react"

import { cn } from "@/lib/utils"

interface OutlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
  contentClassName?: string
  size?: "default" | "lg" | "sm"
}

export function OutlineCard({
  title,
  children,
  className,
  contentClassName,
  size = "default",
  ...props
}: OutlineCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-3xl border-[0.5px] border-border/60",
        size === "lg"
          ? "col-span-1 lg:col-span-2 h-[560px]"
          : size === "default"
          ? "h-96"
          : size === "sm"
          ? "h-72"
          : "h-40",
        className
      )}
      {...props}
    >
      <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
        <div className="h-full rounded-[21px] border-[0.5px] border-border">
          <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border ">
            {title && (
              <h3 className="p-10 text-lg font-medium tracking-tight text-foreground">
                {title}
                <span className="text-[#666666]"> </span>
              </h3>
            )}
            <div
              className={cn(
                "flex h-full w-full items-center justify-center pb-20",
                contentClassName
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
