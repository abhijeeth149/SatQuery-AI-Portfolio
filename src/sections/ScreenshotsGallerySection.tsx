import { useState } from 'react'
import {
  Maximize2,
  Layers,
  Sparkles,
  ExternalLink,
  Eye,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SCREENSHOTS } from '../data/screenshots'
import { StatusBadge } from '../components/Badge'
import { ScreenshotItem } from '../types'

interface ScreenshotsGallerySectionProps {
  onOpenScreenshot: (screenshot: ScreenshotItem) => void
}

export function ScreenshotsGallerySection({ onOpenScreenshot }: ScreenshotsGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const CATEGORIES = [
    { id: 'all', label: 'All Application Views' },
    { id: 'core', label: 'Mission Control' },
    { id: 'analysis', label: 'Workspace & Grounding' },
    { id: 'specialist', label: 'Optical + SAR' },
    { id: 'management', label: 'Models & History' },
    { id: 'benchmarks', label: 'Datasets & Evaluation' },
  ]

  const filteredScreenshots = activeCategory === 'all'
    ? SCREENSHOTS
    : SCREENSHOTS.filter((s) => s.category === activeCategory)

  return (
    <section id="screenshots" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Application Interface"
        title="Production UI & Geospatial Workspace"
        subtitle="Explore verified, real-world screenshots of the SatQuery AI web application, covering multi-modal workspaces, spectral grounding, fusion viewports, and model registries."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeCategory === cat.id
                ? 'bg-primary text-primary-foreground font-bold shadow-md'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreenshots.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenScreenshot(item)}
            className="group cursor-pointer rounded-2xl bg-card border border-border hover:border-cyan-500/50 shadow-sm hover:shadow-xl hover:shadow-cyan-950/10 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Screenshot Thumbnail */}
            <div className="relative aspect-video bg-slate-950 overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-mono border border-slate-700 flex items-center gap-1.5 shadow-lg">
                  <Maximize2 className="w-3 h-3" /> Inspect Screen
                </span>
              </div>
              <div className="absolute top-2.5 right-2.5">
                <StatusBadge status={item.status} size="sm" />
              </div>
            </div>

            {/* Content Metadata */}
            <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {item.capability}
                </span>
                <h3 className="text-base font-bold text-foreground font-display group-hover:text-cyan-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-border/60">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-muted text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
