# BPInfo Tecnologia — Site institucional e comercial

Site institucional da BPInfo Tecnologia, construído com Next.js (App Router),
TypeScript e Tailwind CSS. Apresenta a empresa, o produto ORBYT e os
serviços de desenvolvimento e automação da BPInfo.

## Stack

- Next.js 16 (App Router, Server Components)
- TypeScript
- Tailwind CSS v4 (tokens de design centralizados em `src/app/globals.css`)
- next-themes (tema claro/escuro, com persistência da preferência do usuário)
- lucide-react (ícones)

## Como rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

O site sobe em `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha com os valores reais.
Nenhuma dessas variáveis possui valor fictício em produção — se não
preenchidas, o site utiliza um placeholder claramente identificado como tal
em `src/lib/config/site.ts`.

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site, usada em metadata, Open Graph, sitemap e canonical. | `https://bpinfo.app.br` |
| `NEXT_PUBLIC_ORBYT_URL` | URL de acesso (login) ao sistema ORBYT. | `https://app.bpinfo.app.br` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp comercial, formato internacional sem símbolos. | `5511999999999` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail de contato comercial exibido no site. | `contato@bpinfo.app.br` |

Para desenvolvimento local, qualquer valor de teste pode ser usado nessas
variáveis (por exemplo, um número de WhatsApp pessoal para validar o fluxo
de contato). **Não usar valores fictícios ao configurar o ambiente de
produção** — nesse ambiente, as variáveis devem refletir os dados reais da
BPInfo.

## Estrutura do projeto

```
src/
  app/               Rotas (App Router): páginas, layout raiz, SEO (sitemap, robots, manifest)
  components/
    layout/          Header, Footer, ThemeProvider/Toggle, menu mobile
    ui/              Componentes reutilizáveis (Button, Container, Accordion, etc.)
    sections/        Seções de página (Hero, Planos, FAQ, Contato, etc.)
    mockups/         Composições em HTML/CSS que representam telas do ORBYT
  lib/
    config/          Fonte única de verdade: navegação, planos, FAQ, funcionalidades do ORBYT
    whatsapp.ts      Helper para montar links wa.me com mensagem pré-preenchida
```

## Conteúdo e dados reais

- Funcionalidades do ORBYT (`src/lib/config/orbyt.ts`) refletem apenas o que
  já existe no produto. Ao adicionar uma funcionalidade nova ao sistema,
  atualize esse arquivo — não o contrário.
- Planos comerciais (`src/lib/config/plans.ts`) não têm valores definidos;
  a página apenas indica escopo. Preços ficam a critério da negociação
  comercial.
- Não há números de clientes, economia ou resultados no conteúdo do site.
  Caso a BPInfo queira divulgar números reais no futuro, eles devem ser
  adicionados apenas com dado real disponível.
- CNPJ e endereço da empresa ainda não estão definidos no rodapé/páginas
  institucionais — há espaço reservado para quando estiverem disponíveis
  (ver `src/components/layout/Footer.tsx` e `src/app/privacidade/page.tsx`).

## Mockups do produto

As telas do ORBYT exibidas no Hero e na seção de demonstração
(`src/components/mockups/`) são composições em HTML/CSS, não capturas de
tela reais nem imagens geradas por IA. Foram construídas para serem
substituídas por screenshots reais do sistema quando disponíveis — basta
trocar o componente renderizado dentro de `WindowFrame` em
`ProductDemoTabs.tsx` e `Hero.tsx`/`OrbytHero.tsx` por uma imagem real.

## Formulário de contato

O formulário em `/contato` valida os campos no cliente e, ao ser enviado,
abre o WhatsApp (`wa.me`) com uma mensagem pré-preenchida contendo os dados
informados. Não há backend de envio de formulário nesta primeira versão.

## Build

```bash
npm run build
npm run start
```

## Deploy

Este projeto ainda não foi implantado. A estrutura é compatível com Vercel,
mas o deploy deve ser feito manualmente quando decidido.
