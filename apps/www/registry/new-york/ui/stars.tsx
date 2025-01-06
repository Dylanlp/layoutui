"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface StarsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  text?: string
}

const Stars = React.forwardRef<HTMLDivElement, StarsProps>(
  ({ className, count = 400, text = "Trusted by", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <div className="flex -space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 overflow-hidden rounded-full border-2 border-white"
            >
              <img
                src="/avatar-placeholder.jpg" // You'll need to replace this with your actual image path
                alt="Customer avatar"
                className="h-full w-full bg-muted object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-sm text-gray-600">
            {text} {count}+ customers
          </div>
        </div>
      </div>
    )
  }
)
Stars.displayName = "Stars"

export { Stars }
