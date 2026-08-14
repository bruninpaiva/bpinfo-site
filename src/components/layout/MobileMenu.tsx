"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/config/nav";
import { Button } from "@/components/ui/Button";
import { OrbytTransitionLink } from "@/components/sections/OrbytTransitionLink";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";

export function MobileMenu({ items, isOrbyt = false }: { items: NavItem[]; isOrbyt?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className={isOrbyt ? "flex h-11 w-11 items-center justify-center text-fg" : "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-[#67d5ff]/50"}
      >
        <Menu className="h-6 w-6" strokeWidth={1.5} />
      </button>

      {open ? (
        <div className={isOrbyt ? "fixed inset-0 z-[60] bg-bg" : "fixed inset-0 z-[60] bg-[#080b10] text-white"}>
          <div className="flex items-center justify-between px-6 py-5">
            <span className={isOrbyt ? "font-display text-lg tracking-tight text-fg" : "inline-flex items-center"}>
              {isOrbyt ? siteConfig.shortName : <Image src="/brand/bpinfo/logo-interface-compact.png" alt="BPInfo Tecnologia" width={130} height={140} className="h-10 w-10" />}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className={isOrbyt ? "flex h-11 w-11 items-center justify-center text-fg" : "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white"}
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
                  className={isOrbyt ? "justify-start border-b border-border bg-transparent px-0 py-5 font-display text-2xl font-normal tracking-normal text-fg hover:scale-100" : "justify-start rounded-xl px-4 py-4 font-[family-name:var(--font-bp-display)] text-xl font-medium tracking-normal text-white hover:scale-100 hover:bg-white/[0.06]"}
                >
                  {item.label}
                </OrbytTransitionLink>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={isOrbyt ? "border-b border-border py-5 font-display text-2xl text-fg" : "rounded-xl px-4 py-4 font-[family-name:var(--font-bp-display)] text-xl font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"}
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
              className={isOrbyt ? "w-full" : "w-full !rounded-[14px] border border-[#76dbff]/30 bg-[#dff6ff] text-[#06131a] hover:bg-white"}
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
