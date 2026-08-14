import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a BPInfo"
            description="Preencha o formulário ou fale diretamente por um dos canais abaixo."
          />
          <div className="mt-8 space-y-4">
            <a
              href={buildWhatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-fg-muted transition-colors hover:text-fg"
            >
              <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.5} />
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-3 text-fg-muted transition-colors hover:text-fg"
            >
              <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
