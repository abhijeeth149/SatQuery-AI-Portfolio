import { useEffect } from 'react'
import { X, ZoomIn, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { ScreenshotItem } from '../types'
import { StatusBadge } from './Badge'

interface ScreenshotModalProps {
  screenshot: ScreenshotItem | null
  screenshots: ScreenshotItem[]
  onClose: () => void
  onSelect: (screenshot: ScreenshotItem) => void
}

export function ScreenshotModal({ screenshot, screenshots, onClose, onSelect }: ScreenshotModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!screenshot) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') {
        const currentIndex = screenshots.findIndex((s) => s.id === screenshot.id)
        if (currentIndex < screenshots.length - 1) onSelect(screenshots[currentIndex + 1])
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = screenshots.findIndex((s) => s.id === screenshot.id)
        if (currentIndex > 0) onSelect(screenshots[currentIndex - 1])
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [screenshot, screenshots, onClose, onSelect])

  if (!screenshot) return null

  const currentIndex = screenshots.findIndex((s) => s.id === screenshot.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < screenshots.length - 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/90 backdrop-blur-md transition-all animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col bg-card border border-border rounded-2xl shadow-2xl overflow-hidden text-card-foreground">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div className="flex items-center gap-3">
            <StatusBadge status={screenshot.status} />
            <h3 className="text-lg font-bold text-foreground font-display">{screenshot.title}</h3>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
              [{currentIndex + 1} / {screenshots.length}]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={screenshot.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              title="Open raw image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="relative group bg-slate-950/50 rounded-xl overflow-hidden border border-border flex items-center justify-center min-h-[360px]">
            <img
              src={screenshot.image}
              alt={screenshot.alt}
              className="max-h-[65vh] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
            {/* Nav Arrows */}
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(screenshots[currentIndex - 1])
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg border border-slate-700 transition-transform active:scale-95"
                title="Previous screenshot (Left arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(screenshots[currentIndex + 1])
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg border border-slate-700 transition-transform active:scale-95"
                title="Next screenshot (Right arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Capability: {screenshot.capability}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {screenshot.caption}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {screenshot.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-3.5 border border-border space-y-2">
              <h5 className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-cyan-500" /> Key UI Highlights
              </h5>
              <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                {screenshot.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-snug">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
