// app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tchau Insônia | Recupere seu sono, recupere sua vida",
  description:
    "Plataforma médica digital para superar a insônia sem remédios. Baseado em CBT-I e validado por médico com 40 anos de experiência.",
  keywords:
    "insônia, tratamento insônia, CBT-I, dormir melhor, insônia crônica, sem remédios, Tchau Insônia",
  openGraph: {
    title: "Tchau Insônia | Recupere seu sono, recupere sua vida",
    description:
      "Programa médico digital para superar a insônia sem remédios. Baseado em ciência, empatia e tecnologia.",
    url: "https://www.tchauinsomnio.com.br",
    images: [
      {
        url: "https://www.tchauinsomnio.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${openSans.variable} ${roboto.variable} font-body bg-background text-base-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}