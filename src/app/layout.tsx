import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Minerales SAG",
  description: "Proveedor de minerales para la industria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}