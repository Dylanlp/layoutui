"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, RotateCwIcon, TextIcon } from "lucide-react"
import Typed from "typed.js"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { CopyButton } from "@/components/copy-button"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import WorkedWith from "@/components/workedwith"
import MultiplayerCursor from "@/registry/default/ui/multiplayer"
import TextIcons from "@/registry/default/ui/text-icons"
import CardsNewYork from "@/registry/new-york/example/cards"
import {
  Achievement,
  Achievements,
  Metric,
  Stat,
} from "@/registry/new-york/ui/achievements"
import { Button } from "@/registry/new-york/ui/button"
import {
  FoundersNote,
  FoundersNoteAuthor,
  FoundersNoteAvatar,
  FoundersNoteContent,
  FoundersNoteExpandable,
  FoundersNoteFooter,
  FoundersNoteHeadline,
  FoundersNoteInfo,
  FoundersNoteName,
  FoundersNoteRole,
  FoundersNoteSubtext,
} from "@/registry/new-york/ui/foundersnote"
import { Input } from "@/registry/new-york/ui/input"
import { Logo, LogoGrid } from "@/registry/new-york/ui/logogrid"
import { OutlineCard } from "@/registry/new-york/ui/outlinecard"
import { StarImage, Stars } from "@/registry/new-york/ui/stars"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
import {
  Name,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialCarousel,
  TestimonialContent,
  TestimonialDate,
  TestimonialHeader,
  TestimonialHighlight,
  TestimonialInfo,
  TestimonialStars,
  Username,
} from "@/registry/new-york/ui/testimonial"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"
import {
  VerticalTestimonial,
  VerticalTestimonialAvatar,
  VerticalTestimonialContent,
  VerticalTestimonialHighlight,
  VerticalTestimonialInfo,
  VerticalTestimonialName,
  VerticalTestimonialRole,
} from "@/registry/new-york/ui/verticaltestimonial"

const testimonials = [
  {
    name: "Sarah Chen",
    username: "@sarahdesigns",
    avatar: "/faces/15.jpg",
    date: "Mar 15, 2025",
    content: {
      prefix: "These components have transformed our",
      highlight: "design system's consistency by 300%",
      suffix: "since we started using them last quarter.",
    },
  },
  {
    name: "Marcus Rodriguez",
    username: "@marcusdev",
    avatar: "/faces/80.jpg",
    date: "Mar 15, 2025",
    content: {
      prefix: "Implementing these components",
      highlight: "cut our development cycle from 6 weeks to just 2",
      suffix: "on our latest project launch.",
    },
  },
  {
    name: "Emma Thompson",
    username: "@emmacodes",
    avatar: "/faces/101.jpg",
    date: "Mar 15, 2025",
    content: {
      prefix: "The accessibility features are built in.",
      highlight: "All components pass standards",
      suffix: "without any additional configuration needed.",
    },
  },
  {
    name: "Alex Kumar",
    username: "@alexk",
    avatar: "/faces/99.jpg",
    date: "Mar 15, 2025",
    content: {
      prefix: "The TypeScript integration is flawless.",
      highlight: "100% type coverage and zero runtime errors",
      suffix: "across our entire component library.",
    },
  },
  {
    name: "Jordan Lee",
    username: "@jordanl",
    avatar: "/faces/59.jpg",
    date: "Mar 15, 2025",
    content: {
      prefix: "We've seen a",
      highlight: "40% increase in user engagement",
      suffix: "after switching to these beautifully designed components.",
    },
  },
]

export default function IndexPage() {
  const [count, setCount] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [achievementResetKey, setAchievementResetKey] = useState(0)
  const [testimonialResetKey, setTestimonialResetKey] = useState(0)
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["in minutes", "with ease", "like magic", "effortlessly"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      startDelay: 500,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const targetValue = 49.6
  const duration = 2000
  const steps = 30
  const stepValue = targetValue / steps

  const startAnimation = () => {
    setCount(0)
  }

  useEffect(() => {
    let currentStep = 0

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount((prev) =>
          Math.min(parseFloat((prev + stepValue).toFixed(1)), targetValue)
        )
        currentStep++
      } else {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [stepValue, steps, targetValue, duration, count])

  return (
    <div className="container relative  ">
      <div className="flex w-full flex-col gap-10">
        <div className="mx-auto flex w-full  flex-col items-center justify-center gap-6 pb-8 pt-16 text-center">
          <Link
            href="https://ui.shadcn.com"
            className="flex items-center justify-center gap-3 rounded-full border border-muted bg-muted/50 px-4 py-1.5 text-sm text-primary/75"
          >
            <Icons.logo className="h-3 w-3" />
            Built with shadcn/ui
          </Link>
          <h1 className=" flex flex-col items-center  justify-center gap-3 text-6xl font-semibold tracking-tighter lg:flex-row">
            Components for{" "}
            <span
              style={
                {
                  "--hue": `${count * 2.4}`, // 0 -> red (0), 25 -> orange (60), 50 -> green (120)
                } as any
              }
              className="group relative flex items-center justify-center gap-5 rounded-3xl border border-[hsl(var(--hue),70%,90%)] bg-[hsl(var(--hue),70%,95%)] py-2 pl-4 pr-20 text-[hsl(var(--hue),70%,20%)] shadow-[0px_19px_16px_0px_rgba(255,255,255,0.50)_inset,0px_4px_8px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_hsl(var(--hue),70%,80%)_inset,0px_4px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-2px_3px_0px_rgba(0,0,0,0.25)_inset]"
            >
              Conversion{" "}
              <div
                style={
                  {
                    "--hue": `${count * 2.4}`,
                  } as any
                }
                onClick={startAnimation}
                className="  absolute right-2 top-2 flex h-7 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-[hsl(var(--hue),70%,90%)] bg-[hsl(var(--hue),70%,95%)] px-2 text-sm uppercase tracking-normal text-[hsl(var(--hue),70%,30%)] transition-all duration-100 hover:scale-105  active:scale-95 group-hover:w-8"
              >
                <div className="relative h-7 w-full overflow-hidden">
                  <div
                    key={count}
                    className="absolute inset-0 flex animate-scroll-down flex-col items-center"
                    style={{
                      height: "84px",
                    }}
                  >
                    <div className="flex h-7 items-center justify-center opacity-0">
                      {Math.max(0, parseFloat((count - stepValue).toFixed(1)))}%
                    </div>
                    <div className="flex h-7 items-center justify-center font-medium">
                      <div className="relative w-full">
                        <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
                          {count}%
                        </span>
                        <div className="flex items-center justify-center opacity-0 transition-all duration-200  group-hover:opacity-100">
                          <RotateCwIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="flex h-7 items-center justify-center opacity-0">
                      {Math.min(
                        targetValue,
                        parseFloat((count + stepValue).toFixed(1))
                      )}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </h1>
          <p className="max-w-2xl text-balance text-lg ">
            Free and open source components designed to help increase your
            conversion rate, made with Tailwind CSS, React & Typescript.
          </p>

          <WorkedWith />
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center gap-0">
          {/* <Tabs
            className="mx-auto fixed bottom-4 z-50  rounded-full backdrop-blur-md shadow-sm"
            defaultValue="tab1"
          >
            <TabsList className="mx-auto rounded-full bg-transparent ">
              <TabsTrigger className="rounded-full" value="tab1">
                All
              </TabsTrigger>
              <TabsTrigger className="rounded-full" value="tab2">
                Pricing Plans
              </TabsTrigger>
              <TabsTrigger className="rounded-full" value="tab3">
                Testimonials
              </TabsTrigger>
              <TabsTrigger className="rounded-full" value="tab4">
                Logo Grids
              </TabsTrigger>
              <TabsTrigger className="rounded-full" value="tab5">
                Hero Sections
              </TabsTrigger>
            </TabsList>
          </Tabs> */}
          <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-3 pb-8 lg:grid-cols-2">
            <OutlineCard
              title="Achievements"
              size="sm"
              className="group relative"
            >
              <div className="flex h-full w-full items-center justify-center gap-8">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-4 rounded-full opacity-0 transition-all duration-200 group-hover:opacity-100"
                  onClick={() => setAchievementResetKey((key) => key + 1)}
                >
                  <RotateCwIcon className="h-4 w-4 transition-transform duration-200" />
                </Button>
                <Achievements>
                  <Achievement>
                    <Stat resetKey={achievementResetKey}>12000</Stat>
                    <Metric>Users</Metric>
                  </Achievement>
                  <Achievement>
                    <Stat resetKey={achievementResetKey}>200</Stat>
                    <Metric>Downloads</Metric>
                  </Achievement>
                </Achievements>
              </div>
            </OutlineCard>
            <OutlineCard title="Stars" size="sm">
              {" "}
              <div className="flex h-full w-full items-center justify-center">
                <Stars count={500} text="Loved by">
                  <StarImage src="/faces/9.jpg" />
                  <StarImage src="/faces/2.jpg" />
                  <StarImage src="/faces/3.jpg" />
                  <StarImage src="/faces/28.jpg" />
                </Stars>
              </div>
            </OutlineCard>

            <OutlineCard title="Testimonial Card">
              {" "}
              <div className="flex h-full w-full items-center justify-center">
                <TestimonialCard>
                  <TestimonialHeader>
                    <TestimonialAvatar src="/faces/48.jpg" />
                    <TestimonialInfo>
                      <Name>{testimonials[0].name}</Name>
                      <Username>{testimonials[0].username}</Username>
                    </TestimonialInfo>
                  </TestimonialHeader>

                  <TestimonialStars />

                  <TestimonialContent>
                    {testimonials[0].content.prefix}{" "}
                    <TestimonialHighlight>
                      {testimonials[0].content.highlight}
                    </TestimonialHighlight>{" "}
                    {testimonials[0].content.suffix}
                  </TestimonialContent>

                  <TestimonialDate>{testimonials[0].date}</TestimonialDate>
                </TestimonialCard>
              </div>
            </OutlineCard>

            <OutlineCard title="Testimonial Carousel">
              {" "}
              <div className="flex h-full w-full items-center justify-center gap-4 pb-20">
                <TestimonialCarousel direction="rtl">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index}>
                      <TestimonialHeader>
                        <TestimonialAvatar src={testimonial.avatar} />
                        <TestimonialInfo>
                          <Name>{testimonial.name}</Name>
                          <Username>{testimonial.username}</Username>
                        </TestimonialInfo>
                      </TestimonialHeader>

                      <TestimonialStars />

                      <TestimonialContent>
                        {testimonial.content.prefix}{" "}
                        <TestimonialHighlight>
                          {testimonial.content.highlight}
                        </TestimonialHighlight>{" "}
                        {testimonial.content.suffix}
                      </TestimonialContent>

                      <TestimonialDate>{testimonial.date}</TestimonialDate>
                    </TestimonialCard>
                  ))}
                </TestimonialCarousel>
              </div>
            </OutlineCard>

            <OutlineCard
              title="Vertical Testimonial"
              className="group relative"
            >
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-4 top-4 rounded-full opacity-0 transition-all duration-200 group-hover:opacity-100"
                onClick={() => setTestimonialResetKey((key) => key + 1)}
              >
                <RotateCwIcon className="h-4 w-4 transition-transform duration-200" />
              </Button>
              <VerticalTestimonial>
                <VerticalTestimonialContent>
                  <VerticalTestimonialHighlight resetKey={testimonialResetKey}>
                    Lorem ipsum dolor sit amet
                  </VerticalTestimonialHighlight>{" "}
                  consectetur adipisicing elit. Quisquam, quos.
                </VerticalTestimonialContent>

                <div className="flex flex-col items-center gap-2">
                  <VerticalTestimonialAvatar src="/faces/105.jpg" />
                  <VerticalTestimonialInfo>
                    <VerticalTestimonialName>Name</VerticalTestimonialName>
                    <VerticalTestimonialRole>
                      Founder,{" "}
                      <a
                        href="https://www.acme.com"
                        className="underline underline-offset-4"
                      >
                        Acme Corp
                      </a>
                    </VerticalTestimonialRole>
                  </VerticalTestimonialInfo>
                </div>

                <TestimonialStars />
              </VerticalTestimonial>
            </OutlineCard>

            <OutlineCard title="Logo Grid">
              <LogoGrid>
                <Logo src="/placeholder-2.svg" alt="Logo 2" />
                <Logo src="/placeholder-3.svg" alt="Logo 3" />
                <Logo src="/placeholder-4.svg" alt="Logo 4" />
                <Logo src="/placeholder-5.svg" alt="Logo 5" />
                <Logo src="/placeholder-6.svg" alt="Logo 6" />
                <Logo src="/placeholder-7.svg" alt="Logo 7" />
                <Logo src="/placeholder-8.svg" alt="Logo 8" />
                <Logo src="/placeholder-9.svg" alt="Logo 9" />
              </LogoGrid>
            </OutlineCard>

            <OutlineCard title="Cursors CTA" size="lg">
              <div className="flex items-center justify-center px-12">
                <div className="relative flex flex-col items-center justify-center gap-8 rounded-3xl bg-muted/50 px-20 py-14 text-center">
                  <MultiplayerCursor name="Dylan" />
                  <MultiplayerCursor name="Marc" color="red" />
                  <MultiplayerCursor name="Sara" color="blue" />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tighter">
                      Get Started with Layout UI
                    </h2>
                    <p className="text-md text-balance text-muted-foreground">
                      Layout UI is a free and open source library.
                    </p>
                  </div>
                  <Button className="rounded-full">Get Started</Button>
                </div>
              </div>
            </OutlineCard>
            <OutlineCard title="Users CTA" size="lg">
              <div className="flex items-center justify-center px-12">
                <div className="relative flex flex-col items-center justify-center gap-8 rounded-3xl bg-muted/50 px-20 py-14 text-center">
                  <div className="group flex max-w-[400px] flex-wrap items-center justify-center gap-1">
                    {Array.from({ length: 40 }).map((_, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger>
                          <img
                            src={`/faces/${index + 1}.jpg`}
                            alt={`user ${index + 1}`}
                            className="h-6 w-6 rounded-md transition-opacity duration-200 group-hover:[&:not(:hover)]:opacity-30"
                          />
                        </TooltipTrigger>
                        <TooltipContent className=" scale-90 bg-transparent p-0 shadow-lg">
                          <TestimonialCard>
                            <TestimonialHeader>
                              {/* <TestimonialAvatar src="https://github.com/shadcn.png" /> */}
                              <TestimonialInfo>
                                <Name>Name</Name>
                                <Username>@username</Username>
                              </TestimonialInfo>
                            </TestimonialHeader>
                            <TestimonialContent>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, quos.
                            </TestimonialContent>
                            {/* <TestimonialDate>Date</TestimonialDate> */}
                          </TestimonialCard>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tighter">
                      Get Started with Layout UI
                    </h2>
                    <p className="text-md text-balance text-muted-foreground">
                      Layout UI is a free and open source library.
                    </p>
                  </div>
                  <Button className="rounded-full">Get Started</Button>
                </div>
              </div>
            </OutlineCard>
            <OutlineCard size="xl" title="Founders Note">
              <FoundersNote
                isExpanded={isExpanded}
                onToggle={() => setIsExpanded(!isExpanded)}
              >
                <FoundersNoteContent isExpanded={isExpanded}>
                  <FoundersNoteHeadline>
                    Out of the 12+ million landing pages online, only 8% will
                    convert more than 1% of visitors.
                  </FoundersNoteHeadline>

                  <FoundersNoteSubtext>
                    Yup - while it&apos;s easier than ever to build a landing
                    page, it&apos;s harder than ever to make it convert.
                  </FoundersNoteSubtext>

                  <FoundersNoteExpandable isExpanded={isExpanded}>
                    <p className="text-sm text-muted-foreground">
                      Most landing pages have two challenges with conversion:
                      <br />
                      <br />
                      1. Getting visitors to take the first action
                      <br />
                      2. Getting those who do to come back
                    </p>
                    <p className="text-sm text-muted-foreground">
                      That&apos;s why I built Layout UI - to give developers and
                      startups the components they need to build high-converting
                      pages.
                    </p>

                    <p className="text-sm text-muted-foreground">
                      In the last 7 years, I&apos;ve helped startups increase
                      conversion with optimized landing pages. I&apos;d love for
                      you to give these components a try.
                    </p>
                  </FoundersNoteExpandable>
                </FoundersNoteContent>

                <FoundersNoteFooter>
                  <FoundersNoteAuthor>
                    <FoundersNoteAvatar
                      avatarSrc="https://cal.com/api/avatar/122580ed-bc99-4f13-9b97-c609fecdb335.png"
                      signatureSrc="/signature.svg"
                    />
                    <FoundersNoteInfo>
                      <FoundersNoteName>Dylan</FoundersNoteName>
                      <FoundersNoteRole>Founder, Layout UI</FoundersNoteRole>
                    </FoundersNoteInfo>
                  </FoundersNoteAuthor>
                </FoundersNoteFooter>
              </FoundersNote>
             
            </OutlineCard>
            <OutlineCard size="lg" title="Typing Hero">
              <div className="w-full px-10">
                <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-muted/50 py-14">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-balance text-6xl font-semibold leading-tight tracking-tighter">
                      Get started{" "}
                      <span ref={el} className="text-primary">
                        in minutes
                      </span>
                    </h2>
                    <p className="text-balance text-lg text-muted-foreground">
                      Layout UI is a free and open source library.
                    </p>
                  </div>
                  <Button className="rounded-full">Get Started</Button>
                  <Achievements>
                    <Achievement>
                      <Stat>15000</Stat>
                      <Metric>Users</Metric>
                    </Achievement>
                    <Achievement>
                      <Stat>8500</Stat>
                      <Metric>Stars</Metric>
                    </Achievement>
                    <Achievement>
                      <Stat>25000</Stat>
                      <Metric>Downloads</Metric>
                    </Achievement>
                  </Achievements>
                </div>
              </div>
            </OutlineCard>
            <OutlineCard size="lg" title="Text Icons">
              <div className="w-full px-6">
                <TextIcons>
                  Build beautiful websites with{" "}
                  <div className="flex h-11 items-center justify-center gap-2 rounded-full border border-border px-4">
                    <p className="text-xl tracking-normal">Layout UI</p>
                  </div>{" "}
                  <br />
                  Fully{" "}
                  <div>
                    <div className="group relative flex h-11 -rotate-6  items-center justify-center gap-5 rounded-xl border border-[hsl(120,70%,90%)] bg-[hsl(120,70%,95%)] px-4 py-2 text-[hsl(120,70%,20%)] shadow-[0px_19px_16px_0px_rgba(255,255,255,0.50)_inset,0px_4px_8px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_hsl(120,70%,80%)_inset,0px_4px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-2px_3px_0px_rgba(0,0,0,0.25)_inset]">
                      <p className="text-sm tracking-normal">hand-crafted</p>
                    </div>{" "}
                  </div>{" "}
                  customizable components
                  <br />
                  Open source and free
                  <div className="flex h-11 items-center justify-center tracking-normal">
                    <Stars count={500} text="Loved by">
                      <StarImage src="/faces/9.jpg" />
                      <StarImage src="/faces/2.jpg" />
                      <StarImage src="/faces/3.jpg" />
                      <StarImage src="/faces/28.jpg" />
                    </Stars>
                  </div>
                  {/* <div className="group relative flex h-11 w-11 items-center justify-center gap-5 rounded-xl border border-[hsl(240,70%,90%)] bg-[hsl(240,70%,95%)] p-2 text-[hsl(240,70%,20%)] shadow-[0px_19px_16px_0px_rgba(255,255,255,0.50)_inset,0px_4px_8px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_hsl(240,70%,80%)_inset,0px_4px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-2px_3px_0px_rgba(0,0,0,0.25)_inset]">
                    <ArrowRight />
                  </div> */}
                </TextIcons>
              </div>
            </OutlineCard>
            <OutlineCard size="xl" title="Hero Section">
              <div className="w-full px-10">
                <div className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border border-border/50 bg-muted/50">
                  <div className="flex  w-full">
                    <div className="flex w-full  flex-col justify-center gap-10 p-20">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-balance text-5xl font-semibold  tracking-tighter">
                          The component library for your next project
                        </h2>
                        <p className="text-balance text-lg text-muted-foreground">
                          Layout UI is a free and open source library.
                        </p>
                      </div>
                      <div className="">
                        <Button size="lg" className="mb-12 w-auto rounded-full">
                          Start for free
                        </Button>
                        <Stars count={500} text="Loved by">
                          <StarImage src="/faces/9.jpg" />
                          <StarImage src="/faces/2.jpg" />
                          <StarImage src="/faces/3.jpg" />
                          <StarImage src="/faces/28.jpg" />
                        </Stars>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-4">
                      <TestimonialCarousel direction="rtl">
                        {testimonials.map((testimonial, index) => (
                          <TestimonialCard key={index}>
                            <TestimonialHeader>
                              <TestimonialAvatar src={testimonial.avatar} />
                              <TestimonialInfo>
                                <Name>{testimonial.name}</Name>
                                <Username>{testimonial.username}</Username>
                              </TestimonialInfo>
                            </TestimonialHeader>

                            <TestimonialStars />

                            <TestimonialContent>
                              {testimonial.content.prefix}{" "}
                              <TestimonialHighlight>
                                {testimonial.content.highlight}
                              </TestimonialHighlight>{" "}
                              {testimonial.content.suffix}
                            </TestimonialContent>

                            <TestimonialDate>
                              {testimonial.date}
                            </TestimonialDate>
                          </TestimonialCard>
                        ))}
                      </TestimonialCarousel>
                      <TestimonialCarousel direction="ltr">
                        {testimonials.map((testimonial, index) => (
                          <TestimonialCard key={index}>
                            <TestimonialHeader>
                              <TestimonialAvatar src={testimonial.avatar} />
                              <TestimonialInfo>
                                <Name>{testimonial.name}</Name>
                                <Username>{testimonial.username}</Username>
                              </TestimonialInfo>
                            </TestimonialHeader>

                            <TestimonialStars />

                            <TestimonialContent>
                              {testimonial.content.prefix}{" "}
                              <TestimonialHighlight>
                                {testimonial.content.highlight}
                              </TestimonialHighlight>{" "}
                              {testimonial.content.suffix}
                            </TestimonialContent>

                            <TestimonialDate>
                              {testimonial.date}
                            </TestimonialDate>
                          </TestimonialCard>
                        ))}
                      </TestimonialCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </OutlineCard>
          </div>
        </div>
      </div>
    </div>
  )
}
