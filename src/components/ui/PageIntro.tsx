import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="bg-grid-dots absolute inset-0 opacity-[0.05]" />
      <Container className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[0.96] text-fg md:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-7 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
