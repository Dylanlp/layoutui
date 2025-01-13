import { TextIcons } from "@/registry/default/ui/text-icons"

export default function TextIconsDemo() {
  return (
    <TextIcons>
      Create beautiful websites with{" "}
      <div className="flex h-11 items-center justify-center gap-2 rounded-full border border-border px-4">
        <p className="text-xl tracking-normal">Layout UI</p>
      </div>
      and
      <div>
        <div className="group relative flex h-11 -rotate-6 items-center justify-center gap-5 rounded-xl border border-[hsl(120,70%,90%)] bg-[hsl(120,70%,95%)] px-4 py-2 text-[hsl(120,70%,20%)] shadow-[0px_19px_16px_0px_rgba(255,255,255,0.50)_inset,0px_4px_8px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_hsl(120,70%,80%)_inset,0px_4px_1px_0px_rgba(255,255,255,0.25)_inset,0px_-2px_3px_0px_rgba(0,0,0,0.25)_inset]">
          <p className="text-sm tracking-normal">hand-crafted</p>
        </div>{" "}
      </div>{" "}
      detail
    </TextIcons>
  )
}
