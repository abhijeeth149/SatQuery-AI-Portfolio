import {
  Eye,
  Crosshair,
  FileText,
  Activity,
  Layers,
  Sparkles,
  Maximize2,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { StatusBadge } from '../components/Badge'
import { ScreenshotItem } from '../types'

interface SingleImageSectionProps {
  onOpenScreenshot: (screenshot: ScreenshotItem) => void
  screenshot: ScreenshotItem
}

export function SingleImageSection({ onOpenScreenshot, screenshot }: SingleImageSectionProps) {
  const CAPABILITIES = [
    {
      title: 'Visual Question Answering (VQA)',
      icon: <Eye className="w-5 h-5 text-cyan-500" />,
      flow: 'Question + Multi-band GeoTIFF → Physics Tree → Calibrated Answer',
      desc: 'Answers land-cover, canopy density, and scene composition queries by dynamically calculating spectral index distributions and class ratios.',
      example: '“What is the predominant land-cover in this Sentinel-2 tile?”',
    },
    {
      title: 'Dense Scene Captioning',
      icon: <FileText className="w-5 h-5 text-sky-500" />,
      flow: 'Multi-band GeoTIFF → Otsu Decision Tree → Structured Scene Description',
      desc: 'Synthesizes concise geographic summaries outlining urban density, surface water presence, and agricultural health without manual polygon inspection.',
      example: '“Generate a comprehensive environmental summary of this scene.”',
    },
    {
      title: 'Text-Guided Spatial Grounding',
      icon: <Crosshair className="w-5 h-5 text-emerald-500" />,
      flow: 'Target Entity Query → Binary Mask → GeoJSON Contours + Compass Sector',
      desc: 'Delineates exact geographical boundaries of queried entities (water bodies, built-up clusters, forests), extracting vector contours and geodesic surface areas.',
      example: '“Highlight the water bodies and estimate total surface coverage.”',
    },
  ]

  const SPECTRAL_FORMULAS = [
    {
      name: 'NDVI (Vegetation)',
      formula: 'NDVI = (B8_NIR - B4_Red) / (B8_NIR + B4_Red)',
      desc: 'Isolates photosynthetic chlorophyll reflection from bare soil & urban concrete.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20',
    },
    {
      name: 'NDWI (Open Water)',
      formula: 'NDWI = (B3_Green - B8_NIR) / (B3_Green + B8_NIR)',
      desc: 'Leverages high NIR absorption and green water reflection to extract lakes & rivers.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20',
    },
    {
      name: 'NDBI (Built-up Areas)',
      formula: 'NDBI = (B11_SWIR - B8_NIR) / (B11_SWIR + B8_NIR)',
      desc: 'Highlights impervious artificial surfaces, concrete roads, and commercial roofs.',
      color: 'border-rose-500/40 text-rose-400 bg-rose-950/20',
    },
  ]

  return (
    <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Specialist Modality 01"
        title="Single-Image Optical Intelligence"
        subtitle="Spectral decision trees, dynamic Otsu thresholding, and text-guided vector contour extraction for Sentinel-2 MSI multispectral rasters."
        badge={<StatusBadge status="LIVE" />}
      />

      {/* 3 Core Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {CAPABILITIES.map((cap) => (
          <Card key={cap.title} variant="interactive" className="h-full flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-muted/60">
                  {cap.icon}
                </div>
                <StatusBadge status="LIVE" />
              </div>
              <CardTitle className="text-base">{cap.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-2.5 rounded-lg bg-muted/50 border border-border text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                {cap.flow}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {cap.desc}
              </p>
              <div className="p-2 rounded bg-background border border-border text-xs italic text-foreground">
                Ex: {cap.example}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Spectral Indices & Screenshot Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Mathematical Rigor */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
              Physics-Grounded Spectral Tree & Otsu Slicing
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unlike LLMs that guess surface types from RGB pixels, SatQuery AI calculates calibrated band ratios directly from raw reflectance channels (B2, B3, B4, B8, B11). Otsu adaptive slicing dynamically computes the optimal bimodal threshold per scene.
            </p>
          </div>

          <div className="space-y-3">
            {SPECTRAL_FORMULAS.map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-xl border ${item.color} space-y-1.5`}
              >
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span>{item.name}</span>
                </div>
                <div className="font-mono text-xs font-semibold text-foreground bg-background/60 p-2 rounded border border-border/40">
                  {item.formula}
                </div>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real Application Screenshot */}
        <div className="lg:col-span-6">
          <div className="relative group rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
            <div className="p-3 bg-muted/60 border-b border-border flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-foreground">
                Output: Grounded Spatial Mask & Vector Contours
              </span>
              <button
                onClick={() => onOpenScreenshot(screenshot)}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                title="Fullscreen inspection"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div
              onClick={() => onOpenScreenshot(screenshot)}
              className="cursor-pointer overflow-hidden bg-slate-950 relative"
            >
              <img
                src={screenshot.image}
                alt={screenshot.alt}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-3 bg-muted/30 border-t border-border text-[11px] font-mono text-muted-foreground flex justify-between items-center">
              <span>Class Distribution: 62.4% Veg / 18.2% Water / 12.1% Urban</span>
              <span className="text-emerald-500 font-bold">Otsu Separability: 0.94</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
