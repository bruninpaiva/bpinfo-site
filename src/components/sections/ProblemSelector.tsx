"use client";

import { useState } from "react";
import { ArrowUpRight, CircleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

const problems = [
  ["Não liga", "Verificamos a causa antes de partir para troca de componente."],
  ["Sem vídeo", "Checamos conexões, memória, placa de vídeo e os sinais do equipamento."],
  ["PC lento", "Analisamos o que está limitando o uso: armazenamento, memória, sistema ou configuração."],
  ["Baixo FPS", "Avaliamos a montagem e os componentes para entender onde o desempenho está ficando para trás."],
  ["Superaquecendo", "Limpeza, fluxo de ar e pasta térmica entram na avaliação quando a temperatura foge do normal."],
  ["Travando", "Falhas intermitentes pedem diagnóstico, não tentativa aleatória de conserto."],
  ["Tela azul", "Identificamos se o problema vem de driver, sistema, memória ou outro componente."],
  ["Precisa de upgrade", "Indicamos o que vale atualizar para o uso que você realmente faz."],
] as const;

export function ProblemSelector() {
  const [active, setActive] = useState(0);
  const [label, description] = problems[active]!;

  return (
    <section className="relative overflow-hidden bg-[#0c121a] py-20 text-white md:py-28">
      <div aria-hidden className="absolute right-[4%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#1b9bd6]/15 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-[92rem] gap-12 px-6 md:grid-cols-[0.88fr_1.12fr] md:items-center md:px-10 lg:gap-20 lg:px-14">
        <div>
          <p className="bp-home-kicker">Problemas reais</p>
          <h2 className="bp-home-display mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">O computador avisa quando alguma coisa não está certa.</h2>
          <p className="mt-6 max-w-lg leading-7 text-slate-400">Escolha um sintoma. O ponto de partida é entender o que a sua máquina está tentando dizer.</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2.5">
            {problems.map(([problem], index) => (
              <button
                key={problem}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={active === index}
                className={cn("rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200", active === index ? "border-[#70d9ff]/55 bg-[#3abff5]/15 text-white shadow-[0_0_24px_rgba(69,197,255,0.13)]" : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white")}
              >
                {problem}
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-4 rounded-[1.35rem] border border-white/10 bg-[#071018]/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55d1ff]/10 text-[#71dbff]"><CircleAlert className="h-5 w-5" strokeWidth={1.7} /></span>
            <div><p className="font-[family-name:var(--font-bp-display)] text-lg font-semibold tracking-[-0.02em] text-white">{label}</p><p className="mt-2 leading-7 text-slate-300">{description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#73dcff]">Vamos investigar antes de decidir <ArrowUpRight className="h-4 w-4" /></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
