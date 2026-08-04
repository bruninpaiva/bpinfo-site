import { ShieldCheck, KeyRound, Users, Cloud, Lock, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: Users,
    title: "Ambientes separados por cliente",
    description: "Quando aplicável ao tipo de contratação, cada cliente opera em um ambiente próprio.",
  },
  {
    icon: KeyRound,
    title: "Autenticação",
    description: "Acesso ao sistema restrito a usuários autenticados individualmente.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de acesso",
    description: "Permissões definidas por usuário, conforme a função de cada pessoa na operação.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura em nuvem",
    description: "Sistemas hospedados em infraestrutura de nuvem, sem dependência de servidores locais.",
  },
  {
    icon: Lock,
    title: "Dados protegidos por políticas de acesso",
    description: "Acesso às informações regido por políticas internas de segurança.",
  },
  {
    icon: Code2,
    title: "Boas práticas de desenvolvimento",
    description: "Desenvolvimento orientado por práticas reconhecidas de engenharia de software.",
  },
];

export function SecuritySection() {
  return (
    <section className="border-t border-contrast-border bg-contrast-bg py-20 text-contrast-fg md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Segurança"
          title="Uma base técnica responsável"
          description="Sem promessas genéricas: o que fazemos hoje para proteger o acesso e os dados da sua operação."
          tone="contrast"
        />

        <div className="mt-14 grid gap-x-10 border-t border-contrast-border sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-b border-contrast-border py-8 pr-6">
              <point.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="mt-4 font-display text-lg">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-contrast-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
