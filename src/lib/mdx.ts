import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Definimos la ruta base de la carpeta content
const root = path.join(process.cwd(), 'content');

/**
 * Obtiene todos los posts de una categoría específica (subcarpeta)
 */
// src/lib/mdx.ts
export async function getPostsByCategory(category: string) {
  const categoryPath = path.join(root, category);
  
  if (!fs.existsSync(categoryPath)) return [];

  const files = fs.readdirSync(categoryPath);

  const posts = files
    .filter((file) => file.endsWith('.md')) // <-- Asegúrate de que tus archivos sean .md y no .txt
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(categoryPath, file), 'utf8');
      const { data } = matter(fileContents);
      return { 
        slug, 
        category, 
        frontmatter: data 
      };
    });

  return posts;
}

/**
 * Obtiene el contenido de una práctica específica dentro de una categoría
 */
export async function getPostBySlug(category: string, slug: string) {
  // Limpiamos el slug por si llega con .md accidentalmente
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(root, category, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Archivo no encontrado: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    category,
    frontmatter: data,
    content,
  };
}

/**
 * Función opcional: Obtiene TODOS los posts de TODAS las categorías
 * Útil si quieres hacer un buscador global después.
 */
export async function getAllPosts() {
  const categories = fs.readdirSync(root);
  let allPosts: any[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(root, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.md'));
      
      files.forEach((file) => {
        const fileContents = fs.readFileSync(path.join(categoryPath, file), 'utf8');
        const { data } = matter(fileContents);
        allPosts.push({
          slug: file.replace(/\.md$/, ''),
          category,
          frontmatter: data,
        });
      });
    }
  });

  return allPosts;
}