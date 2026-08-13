import { Button } from "@/components/ui/Button";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

const pillarStrip = ["Sistemas personalizados", "Automações e integrações", "Produtos BPInfo"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="bg-grid-dots absolute inset-y-0 right-0 hidden w-1/2 [mask-image:linear-gradient(to_left,black,transparent)] md:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-10 md:px-10 md:py-28 lg:px-12">
        <div className="animate-fade-up">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            BPInfo Tecnologia
          </p>
          <h1 className="text-balance font-display text-[2.6rem] leading-[1.05] text-fg sm:text-5xl md:text-[3.4rem] lg:text-[3.9rem]">
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

          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-6 text-xs uppercase tracking-[0.1em] text-fg-subtle">
            {pillarStrip.map((label, index) => (
              <li key={label} className="flex items-center gap-3">
                {label}
                {index < pillarStrip.length - 1 ? (
                  <span aria-hidden className="text-border-strong">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative [animation-delay:120ms]">
          <div
            aria-hidden
            className="absolute -right-4 -top-4 hidden h-full w-full border border-border-strong sm:block"
          />
          <WindowFrame className="relative">
            <DashboardMockup />
          </WindowFrame>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] border border-border-strong bg-bg-elevated p-4 shadow-token-md sm:block">
            <p className="text-[11px] uppercase tracking-[0.1em] text-fg-subtle">
              Produto BPInfo
            </p>
            <p className="mt-1 font-display text-sm leading-snug text-fg">
              ORBYT — gestão de lojas em um único sistema
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
