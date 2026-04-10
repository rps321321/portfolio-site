import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-black/80 backdrop-blur-md">
      <div className="w-full px-4 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(255,176,0,0.8)]" />
          <span className="font-bold text-sm tracking-widest text-primary halation">Raghvendra Pratap Singh</span>
        </Link>
        
        <nav className="flex items-center gap-5 md:gap-8">
          <Link href="/about" className="text-xs tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-primary/50">01.</span> ABOUT
          </Link>
          <Link href="/projects" className="text-xs tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-primary/50">02.</span> PROJECTS
          </Link>
          <Link href="/resume" className="text-xs tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-primary/50">03.</span> RESUME
          </Link>
          <Link href="/blog" className="text-xs tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-primary/50">04.</span> WRITING
          </Link>
        </nav>
      </div>
    </header>
  );
}
