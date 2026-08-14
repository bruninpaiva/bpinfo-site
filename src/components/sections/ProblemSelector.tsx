"use client";

import { useState } from "react";
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
    <section className="bg-[#12110f] py-20 text-contrast-fg md:py-28">
      <div className="mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Problemas reais</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="max-w-4xl font-display text-4xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            O computador avisa quando alguma coisa não está certa.
          </h2>
          <div className="border-l border-accent/70 pl-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">{label}</p>
            <p className="mt-3 max-w-sm leading-relaxed text-contrast-muted">{description}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-5">
          {problems.map(([problem], index) => (
            <button
              key={problem}
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              aria-pressed={active === index}
              className={cn(
                "text-left font-display text-2xl leading-none transition-colors sm:text-3xl md:text-4xl",
                active === index ? "text-accent" : "text-contrast-muted hover:text-contrast-fg",
              )}
            >
              {problem.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
