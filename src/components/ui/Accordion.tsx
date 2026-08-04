"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/lib/config/faq";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg text-fg md:text-xl">
                {item.question}
              </span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-fg-muted transition-transform duration-200",
                  isOpen && "rotate-45 text-accent",
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <p className="overflow-hidden text-fg-muted leading-relaxed max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
