import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Sobre a BPInfo
        </p>
        <div>
          <p className="text-balance font-display text-2xl leading-snug text-fg md:text-3xl">
            A BPInfo nasceu para transformar necessidades reais em soluções
            tecnológicas simples, funcionais e acessíveis.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-fg-muted">
            Desenvolvemos sistemas focados na rotina das empresas, priorizando
            organização, praticidade e resultado.
          </p>
          <Link
            href="/sobre"
            className="mt-6 inline-block text-sm text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
          >
            Conhecer a BPInfo →
          </Link>
        </div>
      </Container>
    </section>
  );
}
