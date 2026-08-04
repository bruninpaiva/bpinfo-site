import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { generalFaq } from "@/lib/config/faq";

export function FaqSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <Accordion items={generalFaq} />
      </Container>
    </section>
  );
}
