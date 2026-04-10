import { Metadata } from 'next';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Terminal, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio://About',
  description: 'About Raghvendra Pratap Singh — full-stack engineer, scraping framework author, AI tooling developer, and medical student.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 overflow-hidden">
      <FadeIn direction="left">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <h1 className="text-3xl font-bold tracking-widest text-white uppercase flex items-center gap-4">
            <span className="bg-primary text-black px-2 py-1 text-sm">SYS.OP</span>
            Identity Profile
          </h1>
          <span className="text-xs text-primary/50 font-mono hidden sm:inline">DATA_FILE: ABOUT.MDX</span>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <StaggerContainer className="space-y-6 text-gray-400 font-mono text-sm leading-relaxed">
            <StaggerItem>
              <p className="border-l-2 border-primary/50 pl-4">
                <span className="text-primary">&gt;</span> Full-stack engineer with 5+ years of freelance experience, currently a second-year medical student at the University of Nis, Serbia. I approach software with the same rigor that medicine demands — structured thinking, careful evaluation, and production-grade output.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="border-l-2 border-primary/50 pl-4">
                <span className="text-primary">&gt;</span> I build across the full stack: production scraping frameworks with middleware pipelines and LLM extraction, microservices AI platforms with RAG pipelines and multi-provider gateways, MCP servers (3 in production, 1 published to npm with 122 tests), Windows security scanners with 16 native API checks, and SaaS platforms with payments, video calls, and monitoring.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="border-l-2 border-primary/50 pl-4">
                <span className="text-primary">&gt;</span> Languages: Python, TypeScript, C#/.NET, C++, SQL. Frameworks: Next.js, FastAPI, React, Electron, Tauri, Qt. Infrastructure: Docker Compose, PostgreSQL/pgvector, Redis, Qdrant, n8n. Co-author on a 2026 research paper on TikTok content in medical statistics education.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3}>
            <div className="hud-panel p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-primary/20 pb-2">
                <Activity className="w-5 h-5 text-secondary" />
                Academic Directives
              </h2>
              <ul className="space-y-4 font-mono">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-secondary"></span>
                  <h3 className="font-bold text-white tracking-widest">Doctor of Medicine (MD) in English</h3>
                  <p className="text-primary/70 text-xs mt-1">University of Nis, Faculty of Medicine, Serbia</p>
                  <div className="flex justify-between items-center mt-2 border-t border-gray-800 pt-2 text-xs text-gray-500">
                    <span>STATUS: YEAR 2 (SEM III)</span>
                    <span className="text-secondary font-bold">AVG: 8.17 / 10.00</span>
                  </div>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-secondary"></span>
                  <h3 className="font-bold text-white tracking-widest">Research Co-Author</h3>
                  <p className="text-primary/70 text-xs mt-1">TikTok content and medical statistics education, 2026</p>
                  <div className="mt-2 border-t border-gray-800 pt-2 text-xs text-gray-500">
                    CONTRIBUTION: Python-based data collection workflow and research support
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="right" delay={0.2} className="md:col-span-1">
          <div className="hud-panel p-6 space-y-6">
            <h3 className="text-xs text-primary font-bold tracking-widest border-b border-primary/20 pb-2 mb-4">
              SYS.DIAGNOSTICS
            </h3>

            <div className="space-y-4 text-xs font-mono text-gray-400">
              <div className="space-y-1">
                <div className="flex justify-between text-white">
                  <span>Web Scraping</span>
                  <span>Framework Author</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="bg-primary h-1" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-white">
                  <span>AI / LLM / MCP</span>
                  <span>3 Production Servers</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="bg-primary h-1" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-white">
                  <span>Full-Stack</span>
                  <span>SaaS Shipped</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="bg-primary h-1" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-white">
                  <span>Desktop / Systems</span>
                  <span>.NET + Qt + Electron</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="bg-primary h-1" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-white">
                  <span>Infrastructure</span>
                  <span>Docker + CI/CD</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="bg-primary h-1" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-primary/20">
              <div className="text-center p-4 bg-black border border-primary/10">
                <Terminal className="w-6 h-6 text-primary/50 mx-auto mb-2" />
                <span className="text-[10px] text-gray-500 tracking-widest">AWAITING INPUT...</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
