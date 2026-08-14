"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/config/nav";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { OrbytTransitionLink } from "@/components/sections/OrbytTransitionLink";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isOrbyt = pathname.startsWith("/orbyt");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        isOrbyt
          ? "border-[#626ed9]/25 bg-[#05050e]/80 backdrop-blur-md"
          : scrolled
            ? "border-white/10 bg-[#080b10]/90 shadow-[0_12px_36px_rgba(0,0,0,0.26)] md:backdrop-blur-xl"
            : "border-transparent bg-[#080b10]/72 md:backdrop-blur-md",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-200",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
        )}
      >
        <Link href="/" className={cn("inline-flex items-center", isOrbyt ? "gap-2 text-[#eef0ff]" : "text-white")}>
          {isOrbyt ? <><span aria-hidden className="text-lg leading-none">←</span><Image src="/brand/bpinfo/logo-interface-primary.png" alt="BPInfo Tecnologia" width={410} height={118} priority className="h-auto w-[9.25rem]" /></> : <>
            <Image src="/brand/bpinfo/logo-interface-primary.png" alt="BPInfo Tecnologia" width={410} height={118} priority className="hidden h-auto w-[10.75rem] md:block lg:w-[11.75rem]" />
            <Image src="/brand/bpinfo/logo-interface-compact.png" alt="BPInfo Tecnologia" width={130} height={140} priority className="h-10 w-10 md:hidden" />
          </>}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {(isOrbyt ? [{ label: "Módulos", href: "/orbyt#modulos" }, { label: "Demonstração", href: "/contato" }] : mainNav).map((item) => (
            item.href === "/orbyt" ? (
              <OrbytTransitionLink
                key={item.href}
                className={isOrbyt ? "bg-transparent px-0 py-0 text-sm font-normal tracking-normal text-fg-muted hover:scale-100 hover:text-fg" : "bg-transparent px-0 py-0 text-sm font-medium tracking-normal !text-slate-300 hover:scale-100 hover:!text-white"}
              >
                {item.label}
              </OrbytTransitionLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-sm transition-colors", isOrbyt ? "text-[#b7bbd4] hover:text-white" : "font-[family-name:var(--font-bp-display)] font-medium text-slate-300 hover:text-white")}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            href={buildWhatsappLink(defaultWhatsappMessage)}
            external
            variant={isOrbyt ? "orbyt-outline" : "primary"}
            size="sm"
            className={isOrbyt ? "px-5" : "!rounded-[14px] border border-[#76dbff]/30 bg-[#dff6ff] px-5 text-[#06131a] shadow-[0_8px_24px_rgba(33,177,232,0.16)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(33,177,232,0.28)]"}
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <MobileMenu isOrbyt={isOrbyt} items={isOrbyt ? [{ label: "Módulos", href: "/orbyt#modulos" }, { label: "Demonstração", href: "/contato" }] : mainNav} />
        </div>
      </Container>
    </header>
  );
}
