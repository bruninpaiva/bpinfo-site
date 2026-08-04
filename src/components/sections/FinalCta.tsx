import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="border-t border-contrast-border bg-contrast-bg py-20 text-contrast-fg md:py-28">
      <Container className="max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl leading-tight md:text-4xl">
          Vamos transformar sua rotina em um processo mais simples?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-contrast-muted">
          Conte o que sua empresa precisa e descubra como a BPInfo pode
          desenvolver uma solução para sua operação.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={buildWhatsappLink(defaultWhatsappMessage)} external>
            Falar pelo WhatsApp
          </Button>
          <Button href="/orbyt" variant="on-contrast">
            Conhecer o ORBYT
          </Button>
        </div>
      </Container>
    </section>
  );
}
