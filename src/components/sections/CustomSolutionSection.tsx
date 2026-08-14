import { Container } from "@/components/ui/Container";

const highlights = [
  "Levantamento de necessidades",
  "Implantação acompanhada",
  "Ajustes conforme a operação",
  "Suporte direto",
  "Evolução contínua",
];

export function CustomSolutionSection() {
  return (
    <section className="relative py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Solução personalizada
          </p>
          <p className="mt-5 text-balance font-display text-2xl leading-snug text-fg md:text-3xl">
            Cada empresa possui uma rotina diferente. A BPInfo desenvolve
            soluções adaptadas ao processo real do cliente, evitando que a
            empresa precise se adequar a sistemas engessados.
          </p>
        </div>

        <ul className="space-y-5 md:border-l md:border-border md:pl-10">
          {highlights.map((item) => (
            <li key={item} className="flex items-baseline gap-3 text-fg-muted">
              <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
