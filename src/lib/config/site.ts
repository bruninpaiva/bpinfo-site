/**
 * Configuração central do site. Qualquer dado que dependa de informação
 * real da empresa (URL, WhatsApp, e-mail) vem de variáveis de ambiente
 * públicas — nunca hardcoded. Ver .env.example e README.md.
 */

const PLACEHOLDER_WHATSAPP = "0000000000000";
const PLACEHOLDER_EMAIL = "contato@bpinfo.app.br";
const PLACEHOLDER_ORBYT_URL = "https://app.bpinfo.app.br";

function readEnv(value: string | undefined, placeholder: string) {
  return value && value.trim().length > 0 ? value.trim() : placeholder;
}

export const siteConfig = {
  name: "BPInfo Tecnologia",
  shortName: "BPInfo",
  product: "ORBYT",
  productTagline: "Plataforma de gestão inteligente para lojas.",
  tagline: "Soluções simples para processos reais.",
  footerCredit: "Desenvolvido pela BPInfo Tecnologia.",

  url: readEnv(process.env.NEXT_PUBLIC_SITE_URL, "https://bpinfo.app.br"),
  orbytUrl: readEnv(process.env.NEXT_PUBLIC_ORBYT_URL, PLACEHOLDER_ORBYT_URL),
  whatsappNumber: readEnv(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    PLACEHOLDER_WHATSAPP,
  ),
  contactEmail: readEnv(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    PLACEHOLDER_EMAIL,
  ),

  /** Indica se as variáveis reais foram configuradas (fora do placeholder). */
  hasRealWhatsapp: Boolean(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER &&
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.trim().length > 0,
  ),
  hasRealOrbytUrl: Boolean(
    process.env.NEXT_PUBLIC_ORBYT_URL &&
      process.env.NEXT_PUBLIC_ORBYT_URL.trim().length > 0,
  ),

  metaTitle: "BPInfo Tecnologia | Sistemas e automações",
  metaDescription:
    "Sistemas personalizados, automação de processos e soluções de gestão para pequenas e médias empresas. Conheça o ORBYT, plataforma de gestão inteligente para lojas.",
};

export type SiteConfig = typeof siteConfig;
