import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a BPInfo Tecnologia para solicitar uma demonstração do ORBYT ou conversar sobre um sistema sob medida para a sua empresa.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageIntro eyebrow="Contato" title="Vamos conversar sobre a sua operação" />
      <ContactSection />
    </>
  );
}
