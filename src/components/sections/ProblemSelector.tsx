"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const problems = [
  ["Não liga", "Verificamos a causa antes de partir para troca de componente.", "top-[4%] left-[3%] text-3xl md:text-5xl -rotate-3"],
  ["Sem vídeo", "Checamos conexões, memória, placa de vídeo e os sinais do equipamento.", "top-[1%] left-[42%] text-2xl md:text-4xl rotate-2"],
  ["PC lento", "Analisamos o que está limitando o uso: armazenamento, memória, sistema ou configuração.", "top-[19%] left-[66%] text-4xl md:text-6xl -rotate-2"],
  ["Baixo FPS", "Avaliamos a montagem e os componentes para entender onde o desempenho está ficando para trás.", "top-[33%] left-[8%] text-xl md:text-3xl rotate-3"],
  ["Superaquecendo", "Limpeza, fluxo de ar e pasta térmica entram na avaliação quando a temperatura foge do normal.", "top-[45%] left-[34%] text-2xl md:text-4xl -rotate-1"],
  ["Travando", "Falhas intermitentes pedem diagnóstico, não tentativa aleatória de conserto.", "top-[58%] left-[64%] text-3xl md:text-5xl rotate-2"],
  ["Tela azul", "Identificamos se o problema vem de driver, sistema, memória ou outro componente.", "top-[71%] left-[4%] text-4xl md:text-6xl -rotate-2"],
  ["Precisa de upgrade", "Indicamos o que vale atualizar para o uso que você realmente faz.", "top-[81%] left-[38%] text-xl md:text-3xl rotate-1"],
] as const;

export function ProblemSelector() {
  const [active, setActive] = useState(0);
  const [label, description] = problems[active]!;

  return (
    <section className="relative overflow-hidden bg-[#12110f] py-20 text-contrast-fg md:py-28">
      <p aria-hidden className="pointer-events-none absolute -bottom-10 left-[3%] select-none font-display text-[9rem] italic leading-none text-white/[0.035] md:text-[14rem]">
        03
      </p>

      <div className="relative mx-auto w-full max-w-[92rem] px-6 md:px-10 lg:px-14">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Problemas reais</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl">
          O computador avisa quando alguma coisa não está certa.
        </h2>

        {/* ---------- Desktop: campo tipográfico disperso, item ativo cresce e reorganiza a leitura ---------- */}
        <div className="relative mt-4 hidden h-[40rem] md:block lg:h-[44rem]">
          {problems.map(([problem, , position], index) => {
            const isActive = active === index;
            return (
              <button
                key={problem}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-pressed={isActive}
                className={cn(
                  "absolute font-display font-medium leading-none tracking-tight transition-[transform,color,opacity] duration-300",
                  position,
                  isActive
                    ? "z-20 scale-[1.18] text-accent"
                    : "z-0 scale-100 text-contrast-muted/70 hover:text-contrast-fg",
                )}
                style={{ transformOrigin: "left center" }}
              >
                {problem.toUpperCase()}
              </button>
            );
          })}

          <div className="absolute right-0 top-0 z-30 max-w-[15rem] border-t-2 border-accent pt-4 text-right">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">{String(active + 1).padStart(2, "0")} · {label}</p>
            <p className="mt-3 leading-relaxed text-contrast-muted">{description}</p>
          </div>
        </div>

        {/* ---------- Mobile: lista compacta, sem posicionamento absoluto ---------- */}
        <div className="mt-10 md:hidden">
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {problems.map(([problem], index) => (
              <button
                key={problem}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={cn(
                  "font-display text-2xl leading-none transition-colors",
                  active === index ? "text-accent" : "text-contrast-muted",
                )}
              >
                {problem.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">{label}</p>
            <p className="mt-3 leading-relaxed text-contrast-muted">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
