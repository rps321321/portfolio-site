import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, Download, GraduationCap } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { documentDisplay, documentSans } from '@/lib/document-fonts';
import { resumeProfile } from '@/lib/resume-data';

export const metadata: Metadata = {
  title: 'Resume And CV',
  description:
    'Professional resume and curriculum vitae for Raghvendra Pratap Singh.',
};

export default function ResumePage() {
  return (
    <div
      className={`${documentSans.variable} ${documentDisplay.variable} document-stage max-w-6xl mx-auto space-y-10 py-8`}
    >
      <FadeIn direction="down">
        <div className="document-toolbar">
          <div>
            <span className="document-eyebrow">Document Center</span>
            <h1>Resume And CV</h1>
            <p>Two polished document versions of the same story: one optimized for hiring review, one for broader academic and technical context.</p>
          </div>
          <div className="document-actions">
            <div className="document-stat">2 Formats</div>
            <div className="document-stat">PDF Ready</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="hud-panel p-6 border-l-4 border-l-primary bg-black/60">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            The resume is the sharper option for the Mindrift scraping roles. The CV keeps the wider
            picture visible, including medical training, research contribution, and the broader
            software work behind the portfolio.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid lg:grid-cols-2 gap-8">
        <StaggerItem>
          <div className="hud-panel h-full flex flex-col p-8 bg-black/60">
            <div className="flex items-center justify-between mb-6 border-b border-primary/20 pb-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">Resume</h2>
                  <p className="text-[10px] tracking-widest text-primary">ROLE-FOCUSED PDF</p>
                </div>
              </div>
              <Link
                href="/documents/raghvendra-pratap-singh-resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-300 hover:text-primary transition-colors uppercase"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
            </div>

            <p className="text-sm text-gray-400 font-mono leading-relaxed mb-6">
              Tuned for scraping, browser automation, AI tooling, and research-oriented technical
              roles.
            </p>

            <div className="space-y-3 text-sm text-gray-400 font-mono flex-grow">
              <div className="border-l-2 border-primary/30 pl-4">{resumeProfile.role}</div>
              <div className="border-l-2 border-primary/30 pl-4">
                Built around Python, Playwright, structured exports, MCP tooling, and research work.
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                Best fit for the Mindrift scraping-focused roles.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-primary/20 flex items-center gap-4">
              <Link
                href="/resume/resume"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase hover:text-white transition-colors"
              >
                Open Resume
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="hud-panel h-full flex flex-col p-8 bg-black/60">
            <div className="flex items-center justify-between mb-6 border-b border-secondary/20 pb-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">Curriculum Vitae</h2>
                  <p className="text-[10px] tracking-widest text-secondary">BROADER PDF</p>
                </div>
              </div>
              <Link
                href="/documents/raghvendra-pratap-singh-cv.pdf"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-300 hover:text-secondary transition-colors uppercase"
              >
                <Download className="h-4 w-4" />
                Download
              </Link>
            </div>

            <p className="text-sm text-gray-400 font-mono leading-relaxed mb-6">
              Broader academic and technical profile including education, research, and selected
              engineering work.
            </p>

            <div className="space-y-3 text-sm text-gray-400 font-mono flex-grow">
              <div className="border-l-2 border-secondary/30 pl-4">
                Medical training, research contribution, and technical breadth.
              </div>
              <div className="border-l-2 border-secondary/30 pl-4">
                Covers the wider project range behind the portfolio.
              </div>
              <div className="border-l-2 border-secondary/30 pl-4">
                Useful when a reviewer wants more than the role-specific resume.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-secondary/20 flex items-center gap-4">
              <Link
                href="/resume/cv"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-secondary uppercase hover:text-white transition-colors"
              >
                Open CV
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}
