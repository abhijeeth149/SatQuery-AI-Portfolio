import {
  FileCheck,
  CheckCircle2,
  Compass,
  Maximize2,
  Layers,
  Clock,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { StatusBadge } from '../components/Badge'

export function ValidationSection() {
  const CHECKS = [
    {
      name: 'Format & Headers',
      tag: 'TIFF / GeoTIFF',
      desc: 'Validates TIFF magic bytes, endianness, multi-band directory tags, and nodata value headers.',
      icon: <FileCheck className="w-4 h-4 text-cyan-500" />,
      status: 'PASSED',
    },
    {
      name: 'Raster Dimensions',
      tag: 'Resolution & Grid',
      desc: 'Verifies pixel matrix dimensions (e.g. 512x512, 1024x1024) and uniform ground sample distance (GSD).',
      icon: <Maximize2 className="w-4 h-4 text-sky-500" />,
      status: 'PASSED',
    },
    {
      name: 'CRS & Projection',
      tag: 'EPSG / UTM / WGS84',
      desc: 'Parses spatial reference tags via GDAL bindings; triggers automatic on-the-fly affine re-projection.',
      icon: <Compass className="w-4 h-4 text-purple-500" />,
      status: 'PASSED',
    },
    {
      name: 'Spatial Overlap & Bounding',
      tag: 'Intersection > 95%',
      desc: 'Evaluates polygon bounding intersection between multi-image pairs to prevent spatial boundary mismatch.',
      icon: <Layers className="w-4 h-4 text-emerald-500" />,
      status: 'PASSED',
    },
    {
      name: 'Modality & Spectral Bands',
      tag: 'Channel Verification',
      desc: 'Detects RGB, 4-band RGB-NIR, 12-band MSI, or dual-pol SAR (VV/VH) channels for specialized engine dispatch.',
      icon: <Layers className="w-4 h-4 text-amber-500" />,
      status: 'PASSED',
    },
    {
      name: 'Temporal Consistency',
      tag: 'Epoch Order T1 < T2',
      desc: 'Validates capture timestamps and radiometric calibration baseline compatibility for change vectors.',
      icon: <Clock className="w-4 h-4 text-rose-500" />,
      status: 'PASSED',
    },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/60">
      <SectionHeader
        eyebrow="Input & Metadata Gate"
        title="Automated 6-Point Validation Pipeline"
        subtitle="Before allocating GPU or mathematical compute, every uploaded GeoTIFF raster is subjected to strict geometric and radiometric integrity checks."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* 6-Point Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {CHECKS.map((chk, i) => (
          <div
            key={chk.name}
            className="p-5 rounded-xl bg-card border border-border space-y-3 hover:border-cyan-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-xs font-mono font-bold text-foreground">{chk.name}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 text-[10px] font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {chk.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {chk.desc}
            </p>
            <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
              Contract: {chk.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Validation Result Banner */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4" /> ALL VALIDATION GATES PASSED (12ms execution)
        </div>
        <div className="text-muted-foreground">
          Ready for Specialist Remote-Sensing Dispatch
        </div>
      </div>
    </section>
  )
}
