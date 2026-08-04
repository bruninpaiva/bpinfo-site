import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a BPInfo Tecnologia trata os dados coletados neste site.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageIntro
        eyebrow="Institucional"
        title="Política de Privacidade"
        description="Última atualização: agosto de 2026."
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-10 text-fg-muted">
          <div>
            <h2 className="font-display text-xl text-fg">1. Introdução</h2>
            <p className="mt-3 leading-relaxed">
              Esta política descreve como a BPInfo Tecnologia trata os dados
              pessoais coletados através deste site institucional. A
              identificação societária completa da empresa (razão social e
              CNPJ) será incluída nesta página assim que disponibilizada
              oficialmente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">2. Dados coletados</h2>
            <p className="mt-3 leading-relaxed">
              Ao preencher o formulário de contato, coletamos nome, empresa,
              telefone, e-mail, assunto e a mensagem informada. Nenhum outro
              dado é coletado automaticamente por este site além de
              informações técnicas básicas de navegação normalmente
              registradas por qualquer serviço de hospedagem.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">3. Uso dos dados</h2>
            <p className="mt-3 leading-relaxed">
              Os dados informados no formulário de contato são usados
              exclusivamente para retorno comercial da BPInfo ao solicitante,
              por WhatsApp, e-mail ou telefone.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">4. Compartilhamento</h2>
            <p className="mt-3 leading-relaxed">
              A BPInfo não compartilha, vende ou cede dados de contato a
              terceiros para fins de marketing.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">5. Segurança da informação</h2>
            <p className="mt-3 leading-relaxed">
              Adotamos práticas razoáveis de segurança para proteger os dados
              tratados, incluindo controle de acesso e boas práticas de
              desenvolvimento. Mais detalhes sobre a postura de segurança do
              ORBYT estão disponíveis na página do produto.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">6. Direitos do titular</h2>
            <p className="mt-3 leading-relaxed">
              Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018),
              você pode solicitar a confirmação, o acesso, a correção ou a
              eliminação dos seus dados pessoais tratados pela BPInfo,
              enviando uma solicitação para{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-fg underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-fg">7. Alterações desta política</h2>
            <p className="mt-3 leading-relaxed">
              Esta política pode ser atualizada para refletir mudanças no
              site ou na operação da BPInfo. A data da última atualização é
              sempre indicada no início desta página.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
