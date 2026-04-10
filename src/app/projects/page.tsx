import { Metadata } from 'next';
import { ExternalLink, FileText, FolderGit2, Github } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Selected scraping, AI tooling, research, and software projects built by Raghvendra Pratap Singh.',
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
    id: 'TIKTOK_PIPELINE',
    title: 'TikTok Scraper and Research Export Pipeline',
    description:
      'A Python scraping workflow for collecting TikTok video data from dynamic pages, normalizing outputs, deduplicating records, and exporting structured datasets for analysis. The project supported a university research study on TikTok content in medical statistics education.',
    tags: ['Python', 'Playwright', 'SQLite', 'JSONL', 'CSV', 'Research'],
    href: 'https://github.com/rps321321/tiktok-scraper',
    actionLabel: 'View Repo',
    status: 'ONLINE',
  },
  {
    id: 'MED_STATS_2026',
    title: 'Co-Authored Medical Statistics Research Paper',
    description:
      'Co-authored a faculty research paper at the University of Nis examining TikTok content as a source of education in medical statistics. The work combined medical evaluation frameworks with Python-based public data collection and structured analysis.',
    tags: ['Research', 'Medicine', 'Medical Statistics', 'TikTok', 'Python'],
    actionLabel: 'Listed on site',
    status: 'PUBLISHED WORK',
  },
  {
    id: 'OBSIDIAN_MCP',
    title: 'Obsidian MCP Server',
    description:
      'A TypeScript MCP server that gives AI assistants structured access to an Obsidian vault, including note search, frontmatter-aware reading, writing, link analysis, graph traversal, and canvas support.',
    tags: ['TypeScript', 'MCP', 'Obsidian', 'AI Tooling', 'Vitest'],
    href: 'https://github.com/rps321321/obsidian-mcp-pro',
    actionLabel: 'View Repo',
    status: 'ACTIVE',
  },
  {
    id: 'AUTOMATION_STACK',
    title: 'Automation and AI Workflow Stack',
    description:
      'A collection of personal automation and AI-tooling systems connecting local tools, MCP servers, scripted workflows, and service integrations to speed up development, research, and repetitive tasks.',
    tags: ['Python', 'n8n', 'Automation', 'APIs', 'Workflows'],
    actionLabel: 'Private system summary',
    status: 'BACKGROUND',
  },
];

const secondaryProjects: ProjectCard[] = [
  {
    id: 'PC_GUARDIAN',
    title: 'PC Guardian',
    description:
      'A Windows desktop security scanner built in C# that checks for remote-access exposure, monitors system activity, records scan history in SQLite, and provides plain-language findings for end users.',
    tags: ['C#', '.NET', 'WinForms', 'SQLite', 'Security Tooling'],
    href: 'https://github.com/rps321321/pc-guardian',
    actionLabel: 'View Repo',
    status: 'ACTIVE',
  },
  {
    id: 'PC_GUARDIAN_REMOTE',
    title: 'PC Guardian Remote',
    description:
      'A companion remote access and terminal-sharing utility for PC Guardian that manages a secure share flow, local shell access, and remote connection UX in a desktop application.',
    tags: ['C#', '.NET', 'Remote Shell', 'Desktop UX'],
    href: 'https://github.com/rps321321/pc-guardian-remote',
    actionLabel: 'View Repo',
    status: 'ACTIVE',
  },
  {
    id: 'ELYSIUM',
    title: 'Elysium',
    description:
      'A larger AI-first web application built with Next.js, Gemini integrations, rich interactive UI, and multiple app surfaces for content generation and study workflows.',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'Product Build'],
    href: 'https://github.com/rps321321/elysium-dev',
    actionLabel: 'View Repo',
    status: 'ACTIVE',
  },
  {
    id: 'BLENDER_MCP',
    title: 'Blender MCP',
    description:
      'An MCP server and Blender add-on bridge that lets AI assistants inspect scenes, execute Python in Blender, and trigger renders through a thread-safe server-to-addon workflow.',
    tags: ['Python', 'MCP', 'Blender', 'TCP', 'Automation'],
    actionLabel: 'Local project summary',
    status: 'LOCAL WORK',
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
            This page is intentionally weighted toward the work most relevant to scraping, AI
            tooling, and research-driven data workflows. If you are reviewing this portfolio for
            the Mindrift web scraping roles, start with the TikTok pipeline, the research paper,
            and the MCP work below.
          </p>
        </div>
      </FadeIn>

      <ProjectSection
        title="Selected Work For Scraping And AI Tooling"
        subtitle="START HERE FOR MINDRIFT REVIEW"
        projects={primaryProjects}
        accent="primary"
      />

      <FadeIn delay={0.2}>
        <div className="hud-panel p-6 border-l-4 border-l-secondary bg-black/60">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            The projects below broaden the picture beyond scraping. They are included to show
            engineering range across desktop applications, larger product work, systems tooling,
            and local automation-heavy projects.
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
