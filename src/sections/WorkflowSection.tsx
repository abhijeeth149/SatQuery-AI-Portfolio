import { useState } from 'react'
import {
  Upload,
  CheckCircle,
  Layers,
  Sparkles,
  GitFork,
  Compass,
  Cpu,
  Activity,
  ShieldCheck,
  MessageSquare,
  FileCode,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { LIFECYCLE_STEPS } from '../data/architecture'
import { StatusBadge } from '../components/Badge'

export function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState(3) // Default to step 4 (0-indexed 3)

  const STEP_ICONS = [
    Upload,
    CheckCircle,
    Layers,
    Sparkles,
    GitFork,
    Compass,
    Cpu,
    Activity,
    ShieldCheck,
    MessageSquare,
    FileCode,
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Observable Lifecycle"
        title="How SatQuery AI Works: 11-Step Pipeline"
        subtitle="Every query undergoes an auditable 11-stage processing sequence from multi-band GeoTIFF ingestion to structured JSON trace export."
      />

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2 mb-8">
        {LIFECYCLE_STEPS.map((step, idx) => {
          const Icon = STEP_ICONS[idx] || Cpu
          const isSelected = selectedStep === idx
          return (
            <button
              key={step.step}
              onClick={() => setSelectedStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-500 text-cyan-600 dark:text-cyan-300 shadow-md shadow-cyan-950/10'
                  : 'bg-card border-border text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[11px] font-mono font-bold">{step.step}</span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-500' : 'text-muted-foreground'}`} />
              </div>
              <span className="text-xs font-semibold line-clamp-1">{step.name}</span>
            </button>
          )
        })}
      </div>

      {/* Step Detail Spotlight Card */}
      {selectedStep !== null && (
        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                {LIFECYCLE_STEPS[selectedStep].step}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">
                  Stage {LIFECYCLE_STEPS[selectedStep].step}: {LIFECYCLE_STEPS[selectedStep].name}
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  Engine: {LIFECYCLE_STEPS[selectedStep].engine}
                </span>
              </div>
            </div>
            <StatusBadge status={LIFECYCLE_STEPS[selectedStep].status} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                Operation Specification
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {LIFECYCLE_STEPS[selectedStep].role}
              </p>
            </div>
            <div className="bg-muted/40 rounded-xl p-4 border border-border space-y-2 text-xs font-mono">
              <div className="text-muted-foreground"># Deterministic Execution Contract</div>
              <div className="text-cyan-600 dark:text-cyan-300">
                &gt; Status: <strong>VERIFIED</strong> | Max Latency Budget: <strong>250ms</strong>
              </div>
              <div className="text-muted-foreground">
                &gt; Output Schema: <strong>Pydantic V2 Type-Safe Contract</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
