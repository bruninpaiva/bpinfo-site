import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { OrbytFeaturesSection } from "@/components/sections/OrbytFeaturesSection";
import { ProductDemoTabs } from "@/components/sections/ProductDemoTabs";
import { ResponsivenessSection } from "@/components/sections/ResponsivenessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { CustomSolutionSection } from "@/components/sections/CustomSolutionSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PlansSection } from "@/components/sections/PlansSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <OrbytFeaturesSection />
      <ProductDemoTabs />
      <ResponsivenessSection />
      <ServicesSection />
      <HowWeWorkSection />
      <CustomSolutionSection />
      <SecuritySection />
      <PlansSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <FinalCta />
    </>
  );
}
