import { DecisionItem } from '../types'

export const ARCHITECTURAL_DECISIONS: DecisionItem[] = [
  {
    question: 'Why Agentic Controller & Specialist Routing instead of Monolithic VLM?',
    rationale: 'Monolithic end-to-end VLMs (like standard LLaVA or GPT-4V) suffer from severe spatial hallucinations, cannot process 16-bit GeoTIFF bands directly, and cannot guarantee deterministic calculation of physical reflectance.',
    alternative: 'Fine-tuning a single large vision-language model for all spatial and mathematical tasks.',
    whyChosen: 'Separating query orchestration from specialist mathematical raster tools ensures 0% hallucination risk on physical statistics and provides deterministic, reproducible answers.',
  },
  {
    question: 'Why Physics-Grounded Spectral Math & Otsu Thresholding for VQA?',
    rationale: 'Normalized indices (NDVI, NDWI, NDBI) and Otsu inter-class variance minimization are mathematically grounded in optical physics and sensor band specifications (Sentinel-2 MSI).',
    alternative: 'Black-box neural semantic segmentation models without physical band validation.',
    whyChosen: 'Physics indices work out-of-the-box on calibrated surface reflectance with zero training data requirements, providing instantaneous, reliable answers across diverse global terrains.',
  },
  {
    question: 'Why Multi-Factor Confidence instead of Raw Neural Softmax / Logits?',
    rationale: 'Neural softmax logits represent model overconfidence rather than true physical data quality, sensor noise, or spatial registration errors.',
    alternative: 'Reporting raw top-1 neural probability or LLM self-assessed verbal confidence.',
    whyChosen: 'Multi-factor confidence scores true optical separability (Otsu eta), sensor signal-to-noise ratio, cloud percentage, and dual-detector consensus, giving mission operators realistic reliability metrics.',
  },
  {
    question: 'Why Multiplicative Lee Filter in Linear Power Domain for SAR?',
    rationale: 'SAR radar speckle is non-Gaussian multiplicative noise. Applying smoothing in the decibel domain creates bias in backscatter intensity estimation.',
    alternative: 'Standard Gaussian blur or decibel-domain median filtering.',
    whyChosen: 'The Lee Minimum Mean Square Error (MMSE) filter in the linear power domain (P = 10^(sigma/10)) dampens speckle while preserving sharp urban building edges and coastal shorelines.',
  },
  {
    question: 'Why Observable Step-by-Step Execution Traces?',
    rationale: 'Scientific, defense, and disaster response teams require full provenance and auditability before taking high-stakes decisions based on AI outputs.',
    alternative: 'Returning only the final summary paragraph and image overlay.',
    whyChosen: 'Emitting structured JSON traces with millisecond step timings and intermediate tensor shapes enables complete transparency and automated verification.',
  },
  {
    question: 'Why Input Validation Gate before Specialist Dispatch?',
    rationale: 'Corrupted GeoTIFF files, incompatible Coordinate Reference Systems (CRS), or mismatching bounding boxes cause silent numerical bugs in downstream spectral math.',
    alternative: 'Passing raw uploaded bytes directly into model inference pipeline.',
    whyChosen: 'A strict 6-point verification gate guarantees that inputs meet mathematical prerequisites before compute resources are allocated.',
  },
]
