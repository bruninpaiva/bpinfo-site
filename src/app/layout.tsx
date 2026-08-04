import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  weight: ["400", "500", "600"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
