import { useState } from 'react'
import {
  Layers,
  Sparkles,
  Cpu,
  ShieldCheck,
  Network,
  Activity,
  ArrowDown,
  Info,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { ARCHITECTURE_LAYERS } from '../data/architecture'
import { StatusBadge } from '../components/Badge'

export function ArchitectureSection() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('controller')

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0]

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="System Blueprint"
        title="Tiered System Architecture"
        subtitle="A modular, decoupled architecture pairing a high-performance React 18 / TypeScript frontend with a FastAPI asynchronous gateway, an agentic task router, and specialized remote-sensing execution engines."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Layer Stack Diagram (Clickable Layers) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: Layer Selector Stack */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-2">
            Click Layer to Inspect Components:
          </span>
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const isSelected = selectedLayerId === layer.id
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-card border-cyan-500 shadow-lg shadow-cyan-950/15 ring-1 ring-cyan-500/50'
                    : 'bg-card/60 border-border/80 hover:bg-card hover:border-cyan-500/40 text-muted-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-muted text-foreground flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className={`text-sm font-bold font-display ${isSelected ? 'text-foreground' : 'text-foreground/80'}`}>
                      {layer.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">{layer.subtitle}</p>
                  </div>
                </div>
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-500' : 'text-muted-foreground/50'}`}>
                  →
                </span>
              </button>
            )
          })}
        </div>

        {/* Right: Selected Layer Component Inspection Panel */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Layer Inspection: {selectedLayer.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display mt-0.5">
                {selectedLayer.name}
              </h3>
            </div>
            <StatusBadge status="LIVE" />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {selectedLayer.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              Encapsulated Subsystems & Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedLayer.components.map((comp) => (
                <div
                  key={comp.name}
                  className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-foreground">{comp.name}</span>
                    <StatusBadge status={comp.status} size="sm" />
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-tight">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
