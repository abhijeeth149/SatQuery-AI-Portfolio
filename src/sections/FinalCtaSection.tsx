import {
  Satellite,
  Github,
  ExternalLink,
  Terminal,
  FileText,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { PROJECT_METADATA } from '../data/project'
import { Button } from '../components/Button'

export function FinalCtaSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-gradient-to-b from-card via-card to-cyan-950/30 border border-cyan-500/40 p-8 sm:p-12 md:p-16 text-center space-y-8 overflow-hidden shadow-2xl">
        {/* Subtle Ambient Radial Grid Glow */}
        <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold tracking-wider">
              {PROJECT_METADATA.sihProblemId}
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 text-xs font-mono font-semibold">
              ISRO Space Technology
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
              Smart India Hackathon 2026
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-display tracking-tight">
            Explore <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">SatQuery AI</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Experience the future of Earth Observation intelligence: natural language queries transformed into validated, multi-modal remote-sensing workflows with verifiable spatial evidence and full auditability.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
          {PROJECT_METADATA.liveDemoUrl ? (
            <a
              href={PROJECT_METADATA.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" icon={<ExternalLink className="w-5 h-5" />}>
                View Live Demo
              </Button>
            </a>
          ) : (
            <a href="#demo">
              <Button variant="primary" size="lg" icon={<Terminal className="w-5 h-5" />}>
                Launch Interactive Demo
              </Button>
            </a>
          )}

          <a
            href={PROJECT_METADATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" icon={<Github className="w-5 h-5" />}>
              Explore GitHub Repository
            </Button>
          </a>

          <a href="#trace">
            <Button variant="ghost" size="lg" icon={<FileText className="w-5 h-5" />}>
              Inspect Execution Trace
            </Button>
          </a>
        </div>

        {/* Bottom Integrity Bar */}
        <div className="relative z-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Deterministic Physics Indices
          </span>
          <span className="flex items-center gap-1.5">
            <Satellite className="w-4 h-4 text-cyan-500" /> Sentinel-1 SAR & Sentinel-2 Optical
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sky-500" /> 87.25% Verified Linear Probe
          </span>
        </div>
      </div>
    </section>
  )
}
