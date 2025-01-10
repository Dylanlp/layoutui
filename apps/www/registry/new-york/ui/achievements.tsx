"use client"

import * as React from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

interface AchievementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface StatProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

interface MetricProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+"
  }
  return num.toString() + "+"
}

const Achievement = React.forwardRef<HTMLDivElement, AchievementProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-3", className)}
        {...props}
      >
        <svg
          className="text-muted-foreground/30"
          width="32"
          height="66"
          viewBox="0 0 32 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_469)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.565 66C21.2018 65.9994 19.8552 65.7011 18.6194 65.126C17.3835 64.5508 16.2882 63.7126 15.41 62.67C17.315 61.2005 19.7153 60.5264 22.1068 60.7893C24.4983 61.0522 26.6948 62.2317 28.235 64.08C26.6037 65.3295 24.6049 66.0046 22.55 66M26.675 55.125C26.6726 53.075 27.3476 51.0817 28.595 49.455C30.4359 50.9995 31.6111 53.1938 31.8764 55.5821C32.1418 57.9704 31.477 60.3691 30.02 62.28C28.9747 61.4032 28.1336 60.3086 27.5558 59.0726C26.978 57.8367 26.6774 56.4893 26.675 55.125ZM12.755 57.735C11.4345 57.3822 10.2074 56.744 9.16039 55.8654C8.11334 54.9868 7.27176 53.8892 6.695 52.65C8.91692 51.7347 11.4063 51.7119 13.6446 52.5866C15.8829 53.4612 17.6973 55.1657 18.71 57.345C16.88 58.095 14.81 58.275 12.755 57.735ZM19.55 48.285C20.0804 46.3111 21.2452 44.5665 22.865 43.32C24.2406 45.2887 24.8054 47.7113 24.4424 50.0854C24.0793 52.4594 22.8161 54.6025 20.915 56.07C20.1325 54.9509 19.6048 53.6739 19.3689 52.3289C19.1331 50.9839 19.1949 49.6036 19.55 48.285ZM3.905 46.605C2.85255 45.7372 2.00249 44.6499 1.41432 43.4192C0.826154 42.1884 0.514098 40.844 0.5 39.48C2.90515 39.5613 5.18548 40.5704 6.86322 42.2956C8.54095 44.0209 9.48587 46.3285 9.5 48.735C7.45143 48.66 5.48482 47.9113 3.905 46.605ZM14 40.845C15.35 39.195 17.165 38.145 19.1 37.695C19.5366 40.0604 19.0443 42.503 17.7256 44.5147C16.4069 46.5263 14.3632 47.952 12.02 48.495C11.7712 47.1526 11.8195 45.7721 12.1616 44.4504C12.5037 43.1288 13.1312 41.8981 14 40.845ZM2.3 33.45C1.5079 32.3382 0.968563 31.0667 0.71981 29.7244C0.471056 28.3822 0.518904 27.0018 0.86 25.68C3.16164 26.3807 5.10291 27.9447 6.27726 30.0445C7.45161 32.1444 7.76794 34.6172 7.16 36.945C5.19959 36.3465 3.49134 35.118 2.3 33.45ZM13.55 30.495C15.2183 29.3055 17.2323 28.6992 19.28 28.77C19.0848 31.1636 17.9756 33.3901 16.1825 34.9877C14.3894 36.5852 12.0501 37.4312 9.65 37.35C9.75997 35.9898 10.166 34.6701 10.8397 33.4834C11.5134 32.2967 12.4384 31.2716 13.55 30.48M3.68 20.1C3.27916 18.7942 3.16947 17.4163 3.35866 16.0635C3.54785 14.7107 4.03131 13.4158 4.775 12.27C6.73349 13.6646 8.07689 15.7625 8.52419 18.1248C8.97149 20.4871 8.48806 22.9309 7.175 24.945C5.51047 23.7567 4.28249 22.0544 3.68 20.1ZM15.29 20.85C17.246 20.2542 19.3435 20.3175 21.26 21.03C20.3189 23.2402 18.5628 25.0032 16.3562 25.9529C14.1497 26.9025 11.6621 26.966 9.41 26.13C9.94754 24.8771 10.7523 23.7568 11.7679 22.8474C12.7836 21.938 13.9856 21.2614 15.29 20.865M9.38 9.435C9.035 6.585 10.01 3.885 11.825 1.935C13.5067 3.652 14.4609 5.95171 14.4888 8.3549C14.5168 10.7581 13.6163 13.0794 11.975 14.835C10.539 13.3699 9.62675 11.4717 9.38 9.435ZM20.675 12.225C22.7071 11.9823 24.7627 12.4145 26.525 13.455C25.2078 15.465 23.1679 16.8914 20.8279 17.4387C18.4879 17.986 16.027 17.6123 13.955 16.395C14.7029 15.2516 15.692 14.2858 16.8529 13.5654C18.0139 12.845 19.3184 12.3875 20.675 12.225ZM22.13 2.01C23.733 0.739695 25.71 0.0332394 27.755 0C27.682 2.40299 26.6857 4.6854 24.9732 6.37273C23.2607 8.06007 20.9638 9.02252 18.56 9.06C18.6039 7.69544 18.9464 6.35708 19.5631 5.13907C20.1799 3.92107 21.0561 2.853 22.13 2.01Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_469">
              <rect
                width="31.5"
                height="66"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <svg
          className="text-muted-foreground/30"
          width="32"
          height="66"
          viewBox="0 0 32 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_473)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.435 66C10.7982 65.9994 12.1448 65.7011 13.3806 65.126C14.6165 64.5508 15.7118 63.7126 16.59 62.67C14.685 61.2005 12.2847 60.5264 9.89322 60.7893C7.50173 61.0522 5.30519 62.2317 3.765 64.08C5.39635 65.3295 7.3951 66.0046 9.45 66M5.325 55.125C5.3274 53.075 4.65241 51.0817 3.405 49.455C1.56411 50.9995 0.388939 53.1938 0.123575 55.5821C-0.14179 57.9704 0.523048 60.3691 1.98 62.28C3.02533 61.4032 3.86635 60.3086 4.44416 59.0726C5.02197 57.8367 5.3226 56.4893 5.325 55.125ZM19.245 57.735C20.5655 57.3822 21.7926 56.744 22.8396 55.8654C23.8867 54.9868 24.7282 53.8892 25.305 52.65C23.0831 51.7347 20.5937 51.7119 18.3554 52.5866C16.1171 53.4612 14.3027 55.1657 13.29 57.345C15.12 58.095 17.19 58.275 19.245 57.735ZM12.45 48.285C11.9196 46.3111 10.7548 44.5665 9.135 43.32C7.75941 45.2887 7.19456 47.7113 7.55765 50.0854C7.92073 52.4594 9.18388 54.6025 11.085 56.07C11.8675 54.9509 12.3952 53.6739 12.6311 52.3289C12.8669 50.9839 12.8051 49.6036 12.45 48.285ZM28.095 46.605C29.1474 45.7372 29.9975 44.6499 30.5857 43.4192C31.1738 42.1884 31.4859 40.844 31.5 39.48C29.0949 39.5613 26.8145 40.5704 25.1368 42.2956C23.4591 44.0209 22.5141 46.3285 22.5 48.735C24.5486 48.66 26.5152 47.9113 28.095 46.605ZM18 40.845C16.65 39.195 14.835 38.145 12.9 37.695C12.4634 40.0604 12.9557 42.503 14.2744 44.5147C15.5931 46.5263 17.6368 47.952 19.98 48.495C20.2288 47.1526 20.1805 45.7721 19.8384 44.4504C19.4963 43.1288 18.8688 41.8981 18 40.845ZM29.7 33.45C30.4921 32.3382 31.0314 31.0667 31.2802 29.7244C31.5289 28.3822 31.4811 27.0018 31.14 25.68C28.8384 26.3807 26.8971 27.9447 25.7227 30.0445C24.5484 32.1444 24.2321 34.6172 24.84 36.945C26.8004 36.3465 28.5087 35.118 29.7 33.45ZM18.45 30.495C16.7817 29.3055 14.7677 28.6992 12.72 28.77C12.9152 31.1636 14.0244 33.3901 15.8175 34.9877C17.6106 36.5852 19.9499 37.4312 22.35 37.35C22.24 35.9898 21.834 34.6701 21.1603 33.4834C20.4866 32.2967 19.5616 31.2716 18.45 30.48M28.32 20.1C28.7208 18.7942 28.8305 17.4163 28.6413 16.0635C28.4522 14.7107 27.9687 13.4158 27.225 12.27C25.2665 13.6646 23.9231 15.7625 23.4758 18.1248C23.0285 20.4871 23.5119 22.9309 24.825 24.945C26.4895 23.7567 27.7175 22.0544 28.32 20.1ZM16.71 20.85C14.754 20.2542 12.6565 20.3175 10.74 21.03C11.6811 23.2402 13.4372 25.0032 15.6438 25.9529C17.8503 26.9025 20.3379 26.966 22.59 26.13C22.0525 24.8771 21.2477 23.7568 20.2321 22.8474C19.2164 21.938 18.0144 21.2614 16.71 20.865M22.62 9.435C22.965 6.585 21.99 3.885 20.175 1.935C18.4933 3.652 17.5391 5.95171 17.5112 8.3549C17.4832 10.7581 18.3837 13.0794 20.025 14.835C21.461 13.3699 22.3733 11.4717 22.62 9.435ZM11.325 12.225C9.29287 11.9823 7.23732 12.4145 5.475 13.455C6.7922 15.465 8.83206 16.8914 11.1721 17.4387C13.5121 17.986 15.973 17.6123 18.045 16.395C17.2971 15.2516 16.308 14.2858 15.1471 13.5654C13.9861 12.845 12.6816 12.3875 11.325 12.225ZM9.87 2.01C8.26703 0.739695 6.29001 0.0332394 4.245 0C4.31803 2.40299 5.31434 4.6854 7.02682 6.37273C8.7393 8.06007 11.0362 9.02252 13.44 9.06C13.3961 7.69544 13.0536 6.35708 12.4369 5.13907C11.8201 3.92107 10.9439 2.853 9.87 2.01Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_473">
              <rect
                width="31.5"
                height="66"
                fill="white"
                transform="matrix(-1 0 0 1 31.5 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }
)
Achievement.displayName = "Achievement"

const Stat = React.forwardRef<HTMLParagraphElement, StatProps>(
  ({ className, children, ...props }, ref) => {
    const countingRef = React.useRef<HTMLParagraphElement>(null)
    const isInView = useInView(countingRef, { once: true })
    const [hasAnimated, setHasAnimated] = React.useState(false)

    const targetValue = React.useMemo(() => {
      if (typeof children === "string" || typeof children === "number") {
        return Number(children.toString().replace(/[^0-9]/g, ""))
      }
      return 0
    }, [children])

    const spring = useSpring(0, {
      mass: 0.8,
      stiffness: 100,
      damping: 30,
      restDelta: 0.5,
      restSpeed: 0.5,
    })

    const display = useTransform(spring, (current) =>
      formatNumber(Math.round(current))
    )

    React.useEffect(() => {
      if (isInView && !hasAnimated && targetValue > 0) {
        spring.set(targetValue)
        setHasAnimated(true)
      }
    }, [isInView, targetValue, spring, hasAnimated])

    return (
      <motion.p
        ref={countingRef}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl font-semibold tracking-tight text-foreground",
          "flex h-[32px] w-[80px] items-center justify-center",
          className
        )}
      >
        {hasAnimated ? display : formatNumber(targetValue)}
      </motion.p>
    )
  }
)
Stat.displayName = "Stat"

const Metric = React.forwardRef<HTMLParagraphElement, MetricProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)
Metric.displayName = "Metric"

const Achievements = React.forwardRef<HTMLDivElement, AchievementProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center gap-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Achievements.displayName = "Achievements"

export { Achievements, Achievement, Stat, Metric }
