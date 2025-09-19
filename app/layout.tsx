// app/layout.tsx (Versión 2.2 - Estable) POR EDU

import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import { Footer } from "./components/layout/Footer"; // 1. Importar Footer
import { Header } from "./components/layout/Header";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"], weight: ["700"], variable: "--font-open-sans",
});
const roboto = Roboto({
  subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Chao Insomnio | Recupera tu sueño, recupera tu vida",
  description: "Plataforma médica digital para superar el insomnio sin pastillas.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${roboto.variable} font-body bg-background text-base-text`}>
        <Header /> 
        <main>{children}</main> 
        <Footer /> {/* 2. Añadir Footer aquí */}
      </body>
    </html>
  );
}
// FIRMADO: EDU