export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Computadores", href: "/computadores" },
  { label: "ORBYT", href: "/orbyt" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: {
  title: string;
  links: NavItem[];
}[] = [
  {
    title: "BPInfo Tecnologia",
    links: [
      { label: "Soluções", href: "/solucoes" },
      { label: "Computadores", href: "/computadores" },
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Produto",
    links: [
      { label: "ORBYT", href: "/orbyt" },
      { label: "Solicitar demonstração", href: "/contato" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: "/termos" },
    ],
  },
];
