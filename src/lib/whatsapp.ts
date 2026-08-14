import { siteConfig } from "@/lib/config/site";

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * O número vem de NEXT_PUBLIC_WHATSAPP_NUMBER (ver lib/config/site.ts).
 */
export function buildWhatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá! Vim pelo site da BPInfo e gostaria de conversar sobre uma necessidade de tecnologia.";

export const hardwareWhatsappMessage =
  "Olá! Vim pelo site da BPInfo e gostaria de falar sobre computadores, manutenção ou upgrades.";
