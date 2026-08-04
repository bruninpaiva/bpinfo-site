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
    <section className="border-b border-border py-16 md:py-20">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl leading-[1.1] text-fg md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
