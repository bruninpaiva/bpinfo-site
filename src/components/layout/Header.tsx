"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/config/nav";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
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
        <Link href="/" className="font-display text-xl tracking-tight text-fg">
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            href={buildWhatsappLink(defaultWhatsappMessage)}
            external
            variant="primary"
            size="sm"
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileMenu items={mainNav} />
        </div>
      </Container>
    </header>
  );
}
