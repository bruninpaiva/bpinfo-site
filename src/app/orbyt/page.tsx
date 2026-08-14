import type { Metadata } from "next";
import { OrbytExperience } from "@/components/sections/OrbytExperience";
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
    <OrbytExperience />
  );
}
