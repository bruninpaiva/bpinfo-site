import Link from "next/link";
import { ShieldCheck, KeyRound, Users, Cloud, Lock, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

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
      <Container className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="md:sticky md:top-28">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-contrast-muted">
            Segurança
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.15] md:text-4xl">
            Uma base técnica responsável.
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-contrast-muted">
            Sem promessas genéricas: o que fazemos hoje para proteger o
            acesso e os dados da sua operação.
          </p>
          <Link
            href="/privacidade"
            className="mt-6 inline-block text-sm text-contrast-fg underline decoration-contrast-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            Ver política de privacidade →
          </Link>
        </div>

        <div className="grid gap-x-8 border-t border-contrast-border sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4 border-b border-contrast-border py-6">
              <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="font-display text-base leading-snug">{point.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-contrast-muted">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
