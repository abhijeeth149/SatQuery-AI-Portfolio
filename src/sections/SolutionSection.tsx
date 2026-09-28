import {
  MessageSquare,
  Network,
  Cpu,
  ShieldCheck,
  Activity,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardContent } from '../components/Card'

export function SolutionSection() {
  const PIPELINE_NODES = [
    {
      num: '01',
      title: 'User Query & GeoTIFF',
      role: 'Natural language question + multi-spectral / SAR raster ingestion',
      icon: <MessageSquare className="w-5 h-5 text-cyan-500" />,
    },
    {
      num: '02',
      title: 'Validation & Intent Gate',
      role: 'CRS verification & deterministic query classification into RS task',
      icon: <FileCheck className="w-5 h-5 text-sky-500" />,
    },
    {
      num: '03',
      title: 'Agentic Tool Router',
      role: 'Dispatches query to PREFERRED spectral / neural specialist tools',
      icon: <Network className="w-5 h-5 text-purple-500" />,
    },
    {
      num: '04',
      title: 'Specialist RS Execution',
      role: 'Otsu indices, CVA change vector, Lee speckle filter, ResNet probe',
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    },
    {
      num: '05',
      title: 'Spatial Evidence & Contours',
      role: 'Vector contour extraction, geodesic surface area & compass sector',
      icon: <Activity className="w-5 h-5 text-amber-500" />,
    },
    {
      num: '06',
      title: 'Grounded Output & Trace',
      role: 'Natural language answer citing real computed stats + JSON audit log',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
    },
  ]

  return (
    <section id="solution" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="The Agentic Solution"
        title="Orchestration Layer + Specialist Remote-Sensing Engines"
        subtitle="SatQuery AI bridges natural language to rigorous Earth Observation physics by treating AI as an intelligent coordinator, not a black-box guessing machine."
      />

      {/* Core Architectural Insight Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-card to-sky-950/30 border border-cyan-500/40 shadow-xl mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Zero-Hallucination Principle
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
              The Agent Orchestrates — Specialists Compute
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We explicitly reject the anti-pattern of prompting an LLM to predict bounding boxes or pixel coordinates from raw tokens. Instead, the agent acts strictly as a <strong className="text-foreground">query classifier and tool dispatcher</strong>. All spatial contours, area calculations, change matrices, and spectral ratios are computed by <strong className="text-foreground">deterministic geospatial algorithms (GDAL, Rasterio, OpenCV) and calibrated neural linear probes</strong>.
            </p>
          </div>
          <div className="shrink-0 p-4 rounded-xl bg-muted/60 border border-border text-xs font-mono space-y-1">
            <div className="text-emerald-500 font-bold">✓ 0% Statistical Hallucination</div>
            <div className="text-cyan-400">✓ 100% Deterministic Fallback</div>
            <div className="text-muted-foreground">✓ Sub-pixel Spatial Precision</div>
          </div>
        </div>
      </div>

      {/* 6-Step Conceptual Horizontal Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {PIPELINE_NODES.map((node, i) => (
          <div
            key={node.num}
            className="relative p-5 rounded-xl bg-card border border-border flex flex-col justify-between space-y-4 hover:border-cyan-500/50 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                {node.num}
              </span>
              <div className="p-2 rounded-lg bg-muted/60">
                {node.icon}
              </div>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-foreground font-display">
                {node.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {node.role}
              </p>
            </div>

            {i < PIPELINE_NODES.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
