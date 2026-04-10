import Link from 'next/link';
import { Activity } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-black/80 mt-auto relative z-10">
      <div className="w-full px-4 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span>SECOND-YEAR MEDICAL STUDENT // PYTHON // SCRAPING // AI TOOLING</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] tracking-widest text-gray-500">
          <Link href="/projects" className="hover:text-primary transition-colors uppercase">
            Selected Work
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors uppercase">
            Background
          </Link>
          <Link href="/blog/medicine-research-and-building-systems" className="hover:text-primary transition-colors uppercase">
            Research Note
          </Link>
        </div>
      </div>
    </footer>
  );
}
