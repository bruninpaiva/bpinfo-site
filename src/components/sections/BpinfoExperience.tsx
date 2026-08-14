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
    <div className="relative overflow-hidden bg-[#090909] text-contrast-fg">
      <div aria-hidden className="bp-spine left-[6.5%] hidden lg:block" />
      <div aria-hidden className="bp-spine left-[93%] hidden lg:block" />

      <section className="bp-home-hero relative overflow-hidden pt-24">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-80" />

        {/* ---------- Desktop: tipografia e escultura em profundidade, sem coluna texto/imagem ---------- */}
        <div className="relative hidden md:block md:h-[46rem] lg:h-[50rem]">
          <p aria-hidden className="absolute -right-6 top-6 font-display text-[24vw] leading-none tracking-[-0.08em] text-white/[0.035] lg:text-[19vw]">BP</p>

          <HardwareSculpture className="absolute right-[2%] top-[10%] z-10 h-[34rem] w-[34rem] opacity-80 lg:right-[6%] lg:h-[40rem] lg:w-[40rem]" />

          <p className="absolute left-[2%] top-[6%] z-20 text-xs font-medium uppercase tracking-[0.23em] text-accent">
            BPInfo Tecnologia
          </p>

          <h1
            aria-hidden
            className="pointer-events-none absolute left-[-1%] top-[13%] z-20 select-none font-display text-[clamp(4.5rem,10vw,9.5rem)] italic leading-[0.82] tracking-[-0.03em] text-contrast-fg"
          >
            Hardware.
          </h1>

          <p
            aria-hidden
            className="pointer-events-none absolute left-[30%] top-[40%] z-[5] -rotate-2 select-none font-display text-[clamp(2.8rem,6.4vw,5.5rem)] italic leading-[0.9] text-contrast-fg/60"
          >
            Performance.
          </p>

          <p
            aria-hidden
            className="absolute bottom-[10%] right-[2%] z-20 origin-bottom-right select-none text-sm font-extrabold uppercase tracking-[0.34em] text-accent [writing-mode:vertical-rl]"
          >
            Sistemas.
          </p>

          {/* Screen-reader only real heading, since the visual words above are split/decorative */}
          <h1 className="sr-only">Hardware. Performance. Sistemas.</h1>

          <div className="absolute bottom-[7%] left-[9%] z-20 max-w-sm">
            <p className="text-base leading-relaxed text-contrast-muted md:text-lg">
              Manutenção, montagem, upgrades e desenvolvimento de sistemas para resolver tecnologia no mundo real.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={buildWhatsappLink(hardwareWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong">
                Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </a>
              <Link href="#servicos" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-contrast-fg transition-colors hover:text-accent">
                Conhecer serviços <ArrowDownRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- Mobile: pilha assimétrica própria, não a mesma matemática absoluta do desktop ---------- */}
        <div className="relative flex flex-col px-6 pb-14 pt-4 md:hidden">
          <HardwareSculpture className="pointer-events-none absolute -right-20 -top-4 z-0 h-64 w-64 opacity-35" />
          <p className="relative z-10 text-xs font-medium uppercase tracking-[0.23em] text-accent">BPInfo Tecnologia</p>
          <h1 className="relative z-10 mt-4 font-display text-[16vw] italic leading-[0.82] tracking-[-0.02em] text-contrast-fg">
            Hardware.
          </h1>
          <p className="relative z-10 -mt-1 ml-[18%] font-display text-[9.5vw] italic leading-[0.9] text-contrast-fg/60">
            Performance.
          </p>
          <p className="relative z-10 mt-4 text-xs font-extrabold uppercase tracking-[0.3em] text-accent">Sistemas.</p>
          <p className="relative z-10 mt-6 max-w-xs text-base leading-relaxed text-contrast-muted">
            Manutenção, montagem, upgrades e desenvolvimento de sistemas para resolver tecnologia no mundo real.
          </p>
          <div className="relative z-10 mt-7 flex flex-col gap-3">
            <a href={buildWhatsappLink(hardwareWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong">
              Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </a>
            <Link href="#servicos" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-contrast-fg transition-colors hover:text-accent">
              Conhecer serviços <ArrowDownRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-8 flex w-full max-w-[92rem] justify-between gap-5 border-t border-white/10 px-6 pt-4 text-[10px] uppercase tracking-[0.16em] text-contrast-muted md:px-10 md:text-xs lg:px-14">
          <span>Diagnóstico antes da decisão</span>
          <span className="hidden sm:inline">Do componente ao processo</span>
          <span>BPInfo / 01</span>
        </div>
      </section>

      <div className="bp-marquee overflow-hidden bg-accent py-3 text-accent-fg" aria-label="Serviços BPInfo">
        <div className="bp-marquee-track font-display text-xl tracking-[0.08em] md:text-2xl">PC GAMER <span>•</span> MANUTENÇÃO <span>•</span> UPGRADES <span>•</span> HARDWARE <span>•</span> SISTEMAS <span>•</span> AUTOMAÇÕES <span>•</span> PC GAMER <span>•</span> MANUTENÇÃO <span>•</span> UPGRADES <span>•</span> HARDWARE <span>•</span> SISTEMAS <span>•</span> AUTOMAÇÕES <span>•</span></div>
      </div>

      <section id="servicos" className="relative overflow-hidden bg-[#11100f] py-24 md:py-32">
        <p aria-hidden className="pointer-events-none absolute -top-6 right-[2%] select-none font-display text-[9rem] italic leading-none text-white/[0.035] md:text-[13rem]">
          02
        </p>

        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="max-w-md md:ml-[8%]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">O que fazemos</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.96] sm:text-5xl">Tecnologia não para em uma tela.</h2>
          </div>

          <div className="relative mt-16 md:mt-6">
            {services.map((service, index) => {
              const align = ["md:ml-0 md:mr-[32%]", "md:ml-[24%] md:mr-0 md:text-right", "md:ml-[4%] md:mr-[40%]", "md:ml-[38%] md:mr-0"][index]!;
              const overlap = index === 2 ? "md:-mt-16" : index === 0 ? "" : "md:mt-6";
              const numberAlign = index % 2 === 1 ? "md:right-0 md:text-right" : "md:left-0";
              return (
                <article key={service.title} className={`relative py-14 first:pt-0 md:py-20 ${overlap}`}>
                  <span
                    aria-hidden
                    className={`absolute -top-10 left-0 select-none font-display text-8xl leading-none text-white/[0.05] md:top-[-2.5rem] md:text-[10rem] ${numberAlign}`}
                  >
                    {service.number}
                  </span>
                  <div className={`relative max-w-xl ${align}`}>
                    <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: service.accent }}>{service.title}</p>
                    <h3 className="mt-5 font-display text-3xl leading-[1.02] md:text-4xl lg:text-5xl">{service.statement}</h3>
                    <p className="mt-5 max-w-md leading-relaxed text-contrast-muted">{service.detail}</p>
                    {service.title === "Sistemas" ? <Link href="/solucoes" className="mt-7 inline-flex items-center text-sm text-[#b7c9ff] hover:text-white">Conhecer soluções digitais <ArrowUpRight className="ml-2 h-4 w-4" /></Link> : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ProblemSelector />

      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div aria-hidden className="absolute -left-28 top-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <p aria-hidden className="pointer-events-none absolute -bottom-16 right-[3%] select-none font-display text-[9rem] italic leading-none text-fg/[0.04] md:text-[13rem]">04</p>

        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Manutenção</p>

          {/* Desktop: imagem dominante com anotações técnicas sobrepostas, título cruzando a borda */}
          <div className="relative mt-6 hidden md:block">
            <div className="bp-photo-frame relative ml-[16%] h-[28rem] w-[92%] lg:h-[32rem]">
              <span className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-fg-muted">
                <span className="h-px w-6 bg-accent" /> Foto real / em breve
              </span>
              <div className="absolute left-[12%] top-[20%] flex items-center gap-2 text-xs text-accent">
                <span className="bp-hardware-leader w-6" /> Fluxo de ar
              </div>
              <div className="absolute bottom-[18%] left-[42%] flex items-center gap-2 text-xs text-accent">
                <Wrench className="h-4 w-4" strokeWidth={1.3} /> Pasta térmica
              </div>
              <div className="absolute right-[10%] top-[42%] flex items-center gap-2 text-xs text-accent">
                <span className="bp-hardware-leader w-6" /> Componentes
              </div>
            </div>

            <h2 className="absolute -top-2 left-[3%] z-10 max-w-lg font-display text-5xl leading-[0.94] text-fg drop-shadow-[0_4px_24px_rgba(11,13,16,0.85)] lg:text-6xl">
              Diagnóstico é parte do conserto.
            </h2>

            <div className="ml-[16%] mt-8 max-w-sm">
              <p className="text-lg leading-relaxed text-fg-muted">Seu PC está esquentando, travando ou perdeu desempenho? Primeiro identificamos a origem. Depois decidimos o que realmente precisa ser feito.</p>
              <p className="mt-4 text-xs leading-relaxed text-fg-subtle">Limpeza interna, pasta térmica quando necessária, instalação, configuração e troca de componentes.</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-6 md:hidden">
            <h2 className="max-w-md font-display text-4xl leading-[0.96] text-fg">Diagnóstico é parte do conserto.</h2>
            <div className="bp-photo-frame relative mt-6 h-56 w-full">
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-accent">
                <Wrench className="h-4 w-4" strokeWidth={1.3} /> Pasta térmica
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">Seu PC está esquentando, travando ou perdeu desempenho? Primeiro identificamos a origem. Depois decidimos o que realmente precisa ser feito.</p>
            <p className="mt-3 text-xs leading-relaxed text-fg-subtle">Limpeza interna, pasta térmica quando necessária, instalação, configuração e troca de componentes.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0b0c] py-24 md:py-32">
        <div aria-hidden className="bp-circuit-field absolute inset-0 opacity-40" />
        <p aria-hidden className="pointer-events-none absolute left-[1%] top-[4%] select-none font-display text-[11rem] italic leading-none text-accent/[0.07] md:text-[17rem]">01</p>

        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">PC Gamer / montagem</p>

          {/* Desktop: imagem dominante extrapolando a coluna, sequência integrada como legenda técnica */}
          <div className="relative mt-4 hidden md:block">
            <h2 className="relative z-10 max-w-2xl font-display text-5xl leading-[0.94] md:text-7xl">Não é só encaixar componentes.</h2>

            <div className="bp-photo-frame relative -mt-8 ml-[14%] h-[26rem] w-[100%] lg:h-[30rem]">
              <span className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.16em] text-fg-muted">Foto real / em breve — montagem</span>
            </div>

            <div className="relative z-10 ml-[14%] mt-8 flex w-[84%] justify-between gap-6">
              {["Projeto", "Montagem", "Organização", "Configuração e teste"].map((step, index) => (
                <div key={step} className={`flex flex-col ${index % 2 === 1 ? "mt-7" : ""}`}>
                  <span className="font-display text-3xl leading-none text-accent/80">0{index + 1}</span>
                  <p className="mt-2 text-sm text-contrast-fg">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-4 md:hidden">
            <h2 className="font-display text-4xl leading-[0.94]">Não é só encaixar componentes.</h2>
            <div className="bp-photo-frame relative mt-6 h-56 w-full">
              <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.16em] text-fg-muted">Foto real / em breve</span>
            </div>
            <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {["Projeto", "Montagem", "Organização", "Configuração e teste"].map((step, index) => (
                <li key={step}>
                  <span className="font-display text-4xl leading-none text-accent/80">0{index + 1}</span>
                  <p className="mt-2 text-sm text-contrast-fg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#161513] py-24 md:py-32">
        <p aria-hidden className="pointer-events-none absolute left-1/2 top-[4%] -translate-x-1/2 select-none whitespace-nowrap font-display text-[7rem] italic leading-none text-white/[0.035] md:text-[10rem]">
          BANCADA
        </p>

        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Trabalhos reais</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Espaço para mostrar o que sai da bancada.</h2>
            <p className="mt-4 text-sm leading-relaxed text-contrast-muted">A galeria está pronta para fotos reais de montagens, upgrades, cabos e manutenções. Nenhuma imagem fictícia foi usada.</p>
          </div>

          {/* Desktop: composição editorial sobreposta, não uma grade */}
          <div className="relative mt-20 hidden md:block md:h-[42rem] lg:h-[48rem]">
            {[
              { title: "Montagens", pos: "left-0 top-0 z-10 h-full w-[30%]", caption: "-bottom-8 left-0" },
              { title: "Organização", pos: "left-[26%] top-[4%] z-20 h-[44%] w-[52%]", caption: "-bottom-8 left-0" },
              { title: "Manutenção", pos: "-right-[3%] top-[34%] z-30 h-[36%] w-[24%]", caption: "-bottom-8 right-0 text-right" },
              { title: "Upgrades", pos: "left-[8%] top-[62%] z-40 h-[30%] w-[38%]", caption: "-bottom-8 left-0" },
            ].map((slot, index) => (
              <div key={slot.title} className={`absolute ${slot.pos}`}>
                <div className="bp-photo-frame h-full w-full" />
                <p className={`absolute whitespace-nowrap text-xs uppercase tracking-[0.16em] text-contrast-muted ${slot.caption}`}>
                  0{index + 1} · {slot.title}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: pilha com alturas variadas, sem grid */}
          <div className="mt-10 space-y-8 md:hidden">
            {gallerySlots.map(([title, description], index) => (
              <div key={title}>
                <div className={`bp-photo-frame w-full ${index === 0 ? "h-64" : "h-40"}`} />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-contrast-muted">0{index + 1} · {title}</p>
                <p className="mt-1 text-xs text-contrast-muted/70">{description}</p>
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

      <section className="relative overflow-hidden bg-[#090b16] py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(150,170,255,.28)_1px,transparent_0)] [background-size:24px_24px]" />
        <p aria-hidden className="pointer-events-none absolute -top-10 left-[3%] select-none font-display text-[9rem] italic leading-none text-[#aab8ff]/[0.07] md:text-[13rem]">05</p>

        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 lg:px-14">
          <div className="md:pb-16"><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aab8ff]">Sistemas & Automações</p><h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">Quando o processo é o problema, também construímos a solução.</h2><p className="mt-6 max-w-lg leading-relaxed text-[#b5b7cb]">Sistemas personalizados, automações, integrações e produtos próprios para tirar a operação de planilhas, retrabalho e informações espalhadas.</p><Link href="/solucoes" className="mt-7 inline-flex items-center text-sm text-[#d9dcff] hover:text-white">Conhecer soluções <ArrowUpRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="relative md:-mr-[6%] md:mt-16 md:rotate-1"><div aria-hidden className="absolute -inset-8 rounded-full bg-[#5f68f2]/20 blur-3xl" /><WindowFrame className="relative border-[#656fd7]/60 bg-[#11142b]"><DashboardMockup /></WindowFrame></div>
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
