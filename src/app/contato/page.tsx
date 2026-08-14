import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a BPInfo Tecnologia sobre sistemas, automações, computadores, manutenção ou upgrades.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageIntro eyebrow="Contato" title="Vamos conversar sobre o que você precisa" />
      <ContactSection />
    </>
  );
}
