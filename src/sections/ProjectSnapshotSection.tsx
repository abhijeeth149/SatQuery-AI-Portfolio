import {
  FileText,
  Building,
  Orbit,
  Cpu,
  Layers,
  CheckCircle,
} from 'lucide-react'
import { PROJECT_METADATA } from '../data/project'

export function ProjectSnapshotSection() {
  const SNAPSHOT_ITEMS = [
    {
      label: 'SIH Problem',
      value: PROJECT_METADATA.sihProblemId,
      detail: 'Smart India Hackathon 2026',
      icon: <FileText className="w-5 h-5 text-cyan-500" />,
    },
    {
      label: 'Organization',
      value: 'ISRO',
      detail: 'Indian Space Research Organisation',
      icon: <Building className="w-5 h-5 text-sky-500" />,
    },
    {
      label: 'Domain',
      value: 'Space Technology',
      detail: 'Earth Observation & Multimodal AI',
      icon: <Orbit className="w-5 h-5 text-purple-500" />,
    },
    {
      label: 'Core Technology',
      value: 'Vision-Language + RS + Agentic AI',
      detail: 'Deterministic Routing & Physics Math',
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    },
    {
      label: 'Input Modalities',
      value: 'GeoTIFF / SAR / Optical + Query',
      detail: 'Sentinel-1, Sentinel-2, Bi-temporal',
      icon: <Layers className="w-5 h-5 text-amber-500" />,
    },
    {
      label: 'System Outputs',
      value: 'Evidence + Confidence + Trace',
      detail: 'Zero-hallucination grounded responses',
      icon: <CheckCircle className="w-5 h-5 text-rose-500" />,
    },
  ]

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-card border border-border shadow-xl p-6 sm:p-8 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          {SNAPSHOT_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={`space-y-1.5 ${index > 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-foreground font-display leading-snug">
                {item.value}
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
