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
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
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

        <div className="border-t border-border pt-8 md:border-t-0 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="border-b border-border pb-4 text-fg-muted last:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
