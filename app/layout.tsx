import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leche Orgánica Manchitas | Leche Cruda Fresca 100% de Vaca",
  description: "Leche orgánica entera 100% de vaca, sin rebajar ni mezclar. Cantinas de 5 litros frescas de finca. Sabor y cremosidad natural para tu familia. Producción limitada en Colombia. Pedidos por WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.className} bg-[#fefce8] text-[#0f172a]`}>
        {children}
      </body>
    </html>
  );
}
