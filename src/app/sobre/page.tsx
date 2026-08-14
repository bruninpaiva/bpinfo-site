import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Sobre a BPInfo",
  description:
    "A BPInfo desenvolve soluções digitais e trabalha com computadores, manutenção e upgrades para necessidades reais.",
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
        title="Tecnologia para processos e equipamentos reais"
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-balance font-display text-2xl leading-snug text-fg md:text-3xl">
            A BPInfo trabalha com tecnologia de ponta a ponta: da operação de
            uma empresa ao computador que precisa funcionar bem todos os dias.
          </p>
          <p className="mt-6 leading-relaxed text-fg-muted">
            Desenvolvemos sistemas, automações e integrações para empresas.
            Também montamos computadores, realizamos manutenção, diagnóstico e
            upgrades. O ORBYT é o principal produto próprio da BPInfo e faz
            parte dessa mesma forma prática de trabalhar com tecnologia.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
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
