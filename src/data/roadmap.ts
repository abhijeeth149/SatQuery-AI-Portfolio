import { RoadmapPhase } from '../types'

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Baseline Geospatial & Ingestion Engine',
    status: 'COMPLETED',
    items: [
      { text: 'Native GeoTIFF / TIFF upload, multi-band raster parsing, RGB composite rendering', done: true },
      { text: 'Spectral index calculator (NDVI, NDWI, MNDWI, NDBI)', done: true },
      { text: 'Single-image VQA and land-cover estimation baseline', done: true },
      { text: 'FastAPI REST backend with OpenAPI contract documentation', done: true },
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Agentic Orchestration & Traceability',
    status: 'COMPLETED',
    items: [
      { text: 'Deterministic query classification and input metadata validation gate', done: true },
      { text: 'Model & Tool Registry with PREFERRED and FALLBACK tiers', done: true },
      { text: 'Multi-factor confidence scoring engine (separability + sensor quality)', done: true },
      { text: 'Observable execution trace JSON generation with step-by-step millisecond timings', done: true },
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Remote-Sensing Model Adaptation',
    status: 'COMPLETED',
    items: [
      { text: 'EuroSAT linear-probe training pipeline (satquery-rs-visual-v1) achieving 87.25% test accuracy', done: true },
      { text: 'Standalone CLI inference runner and checkpoint integrity verification', done: true },
      { text: 'Adversarial input testing and corrupted GeoTIFF error handling', done: true },
      { text: 'Integration of probe as specialized scene classification tool in registry', done: true },
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Bi-Temporal & Spatial Grounding Engine',
    status: 'COMPLETED',
    items: [
      { text: 'FFT-based phase-correlation co-registration and spatial alignment', done: true },
      { text: 'Change Vector Analysis (CVA) with dynamic MAD outlier thresholding', done: true },
      { text: 'Vector polygon contour extraction with compass quadrant localization', done: true },
      { text: 'Grounded change VQA synthesizing natural-language answers with exact hectares', done: true },
    ],
  },
  {
    phase: 'Phase 05',
    title: 'Optical + SAR Multimodal Fusion',
    status: 'COMPLETED',
    items: [
      { text: 'Multiplicative 7x7 Lee speckle filtering in linear power domain', done: true },
      { text: 'Scattering regime segmentation for specular water, diffuse vegetation, and urban double-bounce', done: true },
      { text: 'Physics-based decision-level arbitration resolving optical shadows with SAR radar backscatter', done: true },
      { text: 'Dual-mask geospatial synthesis and conflicting pixel telemetry log', done: true },
    ],
  },
  {
    phase: 'Phase 06',
    title: 'Foundation Model Scaling & STAC Streaming',
    status: 'PLANNED',
    items: [
      { text: 'Parameter-Efficient Fine-Tuning (PEFT / LoRA) on BigEarthNet.txt (464k scenes)', done: false },
      { text: 'Full PolSAR decomposition (Cloude-Pottier & Freeman-Durden)', done: false },
      { text: 'Real-time STAC API streaming for on-demand satellite constellation queries', done: false },
      { text: 'PostgreSQL + PostGIS distributed geospatial indexing at enterprise scale', done: false },
    ],
  },
]
