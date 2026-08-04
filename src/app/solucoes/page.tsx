import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { CustomSolutionSection } from "@/components/sections/CustomSolutionSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Soluções — Sistemas, automação e consultoria",
  description:
    "Sistemas personalizados, automação de processos, dashboards, integrações, consultoria em tecnologia e suporte contínuo para pequenas e médias empresas.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluções"
        title="Sistemas e automações para a rotina real da sua empresa"
        description="A BPInfo desenvolve o ORBYT como produto e também atua diretamente no desenvolvimento de sistemas sob medida, automações e integrações para pequenas e médias empresas."
      />
      <ServicesSection />
      <HowWeWorkSection />
      <CustomSolutionSection />
      <PlansSection />
      <FinalCta />
    </>
  );
}
