export type HardwareService = {
  title: string;
  description: string;
};

export const hardwareServices: HardwareService[] = [
  {
    title: "Montagem de PC Gamer",
    description: "Montagem completa, organização de cabos, configuração e testes.",
  },
  {
    title: "Manutenção e diagnóstico",
    description:
      "Para computador lento, desligando, aquecendo, sem vídeo ou com falhas.",
  },
  {
    title: "Limpeza e manutenção preventiva",
    description: "Limpeza interna, revisão e troca de pasta térmica quando necessária.",
  },
  {
    title: "Upgrades",
    description: "SSD, memória, placa de vídeo e outros componentes.",
  },
  {
    title: "Computadores personalizados",
    description: "Configuração de máquinas conforme necessidade e orçamento.",
  },
  {
    title: "Peças e componentes",
    description: "Fornecimento sob consulta, conforme disponibilidade e necessidade do equipamento.",
  },
];

export const hardwareProblems = [
  "Computador lento, travando ou demorando para iniciar",
  "Máquina desligando, aquecendo ou apresentando ruídos",
  "Sem vídeo, sem sinal ou falhas depois de uma atualização",
  "Pouco espaço, pouca memória ou desempenho abaixo do esperado",
];

export const hardwareWorkflow = [
  {
    number: "01",
    title: "Entendemos o equipamento",
    description: "Você explica o uso da máquina e o que está acontecendo.",
  },
  {
    number: "02",
    title: "Avaliamos a necessidade",
    description: "Identificamos o serviço, ajuste ou componente mais adequado.",
  },
  {
    number: "03",
    title: "Executamos com atenção aos detalhes",
    description: "Montagem, manutenção ou upgrade com organização e testes.",
  },
  {
    number: "04",
    title: "Entregamos pronto para usar",
    description: "A máquina volta preparada para a rotina, trabalho ou jogos.",
  },
];
