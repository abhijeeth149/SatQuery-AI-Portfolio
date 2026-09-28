import {
  ShieldCheck,
  Compass,
  Layers,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { CodeBlock } from '../components/CodeBlock'
import { Card, CardContent } from '../components/Card'
import { StatusBadge } from '../components/Badge'

export function EvidenceSection() {
  const EVIDENCE_JSON = `{
  "answer": "Significant built-up expansion detected in the North-East quadrant (+48.2 ha) transitioning from agricultural/bare soil to urban infrastructure between T1 and T2.",
  "spatial_evidence": {
    "dominant_class": "Urban / Built-up Expansion",
    "class_distribution_percent": {
      "Built-up Expansion": 48.2,
      "Unchanged Vegetation": 38.5,
      "Unchanged Water": 8.3,
      "Bare Soil": 5.0
    },
    "grounded_regions": [
      {
        "entity": "Urban Expansion Cluster Alpha",
        "bounding_box_px": [142, 88, 390, 240],
        "geodesic_area_km2": 0.32,
        "geodesic_area_ha": 32.0,
        "compass_quadrant": "North-East",
        "centroid_geo": { "lat": 12.9784, "lon": 77.6012 },
        "geojson_feature": "Polygon (42 vertices)"
      }
    ]
  },
  "confidence": {
    "composite_score": 0.942,
    "confidence_level": "HIGH",
    "factors": {
      "otsu_separability_eta": 0.93,
      "sensor_snr_db": 24.8,
      "registration_peak": 0.962,
      "two_detector_agreement": 0.96
    }
  }
}`

  return (
    <section id="evidence" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Zero Hallucination Proof"
        title="Answers with Verifiable Spatial Evidence"
        subtitle="SatQuery AI rejects uncalibrated generative text. Every response is mathematically bound to computed raster masks, vector contours, geodesic surface areas, and compass sectors."
        badge={<StatusBadge status="LIVE" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: Explanation & Evidence Components */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
              Beyond Unverifiable Chatbot Answers
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When asked <em>“Has development increased?”</em>, standard VLMs emit persuasive text without spatial anchors. SatQuery AI delivers a composite bundle: the natural-language response is mathematically corroborated by closed polygon contours, land-cover percentages, and coordinate bounds.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-card border border-border space-y-1">
              <div className="flex items-center gap-2 font-bold text-xs text-foreground">
                <MapPin className="w-4 h-4 text-cyan-500" /> Exact Geodesic Area Calculation
              </div>
              <p className="text-xs text-muted-foreground">
                Converts pixel counts directly to square kilometers and hectares via GeoTIFF affine transform matrices.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border space-y-1">
              <div className="flex items-center gap-2 font-bold text-xs text-foreground">
                <Compass className="w-4 h-4 text-sky-500" /> Compass Quadrant Localization
              </div>
              <p className="text-xs text-muted-foreground">
                Translates pixel coordinate clusters into human-understandable spatial references (e.g. <em>“North-East quadrant”</em>).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border space-y-1">
              <div className="flex items-center gap-2 font-bold text-xs text-foreground">
                <Layers className="w-4 h-4 text-emerald-500" /> Vector GeoJSON Polygons
              </div>
              <p className="text-xs text-muted-foreground">
                Emits GIS-ready vector geometries for instant export into QGIS, ArcGIS, or Leaflet mapping viewports.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Structured Evidence JSON Display */}
        <div className="lg:col-span-7">
          <CodeBlock
            code={EVIDENCE_JSON}
            language="json"
            title="spatial_evidence_contract.json"
            maxHeight="520px"
          />
        </div>
      </div>
    </section>
  )
}
