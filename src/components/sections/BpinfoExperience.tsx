import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Cpu, Gauge, ShieldCheck, Wrench, Zap } from "lucide-react";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { ProblemSelector } from "@/components/sections/ProblemSelector";
import { OrbytTransitionLink } from "@/components/sections/OrbytTransitionLink";
import { buildWhatsappLink, hardwareWhatsappMessage } from "@/lib/whatsapp";

const services = [
  { title: "PC Gamer", statement: "Montagem pensada para o seu jogo, seu espaço e o seu orçamento.", detail: "Escolha de peças, montagem limpa, configuração e testes antes de entregar a máquina.", icon: Cpu },
  { title: "Manutenção", statement: "Diagnóstico antes de qualquer troca ou promessa.", detail: "Investigamos lentidão, aquecimento, falhas e instabilidade para resolver a causa certa.", icon: Wrench },
  { title: "Upgrades", statement: "Mais desempenho onde ele realmente faz diferença.", detail: "SSD, memória, placa de vídeo e ajustes definidos pelo uso que você tem hoje.", icon: Zap },
];

const buildSteps = ["Projeto da máquina", "Montagem e organização", "Configuração do sistema", "Teste antes da entrega"];

export function BpinfoExperience() {
  return (
    <div className="bp-home overflow-hidden bg-[#070a0f] text-[#eff8ff]">
      <section className="bp-home-hero relative isolate min-h-[calc(100svh-4rem)] overflow-hidden md:min-h-[46rem]">
        <Image src="/bpinfo/hardware-hero-v1.png" alt="PC gamer montado em bancada técnica da BPInfo" fill priority sizes="100vw" className="object-cover object-[68%_center]" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,13,0.98)_0%,rgba(5,8,13,0.9)_32%,rgba(5,8,13,0.38)_66%,rgba(5,8,13,0.16)_100%)]" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.15),rgba(5,8,13,0.2)_52%,#070a0f_100%)]" />
        <div aria-hidden className="bp-home-hero-glow absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[92rem] items-center px-6 pb-16 pt-28 md:min-h-[46rem] md:px-10 md:pb-20 lg:px-14">
          <div className="max-w-2xl">
            <p className="bp-home-kicker">Tecnologia que acompanha o seu ritmo</p>
            <h1 className="bp-home-display mt-5 text-balance text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.65rem]">Seu próximo PC começa com uma escolha melhor.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">Montagem de PC gamer, manutenção, upgrades e suporte técnico com conversa clara do primeiro diagnóstico à entrega.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={buildWhatsappLink(hardwareWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="bp-home-button bp-home-button--primary">Solicitar orçamento <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} /></a>
              <Link href="#servicos" className="bp-home-button bp-home-button--secondary">Conhecer serviços <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} /></Link>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              {["Diagnóstico sem adivinhação", "Montagem com organização", "Desempenho para o uso real"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#62d5ff]" strokeWidth={2} />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative bg-[#0a0f16] pb-16 pt-24 md:pb-20 md:pt-32">
        <div aria-hidden className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-[#127db9]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:pt-6"><p className="bp-home-kicker">O que fazemos</p><h2 className="bp-home-display mt-5 max-w-md text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl">Hardware bem resolvido não precisa ser complicado.</h2><p className="mt-6 max-w-md leading-7 text-slate-400">Você conta o que precisa. A BPInfo traduz isso em uma máquina, serviço ou melhoria que faça sentido.</p></div>
            <div className="grid gap-4 sm:grid-cols-3 lg:pt-8">
              {services.map(({ title, statement, detail, icon: Icon }) => <article key={title} className="bp-home-service group"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4acbff]/10 text-[#6bd7ff] transition-colors group-hover:bg-[#4acbff]/18"><Icon className="h-5 w-5" strokeWidth={1.6} /></div><h3 className="bp-home-display mt-7 text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3><p className="mt-3 text-sm font-medium leading-6 text-slate-200">{statement}</p><p className="mt-4 text-sm leading-6 text-slate-400">{detail}</p></article>)}
            </div>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] pt-7 text-sm text-slate-400"><span className="font-medium text-slate-200">Também desenvolvemos sistemas e automações.</span><Link href="/solucoes" className="inline-flex items-center gap-2 text-[#70d9ff] transition-colors hover:text-white">Conhecer soluções digitais <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <ProblemSelector />

      <section className="relative overflow-hidden bg-[#070b11] py-24 md:py-32">
        <div aria-hidden className="absolute left-[7%] top-16 h-72 w-72 rounded-full bg-[#168fc6]/15 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 lg:gap-20 lg:px-14">
          <div><p className="bp-home-kicker">Manutenção e diagnóstico</p><h2 className="bp-home-display mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl">Seu computador dá sinais. A gente encontra a origem.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Aquecimento, travamento, ruído ou queda de desempenho não pedem tentativa e erro. Pedem análise técnica.</p><ul className="mt-8 grid gap-4 text-sm leading-6 text-slate-300 sm:grid-cols-2">{["Limpeza interna e fluxo de ar", "Pasta térmica quando necessária", "Configuração e atualização", "Troca só do que faz sentido"].map((item) => <li key={item} className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#65d6ff]" />{item}</li>)}</ul></div>
          <div className="bp-home-photo relative min-h-[20rem] overflow-hidden rounded-[2rem] md:min-h-[29rem]"><Image src="/bpinfo/hardware-hero-v1.png" alt="Detalhe de hardware e bancada de manutenção" fill sizes="(max-width: 767px) 100vw, 55vw" className="object-cover object-[80%_center]" /><div aria-hidden className="absolute inset-0 bg-[linear-gradient(130deg,rgba(7,11,17,0.08),rgba(7,11,17,0.78))]" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#081019]/75 p-5 backdrop-blur-md sm:max-w-sm"><p className="flex items-center gap-2 text-sm font-medium text-white"><Gauge className="h-4 w-4 text-[#6bd7ff]" />Diagnóstico com leitura clara</p><p className="mt-2 text-sm leading-6 text-slate-300">Você sabe o que aconteceu, o que precisa ser feito e por quê.</p></div></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d121a] py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(29,156,220,0.16),transparent_24%),linear-gradient(115deg,transparent_45%,rgba(93,209,255,0.04))]" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[1.08fr_0.92fr] md:items-center md:px-10 lg:gap-20 lg:px-14">
          <div><p className="bp-home-kicker">PC gamer e montagem</p><h2 className="bp-home-display mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">Não é só encaixar componentes. É deixar a máquina pronta para render.</h2><p className="mt-6 max-w-xl leading-7 text-slate-300">Cada montagem passa por uma sequência simples, mas importante: projeto, organização, configuração e teste.</p></div>
          <ol className="space-y-3">{buildSteps.map((step) => <li key={step} className="bp-home-step"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#55d1ff]/10 text-[#72dcff]"><Check className="h-4 w-4" strokeWidth={2.4} /></span><span>{step}</span></li>)}</ol>
        </div>
      </section>

      <section className="relative bg-[#080d13] py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-end md:px-10 lg:gap-20 lg:px-14">
          <div><p className="bp-home-kicker">Trabalhos reais</p><h2 className="bp-home-display mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl">A diferença aparece nos detalhes da bancada.</h2><p className="mt-6 leading-7 text-slate-400">Montagens, organização, manutenção e upgrades feitos com atenção ao que torna a máquina confiável no dia a dia.</p></div>
          <div className="relative"><div className="bp-home-photo relative min-h-[19rem] overflow-hidden rounded-[2rem] md:min-h-[24rem]"><Image src="/bpinfo/hardware-hero-v1.png" alt="Bancada para montagem e upgrade de PC gamer" fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover object-[70%_center]" /><div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,15,0.4),transparent_60%)]" /></div><div className="relative -mt-5 ml-5 flex max-w-max flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#0b121a]/90 p-3 shadow-2xl backdrop-blur-md md:absolute md:-bottom-5 md:left-6 md:mt-0">{["Montagens", "Organização", "Manutenção", "Upgrades"].map((item) => <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-200">{item}</span>)}</div></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c111b] py-24 md:py-32"><div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(53,177,235,0.18),transparent_25%),radial-gradient(circle_at_78%_72%,rgba(43,109,171,0.2),transparent_30%)]" /><div className="relative mx-auto max-w-[92rem] px-6 md:px-10 lg:px-14"><p className="bp-home-kicker">Hardware e software</p><h2 className="bp-home-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">Nem todo problema de tecnologia está dentro do computador.</h2></div></section>

      <section className="relative overflow-hidden bg-[#09111d] py-24 md:py-32"><div aria-hidden className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(120,205,255,.24)_1px,transparent_0)] [background-size:26px_26px]" /><div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 lg:px-14"><div><p className="bp-home-kicker">Sistemas e automações</p><h2 className="bp-home-display mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl">Quando o processo é o problema, também construímos a solução.</h2><p className="mt-6 max-w-lg leading-7 text-slate-300">Sistemas personalizados, automações, integrações e produtos próprios para tirar a operação de planilhas, retrabalho e informações espalhadas.</p><Link href="/solucoes" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#74dcff] transition-colors hover:text-white">Conhecer soluções <ArrowUpRight className="h-4 w-4" /></Link></div><div className="relative"><div aria-hidden className="absolute -inset-8 rounded-full bg-[#1789d0]/15 blur-3xl" /><WindowFrame className="relative border-[#4d94bc]/50 bg-[#0d1a29]"><DashboardMockup /></WindowFrame></div></div></section>

      <section className="orbyt-gateway relative overflow-hidden bg-[#060611] py-28 md:py-36">
        <div aria-hidden className="orbyt-gateway-orbit orbyt-gateway-orbit-one" /><div aria-hidden className="orbyt-gateway-orbit orbyt-gateway-orbit-two" /><div aria-hidden className="orbyt-gateway-planet" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10"><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#aab8ff]">Um produto BPInfo</p><p className="mt-7 font-display text-[20vw] leading-none tracking-[-0.07em] text-[#e8eaff] md:text-[10rem]">ORBYT</p><p className="mx-auto mt-4 max-w-md text-lg text-[#b7bad5]">Plataforma de gestão empresarial para lojas, equipe, comissões, promoções e relatórios.</p><OrbytTransitionLink className="mt-10" /></div>
      </section>
    </div>
  );
}
