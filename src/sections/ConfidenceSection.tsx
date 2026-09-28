import {
  ShieldCheck,
  Percent,
  Sliders,
  Sparkles,
  Info,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { StatusBadge } from '../components/Badge'

export function ConfidenceSection() {
  const FACTORS = [
    {
      symbol: 'C_sensor',
      weight: 'w1 = 0.20',
      name: 'Sensor Radiometric Quality',
      value: '95%',
      desc: 'Evaluates signal-to-noise ratio (SNR), nodata pixel fraction, and atmospheric cloud cover occlusion index.',
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
      bar: 'w-[95%] bg-cyan-500',
    },
    {
      symbol: 'C_separability',
      weight: 'w2 = 0.35',
      name: 'Otsu Histogram Separability (η)',
      value: '93%',
      desc: 'Measures inter-class variance divided by total variance (η = σ_B² / σ_T²); rewards distinct bimodal distributions.',
      color: 'text-sky-500 bg-sky-500/10 border-sky-500/30',
      bar: 'w-[93%] bg-sky-500',
    },
    {
      symbol: 'C_alignment',
      weight: 'w3 = 0.20',
      name: 'Phase Co-Registration Peak',
      value: '96%',
      desc: 'Sub-pixel spatial alignment quality computed via frequency-domain normalized cross-power correlation peak.',
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
      bar: 'w-[96%] bg-purple-500',
    },
    {
      symbol: 'C_agreement',
      weight: 'w4 = 0.25',
      name: 'Dual Detector Consensus',
      value: '96%',
      desc: 'Agreement coefficient between independent spectral index change vectors and morphological edge verification.',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
      bar: 'w-[96%] bg-emerald-500',
    },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Trust Calibration"
        title="Multi-Factor Confidence Engine"
        subtitle="Confidence is never a hardcoded number or an uncalibrated neural softmax logit. It is dynamically computed from physical sensor health, mathematical histogram separability, and geometric alignment."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Formula Banner */}
      <div className="p-6 rounded-2xl bg-card border border-border shadow-md mb-12 text-center space-y-3">
        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
          Dynamic Mathematical Formulation
        </span>
        <div className="p-4 rounded-xl bg-muted/60 font-mono text-sm sm:text-base md:text-lg font-bold text-foreground overflow-x-auto">
          C_final = w₁ · C_sensor + w₂ · C_separability + w₃ · C_alignment + w₄ · C_agreement
        </div>
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          Weights are dynamically normalized to sum to 1.0 based on available sensor modalities and single vs bi-temporal query contexts.
        </p>
      </div>

      {/* 4 Factor Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {FACTORS.map((factor) => (
          <div
            key={factor.symbol}
            className="p-5 rounded-xl bg-card border border-border space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`px-2 py-0.5 rounded font-bold border ${factor.color}`}>
                  {factor.symbol}
                </span>
                <span className="text-muted-foreground">{factor.weight}</span>
              </div>
              <h4 className="text-sm font-bold text-foreground font-display pt-1">
                {factor.name}
              </h4>
            </div>

            {/* Visual Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-muted-foreground">Score</span>
                <span className="font-bold text-foreground">{factor.value}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${factor.bar}`} />
              </div>
            </div>

            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {factor.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Confidence Integrity Statement */}
      <div className="p-4 rounded-xl bg-card border border-border/80 flex items-start gap-3 text-xs text-muted-foreground">
        <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
        <p>
          <strong className="text-foreground">Honesty Guarantee:</strong> If cloud cover exceeds 40% or Otsu separability drops below 0.60, SatQuery AI dynamically downgrades its confidence level to <span className="font-mono text-amber-500 font-bold">MODERATE</span> or <span className="font-mono text-rose-500 font-bold">EVALUATING</span>, prompting the user for secondary SAR or atmospheric-corrected rasters.
        </p>
      </div>
    </section>
  )
}
