// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* TÍTULO Y AUTOR */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4 text-slate-900 dark:text-white">
          Portafolio de Sistemas Operativos
        </h1>
        <p className="text-xl text-blue-600 font-medium">Eduardo</p>
      </header>

      {/* PRÓLOGO */}
      <section className="prose prose-slate lg:prose-xl mb-16 dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold border-b pb-2">Prólogo</h2>
        <p>
          Este portafolio de evidencias constituye una recopilación detallada de las actividades, 
          códigos y conceptos fundamentales abordados durante el curso de Sistemas Operativos. 
          A través de este blog, se documenta el aprendizaje sobre la gestión de recursos, 
          procesos, hilos y la comunicación interna del sistema.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <CategoryCard 
          title="1. Introducción" 
          desc="Conceptos básicos de Linux" 
          href="/blog/1-introduccion" 
        />
        <CategoryCard 
          title="2. Procesos e Hilos" 
          desc="Gestión y ciclo de vida" 
          href="/blog/2-procesos-hilos" 
        />
        <CategoryCard 
          title="3. Mecanismos IPC" 
          desc="Comunicación entre procesos" 
          href="/blog/3-mecanismos-ipc" 
        />
      </div>
    </div>
  );
}

function CategoryCard({ title, desc, href }: { title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="p-6 border rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
      <h3 className="font-bold text-lg group-hover:text-blue-600">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{desc}</p>
    </Link>
  );
}