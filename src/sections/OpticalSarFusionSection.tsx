import {
  Radio,
  Layers,
  Sparkles,
  Maximize2,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { StatusBadge } from '../components/Badge'
import { ScreenshotItem } from '../types'

interface OpticalSarFusionSectionProps {
  onOpenScreenshot: (screenshot: ScreenshotItem) => void
  screenshot: ScreenshotItem
}

export function OpticalSarFusionSection({ onOpenScreenshot, screenshot }: OpticalSarFusionSectionProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Specialist Modality 03"
        title="Optical + SAR Cross-Modal Fusion"
        subtitle="Uniting Sentinel-2 optical surface reflectance with Sentinel-1 SAR C-band radar backscatter to eliminate optical cloud shadows and resolve complex terrain boundaries."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Demonstration Query Banner */}
      <div className="p-6 rounded-2xl bg-card border border-border shadow-md mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-pink-500" /> Cross-Modal SIH26167 Demonstration Query
            </span>
            <h3 className="text-base sm:text-lg font-bold text-foreground font-mono">
              “Use optical and SAR imagery to identify built-up areas.”
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-mono font-bold">
              Radar Double-Bounce: &gt; -6 dB Arbitrated Over Shadows
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        {/* Left: Multimodal Physics Arbitration */}
        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-4 rounded-xl bg-card border border-cyan-500/30 space-y-1">
              <span className="text-cyan-500 font-bold">OPTICAL (Sentinel-2)</span>
              <p className="text-muted-foreground text-[11px]">
                Chemical / Spectral Reflection (Chlorophyll NIR reflection, SWIR water absorption).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-pink-500/30 space-y-1">
              <span className="text-pink-500 font-bold">SAR (Sentinel-1 C-Band)</span>
              <p className="text-muted-foreground text-[11px]">
                Structural / Dielectric Roughness (Double-bounce corner reflection from buildings).
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
              <div className="flex items-center justify-between font-mono font-bold text-foreground">
                <span>Multiplicative Lee MMSE Speckle Filter</span>
                <span className="text-pink-400 font-mono">7x7 Kernel</span>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Applied across the linear power domain (P = 10^(σ⁰/10)) to remove radar granular speckle without degrading sharp building edges or coastlines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border space-y-1.5">
              <div className="flex items-center justify-between font-mono font-bold text-foreground">
                <span>Decision-Level Physical Rule Arbitration</span>
                <span className="text-emerald-400 font-mono">Zero False Positives</span>
              </div>
              <ul className="text-muted-foreground text-[11px] space-y-1 list-disc pl-4">
                <li><strong className="text-foreground">Built-up / Urban:</strong> SAR double-bounce radar backscatter (&gt; -6 dB) overrides optical cloud shadows.</li>
                <li><strong className="text-foreground">Water Bodies:</strong> Optical SWIR absorption + SAR specular low backscatter ensures zero false alarms.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Real Application Screenshot */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
            <div className="p-3.5 bg-muted/60 border-b border-border flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-foreground">
                Cross-Modal Fusion Viewport & Conflict Arbitration
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
              <span>Modality: Sentinel-1 VV/VH + Sentinel-2 MSI</span>
              <span className="text-pink-500 font-bold">Fused Area: 146.6 ha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
