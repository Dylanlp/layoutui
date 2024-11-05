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
    <div className="container relative h-auto min-h-[calc(100vh-136px)]">
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
        <div className="flex  gap-4 py-8">
          <div className="flex h-96 w-full flex-col rounded-3xl border-[0.5px] border-border/60 md:w-2/5">
            <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
              <div className="h-full rounded-[21px] border-[0.5px] border-border">
                <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border p-10">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    Day 1.
                    <span className="text-[#666666]"> Multiplayer Cursors</span>
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

          <div className="flex h-96 w-full flex-col rounded-3xl border-[0.5px] border-border/60 md:w-2/5">
            <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
              <div className="h-full rounded-[21px] border-[0.5px] border-border">
                <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border p-10">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    Day 2.
                    <span className="text-[#666666]"> Progressive hero</span>
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
                      {/* <TextIcons text="Hello World" /> */}
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
        </div>

        <div className="flex flex-col rounded-3xl border-[0.5px] border-border/60 ">
          <div className="h-full rounded-[23.5px] border-[2.5px] border-secondary/50">
            <div className="h-full rounded-[21px] border-[0.5px] border-border">
              <div className="flex h-full flex-col justify-between gap-4 rounded-[20.5px] border-[0.5px] border-border p-10">
                <div className="mx-auto flex w-full flex-col items-center justify-center ">
                  <TextIcons>
                    In Genoa, where the evening light plays tricks with marble
                    and shadow, I discovered what the{" "}
                    <motion.div
                      className=" h-12 w-12 rounded-lg  bg-teal-500 "
                      whileHover={{
                        width: 80,
                      }}
                    ></motion.div>{" "}
                    modernists have forgotten. The caruggi whisper stories in
                    their own dialect - a language of worn stone steps and faded
                    nobility{" "}
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <motion.div
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
                      ></motion.div>{" "}
                    </div>
                    each palazzo hiding centuries of Mediterranean intrigue
                    behind its weathered facade.
                    {/* <div className="w-[960px] h-12 "></div> */}
                    The guided tours march past, but the flaneur{" "}
                    <div className=" h-12 w-40 rounded-lg  bg-amber-500 "></div>{" "}
                    finds poetry in the laundry lines stretched between
                    buildings, where the salt air still carries echoes of
                    ancient silk routes and seafaring republics.
                  </TextIcons>
                </div>

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
        <div className="mx-auto flex w-full flex-col items-center justify-center py-20">
          <TextIcons>
            In Genoa, where the evening light plays tricks with marble and
            shadow, I discovered what the{" "}
            <motion.div
              className=" h-12 w-12 rounded-lg  bg-teal-500 "
              whileHover={{
                width: 80,
              }}
            ></motion.div>{" "}
            modernists have forgotten. The caruggi whisper stories in their own
            dialect - a language of worn stone steps and faded nobility{" "}
            <div className="relative flex h-12 w-12 items-center justify-center">
              <motion.div
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
              ></motion.div>{" "}
            </div>
            each palazzo hiding centuries of Mediterranean intrigue behind its{" "}
            weathered facade.
            {/* <div className="w-[960px] h-12 "></div> */}
            The guided tours march past, but the flaneur{" "}
            <div className=" h-12 w-40 rounded-lg  bg-amber-500 "></div> finds
            poetry in the laundry lines stretched between buildings, where the
            salt air still carries echoes of ancient silk routes and seafaring
            republics.
          </TextIcons>
        </div>
      </div>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
    </div>
  )
}
