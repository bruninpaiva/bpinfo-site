import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { orbytFeatures } from "@/lib/config/orbyt";
import { siteConfig } from "@/lib/config/site";

const selectedFeatures = orbytFeatures.slice(0, 8);

type ProductShotProps = {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  sizes?: string;
};

function BrowserShot({
  src,
  alt,
  className = "",
  preload = false,
  sizes = "(max-width: 767px) 92vw, (max-width: 1200px) 56vw, 700px",
}: ProductShotProps) {
  return (
    <figure className={`orbyt-browser-shot ${className}`}>
      <div className="orbyt-browser-bar">
        <span aria-hidden className="orbyt-browser-dots"><i /><i /><i /></span>
        <span>orbyt.app</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        sizes={sizes}
        preload={preload}
        className="block h-auto w-full"
      />
    </figure>
  );
}

function PhoneShot({ src, alt, className = "", preload = false }: ProductShotProps) {
  return (
    <figure className={`orbyt-phone-shot ${className}`}>
      <span aria-hidden className="orbyt-phone-speaker" />
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        sizes="(max-width: 767px) 36vw, 210px"
        preload={preload}
        className="block h-auto w-full"
      />
    </figure>
  );
}

export function OrbytExperience() {
  return (
    <div className="orbyt-page overflow-hidden bg-[#05050e] text-[#eef0ff]">
      <section className="orbyt-hero-scene relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-16 md:pt-20">
        <div aria-hidden className="orbyt-star-field absolute inset-0" />
        <div aria-hidden className="orbyt-hero-orbit orbyt-hero-orbit-one" />
        <div aria-hidden className="orbyt-hero-orbit orbyt-hero-orbit-two" />
        <div aria-hidden className="orbyt-hero-planet" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-8 px-6 py-10 sm:gap-12 sm:py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:px-10 lg:px-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#aeb9ff]">Um produto BPInfo</p>
            <h1 className="mt-4 font-display text-[22vw] leading-[0.76] tracking-[-0.08em] text-[#f0f1ff] sm:mt-5 sm:text-[7rem] lg:text-[10rem]">ORBYT</h1>
            <p className="mt-6 max-w-lg font-display text-3xl leading-[1.05] text-[#dfe2ff] sm:mt-8 md:text-4xl">Gestão de lojas em uma órbita só.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-[#b7bbd4] sm:mt-5">Dashboard, equipe, comissões, promoções e relatórios para acompanhar a operação sem perder tempo reunindo informação.</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"><Button href="/contato" variant="orbyt-light" className="px-7 py-3.5">Solicitar demonstração</Button><Button href={siteConfig.orbytUrl} external variant="orbyt-outline" className="px-7 py-3.5">Acessar o ORBYT</Button></div>
          </div>
          <div className="orbyt-product-stage orbyt-product-stage--hero relative mx-auto min-h-[16rem] w-full max-w-2xl sm:min-h-[29rem] md:min-h-[34rem]">
            <div aria-hidden className="orbyt-product-glow absolute inset-[9%] rounded-full" />
            <BrowserShot
              src="/orbyt-showcase/orbyt-dashboard-desktop.webp"
              alt="Dashboard operacional do ORBYT em desktop"
              preload
              className="relative z-10 w-[92%]"
            />
            <PhoneShot
              src="/orbyt-showcase/orbyt-dashboard-mobile.webp"
              alt="Dashboard operacional do ORBYT em celular"
              preload
              className="absolute bottom-[-4%] right-[1%] z-20 w-[28%] sm:right-[3%]"
            />
          </div>
        </div>
      </section>

      <section id="modulos" className="orbyt-section orbyt-section--modules relative overflow-hidden py-20 md:py-28">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(108,86,255,.25),transparent_32%)]" />
        <div aria-hidden className="orbyt-section-orbit orbyt-section-orbit--modules" />
        <div aria-hidden className="orbyt-section-specks" />
        <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aeb9ff]">O que entra na órbita</p><h2 className="mt-5 font-display text-5xl leading-[0.94] md:text-7xl">A operação deixa de viver espalhada.</h2></div>
            <p className="max-w-xl leading-relaxed text-[#b7bbd4]">O ORBYT foi pensado para trazer para perto o que uma loja precisa acompanhar todos os dias, sem transformar o uso em uma sequência de telas desconectadas.</p>
          </div>
          <ul className="mt-16 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {selectedFeatures.map((feature, index) => (
              <li key={feature.title} className="relative pt-6"><span aria-hidden className="absolute left-0 top-0 h-px w-16 bg-[#6874e9]" /><span className="text-xs text-[#8b95d7]">0{index + 1}</span><p className="mt-3 font-display text-xl text-[#eef0ff]">{feature.title}</p><p className="mt-2 text-sm leading-relaxed text-[#aeb2cb]">{feature.description}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="orbyt-section orbyt-section--stores relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="orbyt-grid-flow absolute inset-0" />
        <div aria-hidden className="orbyt-section-orbit orbyt-section-orbit--stores" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.75fr_1.25fr] md:items-center md:px-10 lg:px-14">
          <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aeb9ff]">Gestão completa</p><h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">As lojas continuam próximas, mesmo quando a operação cresce.</h2><ul className="mt-8 space-y-4 text-[#c6cae3]">{["Status e atividade por loja", "Equipe vinculada à operação certa", "Leitura direta para decisões do dia"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#94a2ff]" />{item}</li>)}</ul></div>
          <div className="orbyt-product-stage relative"><div aria-hidden className="orbyt-product-glow absolute -inset-12 rounded-full" /><BrowserShot src="/orbyt-showcase/orbyt-lojas-desktop.webp" alt="Gestão de lojas no ORBYT" className="relative z-10" /></div>
        </div>
      </section>

      <section className="orbyt-section orbyt-section--commissions relative overflow-hidden py-24 md:py-36">
        <div aria-hidden className="orbyt-commission-glow absolute left-[10%] top-[20%] h-72 w-72 rounded-full" />
        <div className="relative mx-auto grid w-full max-w-[104rem] gap-10 px-6 md:grid-cols-[1.45fr_0.55fr] md:items-center md:px-10 lg:px-14">
          <div className="orbyt-product-stage orbyt-product-stage--paired relative order-2 md:order-1"><div aria-hidden className="orbyt-product-glow orbyt-product-glow--commission absolute -inset-16 rounded-full" /><BrowserShot src="/orbyt-showcase/orbyt-comissao-detalhe-desktop.webp" alt="Detalhamento da competência Aurora Centro com metas, premiação e comissão final no ORBYT" sizes="(max-width: 767px) 92vw, (max-width: 1200px) 66vw, 1000px" className="relative z-10 w-full" /><PhoneShot src="/orbyt-showcase/orbyt-comissao-mobile.webp" alt="Comissões no ORBYT em celular" className="!absolute bottom-[-5%] -right-[1%] z-20 w-[29%] sm:w-[24%] md:w-[19%]" /></div>
          <div className="order-1 md:order-2"><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#b7a6ff]">Comissão sem ruído</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.94] md:text-6xl">A regra da comissão fica clara para toda a equipe.</h2><p className="mt-6 max-w-xl leading-relaxed text-[#b7bbd4]">Visualize competências por loja, metas e evolução sem tirar a operação do ritmo.</p></div>
        </div>
      </section>

      <section className="orbyt-section orbyt-section--cash relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="orbyt-cash-glow absolute right-[5%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full" />
        <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-center md:px-10 lg:px-14">
          <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aeb9ff]">Operação de loja</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.94] md:text-6xl">Caixa, saldo e movimentação em leitura imediata.</h2><p className="mt-6 max-w-xl leading-relaxed text-[#b7bbd4]">Quem gerencia acompanha o que importa, na tela grande ou em uma consulta rápida no celular.</p></div>
          <div className="orbyt-product-stage orbyt-product-stage--paired relative"><div aria-hidden className="orbyt-product-glow orbyt-product-glow--cash absolute -inset-16 rounded-full" /><BrowserShot src="/orbyt-showcase/orbyt-caixas-desktop.webp" alt="Visão de caixas e saldos no ORBYT" className="relative z-10 w-[91%]" /><PhoneShot src="/orbyt-showcase/orbyt-caixa-mobile.webp" alt="Visão de caixas do ORBYT em celular" className="absolute bottom-[-7%] right-[0%] z-20 w-[25%]" /></div>
        </div>
      </section>

      <section className="orbyt-section orbyt-section--resources relative overflow-hidden py-24 md:py-32">
        <div aria-hidden className="orbyt-resource-connection absolute inset-x-0 top-[45%]" />
        <div className="mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl"><p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aeb9ff]">Recursos adicionais</p><h2 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">A operação ganha um ambiente que acompanha todas as frentes.</h2></div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            <article className="orbyt-resource-card"><p className="orbyt-resource-index">01 · Equipe</p><BrowserShot src="/orbyt-showcase/orbyt-equipe-desktop.webp" alt="Gestão de equipe no ORBYT" /><p className="orbyt-resource-copy">Tenha uma visão de quem compõe cada loja.</p></article>
            <article className="orbyt-resource-card lg:translate-y-10"><p className="orbyt-resource-index">02 · Promoções</p><BrowserShot src="/orbyt-showcase/orbyt-promocoes-desktop.webp" alt="Histórico de promoções no ORBYT" /><p className="orbyt-resource-copy">Organize campanhas e acompanhe seus desdobramentos.</p></article>
            <article className="orbyt-resource-card"><p className="orbyt-resource-index">03 · Catálogo</p><BrowserShot src="/orbyt-showcase/orbyt-catalogo-desktop.webp" alt="Catálogo de produtos no ORBYT" /><p className="orbyt-resource-copy">Centralize informações de produtos para consulta rápida.</p></article>
          </div>
        </div>
      </section>

      <section className="orbyt-cta-scene relative overflow-hidden py-28 text-center md:py-36">
        <div aria-hidden className="orbyt-cta-orbit orbyt-cta-orbit--one absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div aria-hidden className="orbyt-cta-orbit orbyt-cta-orbit--two absolute left-1/2 top-1/2 h-[25rem] w-[41rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div aria-hidden className="orbyt-cta-orbit orbyt-cta-orbit--three absolute left-1/2 top-1/2 h-[42rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="relative mx-auto max-w-2xl px-6"><p className="text-xs font-medium uppercase tracking-[0.22em] text-[#aeb9ff]">ORBYT</p><h2 className="mt-5 font-display text-5xl leading-[0.94] md:text-6xl">Acompanhe o que está acontecendo na sua operação.</h2><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contato" variant="orbyt-light" className="px-7 py-3.5">Solicitar demonstração</Button><Button href={siteConfig.orbytUrl} external variant="orbyt-outline" className="px-7 py-3.5">Acessar o ORBYT <ArrowUpRight className="ml-2 h-4 w-4" /></Button></div><Link href="/" className="mt-10 inline-flex text-sm text-[#b7bbd4] hover:text-white">← Voltar para BPInfo Tecnologia</Link></div>
      </section>
    </div>
  );
}
