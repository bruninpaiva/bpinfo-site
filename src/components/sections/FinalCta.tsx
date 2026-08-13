import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-contrast-border bg-contrast-bg py-24 text-contrast-fg md:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-16 select-none font-display text-[14rem] leading-none text-contrast-fg opacity-[0.05] md:text-[20rem]"
      >
        “
      </span>

      <Container className="relative max-w-2xl text-center">
        <span aria-hidden className="mx-auto mb-6 block h-px w-12 bg-accent" />
        <h2 className="text-balance font-display text-3xl leading-[1.15] md:text-[2.6rem]">
          Tem um processo que ainda depende de planilha, trabalho manual ou
          sistemas que não conversam entre si?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-contrast-muted">
          Conte o que sua empresa precisa e descubra como a BPInfo pode
          desenvolver uma solução para sua operação.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={buildWhatsappLink(defaultWhatsappMessage)} external>
            Falar pelo WhatsApp
          </Button>
          <Button href="/contato" variant="on-contrast">
            Falar com a BPInfo
          </Button>
        </div>

        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="mt-8 inline-flex items-center gap-2 text-sm text-contrast-muted transition-colors hover:text-contrast-fg"
        >
          <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
          {siteConfig.contactEmail}
        </a>
      </Container>
    </section>
  );
}
