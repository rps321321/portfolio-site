import { Metadata } from 'next';
import Link from 'next/link';
import { Download, ExternalLink } from 'lucide-react';
import { documentDisplay, documentSans } from '@/lib/document-fonts';
import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeProjects,
  resumeSkills,
  resumeSummary,
} from '@/lib/resume-data';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume for Raghvendra Pratap Singh.',
};

export default function ResumeDocumentPage() {
  return (
    <div
      className={`${documentSans.variable} ${documentDisplay.variable} document-stage max-w-6xl mx-auto py-8`}
    >
      <div className="screen-only document-toolbar mb-6">
        <div>
          <span className="document-eyebrow">Document / Resume</span>
          <h1>Professional Resume</h1>
          <p>Built for recruiter review, browser sharing, and clean PDF export.</p>
        </div>
        <div className="document-actions">
          <div className="document-stat">Role-Focused</div>
          <div className="document-stat">A4 Export</div>
          <Link
            href="/documents/raghvendra-pratap-singh-resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-3 bg-primary text-black text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>
      </div>

      <article className="print-page">
        <header className="print-header">
          <div>
            <p className="print-kicker">Resume</p>
            <h1 className="print-name">{resumeProfile.name}</h1>
            <p className="print-role">{resumeProfile.role}</p>
            <p className="print-lead">{resumeProfile.tagline}</p>
            <div className="print-contact-row">
              <span className="print-contact-item">
                <span className="print-contact-label">Location</span>
                <span className="print-contact-value">{resumeProfile.location}</span>
              </span>
              <span className="print-contact-item">
                <span className="print-contact-label">GitHub</span>
                <span className="print-contact-value">github.com/rps321321</span>
              </span>
              <span className="print-contact-item">
                <span className="print-contact-label">Portfolio</span>
                <span className="print-contact-value">raghvendra-portfolio.vercel.app</span>
              </span>
            </div>
          </div>
          <div className="print-meta">
            <span className="print-meta-label">Availability</span>
            <div>{resumeProfile.location}</div>
            <span className="print-meta-label">Links</span>
            <div>
              <a href={resumeProfile.githubUrl} target="_blank" rel="noreferrer">
                {resumeProfile.githubUrl}
              </a>
            </div>
            {resumeProfile.portfolioUrl ? (
              <div>
                <a href={resumeProfile.portfolioUrl} target="_blank" rel="noreferrer">
                  {resumeProfile.portfolioUrl}
                </a>
              </div>
            ) : null}
          </div>
        </header>

        <div className="print-editorial-rule" />

        <section className="print-focus-strip">
          <div className="print-focus-item">
            <span className="print-focus-label">Primary Focus</span>
            <span className="print-focus-value">Python scraping, browser automation, and structured data workflows.</span>
          </div>
          <div className="print-focus-item">
            <span className="print-focus-label">Research Context</span>
            <span className="print-focus-value">University co-author on TikTok and medical statistics education research.</span>
          </div>
          <div className="print-focus-item">
            <span className="print-focus-label">Tooling Strength</span>
            <span className="print-focus-value">MCP, exports, desktop tools, and practical AI-facing developer systems.</span>
          </div>
        </section>

        <section className="resume-layout">
          <aside className="resume-sidebar print-side-panel">
            <section className="print-section print-card">
              <h2>Professional Summary</h2>
              <p>{resumeSummary}</p>
            </section>

            <section className="print-section print-card">
              <h2>Core Skills</h2>
              <div className="space-y-4">
                {resumeSkills.groups.map((group) => (
                  <div key={group.label}>
                    <p className="print-group-label">{group.label}</p>
                    <div className="print-chip-list">
                      {group.items.map((skill) => (
                        <span key={skill} className="print-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="print-divider" />
              <p className="print-group-label">Supporting</p>
              <div className="print-chip-list">
                {resumeSkills.supporting.map((skill) => (
                  <span key={skill} className="print-chip print-chip-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="print-section print-card">
              <h2>Education</h2>
              <div className="space-y-4">
                {resumeEducation.map((item) => (
                  <div key={item.degree}>
                    <div className="print-row">
                      <h3>{item.degree}</h3>
                      <span className="print-period">{item.period}</span>
                    </div>
                    <p className="print-stack">{item.institution}</p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="resume-main">
            <section className="print-section">
              <h2>Relevant Experience</h2>
              <div className="print-entry-list">
                {resumeExperience.map((item, index) => (
                  <div key={item.title} className="print-entry-card">
                    <div className="print-entry-top">
                      <span className="print-entry-index">{String(index + 1).padStart(2, '0')}</span>
                      <div className="print-entry-copy">
                        <div className="print-row">
                          <h3>{item.title}</h3>
                          <span className="print-period">{item.period}</span>
                        </div>
                        <ul className="print-list">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-section">
              <h2>Selected Projects</h2>
              <div className="print-entry-list compact">
                {resumeProjects.map((project, index) => (
                  <div key={project.name} className="print-entry-card project-card">
                    <div className="print-entry-top">
                      <span className="print-entry-index">{String(index + 1).padStart(2, '0')}</span>
                      <div className="print-entry-copy">
                        <h3>{project.name}</h3>
                        <p className="print-stack">{project.stack}</p>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-section">
              <h2>Links</h2>
              <div className="print-links">
                <a href="https://github.com/rps321321/tiktok-scraper" target="_blank" rel="noreferrer">
                  TikTok Scraper Repo <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href="https://github.com/rps321321/obsidian-mcp-pro" target="_blank" rel="noreferrer">
                  Obsidian MCP Repo <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href="https://github.com/rps321321/pc-guardian" target="_blank" rel="noreferrer">
                  PC Guardian Repo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}
