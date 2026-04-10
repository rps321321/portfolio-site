import { Metadata } from 'next';
import { ExternalLink, FileText, FolderGit2, Github } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Production projects: scraping frameworks, AI platforms, MCP servers, desktop security tools, and SaaS — by Raghvendra Pratap Singh.',
};

type ProjectCard = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  actionLabel?: string;
  status: string;
};

const primaryProjects: ProjectCard[] = [
  {
    id: 'SCALPEL',
    title: 'Scalpel — Production Web Scraping Framework',
    description:
      'Middleware-based scraping framework with auto-escalation from HTTP to Playwright, LLM-powered extraction via OpenRouter/Ollama/vLLM, proxy circuit breakers with cooldown, per-domain concurrency semaphores, and YAML-driven configuration. Tested against 12,000+ pages.',
    tags: ['Python', 'httpx', 'Playwright', 'OpenAI SDK', 'Pydantic', 'Typer'],
    actionLabel: 'Private — code samples available',
    status: 'PRODUCTION',
  },
  {
    id: 'TIKTOK_PIPELINE',
    title: 'TikTok Data Collector (Released v39)',
    description:
      'Qt desktop app with 39 iterative releases collecting 32+ fields per video. Research-grade export (Excel with codebook, SPSS with .sps syntax, R-compatible CSV). Proxy health scoring, rate limiting with jitter, cron scheduler, SQLite deduplication with O(1) cache, and t-test statistical analysis.',
    tags: ['Python', 'Qt', 'Playwright', 'SQLite', 'pandas', 'scipy'],
    actionLabel: 'Private — code samples available',
    status: 'RELEASED v39',
  },
  {
    id: 'SANCTUARY',
    title: 'Elysium Sanctuary — AI Knowledge Platform',
    description:
      'Monorepo microservices platform with document ingestion pipeline (PDF/DOCX/URL/YouTube/OCR to vector embeddings), LiteLLM multi-provider AI gateway (GPT-4o, Claude, Gemini), 7-container Docker stack, pgvector semantic search, and Tauri desktop client.',
    tags: ['FastAPI', 'LiteLLM', 'pgvector', 'Next.js', 'Docker', 'Tauri'],
    actionLabel: 'Private — architecture available',
    status: 'ACTIVE',
  },
  {
    id: 'NEURAL_LIBRARY',
    title: 'Neural Library Search — 45,000+ Books',
    description:
      'GPU-accelerated semantic search engine over 45k+ public domain eBooks. BeautifulSoup scraping from Project Gutenberg, sentence-transformers embedding (all-MiniLM-L6-v2), thread-safe CUDA locks, Qdrant vector storage, resumable background ingestion.',
    tags: ['Python', 'FastAPI', 'sentence-transformers', 'Qdrant', 'CUDA', 'Docker'],
    actionLabel: 'Private — demo available',
    status: 'PRODUCTION',
  },
  {
    id: 'OBSIDIAN_MCP',
    title: 'Obsidian MCP Pro (npm published)',
    description:
      'Published npm package (v1.1.1, 122 tests) providing 27+ tools for AI vault access: full-text search, frontmatter queries, N-hop graph traversal, orphan/broken link detection, canvas manipulation, and multi-platform vault auto-detection.',
    tags: ['TypeScript', 'MCP SDK', 'Zod', 'Vitest', 'npm'],
    href: 'https://github.com/rps321321/obsidian-mcp-pro',
    actionLabel: 'View on npm',
    status: 'PUBLISHED',
  },
  {
    id: 'MED_STATS_2026',
    title: 'Co-Authored Medical Statistics Research Paper',
    description:
      'Co-authored a faculty research paper examining TikTok content as a source of education in medical statistics. Built the Python + Playwright data collection workflow with quality scoring and statistical analysis.',
    tags: ['Research', 'Medicine', 'Python', 'Playwright', 'scipy'],
    actionLabel: 'Listed on site',
    status: 'PUBLISHED',
  },
];

const secondaryProjects: ProjectCard[] = [
  {
    id: 'PC_GUARDIAN',
    title: 'PC Guardian — Windows Security Scanner',
    description:
      'Portable 65MB .NET 8 security scanner with 16 native API checks: RDP, remote access apps, open ports, firewall, DNS hijacking, USB history, crypto miner detection, BitLocker/TPM/Secure Boot status. One-click quarantine, PDF/HTML reports, built-in IT server.',
    tags: ['C#', '.NET 8', 'WinForms', 'SQLite', 'P/Invoke', 'WMI'],
    href: 'https://github.com/rps321321/pc-guardian',
    actionLabel: 'View Repo',
    status: 'PRODUCTION',
  },
  {
    id: 'VERTEX_MCP',
    title: 'Vertex AI MCP — Multimodal AI Server',
    description:
      'MCP server orchestrating Google multimodal stack: Gemini image gen, Veo 3.1 video gen with long-polling, TTS with PCM-to-WAV conversion, and Gemini CLI agent management with approval modes.',
    tags: ['Python', 'MCP', 'Vertex AI', 'Gemini', 'google-genai'],
    actionLabel: 'Private — architecture available',
    status: 'PRODUCTION',
  },
  {
    id: 'BLENDER_MCP',
    title: 'Blender MCP — Thread-Safe 3D Control',
    description:
      'Dual-threaded MCP server solving Blender single-thread constraint. Background TCP socket server + main-thread timer polling via bpy.app.timers. AI assistants can execute bpy code, inspect scenes, and render.',
    tags: ['Python', 'FastMCP', 'Blender', 'TCP', 'Threading'],
    actionLabel: 'Local project',
    status: 'PRODUCTION',
  },
  {
    id: 'NUSIC',
    title: 'Nusic — Discord Music Bot + Dashboard',
    description:
      'Full music bot with FFmpeg DSP pipeline (bassboost, nightcore, vaporwave, 8D, karaoke), real-time Socket.io web dashboard, Discord OAuth, SQLite playlists, 20+ slash commands.',
    tags: ['discord.js', 'Express', 'Socket.io', 'FFmpeg', 'SQLite'],
    actionLabel: 'Private',
    status: 'STABLE v1.0',
  },
  {
    id: 'ELYSIUM',
    title: 'Elysium — AI Study Companion',
    description:
      'AI study platform with streaming Gemini responses (2.5-flash/pro, 3-pro), InstantDB real-time sync, Three.js constellation backgrounds, rate limiting per-user/endpoint, and security headers.',
    tags: ['Next.js 15', 'React 19', 'Gemini SDK', 'InstantDB', 'Three.js'],
    actionLabel: 'Private — demo available',
    status: 'PRODUCTION',
  },
  {
    id: 'HOUSEHUB',
    title: 'HouseHub — Shared Expense Tracker PWA',
    description:
      'Real-time household expense management with InstantDB, automated settlement calculations, dual-currency support, spending anomaly detection, and offline PWA support.',
    tags: ['Next.js', 'InstantDB', 'Recharts', 'PWA', 'Playwright E2E'],
    actionLabel: 'Private',
    status: 'PRODUCTION',
  },
  {
    id: 'N8N_INFRA',
    title: 'Enterprise Workflow Infrastructure',
    description:
      'Production n8n deployment with PostgreSQL/pgvector, Redis, Apache Tika document indexing, Zep AI session memory, Caddy auto-TLS, daily backups with 14-day retention.',
    tags: ['Docker', 'n8n', 'PostgreSQL', 'Redis', 'Zep', 'Caddy'],
    actionLabel: 'Private infrastructure',
    status: 'DEPLOYED',
  },
  {
    id: 'CREATIVE_STUDIO',
    title: 'Elysium Creative Studio',
    description:
      'Cross-platform drawing app (Electron desktop + PWA web). Excalidraw canvas, pressure-sensitive freehand drawing, IndexedDB persistence, service worker with auto-update.',
    tags: ['React 19', 'Vite', 'Excalidraw', 'Electron', 'PWA'],
    actionLabel: 'Private',
    status: 'PRODUCTION',
  },
];

function ProjectSection({
  title,
  subtitle,
  projects,
  accent,
}: {
  title: string;
  subtitle: string;
  projects: ProjectCard[];
  accent: 'primary' | 'secondary';
}) {
  const accentClasses =
    accent === 'secondary'
      ? {
          pill: 'bg-secondary text-black',
          text: 'text-secondary',
          hover: 'group-hover/link:text-secondary',
          dot: 'bg-secondary',
        }
      : {
          pill: 'bg-primary text-black',
          text: 'text-primary',
          hover: 'group-hover/link:text-primary',
          dot: 'bg-primary',
        };

  return (
    <section className="space-y-8">
      <FadeIn direction="left">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase flex items-center gap-4">
            <span className={`${accentClasses.pill} px-2 py-1 text-xs`}>
              {accent === 'secondary' ? 'BREADTH' : 'CORE'}
            </span>
            {title}
          </h2>
          <span className="text-xs text-primary/50 font-mono hidden sm:inline">{subtitle}</span>
        </div>
      </FadeIn>

      <StaggerContainer className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <div className="hud-panel h-full flex flex-col p-8 group hover:bg-primary/5 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <FolderGit2 className="w-24 h-24 text-primary" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <span className="text-[10px] text-primary tracking-widest border border-primary/30 px-2 py-1 bg-black">
                    ID: {project.id}
                  </span>
                  <span className={`text-[10px] tracking-widest flex items-center gap-2 ${accentClasses.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${accentClasses.dot} animate-pulse`}></span>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-wide">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm flex-grow mb-8 font-mono leading-relaxed border-l-2 border-primary/20 pl-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest text-primary/80 bg-primary/10 border border-primary/20 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-primary/20 flex items-center justify-between min-h-10">
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase group/link"
                      >
                        <Github className={`mr-2 h-4 w-4 ${accentClasses.hover} transition-colors`} />
                        {project.actionLabel ?? 'View Repo'}
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <div className="inline-flex items-center text-xs font-bold tracking-widest text-gray-500 uppercase">
                        <FileText className="mr-2 h-4 w-4" />
                        {project.actionLabel ?? 'Project summary only'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <FadeIn direction="down">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <h1 className="text-3xl font-bold tracking-widest text-white uppercase flex items-center gap-4">
            <span className="bg-primary text-black px-2 py-1 text-sm">SYS.DIR</span>
            Selected Work
          </h1>
          <span className="text-xs text-primary/50 font-mono hidden sm:inline">
            PRIMARY: 0{primaryProjects.length} // SECONDARY: 0{secondaryProjects.length}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="hud-panel p-6 border-l-4 border-l-primary bg-black/60">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Production systems spanning web scraping frameworks, AI/ML platforms, MCP servers,
            desktop security tools, and SaaS applications. Core projects demonstrate middleware
            architecture, GPU-accelerated search, multi-provider AI gateways, and research-grade
            data pipelines.
          </p>
        </div>
      </FadeIn>

      <ProjectSection
        title="Core Engineering Work"
        subtitle="SCRAPING // AI // DATA PIPELINES // MCP"
        projects={primaryProjects}
        accent="primary"
      />

      <FadeIn delay={0.2}>
        <div className="hud-panel p-6 border-l-4 border-l-secondary bg-black/60">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Engineering range beyond scraping: desktop security tools, music bots with audio DSP,
            real-time SaaS platforms, workflow automation infrastructure, and cross-platform apps.
          </p>
        </div>
      </FadeIn>

      <ProjectSection
        title="Additional Technical Work"
        subtitle="BROADER RANGE, SAME ENGINEERING STYLE"
        projects={secondaryProjects}
        accent="secondary"
      />
    </div>
  );
}
