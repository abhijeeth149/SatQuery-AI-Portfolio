import { useState } from 'react'
import {
  Activity,
  CheckCircle2,
  Clock,
  Code,
  FileText,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Terminal,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { CodeBlock } from '../components/CodeBlock'
import { StatusBadge } from '../components/Badge'

export function ExecutionTraceSection() {
  const [showJsonTrace, setShowJsonTrace] = useState(false)

  const TRACE_STEPS = [
    {
      step: 1,
      name: 'InputValidator',
      duration: '12ms',
      status: 'PASSED',
      desc: 'Validated GeoTIFF headers, CRS (EPSG:32643), 4 spectral channels, and nodata boundaries.',
    },
    {
      step: 2,
      name: 'QueryClassifier',
      duration: '4ms',
      status: 'PASSED',
      desc: 'Mapped natural-language prompt to BI_TEMPORAL_CHANGE_VQA task intent (confidence 0.98).',
    },
    {
      step: 3,
      name: 'ToolRegistryRouter',
      duration: '1ms',
      status: 'PASSED',
      desc: 'Dispatched PREFERRED specialist pipeline: cva-change-detector + change-vqa-engine.',
    },
    {
      step: 4,
      name: 'PhaseCoRegistration',
      duration: '22ms',
      status: 'PASSED',
      desc: 'FFT phase correlation computed shift dx=0.12px, dy=-0.08px; alignment verified.',
    },
    {
      step: 5,
      name: 'ChangeVectorExecution',
      duration: '168ms',
      status: 'PASSED',
      desc: 'Computed Euclidean Δρ tensor across NDVI/NDWI/NDBI planes; applied 1.4826×MAD threshold.',
    },
    {
      step: 6,
      name: 'EvidenceExtraction',
      duration: '38ms',
      status: 'PASSED',
      desc: 'Extracted vector contours, geodesic area (+48.2 ha), and compass bearing (North-East quadrant).',
    },
    {
      step: 7,
      name: 'ConfidenceSynthesis',
      duration: '8ms',
      status: 'PASSED',
      desc: 'Multi-factor confidence computed at 0.942; synthesized natural-language response.',
    },
  ]

  const FULL_TRACE_JSON = `{
  "trace_id": "tr_9a8f21c0_sih26167",
  "timestamp": "2026-09-29T02:24:18.412Z",
  "query": "Has the built-up area increased, and can you show me where?",
  "total_latency_ms": 253,
  "status": "COMPLETED",
  "steps": [
    {
      "step": 1,
      "component": "InputValidator",
      "status": "PASSED",
      "duration_ms": 12,
      "metadata": { "format": "GeoTIFF", "crs": "EPSG:32643", "channels": 4, "pair_compatible": true }
    },
    {
      "step": 2,
      "component": "QueryClassifier",
      "status": "PASSED",
      "duration_ms": 4,
      "metadata": { "intent": "CHANGE_VQA", "modality": "BI_TEMPORAL", "confidence": 0.98 }
    },
    {
      "step": 3,
      "component": "ToolRegistry",
      "status": "PASSED",
      "duration_ms": 1,
      "metadata": { "dispatched_tools": ["cva-change-detector", "change-vqa-engine"] }
    },
    {
      "step": 4,
      "component": "PhaseCoRegistration",
      "status": "PASSED",
      "duration_ms": 22,
      "metadata": { "peak_correlation": 0.962, "subpixel_shift_px": 0.14 }
    },
    {
      "step": 5,
      "component": "ChangeVectorExecution",
      "status": "PASSED",
      "duration_ms": 168,
      "metadata": { "changed_pixels": 48200, "mad_threshold": 0.312, "area_ha": 48.2 }
    },
    {
      "step": 6,
      "component": "EvidenceExtraction",
      "status": "PASSED",
      "duration_ms": 38,
      "metadata": { "vector_polygons": 2, "quadrant": "North-East", "dominant_transition": "Agri -> Urban" }
    },
    {
      "step": 7,
      "component": "ConfidenceSynthesis",
      "status": "PASSED",
      "duration_ms": 8,
      "metadata": { "composite_score": 0.942, "otsu_separability": 0.93, "consensus": 0.96 }
    }
  ]
}`

  return (
    <section id="trace" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Observable AI Architecture"
        title="Every Answer Has an Auditable Trace"
        subtitle="Full transparency for mission-critical Earth observation. Every inference yields an end-to-end telemetry trace recording step-by-step millisecond latencies and intermediate tensor states."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* Trace Telemetry Header */}
      <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-md mb-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-cyan-500" />
          <span className="text-muted-foreground">Trace ID:</span>
          <span className="text-foreground font-bold">tr_9a8f21c0_sih26167</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>Total Latency: <strong className="text-emerald-500">253 ms</strong></span>
          <span>Status: <strong className="text-emerald-500">7/7 PASSED</strong></span>
        </div>
      </div>

      {/* Observability Timeline Steps */}
      <div className="space-y-3 mb-8">
        {TRACE_STEPS.map((s) => (
          <div
            key={s.step}
            className="p-4 rounded-xl bg-card border border-border hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start sm:items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-muted text-foreground flex items-center justify-center font-mono font-bold text-xs shrink-0">
                0{s.step}
              </span>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground">
                  <span>{s.name}</span>
                  <span className="text-emerald-500 font-normal">[{s.status}]</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
            <div className="shrink-0 font-mono text-xs text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md self-end sm:self-center">
              ⏱ {s.duration}
            </div>
          </div>
        ))}
      </div>

      {/* Collapsible Structured JSON Trace Inspector */}
      <div className="space-y-3">
        <button
          onClick={() => setShowJsonTrace(!showJsonTrace)}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
        >
          {showJsonTrace ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          <span>{showJsonTrace ? 'Hide Structured Audit Trace JSON' : 'Inspect Complete Audit Trace JSON'}</span>
        </button>

        {showJsonTrace && (
          <div className="animate-fadeIn">
            <CodeBlock
              code={FULL_TRACE_JSON}
              language="json"
              title="satquery_execution_trace_audit.json"
              maxHeight="450px"
            />
          </div>
        )}
      </div>
    </section>
  )
}
