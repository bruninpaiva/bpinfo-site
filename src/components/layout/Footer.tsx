import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { footerNav } from "@/lib/config/nav";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-accent bg-bg">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl tracking-tight text-fg">
              {siteConfig.name}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={buildWhatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.footerCredit}</p>
        </div>

        {/* Espaço reservado para dados empresariais (CNPJ, endereço) quando
            disponibilizados oficialmente pela BPInfo. */}
      </Container>
    </footer>
  );
}
