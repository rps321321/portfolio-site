import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/FadeIn';
import { Terminal, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPostsMeta('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const { meta } = getPostBySlug(params.slug, 'blog');
    return {
      title: `SYS.LOG // ${meta.title}`,
      description: meta.summary,
    };
  } catch (e) {
    return {
      title: 'SYS.ERROR // LOG_NOT_FOUND',
    };
  }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let post;
  try {
    post = getPostBySlug(params.slug, 'blog');
  } catch (e) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8 space-y-8">
      <FadeIn>
        <Link href="/blog" className="inline-flex items-center text-xs tracking-widest text-primary/70 hover:text-primary transition-colors mb-4 uppercase font-mono">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Return to Logs
        </Link>
        
        <header className="hud-panel p-8 mb-8 border-b-4 border-b-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Terminal className="w-32 h-32 text-primary" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary text-black px-2 py-1 text-xs tracking-widest font-bold">
                LOG_ENTRY
              </span>
              <span className="text-xs text-primary/50 font-mono tracking-widest">
                TS: {new Date(post.meta.date).getTime()}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
              {post.meta.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-primary/70">
              <span className="border border-primary/20 px-2 py-1 bg-black">
                DATE: {new Date(post.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase()}
              </span>
              <span className="border border-primary/20 px-2 py-1 bg-black">
                AUTHOR: SYS.OP
              </span>
            </div>
          </div>
        </header>
        
        <div className="hud-panel p-8 md:p-12 prose prose-invert max-w-none 
          prose-headings:text-white prose-headings:uppercase prose-headings:tracking-wider
          prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline-offset-4
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-mono prose-p:text-sm
          prose-strong:text-white prose-strong:font-bold
          prose-code:text-secondary prose-code:bg-secondary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:text-gray-300
          prose-li:text-gray-400 prose-li:font-mono prose-li:text-sm">
          <MDXRemote source={post.content} />
        </div>
      </FadeIn>
    </article>
  );
}
