import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight, Wrench } from "lucide-react";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { ProblemSelector } from "@/components/sections/ProblemSelector";
import { OrbytTransitionLink } from "@/components/sections/OrbytTransitionLink";
import { HardwareSculpture } from "@/components/visuals/HardwareSculpture";
import { buildWhatsappLink, hardwareWhatsappMessage } from "@/lib/whatsapp";

const services = [
  {
    number: "01",
    title: "PC Gamer",
    statement: "Comprou as peças? A BPInfo monta, organiza, configura e testa.",
    detail: "Uma máquina preparada para o seu setup, sem transformar a montagem em tentativa e erro.",
    accent: "#19c99a",
  },
  {
    number: "02",
    title: "Manutenção",
    statement: "Seu PC não está funcionando como deveria? Primeiro identificamos o problema.",
    detail: "Lentidão, aquecimento, falhas e instabilidade precisam de diagnóstico antes de qualquer troca.",
    accent: "#26e0ae",
  },
  {
    number: "03",
    title: "Upgrades",
    statement: "Melhore o que está limitando sua máquina, não apenas o que parece mais novo.",
    detail: "SSD, memória, placa de vídeo e outros componentes avaliados pelo uso que você tem hoje.",
    accent: "#0e9c77",
  },
  {
    number: "04",
    title: "Sistemas",
    statement: "Quando o problema está no processo, também construímos a solução.",
    detail: "Sistemas, automações, integrações e produtos próprios para operações que precisam funcionar melhor.",
    accent: "#7898ff",
  },
];

const gallerySlots = [
  ["Montagens", "Foto vertical de uma máquina finalizada", "tall"],
  ["Organização", "Detalhe de cabos e componentes", "wide"],
  ["Manutenção", "Registro técnico de bancada", "square"],
  ["Upgrades", "Antes e depois com contexto", "landscape"],
] as const;

export function BpinfoExperience() {
  return (
    <div className="overflow-hidden bg-[#090909] text-contrast-fg">
      <section className="bp-home-hero relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden pt-24">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-80" />
        <p aria-hidden className="absolute -right-4 top-28 font-display text-[23vw] leading-none tracking-[-0.08em] text-white/[0.035]">BP</p>
        <HardwareSculpture className="absolute -right-24 top-10 h-[34rem] w-[34rem] opacity-30 sm:right-0 sm:opacity-50 md:right-[5%] md:top-[8%] md:h-[42rem] md:w-[42rem] md:opacity-90 lg:right-[9%]" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 pb-16 md:px-10 md:pb-20 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.23em] text-accent">BPInfo Tecnologia</p>
            <h1 className="mt-5 font-display text-[3.4rem] leading-[0.84] tracking-[-0.055em] text-contrast-fg sm:text-7xl md:text-[6.4rem] lg:text-[8.5rem]">
              Hardware.<br />
              Performance.<br />
              Sistemas.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-contrast-muted md:text-lg">
              Manutenção, montagem, upgrades e desenvolvimento de sistemas para resolver tecnologia no mundo real.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={buildWhatsappLink(hardwareWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong">
                Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </a>
              <Link href="#servicos" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-contrast-fg transition-colors hover:text-accent">
                Conhecer serviços <ArrowDownRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="mt-14 flex max-w-4xl justify-between gap-5 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-contrast-muted md:mt-20 md:text-xs">
            <span>Diagnóstico antes da decisão</span>
            <span className="hidden sm:inline">Do componente ao processo</span>
            <span>BPInfo / 01</span>
          </div>
        </div>
      </section>

      <div className="bp-marquee overflow-hidden bg-accent py-3 text-accent-fg" aria-label="Serviços BPInfo">
        <div className="bp-marquee-track font-display text-xl tracking-[0.08em] md:text-2xl">PC GAMER <span>•</span> MANUTENÇÃO <span>•</span> UPGRADES <span>•</span> HARDWARE <span>•</span> SISTEMAS <span>•</span> AUTOMAÇÕES <span>•</span> PC GAMER <span>•</span> MANUTENÇÃO <span>•</span> UPGRADES <span>•</span> HARDWARE <span>•</span> SISTEMAS <span>•</span> AUTOMAÇÕES <span>•</span></div>
      </div>

      <section id="servicos" className="relative bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10 lg:px-14">
          <div className="md:sticky md:top-28 md:h-fit">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">O que fazemos</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[0.96] sm:text-5xl">Tecnologia não para em uma tela.</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-contrast-muted">Cada frente tem um ritmo próprio. O ponto de partida é sempre o que precisa funcionar melhor.</p>
          </div>
          <div className="space-y-20 md:space-y-28">
            {services.map((service) => (
              <article key={service.title} className="relative min-h-72 py-3 md:min-h-[26rem] md:py-10">
                <span className="absolute -left-2 -top-9 font-display text-8xl leading-none text-white/[0.045] md:-left-16 md:text-[12rem]">{service.number}</span>
                <div className="relative max-w-2xl">
                  <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: service.accent }}>{service.title}</p>
                  <h3 className="mt-5 font-display text-3xl leading-[1.02] md:text-5xl">{service.statement}</h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-contrast-muted">{service.detail}</p>
                  {service.title === "Sistemas" ? <Link href="/solucoes" className="mt-7 inline-flex items-center text-sm text-[#b7c9ff] hover:text-white">Conhecer soluções digitais <ArrowUpRight className="ml-2 h-4 w-4" /></Link> : null}
                </div>
                <div aria-hidden className="absolute bottom-0 right-0 h-24 w-2/3 opacity-60 [background:linear-gradient(90deg,transparent,var(--service-accent),transparent)]" style={{ "--service-accent": service.accent } as CSSProperties} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProblemSelector />

      <section className="relative overflow-hidden bg-surface py-20 md:py-28">
        <div aria-hidden className="absolute -left-28 top-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Manutenção</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.94] text-fg md:text-7xl">Diagnóstico é parte do conserto.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted">Seu PC está esquentando, travando ou perdeu desempenho? Primeiro identificamos a origem. Depois decidimos o que realmente precisa ser feito.</p>
          </div>
          <div className="relative flex min-h-80 items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border border-fg/10" />
            <div className="absolute h-52 w-52 rounded-full border border-accent/50" />
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-bg text-accent"><Wrench className="h-12 w-12" strokeWidth={1.1} /></div>
            <div className="absolute bottom-2 right-0 max-w-44 text-xs leading-relaxed text-fg-muted">Limpeza interna, pasta térmica quando necessária, instalação, configuração e troca de componentes.</div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0b0b0c] py-20 md:py-28">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-40" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">PC Gamer / montagem</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-7xl">Não é só encaixar componentes.</h2>
          </div>
          <ol className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {["Projeto", "Montagem", "Organização", "Configuração e teste"].map((step, index) => (
              <li key={step} className="relative pt-8">
                <span className="font-display text-7xl leading-none text-accent/80">0{index + 1}</span>
                <p className="mt-4 max-w-40 text-lg text-contrast-fg">{step}</p>
                <span aria-hidden className="absolute left-0 top-0 h-px w-full bg-white/15" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#161513] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Trabalhos reais</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Espaço para mostrar o que sai da bancada.</h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-contrast-muted">A galeria está pronta para fotos reais de montagens, upgrades, cabos e manutenções. Nenhuma imagem fictícia foi usada.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            {gallerySlots.map(([title, description, format], index) => (
              <div key={title} className={`bp-gallery-slot bp-gallery-${format} ${index === 0 ? "md:col-span-5 md:row-span-2" : index === 1 ? "md:col-span-7" : index === 2 ? "md:col-span-3" : "md:col-span-4"}`}>
                <span className="text-[10px] uppercase tracking-[0.16em] text-contrast-muted">Foto real / em breve</span>
                <div><p className="font-display text-2xl">{title}</p><p className="mt-1 text-xs text-contrast-muted">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0a10] py-28 md:py-36">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,201,154,.5),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(110,113,255,.55),transparent_32%)]" />
        <div aria-hidden className="absolute inset-0 opacity-60 [background-image:linear-gradient(120deg,transparent_48%,rgba(119,141,255,.32)_49%,transparent_50%)] [background-size:92px_92px]" />
        <div className="relative mx-auto max-w-[92rem] px-6 md:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#c0c9ff]">Hardware → software</p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.94] md:text-7xl">Nem todo problema de tecnologia está dentro do computador.</h2>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#090b16] py-20 md:py-28">
        <div aria-hidden className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(150,170,255,.28)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 lg:px-14">
          <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aab8ff]">Sistemas & Automações</p><h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">Quando o processo é o problema, também construímos a solução.</h2><p className="mt-6 max-w-lg leading-relaxed text-[#b5b7cb]">Sistemas personalizados, automações, integrações e produtos próprios para tirar a operação de planilhas, retrabalho e informações espalhadas.</p><Link href="/solucoes" className="mt-7 inline-flex items-center text-sm text-[#d9dcff] hover:text-white">Conhecer soluções <ArrowUpRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="relative"><div aria-hidden className="absolute -inset-8 rounded-full bg-[#5f68f2]/20 blur-3xl" /><WindowFrame className="relative border-[#656fd7]/60 bg-[#11142b]"><DashboardMockup /></WindowFrame></div>
        </div>
      </section>

      <section className="orbyt-gateway relative overflow-hidden bg-[#060611] py-28 md:py-36">
        <div aria-hidden className="orbyt-gateway-orbit orbyt-gateway-orbit-one" /><div aria-hidden className="orbyt-gateway-orbit orbyt-gateway-orbit-two" /><div aria-hidden className="orbyt-gateway-planet" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#aab8ff]">Um produto BPInfo</p>
          <p className="mt-7 font-display text-[20vw] leading-none tracking-[-0.07em] text-[#e8eaff] md:text-[10rem]">ORBYT</p>
          <p className="mx-auto mt-4 max-w-md text-lg text-[#b7bad5]">Plataforma de gestão empresarial para lojas, equipe, comissões, promoções e relatórios.</p>
          <OrbytTransitionLink className="mt-10" />
        </div>
      </section>
    </div>
  );
}
