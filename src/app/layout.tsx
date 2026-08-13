import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}