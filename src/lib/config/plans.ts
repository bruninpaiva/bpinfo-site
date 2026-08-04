/**
 * Planos comerciais. Sem valores definitivos — a definição de preço
 * depende de conversa comercial. Centralizado aqui para facilitar
 * atualização futura sem tocar em componentes.
 */

export type Plan = {
  name: string;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essencial",
    description: "Para operações pequenas que estão organizando os primeiros processos.",
    highlights: [
      "Indicado para operações de uma loja",
      "Funcionalidades principais do ORBYT",
      "Suporte inicial de implantação",
    ],
  },
  {
    name: "Profissional",
    description: "Para operações com múltiplas lojas e necessidade de acompanhamento completo.",
    highlights: [
      "Gestão de múltiplas lojas",
      "Módulos completos do ORBYT",
      "Relatórios e acompanhamento por vendedora",
      "Suporte prioritário",
    ],
    featured: true,
  },
  {
    name: "Personalizado",
    description: "Para empresas que precisam de um sistema adaptado à própria operação.",
    highlights: [
      "Adaptações específicas do sistema",
      "Integrações com outras ferramentas",
      "Desenvolvimento sob medida",
    ],
  },
];
