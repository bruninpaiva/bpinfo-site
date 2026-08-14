import { Cpu, Fan, MemoryStick, Wrench } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Composição aberta (sem painel/caixa envolvendo tudo): anéis, um núcleo
 * circular e traços em leque evocando dissipador/placa, com callouts
 * técnicos soltos no espaço — não um mockup de produto dentro de um card.
 */
export function HardwareSculpture({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("bp-hardware-sculpture", className)}>
      <div className="bp-hardware-glow" />
      <div className="bp-hardware-orbit bp-hardware-orbit-one" />
      <div className="bp-hardware-orbit bp-hardware-orbit-two" />

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        {[...Array(7)].map((_, i) => (
          <line
            key={i}
            x1={200 + i * 16 - 48}
            y1={40}
            x2={200 + i * 16 - 48 - 60}
            y2={360}
            stroke="var(--accent)"
            strokeWidth="1"
            opacity={0.16 + (i % 3) * 0.06}
          />
        ))}
        <circle cx="200" cy="200" r="86" stroke="var(--accent)" strokeOpacity="0.55" strokeWidth="1" />
        <circle cx="200" cy="200" r="122" stroke="#f4f4f2" strokeOpacity="0.14" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-[8.5rem] w-[8.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b0d10]/70 backdrop-blur-sm">
        <Fan className="h-16 w-16 text-accent" strokeWidth={1} />
        <Cpu className="absolute h-7 w-7 text-fg" strokeWidth={1.2} />
      </div>

      <div className="absolute left-[4%] top-[22%] flex items-center gap-2 text-accent">
        <MemoryStick className="h-4 w-4" strokeWidth={1.3} />
        <span className="bp-hardware-leader w-6" />
      </div>
      <div className="absolute bottom-[19%] right-[6%] flex items-center gap-2 text-accent">
        <span className="bp-hardware-leader w-6" />
        <Wrench className="h-4 w-4" strokeWidth={1.3} />
      </div>

      <span className="bp-hardware-label bp-hardware-label-one">DIAGNÓSTICO</span>
      <span className="bp-hardware-label bp-hardware-label-two">CONFIGURAÇÃO</span>
    </div>
  );
}
