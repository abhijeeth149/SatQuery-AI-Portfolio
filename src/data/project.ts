export const PROJECT_METADATA = {
  title: 'SatQuery AI',
  subtitle: 'An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries',
  sihProblemId: 'SIH26167',
  sihYear: '2026',
  theme: 'Space & Technology',
  organization: 'Indian Space Research Organisation (ISRO)',
  domain: 'Space Technology / Earth Observation',
  category: 'Software',
  team: 'SHOURYANGULU',
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/abhijeeth149/SatQuery-AI',
  liveDemoUrl: import.meta.env.VITE_LIVE_DEMO_URL || '',
  centralIdea: 'SatQuery AI converts natural-language questions into validated, multi-model remote-sensing workflows and returns answers backed by spatial evidence and an auditable execution trace.',
  executiveSummary: `Remote sensing satellite imagery (Sentinel-1 SAR, Sentinel-2 Optical/Multispectral, Landsat) contains rich multi-spectral and radar information foundational for global environmental, agricultural, and urban monitoring. However, extracting actionable insight traditionally demands deep GIS domain expertise, complex band-math pipelines, and manual multi-tool chaining. Generic VLMs suffer from severe coordinate hallucination and cannot process raw 12/16-bit GeoTIFF rasters. SatQuery AI resolves this by coupling an agentic query controller with deterministic remote sensing specialists, physics-grounded decision rules, verifiable vector contours, and transparent execution traces.`,
  inputs: 'Multi-band GeoTIFF / TIFF (Sentinel-2 Optical, Sentinel-1 SAR, Bi-temporal Pairs) + Natural Language Queries',
  outputs: 'Human-Readable Grounded Answer + Spatial Vector Contours + Multi-Factor Confidence Score + Audit Trace JSON',
}

export const PROBLEM_PILLARS = [
  {
    title: 'Expertise Bottleneck',
    description: 'Traditional analysis requires GIS specialization, coordinate reference transformations, radiometric calibration, and manual band math scripting.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Multimodal Sensor Friction',
    description: 'Optical (surface reflectance) and SAR (dielectric roughness) have drastically different physics and noise characteristics, complicating joint analysis.',
    iconName: 'Layers',
  },
  {
    title: 'Temporal Alignment Complexity',
    description: 'Bi-temporal change detection requires precise phase-correlation co-registration, radiometric normalization, and dynamic thresholding.',
    iconName: 'Clock',
  },
  {
    title: 'Generic VLM Hallucinations',
    description: 'Standard vision-language models hallucinate pixel locations, cannot ingest GeoTIFF bands, and invent non-existent land-cover statistics.',
    iconName: 'AlertTriangle',
  },
]

export const COMPARISON_MATRIX = [
  {
    dimension: 'Query Modality',
    genericVLM: 'Natural Language Prompt',
    traditionalGIS: 'Complex Menus & Python Scripts',
    satQueryAI: 'Natural Language Query + Interactive UI',
  },
  {
    dimension: 'Sensor & File Support',
    genericVLM: '8-bit RGB (JPEG/PNG only)',
    traditionalGIS: 'Native Multi-band GeoTIFF & SAR',
    satQueryAI: 'Native Multi-band GeoTIFF, SAR & Optical',
  },
  {
    dimension: 'Reasoning Basis',
    genericVLM: 'Probabilistic Token Generation',
    traditionalGIS: 'Manual Operator Math',
    satQueryAI: 'Deterministic Spectral Physics + Fine-tuned ML',
  },
  {
    dimension: 'Spatial Grounding',
    genericVLM: 'Uncalibrated / Approximate',
    traditionalGIS: 'Manual Vector Digitization',
    satQueryAI: 'Automated Vector Contours & Bounding Polygons',
  },
  {
    dimension: 'Hallucination Risk',
    genericVLM: 'High (Invents statistics & areas)',
    traditionalGIS: 'Zero (Manual calculations)',
    satQueryAI: 'Zero (Strictly derived from raster pixel evidence)',
  },
  {
    dimension: 'Confidence Estimation',
    genericVLM: 'Uncalibrated logit score',
    traditionalGIS: 'Not Computed',
    satQueryAI: 'Multi-Factor (Separability, SNR, Alignment, Agreement)',
  },
  {
    dimension: 'Auditability',
    genericVLM: 'Black Box',
    traditionalGIS: 'Manual Session Log',
    satQueryAI: 'Observable Execution Trace JSON with Step Timings',
  },
]
