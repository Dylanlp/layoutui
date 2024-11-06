"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
import MultiplayerCursor from "@/registry/default/ui/multiplayer"
import TextIcons from "@/registry/default/ui/text-icons"
import CardsNewYork from "@/registry/new-york/example/cards"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

export default function IndexPage() {
  return (
    <div className="container relative  ">
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>Components every day</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>


        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader> */}
      <div className="flex w-full flex-col gap-4">
        <div className="mx-auto flex w-full flex-col items-center justify-center pt-[40vh]">
          <TextIcons>
            Design is not just what it looks{" "}
            <div className="relative h-12 w-[30px] rounded-[6px] border-[1.5px] border-foreground/50 bg-white p-[2px] shadow-sm">
              <div className="absolute left-1/2 top-[2px] h-[4px] w-3 -translate-x-1/2 rounded-full bg-foreground/60"></div>
            </div>{" "}
            like and feels like{" "}
            <motion.div
              className="flex h-12  items-center justify-center rounded-lg bg-background px-4 font-mono uppercase shadow-[0px_-2.4px_0px_0px_hsla(0,0%,24%,0.04)_inset,0px_0px_0px_1px_hsla(0,0%,92%,1),0px_1px_3px_0px_hsla(0,0%,56%,0.2)] "
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <p className="text-sm tracking-wider text-muted-foreground lg:text-2xl">
                Design
              </p>
            </motion.div>{" "}
            is how it works{" "}
            {/* <motion.div
                className=" absolute z-[9999]  h-full w-full cursor-pointer rounded-xl   bg-white   shadow-[0px_-2.4px_0px_0px_hsla(0,0%,24%,0.04)_inset,0px_0px_0px_1px_hsla(0,0%,92%,1),0px_1px_3px_0px_hsla(0,0%,56%,0.2)]  "
                whileHover={{
                  width: 120,
                  height: 120,
                  borderRadius: 40,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              ></motion.div>{" "} */}
          </TextIcons>
          {/* <div className="flex items-center tracking-normal w-80 justify-between gap-2 rounded-full  border bg-muted/50 py-2.5 pl-4 pr-2   text-xs  text-muted-foreground  ">
            <p className="max-w-full truncate whitespace-nowrap ">
              npx add shadcn@latest
              https://www.layout.software/r/styles/default/multiplayer.json
            </p>
            <CopyButton
              className=" min-w-6 rounded-full text-muted-foreground  "
              value={`npx add shadcn@latest https://www.layout.software/r/styles/default/multiplayer.json`}
            />
          </div>{" "} */}
        </div>
        <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2">
          <div className="flex h-96 w-full flex-col rounded-3xl border-[0.5px] border-border/60 ">
            <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
              <div className="h-full rounded-[21px] border-[0.5px] border-border">
                <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border p-10">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    Multiplayer Cursors
                    <span className="text-[#666666]"> </span>
                  </h3>

                  <Tabs className="relative h-full w-full" defaultValue="tab1">
                    <TabsList className="rounded-full" defaultValue="tab1">
                      <TabsTrigger className="rounded-full" value="tab1">
                        Default
                      </TabsTrigger>
                      <TabsTrigger className="rounded-full" value="tab2">
                        Dot
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent className="z-50 h-full w-full" value="tab1">
                      {" "}
                      <MultiplayerCursor
                        name="Will"
                        color="#FFD700"
                        style={{ zIndex: 10 }}
                        variant="default"
                      />
                      <MultiplayerCursor
                        name="Lara"
                        color="#479DFF"
                        style={{ zIndex: 10 }}
                        variant="default"
                      />
                      <MultiplayerCursor
                        name="Seb"
                        color="#FF6B6B"
                        style={{ zIndex: 10 }}
                        variant="default"
                      />
                      <MultiplayerCursor
                        name="Marc"
                        color="#8A2BE2"
                        style={{ zIndex: 10 }}
                        variant="default"
                      />
                    </TabsContent>
                    <TabsContent className="z-50 h-full w-full" value="tab2">
                      {" "}
                      <MultiplayerCursor
                        name="Will"
                        color="#FFD700"
                        style={{ zIndex: 10 }}
                        variant="outline"
                      />
                      <MultiplayerCursor
                        name="Lara"
                        color="#479DFF"
                        style={{ zIndex: 10 }}
                        variant="outline"
                      />
                      <MultiplayerCursor
                        name="Seb"
                        color="#FF6B6B"
                        style={{ zIndex: 10 }}
                        variant="outline"
                      />
                      <MultiplayerCursor
                        name="Marc"
                        color="#8A2BE2"
                        style={{ zIndex: 10 }}
                        variant="outline"
                      />
                    </TabsContent>
                  </Tabs>

                  <div className="flex items-center justify-between gap-2 rounded-full  border bg-muted/50 py-1.5 pl-4 pr-2   text-xs  text-muted-foreground  ">
                    <p className="max-w-full truncate whitespace-nowrap ">
                      npx add shadcn@latest
                      https://www.layout.software/r/styles/default/multiplayer.json
                    </p>
                    <CopyButton
                      className=" min-w-6 rounded-full text-muted-foreground  "
                      value={`npx add shadcn@latest https://www.layout.software/r/styles/default/multiplayer.json`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-96 w-full flex-col rounded-3xl border-[0.5px] border-border/60 ">
            <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
              <div className="h-full rounded-[21px] border-[0.5px] border-border">
                <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border p-10">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    Smooth Tabs
                    <span className="text-[#666666]"> </span>
                  </h3>
                  <div className="flex h-full w-full items-center justify-center">
                    <Tabs className="relative" defaultValue="tab1">
                      <TabsList className="rounded-full" defaultValue="tab1">
                        <TabsTrigger className="rounded-full" value="tab1">
                          Ok
                        </TabsTrigger>
                        <TabsTrigger className="rounded-full" value="tab2">
                          These
                        </TabsTrigger>
                        <TabsTrigger className="rounded-full" value="tab3">
                          Tabs
                        </TabsTrigger>
                        <TabsTrigger className="rounded-full" value="tab4">
                          Are
                        </TabsTrigger>
                        <TabsTrigger className="rounded-full" value="tab5">
                          Smooth
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-full  border bg-muted/50 py-1.5 pl-4 pr-2   text-xs  text-muted-foreground  ">
                    <p className="max-w-full truncate whitespace-nowrap ">
                      npx add shadcn@latest
                      https://www.layout.software/r/styles/default/tabs.json
                    </p>
                    <CopyButton
                      className=" min-w-6 rounded-full text-muted-foreground  "
                      value={`npx add shadcn@latest https://www.layout.software/r/styles/default/tabs.json`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
    </div>
  )
}
