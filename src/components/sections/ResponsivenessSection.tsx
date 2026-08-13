import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WindowFrame } from "@/components/mockups/WindowFrame";
import { MobileMockup } from "@/components/mockups/MobileMockup";
import { siteConfig } from "@/lib/config/site";

const orbytHost = siteConfig.orbytUrl.replace(/^https?:\/\//, "");

const points = [
  "Interface simples, com foco nas ações mais usadas no dia a dia",
  "Botões maiores, pensados para uso com o polegar",
  "Navegação direta, sem menus profundos",
  "Tabelas convertidas em cartões para leitura em telas pequenas",
];

export function ResponsivenessSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            eyebrow="Uso em celular"
            title="Pensado para operação em qualquer tela"
            description="Boa parte da operação de uma loja acontece em pé, com o celular na mão. O ORBYT foi desenvolvido considerando esse uso, além do acesso em computador."
          />
          <ul className="mt-8 space-y-4 border-t border-border pt-8">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-fg-muted">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-fg-subtle">
            O sistema é testado nos principais navegadores em Android, iPhone
            e computador. Pequenas variações de exibição podem ocorrer
            conforme o aparelho e o navegador utilizados.
          </p>
        </div>

        <WindowFrame label={`${orbytHost} — mobile`}>
          <MobileMockup />
        </WindowFrame>
      </Container>
    </section>
  );
}
