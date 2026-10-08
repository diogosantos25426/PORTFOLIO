import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diogo — Portfolio",
  description:
    "Portfolio de Diogo, estudante de Engenharia de Computação Gráfica e Multimédia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />

        <div className="min-h-screen pt-20">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
