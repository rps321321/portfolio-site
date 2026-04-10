import { Metadata } from 'next';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { documentDisplay, documentSans } from '@/lib/document-fonts';
import { cvSections, resumeProfile } from '@/lib/resume-data';

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Curriculum vitae for Raghvendra Pratap Singh.',
};

export default function CvDocumentPage() {
  return (
    <div
      className={`${documentSans.variable} ${documentDisplay.variable} document-stage max-w-6xl mx-auto py-8`}
    >
      <div className="screen-only document-toolbar mb-6">
        <div>
          <span className="document-eyebrow">Document / Curriculum Vitae</span>
          <h1>Curriculum Vitae</h1>
          <p>Broader academic and technical record designed to complement the role-focused resume.</p>
        </div>
        <div className="document-actions">
          <div className="document-stat">Academic Context</div>
          <div className="document-stat">A4 Export</div>
          <Link
            href="/documents/raghvendra-pratap-singh-cv.pdf"
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
            <p className="print-kicker">Curriculum Vitae</p>
            <h1 className="print-name">{resumeProfile.name}</h1>
            <p className="print-role">Curriculum Vitae</p>
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
            <span className="print-meta-label">Location</span>
            <div>{resumeProfile.location}</div>
            <span className="print-meta-label">GitHub</span>
            <div>{resumeProfile.githubUrl}</div>
            {resumeProfile.portfolioUrl ? <div>{resumeProfile.portfolioUrl}</div> : null}
          </div>
        </header>

        <section className="print-focus-strip">
          <div className="print-focus-item">
            <span className="print-focus-label">Education</span>
            <span className="print-focus-value">MD student in the English program at the University of Nis.</span>
          </div>
          <div className="print-focus-item">
            <span className="print-focus-label">Research</span>
            <span className="print-focus-value">Co-author on a university paper linking TikTok content and medical statistics education.</span>
          </div>
          <div className="print-focus-item">
            <span className="print-focus-label">Build Profile</span>
            <span className="print-focus-value">Scraping, MCP tooling, desktop systems, and research-support workflows.</span>
          </div>
        </section>

        <section className="cv-grid">
          <div className="cv-main">
            <section className="print-section">
              <h2>Education</h2>
              <div className="space-y-4">
                {cvSections.education.map((item) => (
                  <div key={item.heading}>
                    <h3>{item.heading}</h3>
                    <p className="print-stack">{item.meta}</p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-section">
              <h2>Research</h2>
              <div className="space-y-4">
                {cvSections.research.map((item, index) => (
                  <div key={item.heading}>
                    {index > 0 ? <div className="print-divider" /> : null}
                    <div className="pt-3">
                      <h3>{item.heading}</h3>
                      <p className="print-stack">{item.meta}</p>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="cv-side">
            <section className="print-section print-card">
              <h2>Technical Focus</h2>
              <div className="space-y-4">
                {cvSections.technical.map((item) => (
                  <div key={item.heading}>
                    <h3>{item.heading}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-section print-card">
              <h2>Additional Learning</h2>
              <div className="space-y-4">
                {cvSections.additionalLearning.map((item) => (
                  <div key={item.heading}>
                    <h3>{item.heading}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-section print-card">
              <h2>Selected Work</h2>
              <ul className="print-list">
                {cvSections.selectedWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </article>
    </div>
  );
}
