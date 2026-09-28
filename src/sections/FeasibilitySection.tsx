import {
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Scale,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { FEASIBILITY_MATRIX } from '../data/feasibility'

export function FeasibilitySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Implementation Assessment"
        title="Feasibility & Viability Matrix"
        subtitle="A realistic engineering assessment of the technical, operational, financial, and scalability dimensions of the SatQuery AI system."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEASIBILITY_MATRIX.map((item) => (
          <div
            key={item.dimension}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" /> {item.dimension}
              </span>
              <p className="text-xs text-foreground leading-relaxed">
                {item.feasibility}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-300">
              <strong className="block font-mono text-[10px] uppercase text-emerald-500 mb-0.5">Viability Impact</strong>
              {item.viability}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
