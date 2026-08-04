"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { OperationMockup } from "@/components/mockups/OperationMockup";
import { PromotionsMockup } from "@/components/mockups/PromotionsMockup";
import { CommissionsMockup } from "@/components/mockups/CommissionsMockup";
import { ReportsMockup } from "@/components/mockups/ReportsMockup";
import { MobileMockup } from "@/components/mockups/MobileMockup";
import { orbytModules, type OrbytModule } from "@/lib/config/orbyt";
import { cn } from "@/lib/cn";

const mockupByKey: Record<OrbytModule["key"], React.ComponentType> = {
  dashboard: DashboardMockup,
  operacao: OperationMockup,
  promocoes: PromotionsMockup,
  comissoes: CommissionsMockup,
  relatorios: ReportsMockup,
  mobile: MobileMockup,
};

export function ProductDemoTabs() {
  const [active, setActive] = useState<OrbytModule["key"]>("dashboard");
  const current = orbytModules.find((m) => m.key === active) ?? orbytModules[0]!;
  const Mockup = mockupByKey[current.key];

  return (
    <section id="como-funciona" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Demonstração"
          title="O ORBYT por dentro"
          description="Uma visão de cada módulo do sistema. As telas abaixo são representações ilustrativas da interface — serão substituídas por capturas reais do produto."
        />

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-px">
          {orbytModules.map((module) => (
            <button
              key={module.key}
              type="button"
              onClick={() => setActive(module.key)}
              className={cn(
                "border-b-2 px-4 py-3 text-sm transition-colors",
                active === module.key
                  ? "border-accent text-fg"
                  : "border-transparent text-fg-muted hover:text-fg",
              )}
            >
              {module.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <p className="font-display text-2xl text-fg">{current.title}</p>
            <p className="mt-3 leading-relaxed text-fg-muted">{current.description}</p>
          </div>
          <WindowFrame>
            <Mockup />
          </WindowFrame>
        </div>
      </Container>
    </section>
  );
}
