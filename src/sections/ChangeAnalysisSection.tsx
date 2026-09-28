import { useState } from 'react'
import {
  Clock,
  ArrowRight,
  TrendingUp,
  MapPin,
  Maximize2,
  CheckCircle2,
  Compass,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { StatusBadge } from '../components/Badge'
import { ScreenshotItem } from '../types'

interface ChangeAnalysisSectionProps {
  onOpenScreenshot: (screenshot: ScreenshotItem) => void
  screenshot: ScreenshotItem
}

export function ChangeAnalysisSection({ onOpenScreenshot, screenshot }: ChangeAnalysisSectionProps) {
  const [activeTab, setActiveTab] = useState<'flow' | 'math' | 'evidence'>('flow')

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Specialist Modality 02"
        title="See Change Over Time: Bi-Temporal CVA"
        subtitle="Co-registered multi-spectral change vector analysis with MAD outlier thresholding to detect, localize, and quantify temporal Earth surface transformations."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Demonstration Query Banner */}
      <div className="p-6 rounded-2xl bg-card border border-cyan-500/30 shadow-md mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Canonical SIH26167 Demonstration Query
            </span>
            <h3 className="text-base sm:text-lg font-bold text-foreground font-mono">
              “Has the built-up area increased, and can you show me where?”
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
              Result: +48.2 ha Expansion in NE Sector (94.2% Confidence)
            </span>
          </div>
        </div>
      </div>

      {/* Visual T1 vs T2 → Change Vector Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left: 5-Stage Temporal Pipeline */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-card border border-border space-y-1">
              <span className="text-cyan-500 font-bold">T1: Baseline Epoch</span>
              <p className="text-muted-foreground text-[11px]">Earlier acquisition with spectral indices (NDVI_T1, NDBI_T1)</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border space-y-1">
              <span className="text-sky-500 font-bold">T2: Current Epoch</span>
              <p className="text-muted-foreground text-[11px]">Later acquisition with identical UTM coordinate geometry</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold text-[11px]">1</span>
                <div>
                  <strong className="text-foreground">Phase-Correlation Co-Registration</strong>
                  <p className="text-muted-foreground text-[11px]">Sub-pixel alignment via FFT cross-power spectrum</p>
                </div>
              </div>
              <span className="font-mono text-emerald-500 font-semibold">&lt; 0.2px Shift</span>
            </div>

            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold text-[11px]">2</span>
                <div>
                  <strong className="text-foreground">Multi-Spectral Change Vector (CVA)</strong>
                  <p className="text-muted-foreground text-[11px]">Δρ = √((ΔNDVI)² + (ΔNDWI)² + (ΔNDBI)²)</p>
                </div>
              </div>
              <span className="font-mono text-cyan-500 font-semibold">Euclidean Δρ</span>
            </div>

            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold text-[11px]">3</span>
                <div>
                  <strong className="text-foreground">MAD-Based Outlier Slicing</strong>
                  <p className="text-muted-foreground text-[11px]">Threshold = Median(Δρ) + 1.4826 × MAD(Δρ)</p>
                </div>
              </div>
              <span className="font-mono text-purple-500 font-semibold">Dynamic Cutoff</span>
            </div>

            <div className="p-3.5 rounded-xl bg-card border border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center font-bold text-[11px]">4</span>
                <div>
                  <strong className="text-foreground">Spatial Contouring & Geodesy</strong>
                  <p className="text-muted-foreground text-[11px]">Vectorized change clusters with UTM affine projection</p>
                </div>
              </div>
              <span className="font-mono text-emerald-500 font-semibold">GeoJSON Polygons</span>
            </div>
          </div>
        </div>

        {/* Right: Real Change Analysis Showcase */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
            <div className="p-3.5 bg-muted/60 border-b border-border flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-foreground">
                Bi-Temporal Change Vector Output & Vector Contours
              </span>
              <button
                onClick={() => onOpenScreenshot(screenshot)}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div
              onClick={() => onOpenScreenshot(screenshot)}
              className="cursor-pointer overflow-hidden bg-slate-950"
            >
              <img
                src={screenshot.image}
                alt={screenshot.alt}
                className="w-full h-auto object-contain hover:scale-[1.01] transition-transform"
              />
            </div>
            <div className="p-3.5 bg-muted/30 border-t border-border text-xs font-mono flex items-center justify-between text-muted-foreground">
              <span>Transition: Agricultural → Built-up</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">48.2 Hectares Detected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
