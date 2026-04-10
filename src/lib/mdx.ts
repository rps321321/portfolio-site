import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type PostMetadata = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

export function getPostBySlug(slug: string, folder: 'blog' | 'projects' = 'blog') {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, folder, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { 
    slug: realSlug, 
    meta: data as Omit<PostMetadata, 'slug'>, 
    content 
  };
}

export function getAllPostsMeta(folder: 'blog' | 'projects' = 'blog'): PostMetadata[] {
  const dirPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const { meta, slug } = getPostBySlug(file, folder);
      return { ...meta, slug };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
}
