import Link from "next/link";
import { mainNav } from "@/lib/config/nav";
import { siteConfig } from "@/lib/config/site";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl tracking-tight text-fg">
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/orbyt" variant="outline" size="sm">
            Conhecer o ORBYT
          </Button>
          <Button
            href={buildWhatsappLink(defaultWhatsappMessage)}
            external
            variant="primary"
            size="sm"
          >
            Falar pelo WhatsApp
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileMenu items={mainNav} />
        </div>
      </Container>
    </header>
  );
}
