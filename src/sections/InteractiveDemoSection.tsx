import { useState } from 'react'
import {
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Terminal,
  Compass,
  MapPin,
  Layers,
  Activity,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { DEMO_SCENARIOS } from '../data/scenarios'
import { StatusBadge } from '../components/Badge'
import { Button } from '../components/Button'

export function InteractiveDemoSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0)
  const [simulating, setSimulating] = useState(false)
  const [currentStep, setCurrentStep] = useState(6)

  const scenario = DEMO_SCENARIOS[activeScenarioIdx]

  const handleRunSimulation = (idx: number) => {
    setActiveScenarioIdx(idx)
    setSimulating(true)
    setCurrentStep(1)

    setTimeout(() => setCurrentStep(2), 350)
    setTimeout(() => setCurrentStep(3), 700)
    setTimeout(() => setCurrentStep(4), 1100)
    setTimeout(() => setCurrentStep(5), 1500)
    setTimeout(() => {
      setCurrentStep(6)
      setSimulating(false)
    }, 1900)
  }

  return (
    <section id="demo" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Interactive Simulation"
        title="Live End-to-End Case Study Walkthrough"
        subtitle="Simulate the complete lifecycle: choose a scenario, watch the agentic controller validate inputs, dispatch specialist models, extract spatial evidence, and synthesize an auditable answer."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {DEMO_SCENARIOS.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => handleRunSimulation(idx)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeScenarioIdx === idx
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-cyan-950/20'
                : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            {s.title}
          </button>
        ))}
      </div>

      {/* Simulation Workspace Container */}
      <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
        {/* Workspace Top Bar */}
        <div className="p-4 sm:p-6 bg-muted/50 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase">{scenario.mode}</span>
              <span className="text-muted-foreground">· Task: {scenario.task}</span>
            </div>
            <p className="text-base sm:text-lg font-mono font-bold text-foreground">
              “{scenario.query}”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleRunSimulation(activeScenarioIdx)}
              disabled={simulating}
              icon={simulating ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            >
              {simulating ? 'Executing Pipeline...' : 'Re-Run Simulation'}
            </Button>
          </div>
        </div>

        {/* Workspace Body: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left Column: Live Step-by-Step Pipeline */}
          <div className="lg:col-span-5 p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-border">
              <span className="font-bold text-muted-foreground uppercase">Agentic Execution Pipeline</span>
              <span className="text-cyan-600 dark:text-cyan-400">{currentStep} / {scenario.steps.length} Steps</span>
            </div>

            <div className="space-y-3">
              {scenario.steps.map((step, idx) => {
                const isPassed = currentStep >= idx + 1
                const isCurrent = currentStep === idx + 1 && simulating

                return (
                  <div
                    key={step.name}
                    className={`p-3.5 rounded-xl border text-xs transition-all ${
                      isCurrent
                        ? 'bg-cyan-500/10 border-cyan-500 shadow-md animate-pulse'
                        : isPassed
                        ? 'bg-muted/40 border-border/80'
                        : 'bg-muted/10 border-border/30 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono font-bold text-foreground flex items-center gap-1.5">
                        {isPassed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full border border-muted-foreground flex items-center justify-center text-[9px]">
                            {idx + 1}
                          </span>
                        )}
                        {step.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {step.durationMs}ms
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed pl-5">
                      {step.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Synthesized Evidence & Answer */}
          <div className="lg:col-span-7 p-6 space-y-6">
            {/* Grounded Text Answer */}
            <div className="space-y-2 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Synthesized Grounded Response
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-bold">
                  Confidence: {scenario.confidence}
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground font-sans leading-relaxed pt-1">
                {scenario.answer}
              </p>
            </div>

            {/* Spatial Evidence Metrics */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-500" /> Spatial Distribution & Contours
              </h4>

              <div className="space-y-2">
                {scenario.evidence.distribution.map((d) => (
                  <div key={d.label} className="space-y-1 text-xs font-mono">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-muted-foreground">{d.label}</span>
                      <span className="font-bold text-foreground">{d.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${d.percentage}%`, backgroundColor: d.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grounded Polygons & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-muted/40 border border-border text-xs space-y-1">
                <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                  <Compass className="w-3 h-3 text-cyan-500" /> Detected Location
                </span>
                <p className="font-bold text-foreground font-mono">{scenario.location}</p>
                <p className="text-[11px] text-muted-foreground">Area: {scenario.area}</p>
              </div>

              <div className="p-3 rounded-xl bg-muted/40 border border-border text-xs space-y-1">
                <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                  <Layers className="w-3 h-3 text-emerald-500" /> Dispatched Specialists
                </span>
                <p className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 truncate">
                  {scenario.tools.join(', ')}
                </p>
                <p className="text-[11px] text-emerald-500 font-semibold">100% Deterministic Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
