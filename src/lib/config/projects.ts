/**
 * Soluções reais desenvolvidas pela BPInfo, usadas na seção "Projetos" da
 * Home. Hoje existe apenas o ORBYT — não adicionar cases ou clientes
 * fictícios. Novos projetos entram aqui conforme forem desenvolvidos.
 */

export type Project = {
  name: string;
  eyebrow: string;
  problem: string;
  solution: string;
  features: string[];
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    name: "ORBYT",
    eyebrow: "Produto BPInfo",
    problem:
      "Lojas com operação em planilhas e controles manuais, sem visão consolidada de vendas, comissões e desempenho por vendedora.",
    solution:
      "Uma plataforma própria, desenvolvida pela BPInfo, que centraliza a gestão de lojas em um único sistema — acessível por computador e celular.",
    features: [
      "Dashboard operacional",
      "Gestão de lojas e equipe",
      "Comissões e promoções",
      "Relatórios de desempenho",
    ],
    href: "/orbyt",
    linkLabel: "Conhecer o ORBYT",
  },
];
