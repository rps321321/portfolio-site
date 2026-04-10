import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/mdx';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Terminal, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio://Writing',
  description: 'Short writing on the intersection of medicine, research, and technical systems.',
};

export default function Blog() {
  const posts = getAllPostsMeta('blog');

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <FadeIn direction="down">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <h1 className="text-3xl font-bold tracking-widest text-white uppercase flex items-center gap-4">
            <span className="bg-primary text-black px-2 py-1 text-sm">SYS.LOG</span>
            Writing
          </h1>
          <span className="text-xs text-primary/50 font-mono hidden sm:inline">RECORDS: 0{posts.length}</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="hud-panel p-6 border-l-4 border-l-primary bg-black/60">
          <p className="text-sm text-gray-300 leading-relaxed">
            A short note on how my medical training, university research, and technical work connect. I keep this section minimal on purpose.
          </p>
        </div>
      </FadeIn>

      {posts.length > 0 ? (
        <StaggerContainer className="space-y-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="hud-panel p-6 flex flex-col md:flex-row gap-6 items-start group-hover:bg-primary/5 transition-colors border-l-4 border-l-primary/50 group-hover:border-l-primary">
                  <div className="md:w-1/4 flex flex-col space-y-2">
                    <span className="text-[10px] text-primary tracking-widest border border-primary/30 px-2 py-1 bg-black inline-block text-center">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).toUpperCase()}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      MDX_PARSED
                    </span>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-wide">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm font-mono leading-relaxed border-l-2 border-primary/10 pl-4 group-hover:border-primary/40 transition-colors">
                      {post.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <FadeIn delay={0.2}>
          <div className="hud-panel p-12 text-center mt-8 border-dashed border-primary/30">
            <Terminal className="w-8 h-8 text-primary/30 mx-auto mb-4" />
            <p className="text-primary/50 font-mono tracking-widest text-sm uppercase">ERROR: NO_LOGS_FOUND</p>
            <p className="text-gray-600 font-mono text-xs mt-2">Awaiting sys.write operations...</p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
