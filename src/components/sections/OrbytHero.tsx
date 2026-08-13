import { Button } from "@/components/ui/Button";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { siteConfig } from "@/lib/config/site";

export function OrbytHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-8 md:px-10 md:py-24 lg:px-12">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {siteConfig.product} · Produto {siteConfig.shortName}
          </p>
          <h1 className="text-balance font-display text-4xl leading-[1.1] text-fg md:text-5xl">
            {siteConfig.productTagline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted md:text-lg">
            O ORBYT organiza a operação de lojas em um único sistema: dashboard,
            equipe, comissões, promoções e relatórios, com acesso em celular e
            computador.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contato">Solicitar demonstração</Button>
            <Button href={siteConfig.orbytUrl} external variant="outline">
              Acessar o ORBYT
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-4 -top-4 hidden h-full w-full border border-border-strong sm:block"
          />
          <WindowFrame className="relative">
            <DashboardMockup />
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
