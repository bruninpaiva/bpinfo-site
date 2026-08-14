"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/config/nav";
import { Button } from "@/components/ui/Button";
import { OrbytTransitionLink } from "@/components/sections/OrbytTransitionLink";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-11 w-11 items-center justify-center text-fg"
      >
        <Menu className="h-6 w-6" strokeWidth={1.5} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-bg">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg tracking-tight text-fg">
              {siteConfig.shortName}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="flex h-11 w-11 items-center justify-center text-fg"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-4">
            {items.map((item) => (
              item.href === "/orbyt" ? (
                <OrbytTransitionLink
                  key={item.href}
                  onTransitionStart={() => setOpen(false)}
                  className="justify-start border-b border-border bg-transparent px-0 py-5 font-display text-2xl font-normal tracking-normal text-fg hover:scale-100"
                >
                  {item.label}
                </OrbytTransitionLink>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-5 font-display text-2xl text-fg"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="mt-8 px-6">
            <Button
              href={buildWhatsappLink(defaultWhatsappMessage)}
              external
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
