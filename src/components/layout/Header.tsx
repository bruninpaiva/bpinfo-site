"use client";

import { useEffect, useState } from "react";
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
            ? "border-border bg-bg/90 shadow-token-sm backdrop-blur-md"
            : "border-transparent bg-bg/60 backdrop-blur-sm",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-200",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
        )}
      >
        <Link href="/" className={cn("font-display text-xl tracking-tight", isOrbyt ? "text-[#eef0ff]" : "text-fg")}>
          {isOrbyt ? "← BPInfo Tecnologia" : siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {(isOrbyt ? [{ label: "Módulos", href: "/orbyt#modulos" }, { label: "Demonstração", href: "/contato" }] : mainNav).map((item) => (
            item.href === "/orbyt" ? (
              <OrbytTransitionLink
                key={item.href}
                className="bg-transparent px-0 py-0 text-sm font-normal tracking-normal text-fg-muted hover:scale-100 hover:text-fg"
              >
                {item.label}
              </OrbytTransitionLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-sm transition-colors", isOrbyt ? "text-[#b7bbd4] hover:text-white" : "text-fg-muted hover:text-fg")}
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
            variant={isOrbyt ? "on-contrast" : "primary"}
            size="sm"
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <MobileMenu items={isOrbyt ? [{ label: "Módulos", href: "/orbyt#modulos" }, { label: "Demonstração", href: "/contato" }] : mainNav} />
        </div>
      </Container>
    </header>
  );
}
