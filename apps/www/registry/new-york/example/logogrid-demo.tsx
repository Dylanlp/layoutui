import { Logo, LogoGrid } from "@/registry/new-york/ui/logogrid"

export default function LogoGridDemo() {
  return (
    <LogoGrid interval={3000} quantity={6}>
      <Logo src="/placeholder-2.svg" alt="Logo 2" />
      <Logo src="/placeholder-3.svg" alt="Logo 3" />
      <Logo src="/placeholder-4.svg" alt="Logo 4" />
      <Logo src="/placeholder-5.svg" alt="Logo 5" />
      <Logo src="/placeholder-6.svg" alt="Logo 6" />
      <Logo src="/placeholder-7.svg" alt="Logo 7" />
      <Logo src="/placeholder-8.svg" alt="Logo 8" />
      <Logo src="/placeholder-9.svg" alt="Logo 9" />
    </LogoGrid>
  )
}
