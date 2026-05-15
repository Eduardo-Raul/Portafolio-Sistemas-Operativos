// src/app/blog/[category]/[slug]/page.tsx
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;

  try {
    // Ahora pasamos ambos parámetros para encontrar el archivo
    const { content, frontmatter } = await getPostBySlug(category, slug);

    return (
      <article className="max-w-3xl mx-auto py-10 px-5">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-gray-500">{frontmatter.date}</p>
        </header>
        <div className="prose prose-slate lg:prose-xl dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link 
            href={`/blog/${category}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            Volver
          </Link>
        </footer>
      </article>
    );
  } catch (error) {
    return notFound();
  }
}