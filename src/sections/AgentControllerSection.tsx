import { useState } from 'react'
import {
  GitBranch,
  Network,
  Cpu,
  Layers,
  ArrowDown,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { MODEL_REGISTRY } from '../data/architecture'
import { StatusBadge } from '../components/Badge'

export function AgentControllerSection() {
  const [filterTask, setFilterTask] = useState<string>('ALL')

  const TASKS = ['ALL', 'SINGLE_VQA', 'GROUNDING', 'SCENE_CLASSIFICATION', 'CHANGE_ANALYSIS', 'CHANGE_VQA', 'OPTICAL_SAR_FUSION']

  const filteredModels = filterTask === 'ALL'
    ? MODEL_REGISTRY
    : MODEL_REGISTRY.filter((m) => m.task === filterTask)

  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Task Routing & Model Registry"
        title="The Agentic Controller"
        subtitle="SatQuery AI treats question answering as an intelligent dispatch problem across a verified registry of specialist mathematical and neural tools."
      />

      {/* Visual Flowchart: Agentic Controller Hierarchy */}
      <div className="p-6 sm:p-10 rounded-2xl bg-card border border-border shadow-lg mb-16">
        <h3 className="text-lg font-bold font-display text-foreground text-center mb-8">
          Deterministic Task Routing & Fallback Hierarchy
        </h3>

        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto text-xs font-mono">
          {/* Query Input */}
          <div className="w-full sm:w-2/3 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center text-foreground font-semibold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            Natural Language Query + Ingested GeoTIFF Rasters
          </div>

          <ArrowDown className="w-4 h-4 text-muted-foreground" />

          {/* Classifier */}
          <div className="w-full sm:w-2/3 p-3 rounded-xl bg-muted border border-border text-center text-muted-foreground">
            <strong className="text-foreground">Agent Intent Classifier</strong> (Parses query keywords, temporal modality, and sensor metadata)
          </div>

          <ArrowDown className="w-4 h-4 text-muted-foreground" />

          {/* Model Registry Router */}
          <div className="w-full p-4 rounded-xl bg-card border border-border shadow-md">
            <div className="text-center font-bold text-foreground mb-3 flex items-center justify-center gap-2">
              <Network className="w-4 h-4 text-cyan-500" /> Model Registry Dispatcher
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300">
                <div className="font-bold">Single-Image Optical</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Spectral Indices / Grounding</div>
              </div>
              <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-300">
                <div className="font-bold">Bi-Temporal CVA</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Change Vectors / Area Math</div>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300">
                <div className="font-bold">Optical + SAR Fusion</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Lee Filter / Radar Backscatter</div>
              </div>
            </div>
          </div>

          <ArrowDown className="w-4 h-4 text-muted-foreground" />

          {/* Output Evidence & Trace */}
          <div className="w-full sm:w-2/3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center text-foreground font-semibold">
            Spatial Vector Contours + Multi-Factor Confidence + Execution Trace JSON
          </div>
        </div>
      </div>

      {/* Model Registry Matrix */}
      <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
        <div className="p-6 bg-muted/40 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground font-display">
              Model & Tool Registry Directory
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Strictly cataloged tools with execution tiers, modalities, and verified status.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {TASKS.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTask(t)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-lg transition-colors ${
                  filterTask === t
                    ? 'bg-primary text-primary-foreground font-bold'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-muted/80 text-muted-foreground font-mono uppercase text-[11px] tracking-wider border-b border-border">
              <tr>
                <th className="py-3 px-6 font-semibold">Task & ID</th>
                <th className="py-3 px-6 font-semibold">Input Modality</th>
                <th className="py-3 px-6 font-semibold">Output Type</th>
                <th className="py-3 px-6 font-semibold">Engine / Algorithm</th>
                <th className="py-3 px-6 font-semibold">Tier</th>
                <th className="py-3 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredModels.map((m) => (
                <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-6 font-medium text-foreground">
                    <div className="font-bold">{m.task}</div>
                    <div className="text-[11px] font-mono text-muted-foreground">{m.id}</div>
                  </td>
                  <td className="py-3.5 px-6 text-muted-foreground font-mono text-xs">
                    {m.inputModality}
                  </td>
                  <td className="py-3.5 px-6 text-muted-foreground text-xs">
                    {m.outputType}
                  </td>
                  <td className="py-3.5 px-6 font-medium text-foreground text-xs">
                    {m.engine}
                  </td>
                  <td className="py-3.5 px-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      m.tier === 'PREFERRED' ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400' :
                      m.tier === 'FALLBACK' ? 'bg-slate-500/15 text-slate-500' : 'bg-purple-500/15 text-purple-500'
                    }`}>
                      {m.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-6">
                    <StatusBadge status={m.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
