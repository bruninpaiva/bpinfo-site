import { Code2, Workflow, Package } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const pillars = [
  {
    icon: Code2,
    title: "Sistemas personalizados",
    description:
      "Desenvolvimento de sistemas adaptados ao processo real da empresa, sem forçar a operação a se encaixar em um modelo pronto.",
    href: "/solucoes",
    linkLabel: "Ver soluções sob medida",
    featured: false,
  },
  {
    icon: Workflow,
    title: "Automações e integrações",
    description:
      "Redução de tarefas manuais e conexão entre sistemas e fontes de dados que a empresa já utiliza.",
    href: "/solucoes",
    linkLabel: "Ver automações e integrações",
    featured: false,
  },
  {
    icon: Package,
    title: "Produtos BPInfo",
    description:
      "O ORBYT é o principal produto próprio da BPInfo: uma plataforma de gestão para lojas, pronta para usar.",
    href: "/orbyt",
    linkLabel: "Conhecer o ORBYT",
    featured: true,
  },
];

export function SolutionsOverviewSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Soluções"
          title="Como a BPInfo desenvolve tecnologia"
          description="Três frentes de trabalho, com o mesmo objetivo: simplificar processos reais."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className={cn(
                "hover-lift group flex flex-col border p-8",
                pillar.featured
                  ? "border-contrast-bg bg-contrast-bg text-contrast-fg"
                  : "border-border hover:border-border-strong",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center border",
                    pillar.featured
                      ? "border-contrast-border"
                      : "border-border-strong group-hover:border-accent",
                  )}
                >
                  <pillar.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </span>
                <span
                  className={cn(
                    "font-display text-sm",
                    pillar.featured ? "text-contrast-muted" : "text-fg-subtle",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 font-display text-xl text-inherit">{pillar.title}</p>
              <p
                className={cn(
                  "mt-3 flex-1 text-sm leading-relaxed",
                  pillar.featured ? "text-contrast-muted" : "text-fg-muted",
                )}
              >
                {pillar.description}
              </p>

              <span
                className={cn(
                  "mt-6 text-sm underline decoration-border-strong underline-offset-4 transition-colors",
                  pillar.featured
                    ? "text-contrast-fg group-hover:decoration-accent"
                    : "text-fg group-hover:decoration-accent",
                )}
              >
                {pillar.linkLabel} →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
