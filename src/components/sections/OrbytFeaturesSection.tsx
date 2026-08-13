import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { orbytFeatures } from "@/lib/config/orbyt";
import { siteConfig } from "@/lib/config/site";

export function OrbytFeaturesSection() {
  return (
    <section id="orbyt" className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={`${siteConfig.product} · Produto ${siteConfig.shortName}`}
            title="Conheça o ORBYT"
            description="Uma plataforma de gestão desenvolvida pela BPInfo para organizar lojas, acompanhar operações e simplificar processos."
          />
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <Button href="/contato" variant="outline">
              Solicitar demonstração
            </Button>
            <Button href={siteConfig.orbytUrl} external>
              Acessar o ORBYT
            </Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-10 border-t border-border md:grid-cols-2">
          {orbytFeatures.map((feature) => (
            <li
              key={feature.title}
              className="flex gap-4 border-b border-border py-6"
            >
              <FeatureIcon
                icon={feature.icon}
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              />
              <div>
                <p className="font-display text-lg text-fg">{feature.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
