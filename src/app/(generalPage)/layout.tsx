import "../globals.css";
import { ThemeProvider } from "@/app/(generalPage)/components/theme-provider";
import type { Metadata } from "next";
import Header from "@/app/(generalPage)/components/Header";
import Footer from "@/app/(generalPage)/components/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nankurunaisa",
  description: "La mejor pagina de cursos de latinoamerica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ar">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
