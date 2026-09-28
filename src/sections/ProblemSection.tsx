import {
  AlertTriangle,
  Layers,
  Clock,
  GraduationCap,
  ArrowRight,
  Check,
  X,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { COMPARISON_MATRIX, PROBLEM_PILLARS } from '../data/project'

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="The Geospatial Bottleneck"
        title="Extracting Answers from Satellite Rasters Is Broken"
        subtitle="Earth observation data is exponentially growing, but querying it currently requires GIS doctorates, disconnected software packages, and manual band mathematics."
      />

      {/* 4 Core Problem Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {PROBLEM_PILLARS.map((pillar) => {
          return (
            <Card key={pillar.title} variant="interactive" className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-2">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <CardTitle className="text-base">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Visual Contrast: Traditional GIS Pipeline vs SatQuery AI Agentic Flow */}
      <div className="rounded-2xl bg-muted/40 border border-border p-6 sm:p-10 mb-16">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground text-center mb-8">
          Workflow Contrast: Fragmentation vs Unified Agentic Intelligence
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Workflow */}
          <div className="space-y-4 p-6 rounded-xl bg-card border border-red-500/30">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                Traditional GIS Workflow
              </span>
              <span className="text-xs font-mono text-muted-foreground">High Friction / Hours</span>
            </div>
            <div className="space-y-3 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">1</span>
                <span>Download massive raw Sentinel-1/2 L1C/L2A SAFE archives</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">2</span>
                <span>Open QGIS / SNAP desktop software & calibrate radiometry</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">3</span>
                <span>Manually script raster math (e.g. NIR-Red / NIR+Red)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">4</span>
                <span>Trace vector polygons manually for spatial reporting</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">5</span>
                <span>Draft written report with non-auditable subjective metrics</span>
              </div>
            </div>
          </div>

          {/* SatQuery AI Workflow */}
          <div className="space-y-4 p-6 rounded-xl bg-card border border-cyan-500/40 shadow-lg shadow-cyan-950/10">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> SatQuery AI Agentic Flow
              </span>
              <span className="text-xs font-mono text-emerald-500 font-semibold">Zero Friction / &lt;200ms</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 text-foreground border border-cyan-500/20">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">1</span>
                <span>Ask question in natural language: <em>“What changed and where?”</em></span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 text-foreground border border-cyan-500/20">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">2</span>
                <span>Agentic controller validates GeoTIFF & classifies intent</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 text-foreground border border-cyan-500/20">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">3</span>
                <span>Dispatches specialist models (CVA, Lee Filter, ResNet Probe)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 text-foreground border border-cyan-500/20">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">4</span>
                <span>Extracts vector contour polygons and calculated surface areas</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-cyan-500/10 text-foreground border border-cyan-500/20">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">5</span>
                <span>Emits grounded answer + multi-factor confidence + JSON audit trace</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Architectural Comparison Matrix Table */}
      <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
        <div className="p-6 bg-muted/40 border-b border-border">
          <h3 className="text-lg font-bold text-foreground font-display">
            Deep-Dive Architectural Comparison Matrix
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Why SatQuery AI outperforms both generic commercial VLMs and manual legacy GIS tools.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-muted/80 text-muted-foreground font-mono uppercase text-[11px] tracking-wider border-b border-border">
              <tr>
                <th className="py-3.5 px-6 font-semibold">Evaluation Dimension</th>
                <th className="py-3.5 px-6 font-semibold text-rose-500">Generic VLM / Chatbot</th>
                <th className="py-3.5 px-6 font-semibold text-amber-500">Traditional Desktop GIS</th>
                <th className="py-3.5 px-6 font-semibold text-cyan-500">SatQuery AI Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {COMPARISON_MATRIX.map((row) => (
                <tr key={row.dimension} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-foreground font-mono">
                    {row.dimension}
                  </td>
                  <td className="py-3.5 px-6 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 text-rose-400">
                      <X className="w-3.5 h-3.5 shrink-0" /> {row.genericVLM}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-muted-foreground">
                    {row.traditionalGIS}
                  </td>
                  <td className="py-3.5 px-6 font-medium text-foreground bg-cyan-500/5">
                    <span className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold">
                      <Check className="w-4 h-4 shrink-0 text-emerald-500" /> {row.satQueryAI}
                    </span>
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
