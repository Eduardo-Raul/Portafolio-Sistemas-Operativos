// src/app/blog/page.tsx
import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export default async function AllPracticesPage() {
  // Obtenemos todos los archivos de todas las subcarpetas
  const allPosts = await getAllPosts();

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Todas las Prácticas
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Listado completo de evidencias de los temas vistos en la materia de Sistemas Operativos.
        </p>
      </header>

      {allPosts.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed">
          <p className="text-slate-500">Aún no hay archivos .md en tus carpetas de content.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {allPosts.map((post) => (
            <Link 
              key={`${post.category}-${post.slug}`} 
              href={`/blog/${post.category}/${post.slug}`}
              className="group flex items-center justify-between p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  {/* Etiqueta pequeña para saber de qué unidad es */}
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded">
                    {post.category.replace(/^\d+-/, '')}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {post.frontmatter.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {post.frontmatter.title}
                </h2>
              </div>
              <div className="text-slate-300 group-hover:text-blue-500 transition-colors ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}

      <footer className="mt-12 text-center">
        <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 font-medium">
          ← Regresar al Inicio (Prólogo)
        </Link>
      </footer>
    </main>
  );
}