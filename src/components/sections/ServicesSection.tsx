import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/config/services";

export function ServicesSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Além do ORBYT, desenvolvemos sob medida"
          description="A BPInfo também atua diretamente no desenvolvimento de soluções específicas para a operação de cada cliente."
        />

        <div className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border-b border-r border-border p-8"
            >
              <span className="font-display text-sm text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-xl text-fg">{service.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
