import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Sobre a BPInfo",
  description:
    "A BPInfo nasceu para transformar necessidades reais em soluções tecnológicas simples, funcionais e acessíveis.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    title: "Organização",
    description: "Processos claros substituem controles soltos e dependentes de memória.",
  },
  {
    title: "Praticidade",
    description: "Soluções pensadas para o uso real do dia a dia, não para a demonstração.",
  },
  {
    title: "Resultado",
    description: "Cada sistema desenvolvido precisa gerar um ganho concreto na operação.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre a BPInfo"
        title="Tecnologia a serviço de processos reais"
      />

      <section className="border-b border-border py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-balance font-display text-2xl leading-snug text-fg md:text-3xl">
            A BPInfo nasceu para transformar necessidades reais em soluções
            tecnológicas simples, funcionais e acessíveis.
          </p>
          <p className="mt-6 leading-relaxed text-fg-muted">
            Desenvolvemos sistemas focados na rotina das empresas, priorizando
            organização, praticidade e resultado. O ORBYT é o principal
            produto da BPInfo, mas grande parte do nosso trabalho acontece
            diretamente com clientes que precisam de sistemas e automações
            desenhados sob medida para a própria operação.
          </p>
        </Container>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <Container>
          <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <p className="font-display text-xl text-fg">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HowWeWorkSection />
      <FinalCta />
    </>
  );
}
