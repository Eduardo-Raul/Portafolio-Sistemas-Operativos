// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo | Portafolio SO",
  description: "Evidencias y prácticas de la materia de Sistemas Operativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col dark:bg-slate-950 dark:text-slate-100`}>
        
        {/* NAVEGACIÓN */}
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-slate-900/80 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Prácticas
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}