import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/config/services";

export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Além do ORBYT, desenvolvemos sob medida"
          description="A BPInfo também atua diretamente no desenvolvimento de soluções específicas para a operação de cada cliente."
        />

        <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.title} className="relative pt-6">
              <span aria-hidden className="absolute left-0 top-0 h-px w-12 bg-accent/60" />
              <span className="font-display text-sm text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-xl text-fg">{service.title}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
