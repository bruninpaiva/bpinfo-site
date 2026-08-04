import { Button } from "@/components/ui/Button";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:gap-8 md:px-10 md:py-24 lg:px-12">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            BPInfo Tecnologia
          </p>
          <h1 className="text-balance font-display text-4xl leading-[1.1] text-fg md:text-5xl lg:text-[3.4rem]">
            Tecnologia criada para resolver processos reais.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted md:text-lg">
            A BPInfo desenvolve sistemas e automações que transformam rotinas
            manuais em operações simples, organizadas e eficientes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/orbyt">Conhecer o ORBYT</Button>
            <Button href="/contato" variant="outline">
              Solicitar uma demonstração
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
