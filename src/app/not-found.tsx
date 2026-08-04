import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-xl text-center">
        <p className="font-display text-6xl text-fg-subtle">404</p>
        <h1 className="mt-4 font-display text-3xl text-fg md:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 leading-relaxed text-fg-muted">
          O endereço acessado não existe ou foi movido. Volte para a página
          inicial para continuar navegando.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Voltar ao início</Button>
        </div>
      </Container>
    </section>
  );
}
