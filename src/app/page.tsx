'use client';

import Link from 'next/link';
import { Terminal, Database, BrainCircuit, ArrowRight, ShieldAlert } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Typewriter } from 'react-simple-typewriter';
import { AnimatedTerminal } from '@/components/AnimatedTerminal';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-16 overflow-hidden relative">
      <div className="ambient-glow" style={{ top: '20%' }}></div>
      <div
        className="ambient-glow"
        style={{
          top: '80%',
          background: 'radial-gradient(circle, rgba(255, 68, 0, 0.05) 0%, rgba(0,0,0,0) 60%)',
        }}
      ></div>

      <FadeIn direction="down" delay={0.1}>
        <div className="w-full bg-primary text-black text-[10px] font-bold tracking-[0.2em] py-1 overflow-hidden flex whitespace-nowrap border-y border-black relative">
          <div className="animate-ticker">
            {' '}
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; SYSTEM ONLINE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; NO ANOMALIES DETECTED
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; DATA STREAM ACTIVE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; CORE TEMP NORMAL
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; SYSTEM ONLINE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; NO ANOMALIES DETECTED
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; DATA STREAM ACTIVE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; CORE TEMP NORMAL
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </div>
          <div className="animate-ticker">
            {' '}
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; SYSTEM ONLINE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; NO ANOMALIES DETECTED
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; DATA STREAM ACTIVE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; CORE TEMP NORMAL
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; SYSTEM ONLINE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; NO ANOMALIES DETECTED
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; DATA STREAM ACTIVE
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; CORE TEMP NORMAL
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-gray-500 tracking-widest mt-2 px-2">
          <span>ID: RPS_01 // LOC: NIS_RS</span>
          <span className="text-primary">CAPACITY: 100%</span>
        </div>
      </FadeIn>

      <section className="pt-4 space-y-8 relative">
        <FadeIn direction="left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black border border-primary text-primary text-xs tracking-widest mb-4 halation">
            <ShieldAlert className="w-3 h-3 animate-pulse drop-shadow-[0_0_8px_rgba(255,176,0,0.8)]" />
            IDENTITY CONFIRMED
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase flex flex-col gap-2">
            <span className="text-gray-500 text-sm tracking-widest font-normal">
              CLASSIFICATION:
            </span>
            <span className="halation-white">Medical Student</span>
            <span className="text-primary flex items-center gap-4 halation">
              <span className="text-white">+</span>{' '}
              <Typewriter
                words={['Scraping Framework Author', 'AI Platform Builder', 'MCP Server Developer', 'Full-Stack Engineer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="hud-panel p-6 max-w-3xl border-l-4 border-l-primary relative bg-black/60 shadow-[0_0_30px_rgba(255,176,0,0.1)]">
            <div className="absolute top-0 right-0 w-24 h-1.5 bg-hazard opacity-80 shadow-[0_0_15px_rgba(255,176,0,0.5)]"></div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed pt-2">
              <span className="text-primary mr-2 halation">SYS.OUT&gt;</span>
              Full-stack engineer with 5+ years shipping production scraping frameworks, AI
              platforms with RAG pipelines, MCP servers (3 in production, 1 on npm), desktop security
              tools, and SaaS applications. Currently studying medicine.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/projects"
              className="hud-panel hud-glow group flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-primary tracking-widest uppercase transition-all bg-primary/5 hover:bg-primary/20"
            >
              <Terminal className="w-4 h-4" />
              View Selected Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog/medicine-research-and-building-systems"
              className="hud-panel group flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-gray-300 tracking-widest uppercase transition-all bg-black/50 hover:bg-white/5"
            >
              Research Note
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-8">
        <FadeIn direction="left">
          <div className="flex items-center justify-between border-b-2 border-muted pb-4">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase flex items-center gap-4 halation-white">
              <span className="bg-white text-black px-2 py-1 text-xs">FIT</span>
              Core Capabilities
            </h2>
            <span className="text-xs text-gray-400 font-mono bg-white/5 px-2 py-1 border border-white/10">
              EVIDENCE-BASED
            </span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StaggerItem>
            <div className="hud-panel p-6 h-full bg-black/40">
              <div className="text-[10px] tracking-widest text-primary mb-3">
                01 // WEB SCRAPING
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                Scraping Frameworks
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Built Scalpel — production framework with middleware pipeline, auto-escalation
                (HTTP to Playwright), LLM extraction, proxy circuit breakers. Tested on 12k+ pages.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="hud-panel p-6 h-full bg-black/40">
              <div className="text-[10px] tracking-widest text-primary mb-3">
                02 // AI PLATFORMS
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                RAG Pipelines And AI Gateways
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Elysium Sanctuary: 7-container Docker stack with LiteLLM multi-provider gateway,
                document ingestion (PDF/DOCX/URL/OCR), pgvector semantic search.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="hud-panel p-6 h-full bg-black/40">
              <div className="text-[10px] tracking-widest text-primary mb-3">
                03 // MCP SERVERS
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                3 Production MCP Integrations
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Obsidian MCP Pro (npm, 122 tests, graph traversal), Vertex AI MCP (multimodal),
                Blender MCP (dual-threaded architecture solving single-thread constraint).
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="hud-panel p-6 h-full bg-black/40">
              <div className="text-[10px] tracking-widest text-primary mb-3">
                04 // FULL STACK
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                SaaS, Desktop, And Infrastructure
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Production SaaS with payments and video calls. Windows security scanner with 16
                native API checks. Docker infrastructure with n8n, Redis, and Zep AI memory.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="space-y-8 relative">
        <FadeIn direction="right">
          <div className="flex items-center justify-between border-b-2 border-muted pb-4">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase flex items-center gap-4 halation-white">
              <span className="bg-primary text-black px-2 py-1 text-xs">MODULES</span>
              Core Modules
            </h2>
            <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 border border-primary/20">
              STATUS: OPTIMAL
            </span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <div className="hud-panel p-6 h-full flex flex-col group hover:border-primary/50 transition-colors bg-black/40 hover:bg-primary/5">
              <div className="flex justify-between items-start mb-6 border-b border-muted pb-4">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="text-[10px] text-gray-500 tracking-widest px-2 border border-muted">
                  MOD.01
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white uppercase tracking-wider">
                AI Tooling
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-auto">
                Building practical AI workflows with MCP servers, structured tool interfaces, and
                model-assisted automation that support real developer and research tasks.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="hud-panel p-6 h-full flex flex-col group hover:border-primary/50 transition-colors bg-black/40 hover:bg-primary/5">
              <div className="flex justify-between items-start mb-6 border-b border-muted pb-4">
                <Database className="h-8 w-8 text-primary" />
                <span className="text-[10px] text-gray-500 tracking-widest px-2 border border-muted">
                  MOD.02
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white uppercase tracking-wider">
                Data Extraction
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-auto">
                Building resilient Python pipelines using Playwright and related tooling to collect
                data from dynamic web platforms, normalize it, and export it for analysis.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="hud-panel p-6 h-full flex flex-col group hover:border-primary/50 transition-colors bg-black/40 hover:bg-primary/5">
              <div className="flex justify-between items-start mb-6 border-b border-muted pb-4">
                <Terminal className="h-8 w-8 text-primary" />
                <span className="text-[10px] text-gray-500 tracking-widest px-2 border border-muted">
                  MOD.03
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white uppercase tracking-wider">
                Systems Shipping
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mt-auto">
                Shipping end-to-end systems across TypeScript, Python, and C#, including MCP
                servers, desktop applications, and automation workflows backed by structured
                storage.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="space-y-8">
        <FadeIn direction="left">
          <div className="flex items-center justify-between border-b-2 border-muted pb-4">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase flex items-center gap-4 halation-white">
              <span className="bg-secondary text-black px-2 py-1 text-xs">FEATURED</span>
              Featured Project
            </h2>
            <span className="text-xs text-secondary font-mono bg-secondary/10 px-2 py-1 border border-secondary/20">
              PRIORITY: ALPHA
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="hud-panel overflow-hidden border-secondary/50 group bg-black/80">
            <div className="md:grid md:grid-cols-5">
              <div className="p-8 md:col-span-3 flex flex-col justify-center space-y-6">
                <div className="flex justify-between items-center border-b border-muted pb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary animate-pulse"></span>
                    <span className="text-[10px] tracking-widest font-bold text-secondary">
                      RESEARCH PLATFORM
                    </span>
                  </div>
                  <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold">
                    TIKTOK_PIPELINE
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">
                    TikTok Research Data Pipeline
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    A custom Python data-collection workflow used for a university research project
                    analyzing TikTok content as a source of education in medical statistics. The
                    pipeline collected public video data, supported screening and analysis, and
                    connected technical scraping work to a real academic study.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'Playwright', 'SQLite', 'JSONL', 'CSV'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black border border-muted text-gray-300 text-[10px] tracking-widest uppercase hover:border-primary transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-muted p-6 md:col-span-2 relative flex flex-col font-mono text-[10px] text-primary justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between border-b border-muted pb-2">
                    <span className="text-gray-500">DOM_PARSING</span>
                    <span className="bg-primary/20 text-primary px-1">SUCCESS</span>
                  </div>
                  <div className="flex justify-between border-b border-muted pb-2">
                    <span className="text-gray-500">BROWSER_AUTOMATION</span>
                    <span className="bg-primary/20 text-primary px-1">ACTIVE</span>
                  </div>
                  <div className="flex justify-between border-b border-muted pb-2">
                    <span className="text-gray-500">DATA_VALIDATION</span>
                    <span className="bg-secondary/20 text-secondary px-1 animate-pulse">STRICT</span>
                  </div>
                  <AnimatedTerminal />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
