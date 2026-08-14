import type { Metadata } from "next";
import Link from "next/link";
import {
  Cable,
  Cpu,
  HardDrive,
  ScanSearch,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HardwareSculpture } from "@/components/visuals/HardwareSculpture";
import {
  hardwareProblems,
  hardwareServices,
  hardwareWorkflow,
} from "@/lib/config/hardware";
import { buildWhatsappLink, hardwareWhatsappMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Computadores — Montagem, manutenção e upgrades",
  description:
    "Montagem de PC, PC Gamer, manutenção de computadores, diagnóstico, limpeza preventiva e upgrades de SSD, memória, GPU e componentes.",
  alternates: { canonical: "/computadores" },
};

const serviceIcons: LucideIcon[] = [Cpu, ScanSearch, Sparkles, HardDrive, Cpu, Wrench];

const careAreas = [
  {
    title: "Montagem de PC Gamer",
    description:
      "Montamos e configuramos seu PC para entregar o desempenho esperado, com organização de cabos, testes e atenção a cada componente.",
  },
  {
    title: "Upgrades que fazem sentido",
    description:
      "Avaliamos SSD, memória, placa de vídeo e outros componentes de acordo com o uso atual da máquina e o que precisa melhorar.",
  },
  {
    title: "Manutenção preventiva",
    description:
      "Limpeza interna, revisão e troca de pasta térmica quando necessária para cuidar do equipamento antes que a falha apareça.",
  },
];

const gallerySlots = [
  ["PCs montados", "wide"],
  ["Upgrades e componentes", "square"],
  ["Manutenção e organização", "landscape"],
] as const;

export default function ComputadoresPage() {
  return (
    <div className="overflow-hidden bg-bg text-fg">
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-8">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-60" />
        <HardwareSculpture className="absolute -right-20 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 opacity-40 sm:right-0 sm:opacity-60 md:right-[4%] md:h-[38rem] md:w-[38rem] md:opacity-90" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 py-16 md:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Computadores &amp; Hardware
          </p>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-5xl leading-[0.96] md:text-7xl">
            Seu computador precisa funcionar do jeito certo.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            Montagem, manutenção, diagnóstico e upgrades para computadores de
            trabalho, uso pessoal e PC Gamer.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsappLink(hardwareWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
            >
              Falar pelo WhatsApp
            </a>
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              Ver serviços
            </Link>
          </div>
          <div className="mt-14 flex max-w-2xl flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-fg-muted md:mt-20 md:text-xs">
            <span>Diagnóstico</span>
            <span>Manutenção</span>
            <span>Montagem</span>
            <span>Upgrade</span>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative bg-surface py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10 lg:px-14">
          <div className="md:sticky md:top-28 md:h-fit">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Serviços</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[0.96] sm:text-5xl">
              O que podemos fazer pelo seu computador.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-fg-muted">
              Serviços objetivos para resolver falhas, melhorar o desempenho e
              montar uma máquina de acordo com o uso esperado.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {hardwareServices.map((service, index) => {
              const Icon = serviceIcons[index]!;
              return (
                <div key={service.title} className="relative pt-6">
                  <span aria-hidden className="absolute left-0 top-0 h-px w-12 bg-accent/60" />
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <p className="mt-4 font-display text-xl text-fg">{service.title}</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-10 lg:px-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Diagnóstico</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[0.96] sm:text-5xl">
              Quando vale procurar assistência.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-fg-muted">
              Se o computador mudou de comportamento, uma avaliação ajuda a
              entender a causa antes de escolher o próximo passo.
            </p>
          </div>
          <ul className="space-y-7">
            {hardwareProblems.map((problem, index) => (
              <li key={problem} className="flex gap-5">
                <span className="font-display text-sm text-accent">0{index + 1}</span>
                <span className="max-w-xl leading-relaxed text-fg-muted">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0b0c] py-20 md:py-28">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-40" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Montagem, upgrade e cuidado</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">
              Uma máquina bem montada começa com a escolha certa.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {careAreas.map((area) => (
              <div key={area.title} className="relative pt-8">
                <span aria-hidden className="absolute left-0 top-0 h-px w-full bg-white/15" />
                <p className="mt-2 font-display text-xl text-contrast-fg">{area.title}</p>
                <p className="mt-3 leading-relaxed text-contrast-muted">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Atendimento</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-7xl">Como funciona.</h2>
          <ol className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {hardwareWorkflow.map((step) => (
              <li key={step.number} className="relative pt-8">
                <span aria-hidden className="absolute left-0 top-0 h-px w-full bg-border" />
                <span className="font-display text-7xl leading-none text-accent/70">{step.number}</span>
                <p className="mt-4 font-display text-lg text-fg">{step.title}</p>
                <p className="mt-2 max-w-52 text-sm leading-relaxed text-fg-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Trabalhos reais</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Espaço preparado para mostrar cada detalhe.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              Esta galeria receberá fotos reais de montagens, upgrades,
              organização de cabos, manutenção e antes/depois feitos pela
              BPInfo.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-5">
            {gallerySlots.map(([title, format], index) => (
              <div
                key={title}
                className={`bp-gallery-slot bp-gallery-${format} ${index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-3" : "md:col-span-4"}`}
              >
                <span className="text-[10px] uppercase tracking-[0.16em] text-contrast-muted">Foto real / em breve</span>
                <p className="font-display text-2xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0a10] py-24 text-center md:py-32">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl px-6">
          <span aria-hidden className="mx-auto block h-px w-12 bg-accent" />
          <h2 className="mt-6 text-balance font-display text-3xl leading-[1.15] md:text-4xl">
            Quer resolver uma falha ou montar uma máquina do seu jeito?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-contrast-muted">
            Conte o que acontece com seu computador ou o que você espera da nova máquina.
          </p>
          <Button href={buildWhatsappLink(hardwareWhatsappMessage)} external className="mt-9">
            <Cable className="h-4 w-4" strokeWidth={1.5} />
            Falar pelo WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
