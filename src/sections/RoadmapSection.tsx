import {
  CheckCircle2,
  CircleDashed,
  Sparkles,
  Milestone,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { ROADMAP_PHASES } from '../data/roadmap'
import { StatusBadge } from '../components/Badge'

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Development Milestones"
        title="Phased Engineering Roadmap"
        subtitle="Transparent progress tracking from baseline multi-band GeoTIFF ingestion to multimodal optical-SAR fusion and future foundation model adaptation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROADMAP_PHASES.map((phase) => {
          const isCompleted = phase.status === 'COMPLETED'
          return (
            <div
              key={phase.phase}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-4 transition-all ${
                isCompleted
                  ? 'bg-card border-border hover:border-emerald-500/40'
                  : 'bg-card/70 border-dashed border-border/90 hover:border-blue-500/40'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {phase.phase}
                  </span>
                  <StatusBadge status={phase.status} />
                </div>
                <h3 className="text-base font-bold text-foreground font-display">
                  {phase.title}
                </h3>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/60">
                {phase.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    {item.done ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <CircleDashed className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    )}
                    <span className={item.done ? 'text-foreground' : 'text-muted-foreground'}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
