import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { orbytFeatures, type OrbytFeature } from "@/lib/config/orbyt";
import { siteConfig } from "@/lib/config/site";

const highlightKeys: OrbytFeature["icon"][] = [
  "dashboard",
  "store",
  "users",
  "percent",
  "tag",
  "report",
  "permissions",
  "devices",
];

const highlights = highlightKeys
  .map((key) => orbytFeatures.find((feature) => feature.icon === key))
  .filter((feature): feature is OrbytFeature => Boolean(feature));

export function OrbytHighlightSection() {
  return (
    <section id="orbyt" className="border-t border-border bg-surface py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Produto BPInfo
          </span>
          <p className="mt-5 text-balance font-display text-3xl leading-[1.15] text-fg md:text-4xl">
            Conheça o ORBYT
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-fg-muted md:text-lg">
            Uma plataforma de gestão desenvolvida pela BPInfo para organizar
            lojas, equipe e resultados em um único sistema.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-8">
            {highlights.map((feature) => (
              <li
                key={feature.title}
                className="flex items-center gap-2.5 border border-border bg-bg-elevated px-3 py-2.5"
              >
                <FeatureIcon icon={feature.icon} className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-fg-muted">{feature.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/orbyt#como-funciona" variant="outline">
              Ver todos os módulos
            </Button>
            <Button href={siteConfig.orbytUrl} external>
              Acessar o ORBYT
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-full w-full border border-border-strong sm:block"
          />
          <WindowFrame className="relative">
            <DashboardMockup />
          </WindowFrame>
        </div>
      </Container>
    </section>
  );
}
