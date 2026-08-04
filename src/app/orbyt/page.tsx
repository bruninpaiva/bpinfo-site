import type { Metadata } from "next";
import { OrbytHero } from "@/components/sections/OrbytHero";
import { OrbytFeaturesSection } from "@/components/sections/OrbytFeaturesSection";
import { ProductDemoTabs } from "@/components/sections/ProductDemoTabs";
import { ResponsivenessSection } from "@/components/sections/ResponsivenessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "ORBYT — Plataforma de gestão para lojas",
  description:
    "Conheça o ORBYT: dashboard operacional, gestão de lojas e equipe, comissões, promoções, relatórios e acesso em celular e computador.",
  alternates: { canonical: "/orbyt" },
  openGraph: {
    title: `${siteConfig.product} — Plataforma de gestão para lojas`,
    description: siteConfig.productTagline,
    url: `${siteConfig.url}/orbyt`,
  },
};

export default function OrbytPage() {
  return (
    <>
      <OrbytHero />
      <OrbytFeaturesSection />
      <ProductDemoTabs />
      <ResponsivenessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
