import type { Metadata } from "next";

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
      <head>
        <link rel="icon" href="./iconoPagina.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
