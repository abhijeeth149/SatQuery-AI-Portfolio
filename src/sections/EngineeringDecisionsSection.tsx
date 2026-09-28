import { useState } from 'react'
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { ARCHITECTURAL_DECISIONS } from '../data/decisions'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'

export function EngineeringDecisionsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Architectural Rationale"
        title="Key Engineering & Design Decisions"
        subtitle="Every architectural tradeoff in SatQuery AI was deliberate: prioritizing zero hallucination, computational frugality, and mathematical traceability over black-box generative approximations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARCHITECTURAL_DECISIONS.map((dec, idx) => (
          <div
            key={dec.question}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                <span className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-500 flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
                Decision Item
              </div>
              <h3 className="text-base font-bold text-foreground font-display">
                {dec.question}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {dec.rationale}
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-border/60 text-xs">
              <div className="flex items-start gap-2 text-muted-foreground">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong>Rejected Alternative:</strong> {dec.alternative}</span>
              </div>
              <div className="flex items-start gap-2 text-foreground font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>SatQuery AI Approach:</strong> {dec.whyChosen}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
