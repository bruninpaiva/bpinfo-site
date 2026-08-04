export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Sistemas personalizados",
    description:
      "Desenvolvimento de sistemas sob medida, desenhados a partir do processo real da empresa — não de um modelo pronto.",
  },
  {
    title: "Automação de processos",
    description:
      "Automação de rotinas manuais e repetitivas, reduzindo retrabalho e erro operacional.",
  },
  {
    title: "Dashboards e relatórios",
    description:
      "Painéis e relatórios que organizam a informação da operação e facilitam o acompanhamento de resultados.",
  },
  {
    title: "Integrações",
    description:
      "Conexão entre sistemas e fontes de dados já usados pela empresa, evitando trabalho duplicado.",
  },
  {
    title: "Consultoria em tecnologia",
    description:
      "Apoio na definição de prioridades tecnológicas, com foco em soluções aplicáveis à realidade do negócio.",
  },
  {
    title: "Suporte e evolução de sistemas",
    description:
      "Acompanhamento contínuo após a implantação, com ajustes e evolução conforme a operação muda.",
  },
];

export type WorkStep = {
  number: string;
  title: string;
  description: string;
};

export const workSteps: WorkStep[] = [
  {
    number: "01",
    title: "Entendemos o processo",
    description:
      "Levantamento da rotina atual da empresa, identificando gargalos, retrabalho e necessidades reais.",
  },
  {
    number: "02",
    title: "Desenhamos uma solução",
    description:
      "Definição da solução mais adequada ao processo identificado, sem forçar a empresa a se adaptar a um sistema pronto.",
  },
  {
    number: "03",
    title: "Implementamos e validamos",
    description:
      "Desenvolvimento e implantação acompanhada, com validação junto à equipe que usa o sistema no dia a dia.",
  },
  {
    number: "04",
    title: "Acompanhamos e evoluímos",
    description:
      "Suporte contínuo e ajustes conforme a operação da empresa muda ao longo do tempo.",
  },
];
