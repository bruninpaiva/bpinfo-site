import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site institucional da BPInfo Tecnologia.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Institucional"
        title="Termos de Uso"
        description="Última atualização: agosto de 2026."
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-10 text-fg-muted">
          <div>
            <h2 className="font-display text-xl text-fg">1. Aceitação dos termos</h2>
            <p className="mt-3 leading-relaxed">
              Ao acessar este site, você concorda com estes termos de uso. Se
              não concordar com algum ponto, recomendamos não utilizar o
              site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">2. Uso do site</h2>
            <p className="mt-3 leading-relaxed">
              Este site tem finalidade institucional e comercial, apresentando
              a BPInfo Tecnologia, o produto ORBYT e os serviços prestados
              pela empresa. O conteúdo não deve ser copiado ou reproduzido
              sem autorização.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">3. Uso do ORBYT</h2>
            <p className="mt-3 leading-relaxed">
              O acesso ao sistema ORBYT é regido por contrato específico
              firmado entre a BPInfo e cada cliente, independentemente dos
              termos deste site institucional.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">4. Propriedade intelectual</h2>
            <p className="mt-3 leading-relaxed">
              As marcas, textos, layout e demais elementos deste site
              pertencem à BPInfo Tecnologia, salvo indicação em contrário.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">5. Limitação de responsabilidade</h2>
            <p className="mt-3 leading-relaxed">
              As informações apresentadas neste site têm caráter informativo.
              A BPInfo se empenha para mantê-las atualizadas, mas não garante
              a ausência de eventuais imprecisões pontuais.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">6. Alterações destes termos</h2>
            <p className="mt-3 leading-relaxed">
              Estes termos podem ser atualizados a qualquer momento. A data
              da última atualização é sempre indicada no início desta
              página.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">7. Contato</h2>
            <p className="mt-3 leading-relaxed">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-fg underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
