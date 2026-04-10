export const resumeProfile = {
  name: 'Raghvendra Pratap Singh',
  role: 'Full-Stack Engineer | Web Scraping Specialist | AI Tooling Developer',
  tagline:
    'Full-stack engineer building production scraping frameworks, AI-powered data pipelines, MCP servers, desktop security tools, and SaaS platforms — while studying medicine.',
  location: 'Serbia / India — Remote',
  portfolioUrl: 'https://raghvendra-portfolio.vercel.app',
  githubUrl: 'https://github.com/rps321321',
  email: 'prataprps321@gmail.com',
};

export const resumeSummary =
  'Full-stack engineer with 5+ years of freelance experience shipping production web apps, scraping frameworks, AI tooling, and desktop software. Built a middleware-based scraping framework with auto-escalation (HTTP to Playwright), LLM-powered extraction, and anti-detection systems. Designed microservices AI platforms with RAG pipelines, multi-provider LLM gateways, and vector search. Published an npm package (122 tests). Deployed production SaaS with payments, video calls, i18n, and monitoring. Currently a second-year medical student and co-author on a 2026 research paper.';

export const resumeEducation = [
  {
    degree: 'Doctor of Medicine (MD), English Program',
    institution: 'Faculty of Medicine, University of Nis, Serbia',
    period: '2024 – Present',
    detail: 'Second-year medical student. Co-author on 2026 research paper examining TikTok content in medical statistics education.',
  },
];

export const resumeSkills = {
  groups: [
    {
      label: 'Web Scraping',
      items: [
        'BeautifulSoup', 'Playwright', 'Selenium', 'Scrapy', 'Crawlee',
        'selectolax', 'parsel', 'httpx (HTTP/2)', 'Apify',
      ],
    },
    {
      label: 'AI / ML',
      items: [
        'OpenAI SDK', 'Google Gemini SDK', 'LiteLLM', 'sentence-transformers',
        'pgvector', 'Qdrant', 'Vercel AI SDK', 'OpenRouter', 'RAG pipelines',
      ],
    },
    {
      label: 'Backend',
      items: [
        'FastAPI', 'Express', 'Next.js (14-16)', 'Supabase', 'PostgreSQL',
        'SQLite', 'DuckDB', 'Redis', 'Docker Compose',
      ],
    },
    {
      label: 'Languages',
      items: [
        'Python', 'TypeScript', 'JavaScript', 'C#/.NET 8', 'C++', 'SQL', 'Bash',
      ],
    },
  ],
  supporting: [
    'MCP (Model Context Protocol)',
    'React 18-19',
    'Tailwind CSS',
    'Three.js',
    'Electron / Tauri',
    'PySide6 / Qt',
    'WinForms / P/Invoke / WMI',
    'FFmpeg audio DSP',
    'Socket.io',
    'PayPal / Daily.co / Resend',
    'Sentry / Upstash Redis',
    'n8n workflows',
    'PyInstaller / Nuitka',
    'Vitest / Jest / Playwright E2E / pytest',
  ],
};

export const resumeExperience = [
  {
    title: 'Freelance Software Engineer',
    period: '2020 – Present',
    bullets: [
      'Delivered production SaaS platforms (Next.js, FastAPI, Supabase) with PayPal payment processing, Daily.co video calls, Resend transactional email, Upstash rate limiting, and Sentry monitoring.',
      'Built Scalpel, a production web scraping framework with middleware pipeline (cache, proxy rotation, retry, throttle), auto-escalation from HTTP to Playwright, and LLM-powered extraction via OpenRouter/Ollama.',
      'Shipped TikTok Data Collector (39 releases) — Qt desktop app collecting 32+ fields with research-grade export (Excel/SPSS/R), proxy health scoring, rate limiting with jitter, and SQLite deduplication.',
      'Designed Elysium Sanctuary — microservices AI platform with 7-container Docker stack, LiteLLM multi-provider gateway (GPT-4o/Claude/Gemini), RAG pipeline, and document ingestion (PDF/DOCX/URL/YouTube/OCR).',
      'Published Obsidian MCP Pro to npm (v1.1.1, 122 tests) — 27+ tools for vault access including N-hop graph traversal.',
      'Built PC Guardian — Windows security scanner (.NET 8) with 16 native API checks including crypto miner detection, one-click quarantine, and built-in IT server.',
    ],
  },
];

export const resumeProjects = [
  {
    name: 'Scalpel — Production Web Scraping Framework',
    stack: 'Python, httpx, Playwright, OpenAI SDK, Pydantic, Typer CLI',
    description:
      'Middleware pipeline with auto-escalation (HTTP to Playwright), LLM-powered extraction, proxy circuit breakers, per-domain concurrency, tested against 12,000+ pages.',
  },
  {
    name: 'TikTok Data Collector (Released v39)',
    stack: 'Python, Qt, Playwright, SQLite, pandas, scipy',
    description:
      'Desktop GUI scraper with 32+ field export (Excel/SPSS/R), proxy health scoring, rate limiting with jitter, cron scheduler, and t-test statistical analysis.',
  },
  {
    name: 'Elysium Sanctuary — AI Knowledge Platform',
    stack: 'FastAPI, LiteLLM, pgvector, sentence-transformers, Docker, Next.js, Tauri',
    description:
      'Monorepo AI platform with RAG pipeline, multi-provider LLM gateway, document ingestion (PDF/DOCX/URL/YouTube/OCR), and 7-container Docker stack.',
  },
  {
    name: 'Neural Library Search — 45,000+ Books',
    stack: 'Python, FastAPI, sentence-transformers, Qdrant, CUDA, Docker',
    description:
      'GPU-accelerated semantic search over 45k eBooks. BeautifulSoup scraping, thread-safe CUDA embedding, Qdrant vector storage, resumable ingestion.',
  },
  {
    name: 'Obsidian MCP Pro (npm published)',
    stack: 'TypeScript, MCP SDK, gray-matter, Zod, Vitest',
    description:
      'Published npm package (v1.1.1, 122 tests) providing 27+ tools for AI vault access including graph traversal, full-text search, and canvas manipulation.',
  },
  {
    name: 'PC Guardian — Windows Security Scanner',
    stack: 'C#, .NET 8, WinForms, SQLite, P/Invoke, WMI',
    description:
      'Portable 65MB security scanner with 16 native API checks, crypto miner detection, one-click quarantine, PDF/HTML reports, and built-in IT server.',
  },
  {
    name: 'Vertex AI MCP — Multimodal AI Server',
    stack: 'Python, MCP, google-genai, Vertex AI SDK',
    description:
      'MCP server orchestrating Gemini image gen, Veo 3.1 video gen with long-polling, TTS with PCM-to-WAV conversion, and Gemini CLI agent management.',
  },
  {
    name: 'Blender MCP — Thread-Safe 3D Control',
    stack: 'Python, FastMCP, TCP sockets, bpy API',
    description:
      'Dual-threaded MCP server solving Blender single-thread constraint via background socket + main-thread timer polling architecture.',
  },
  {
    name: 'Nusic — Discord Music Bot + Dashboard',
    stack: 'discord.js, Express, Socket.io, FFmpeg, SQLite, passport-discord',
    description:
      'Full music bot with FFmpeg DSP pipeline (bassboost/nightcore/8D), real-time Socket.io web dashboard, Discord OAuth, SQLite playlists.',
  },
  {
    name: 'Elysium — AI Study Companion',
    stack: 'Next.js 15, React 19, Gemini SDK, InstantDB, Three.js',
    description:
      'AI study platform with streaming Gemini responses, rate limiting, 3D constellation backgrounds, real-time database sync.',
  },
];

export const cvSections = {
  education: [
    {
      heading: 'Doctor of Medicine (MD), English Program',
      meta: 'University of Nis, Faculty of Medicine, Serbia',
      detail: 'Second-year medical student (2024 – Present). Average: 8.17/10.',
    },
  ],
  research: [
    {
      heading: 'Co-Author, TikTok Content and Medical Statistics Education',
      meta: 'Faculty of Medicine, University of Nis, 2026',
      detail:
        'Built the Python + Playwright data collection workflow. Contributed structured data exports and analysis pipeline for the study.',
    },
  ],
  technical: [
    {
      heading: 'Web Scraping & Data Engineering',
      detail:
        'Production scraping framework (Scalpel) with middleware pipeline, auto-escalation, LLM extraction. TikTok scraper with 39 releases. 45k+ book semantic search engine.',
    },
    {
      heading: 'AI/ML & MCP Servers',
      detail:
        '3 production MCP servers (Blender, Vertex AI, Obsidian). RAG pipeline with pgvector. LiteLLM multi-provider gateway. Gemini/OpenAI/Anthropic integrations.',
    },
    {
      heading: 'Full-Stack & SaaS',
      detail:
        'Next.js 14-16, FastAPI, Supabase, PayPal payments, Daily.co video, Resend email, Upstash rate limiting, Sentry monitoring, i18n (3 languages).',
    },
    {
      heading: 'Desktop & Systems',
      detail:
        'Windows security scanner (.NET 8, 16 native API checks). Electron + Tauri desktop apps. Qt/PySide6 GUI applications. Docker Compose orchestration.',
    },
  ],
  additionalLearning: [
    {
      heading: 'Infrastructure & DevOps',
      detail:
        'Docker Compose multi-service stacks (up to 7 containers). n8n workflow automation with PostgreSQL/pgvector + Redis + Zep AI memory. Caddy auto-TLS.',
    },
  ],
  selectedWork: [
    'Scalpel — Scraping Framework',
    'TikTok Data Collector (v39)',
    'Elysium Sanctuary — AI Platform',
    'Neural Library Search (45k+ books)',
    'Obsidian MCP Pro (npm published)',
    'PC Guardian — Security Scanner',
    'Vertex AI MCP',
    'Blender MCP',
    'Nusic — Discord Music Bot',
    'Elysium — AI Study Companion',
  ],
};
