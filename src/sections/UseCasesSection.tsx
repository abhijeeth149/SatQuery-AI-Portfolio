import {
  Sprout,
  Waves,
  Trees,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { USE_CASES } from '../data/useCases'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'

export function UseCasesSection() {
  const ICON_MAP: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-5 h-5 text-emerald-500" />,
    Waves: <Waves className="w-5 h-5 text-cyan-500" />,
    Trees: <Trees className="w-5 h-5 text-green-500" />,
    Building2: <Building2 className="w-5 h-5 text-sky-500" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-purple-500" />,
  }

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Real-World Impact Domains"
        title="Where SatQuery AI Can Help"
        subtitle="Bridging the gap between complex Earth Observation constellations and real-world environmental, disaster, agricultural, and urban decision-makers."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USE_CASES.map((uc) => (
          <div
            key={uc.id}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between space-y-4 hover:border-cyan-500/50 hover:shadow-lg transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-muted/60">
                  {ICON_MAP[uc.iconName] || <Sprout className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground font-display">
                    {uc.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground">{uc.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {uc.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-border/60">
              <div className="p-2.5 rounded-lg bg-muted/50 border border-border text-xs italic text-foreground">
                Ex: {uc.exampleQuery}
              </div>

              <div className="flex flex-wrap gap-1">
                {uc.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                  >
                    {m}
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
