import { TechStackCategory } from '../types'

export const TECH_STACK: TechStackCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'Ultra-responsive client application engineered for geospatial raster visualization and real-time trace telemetry.',
    items: [
      { name: 'React 18', role: 'Component hierarchy & state management', status: 'LIVE', highlight: true },
      { name: 'TypeScript', role: 'End-to-end typed contracts & compile safety', status: 'LIVE', highlight: true },
      { name: 'Tailwind CSS', role: 'Custom geospatial design tokens & dual themes', status: 'LIVE' },
      { name: 'Vite', role: 'High-speed HMR build bundler', status: 'LIVE' },
      { name: 'Leaflet GIS', role: 'Interactive geospatial map viewport & geoJSON rendering', status: 'LIVE' },
      { name: 'Lucide Icons', role: 'Precision vector iconography', status: 'LIVE' },
    ],
  },
  {
    title: 'Backend & API Gateway',
    description: 'High-performance asynchronous Python services for multipart GeoTIFF stream ingestion and agent coordination.',
    items: [
      { name: 'Python 3.12+', role: 'Modern runtime with native typing', status: 'LIVE', highlight: true },
      { name: 'FastAPI', role: 'Asynchronous REST gateway & OpenAPI documentation', status: 'LIVE', highlight: true },
      { name: 'Pydantic V2', role: 'Strict schema validation and serialization', status: 'LIVE' },
      { name: 'SQLAlchemy & SQLite', role: 'Session history & trace audit storage', status: 'LIVE' },
      { name: 'Uvicorn', role: 'ASGI server with asynchronous worker support', status: 'LIVE' },
      { name: 'PostgreSQL + PostGIS', role: 'Spatial database for geo-queries at scale', status: 'PLANNED' },
    ],
  },
  {
    title: 'Geospatial & Image Processing',
    description: 'Physics-grounded scientific libraries for multi-band raster math, geometric alignment, and vectorization.',
    items: [
      { name: 'Rasterio / GDAL', role: 'GeoTIFF reading, affine transforms, CRS reprojection', status: 'LIVE', highlight: true },
      { name: 'GeoPandas & Shapely', role: 'Vector geometry operations & polygon area calculation', status: 'LIVE', highlight: true },
      { name: 'OpenCV', role: 'Contour vectorization, Otsu slicing, morphology', status: 'LIVE' },
      { name: 'NumPy & SciPy', role: 'Fast tensor operations, FFT phase alignment, MAD math', status: 'LIVE' },
      { name: 'PyProj', role: 'Geodetic coordinate transformations (UTM / WGS84)', status: 'LIVE' },
    ],
  },
  {
    title: 'Machine Learning & AI Engine',
    description: 'Fine-tuned remote-sensing neural adaptation combined with deterministic specialist tool routing.',
    items: [
      { name: 'PyTorch 2.4', role: 'Deep learning runtime and linear probe inference', status: 'LIVE', highlight: true },
      { name: 'EuroSAT Linear Probe', role: 'ResNet-18 head adapted on Sentinel-2 (87.25% test acc)', status: 'LIVE', highlight: true },
      { name: 'Hugging Face Transformers', role: 'VLM tokenization & research benchmark harnesses', status: 'RESEARCH' },
      { name: 'PEFT / LoRA', role: 'Parameter-efficient fine-tuning on BigEarthNet.txt', status: 'PLANNED' },
    ],
  },
  {
    title: 'Deployment & Quality Engineering',
    description: 'Production infrastructure, comprehensive test suites, and CI/CD validation pipelines.',
    items: [
      { name: 'Docker & Compose', role: 'Containerized reproducible microservice deployment', status: 'LIVE', highlight: true },
      { name: 'Pytest Suite', role: 'Unit, geospatial, agentic, and adversarial tests', status: 'LIVE' },
      { name: 'Vercel Edge', role: 'Global CDN distribution for portfolio frontend', status: 'LIVE' },
      { name: 'Kubernetes', role: 'Cluster orchestration for distributed multi-GPU inference', status: 'PLANNED' },
    ],
  },
]
