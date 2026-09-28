import {
  BookOpen,
  Award,
  CheckCircle2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { RESEARCH_DATASETS, MODEL_ADAPTATION_SPECS } from '../data/research'
import { StatusBadge } from '../components/Badge'

export function ResearchAdaptationSection() {
  return (
    <section id="research" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Scientific Rigor & ML Adaptation"
        title="Datasets & Remote-Sensing Adaptation"
        subtitle="Transparent evaluation, authentic linear-probe model training logs on Sentinel-2 optical data, and standardized remote-sensing benchmarks."
      />

      {/* Real EuroSAT ResNet-18 Linear Probe Spotlight */}
      <div className="p-6 sm:p-8 rounded-2xl bg-card border border-cyan-500/40 shadow-xl mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <StatusBadge status="LIVE" />
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                satquery-rs-visual-v1 Checkpoint
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
              Real EuroSAT ResNet-18 Linear Probe Adaptation
            </h3>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 font-mono">
              87.25%
            </div>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
              Top-1 Test Accuracy (349 / 400 correct)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Base Backbone</span>
            <p className="font-bold text-foreground">{MODEL_ADAPTATION_SPECS.baseBackbone}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Trainable Params</span>
            <p className="font-bold text-foreground">{MODEL_ADAPTATION_SPECS.trainableParameters}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Dataset Split</span>
            <p className="font-bold text-foreground">{MODEL_ADAPTATION_SPECS.dataPartition}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted/40 border border-border space-y-1">
            <span className="text-muted-foreground text-[10px] uppercase">Saved Checkpoint</span>
            <p className="font-bold text-foreground truncate">{MODEL_ADAPTATION_SPECS.checkpointSize}</p>
          </div>
        </div>

        {/* Honesty Note */}
        <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border flex items-start gap-2.5 text-xs text-muted-foreground">
          <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-foreground">Honesty Guarantee:</strong> {MODEL_ADAPTATION_SPECS.honestyPledge}
          </p>
        </div>
      </div>

      {/* Dataset & Benchmark Landscape Table */}
      <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
        <div className="p-6 bg-muted/40 border-b border-border">
          <h3 className="text-lg font-bold text-foreground font-display">
            Dataset Landscape & Remote Sensing Research Foundation
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Documented peer-reviewed benchmark datasets with their respective roles in SatQuery AI.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-muted/80 text-muted-foreground font-mono uppercase text-[11px] tracking-wider border-b border-border">
              <tr>
                <th className="py-3 px-6 font-semibold">Dataset Name</th>
                <th className="py-3 px-6 font-semibold">Sensor Modality</th>
                <th className="py-3 px-6 font-semibold">Scale & Structure</th>
                <th className="py-3 px-6 font-semibold">Role in SatQuery AI</th>
                <th className="py-3 px-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {RESEARCH_DATASETS.map((ds) => (
                <tr key={ds.name} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-foreground font-display">
                    {ds.name}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-xs text-muted-foreground">
                    {ds.modality}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-muted-foreground">
                    {ds.scale}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-foreground">
                    {ds.roleInSatQuery}
                  </td>
                  <td className="py-3.5 px-6">
                    <StatusBadge status={ds.status} />
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
