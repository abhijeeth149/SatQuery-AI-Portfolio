import { useState } from 'react'
import {
  Satellite,
  Sparkles,
  ArrowRight,
  Github,
  Maximize2,
  Terminal,
  Layers,
  Compass,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import { PROJECT_METADATA } from '../data/project'
import { StatusBadge } from '../components/Badge'
import { Button } from '../components/Button'
import { ScreenshotItem } from '../types'

interface HeroSectionProps {
  onOpenScreenshot: (screenshot: ScreenshotItem) => void
  heroScreenshot: ScreenshotItem
}

export function HeroSection({ onOpenScreenshot, heroScreenshot }: HeroSectionProps) {
  const [activeQueryIdx, setActiveQueryIdx] = useState(0)

  const EXAMPLE_QUERIES = [
    {
      q: '“Has the built-up area increased, and can you show me where?”',
      type: 'Bi-Temporal Change VQA',
      bands: 'Sentinel-2 (T1 vs T2)',
    },
    {
      q: '“Use optical and SAR imagery to identify built-up areas.”',
      type: 'Optical + SAR Fusion',
      bands: 'Sentinel-1 SAR + Sentinel-2 Optical',
    },
    {
      q: '“Highlight the water bodies and estimate total surface coverage.”',
      type: 'Spectral Grounding',
      bands: 'Sentinel-2 (B3/B8/B11)',
    },
  ]

  return (
    <section
      id="overview"
      className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-grid-tech"
    >
      {/* Geospatial Coordinate Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 py-1.5 px-4 rounded-full bg-muted/40 border border-border/80 text-[11px] font-mono text-muted-foreground backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" /> COORD: 12°58'23"N 77°35'45"E
            </span>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="hidden sm:inline-block">CRS: EPSG:32643 (UTM 43N)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              AGENTIC ENGINE ACTIVE
            </span>
            <span className="text-slate-400 hidden md:inline">· SENTINEL-1/2 INGESTION READY</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Hero Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold tracking-wider">
                {PROJECT_METADATA.sihProblemId}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 text-xs font-mono font-semibold">
                ISRO
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-xs font-mono font-semibold">
                SPACE TECHNOLOGY
              </span>
              <StatusBadge status="LIVE" />
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-display leading-[1.08]">
                SATQUERY <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">AI</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground tracking-tight">
                Interactive Vision-Language Intelligence for Remote Sensing
              </h2>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Ask questions about satellite imagery in natural language. SatQuery AI transforms queries into validated remote-sensing workflows and returns answers supported by <span className="text-foreground font-semibold">spatial evidence</span>, <span className="text-foreground font-semibold">confidence</span>, and an <span className="text-foreground font-semibold">auditable execution trace</span>.
            </p>

            {/* Interactive Query Prompt Bar */}
            <div className="p-3.5 rounded-xl bg-card border border-border shadow-sm space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold">
                  <Terminal className="w-3.5 h-3.5" /> NATURAL LANGUAGE QUERY SIMULATOR
                </span>
                <span className="text-xs">{activeQueryIdx + 1} / {EXAMPLE_QUERIES.length}</span>
              </div>
              <p className="text-sm font-mono text-foreground font-medium bg-muted/50 p-2.5 rounded-lg border border-border/60">
                {EXAMPLE_QUERIES[activeQueryIdx].q}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-muted-foreground">
                  Target: <strong className="text-foreground">{EXAMPLE_QUERIES[activeQueryIdx].type}</strong>
                </span>
                <div className="flex gap-1.5">
                  {EXAMPLE_QUERIES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveQueryIdx(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeQueryIdx === i ? 'w-6 bg-cyan-500' : 'bg-muted-foreground/30 hover:bg-muted-foreground'
                      }`}
                      aria-label={`Select query sample ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#demo">
                <Button variant="primary" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                  Explore the System
                </Button>
              </a>
              <a
                href={PROJECT_METADATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" icon={<Github className="w-4 h-4" />}>
                  View GitHub
                </Button>
              </a>
              <a href="#architecture">
                <Button variant="ghost" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Architecture
                </Button>
              </a>
            </div>

            {/* Core Value Statement Box */}
            <div className="pt-2 border-t border-border/60 flex items-start gap-2.5 text-xs text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="italic">
                "{PROJECT_METADATA.centralIdea}"
              </p>
            </div>
          </div>

          {/* Right Column: Featured Product UI Showcase */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Subtle ambient glow behind frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70" />

              {/* Product Frame */}
              <div className="relative rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
                {/* Frame Title Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-semibold text-foreground">
                      satquery-ai-workspace // live analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">
                      VERIFIED UI
                    </span>
                    <button
                      onClick={() => onOpenScreenshot(heroScreenshot)}
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      title="Inspect full-resolution screenshot"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Screenshot with Click to Zoom */}
                <div
                  onClick={() => onOpenScreenshot(heroScreenshot)}
                  className="relative cursor-pointer overflow-hidden group/img bg-slate-950 flex items-center justify-center"
                >
                  <img
                    src={heroScreenshot.image}
                    alt={heroScreenshot.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-mono border border-slate-700 flex items-center gap-1.5 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5" /> Click to Inspect Fullscreen
                    </span>
                  </div>
                </div>

                {/* Footer status bar */}
                <div className="px-4 py-2.5 bg-muted/40 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Modality: Multi-band GeoTIFF + SAR</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Confidence: 94.2% (Grounded)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
