import { useState } from 'react'
import {
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { TECH_STACK } from '../data/technology'
import { StatusBadge } from '../components/Badge'

export function TechStackSection() {
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'LIVE' | 'RESEARCH' | 'PLANNED'>('ALL')

  return (
    <section id="technology" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Technology Foundation"
        title="Full Engineering & Geospatial Stack"
        subtitle="Engineered with industry-standard scientific libraries, modern asynchronous backend runtimes, and verified remote-sensing neural adaptation models."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {(['ALL', 'LIVE', 'RESEARCH', 'PLANNED'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              filterStatus === status
                ? 'bg-primary text-primary-foreground font-bold shadow-md'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            {status === 'ALL' ? 'All Technologies' : `${status} Stack`}
          </button>
        ))}
      </div>

      {/* Technology Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_STACK.map((category) => {
          const filteredItems = filterStatus === 'ALL'
            ? category.items
            : category.items.filter((item) => item.status === filterStatus || (filterStatus === 'LIVE' && item.status === 'CURRENT'))

          if (filteredItems.length === 0) return null

          return (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all"
            >
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-foreground font-display">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-border/60">
                {filteredItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-xs font-mono"
                  >
                    <div>
                      <span className={`font-bold ${item.highlight ? 'text-cyan-600 dark:text-cyan-400' : 'text-foreground'}`}>
                        {item.name}
                      </span>
                      <p className="text-[11px] text-muted-foreground font-sans">{item.role}</p>
                    </div>
                    <StatusBadge status={item.status} size="sm" />
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
