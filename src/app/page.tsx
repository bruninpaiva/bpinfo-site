import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { SolutionsOverviewSection } from "@/components/sections/SolutionsOverviewSection";
import { OrbytHighlightSection } from "@/components/sections/OrbytHighlightSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <SolutionsOverviewSection />
      <OrbytHighlightSection />
      <HowWeWorkSection />
      <ProjectsSection />
      <SecuritySection />
      <AboutSection />
      <FinalCta />
    </>
  );
}
