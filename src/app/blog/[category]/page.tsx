import { getPostsByCategory } from '@/lib/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // 1. Obtenemos el parámetro de la URL
  const { category } = await params;
  
  // 2. Intentamos obtener los archivos de esa carpeta
  const posts = await getPostsByCategory(category);

  // 3. Si no hay posts, lanzamos el 404 de Next.js
  if (!posts || posts.length === 0) {
    console.log(`No se encontraron posts en la carpeta: content/${category}`);
    return notFound();
  }

  // Limpiamos el nombre para mostrar (ej: 2-procesos-hilos -> Procesos e Hilos)
  const displayTitle = category.replace(/^\d+-/, '').replace(/-/g, ' ');

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">

      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white capitalize mb-4">
          {displayTitle}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Evidencias y prácticas correspondientes a esta unidad temática.
        </p>
      </header>

      {/* LISTADO DE PRÁCTICAS */}
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${category}/${post.slug}`}
            className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                  {post.frontmatter.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                  {post.frontmatter.description}
                </p>
              </div>
              <div className="ml-4 text-blue-600 font-bold text-2xl group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500">
                {post.frontmatter.date}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium flex items-center gap-2">
          ← Volver al inicio del portafolio
        </Link>
      </div>
    </main>
  );
}