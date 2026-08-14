import type { Metadata } from "next";
import { Newsreader, Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrbytTransitionProvider } from "@/components/sections/OrbytTransitionProvider";
import { siteConfig } from "@/lib/config/site";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const bpDisplay = Outfit({
  subsets: ["latin"],
  variable: "--font-bp-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.metaDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    images: [{ url: "/brand/bpinfo/og-image.png", width: 1200, height: 630, alt: "BPInfo Tecnologia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    images: ["/brand/bpinfo/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/brand/bpinfo/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/bpinfo/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/brand/bpinfo/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${serif.variable} ${sans.variable} ${bpDisplay.variable} antialiased`}>
        <OrbytTransitionProvider>
          <Header />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </OrbytTransitionProvider>
      </body>
    </html>
  );
}
