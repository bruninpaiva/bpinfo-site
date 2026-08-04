/**
 * Funcionalidades reais do ORBYT. Este arquivo é a única fonte de verdade
 * usada na home e na landing page /orbyt — não adicionar funcionalidades
 * que ainda não existem no produto.
 */

export type OrbytFeature = {
  icon:
    | "dashboard"
    | "store"
    | "users"
    | "percent"
    | "user-check"
    | "pause"
    | "no-sale"
    | "tag"
    | "barcode"
    | "report"
    | "permissions"
    | "password"
    | "devices"
    | "theme";
  title: string;
  description: string;
};

export const orbytFeatures: OrbytFeature[] = [
  {
    icon: "dashboard",
    title: "Dashboard operacional",
    description:
      "Visão geral da operação em um único painel, com os indicadores que importam para o dia a dia da loja.",
  },
  {
    icon: "store",
    title: "Gestão de lojas",
    description:
      "Cadastro e controle de múltiplas lojas dentro da mesma conta, cada uma com sua própria operação.",
  },
  {
    icon: "users",
    title: "Gestão de vendedoras",
    description:
      "Cadastro de equipe, vínculo com lojas e acompanhamento individual de desempenho.",
  },
  {
    icon: "percent",
    title: "Comissões",
    description:
      "Cálculo de comissões por vendedora, com regras configuráveis conforme a operação.",
  },
  {
    icon: "user-check",
    title: "Acompanhamento por vendedora",
    description:
      "Histórico e indicadores individuais para apoiar decisões de gestão de equipe.",
  },
  {
    icon: "pause",
    title: "Pausas",
    description:
      "Registro de pausas da equipe durante o expediente, com controle de tempo.",
  },
  {
    icon: "no-sale",
    title: "Motivos de não venda",
    description:
      "Registro estruturado dos motivos quando um atendimento não resulta em venda.",
  },
  {
    icon: "tag",
    title: "Promoções",
    description:
      "Criação e acompanhamento de promoções vigentes na operação da loja.",
  },
  {
    icon: "barcode",
    title: "Conversor de código de barras",
    description:
      "Conversão rápida de códigos de barras para agilizar processos de conferência.",
  },
  {
    icon: "report",
    title: "Relatórios",
    description:
      "Relatórios operacionais e comerciais para acompanhar resultados ao longo do tempo.",
  },
  {
    icon: "permissions",
    title: "Usuários e permissões",
    description:
      "Controle de acesso por usuário, com permissões definidas conforme a função de cada pessoa.",
  },
  {
    icon: "password",
    title: "Recuperação segura de senha",
    description:
      "Fluxo de recuperação de senha para que cada usuário mantenha acesso seguro à própria conta.",
  },
  {
    icon: "devices",
    title: "Celular e computador",
    description:
      "Interface pensada para uso tanto em computador quanto em smartphone, conforme a rotina de cada operação.",
  },
  {
    icon: "theme",
    title: "Tema claro e escuro",
    description:
      "Alternância entre tema claro e escuro, de acordo com a preferência de quem está usando o sistema.",
  },
];

export type OrbytModule = {
  key: "dashboard" | "operacao" | "promocoes" | "comissoes" | "relatorios" | "mobile";
  label: string;
  title: string;
  description: string;
};

export const orbytModules: OrbytModule[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    title: "Painel operacional",
    description:
      "Indicadores centrais da operação reunidos em uma única tela, com leitura rápida do andamento do dia.",
  },
  {
    key: "operacao",
    label: "Operação",
    title: "Lojas e vendedoras",
    description:
      "Gestão de lojas, equipe, pausas e motivos de não venda em um fluxo único de acompanhamento.",
  },
  {
    key: "promocoes",
    label: "Promoções",
    title: "Promoções ativas",
    description:
      "Controle das promoções vigentes, com visibilidade sobre período e abrangência.",
  },
  {
    key: "comissoes",
    label: "Comissões",
    title: "Cálculo de comissões",
    description:
      "Apuração de comissões por vendedora, conforme as regras configuradas para a operação.",
  },
  {
    key: "relatorios",
    label: "Relatórios",
    title: "Relatórios da operação",
    description:
      "Consolidação de resultados por período, loja e vendedora para apoiar decisões de gestão.",
  },
  {
    key: "mobile",
    label: "Mobile",
    title: "Uso em celular",
    description:
      "Navegação adaptada para smartphone, com tabelas convertidas em cartões e botões de toque ampliado.",
  },
];
