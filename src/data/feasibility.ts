import { FeasibilityDimension, UseCaseItem } from '../types'

export const FEASIBILITY_MATRIX: FeasibilityDimension[] = [
  {
    dimension: 'Technical Feasibility',
    feasibility: 'Built upon proven geospatial primitives (GDAL, Rasterio, NumPy) and validated PyTorch neural models with deterministic fallback algorithms.',
    viability: 'Guarantees 100% operational uptime by falling back to mathematical spectral index trees whenever GPU or neural inference services are unavailable.',
  },
  {
    dimension: 'Financial & Resource Viability',
    feasibility: 'Leverages open-access Copernicus Sentinel-1 SAR and Sentinel-2 optical constellation data with open-source Python scientific libraries.',
    viability: 'Extremely lightweight compute footprint; runs complete inference in <200ms per scene on standard commodity CPU/GPU hardware without massive cloud cluster overhead.',
  },
  {
    dimension: 'Operational Viability',
    feasibility: 'Replaces multi-hour manual workflows (QGIS band math, threshold tuning, polygon tracing) with natural-language text queries.',
    viability: 'Enables non-GIS domain specialists (agronomists, emergency coordinators, urban planners) to extract instant, actionable remote-sensing intelligence.',
  },
  {
    dimension: 'Adoption & Integration',
    feasibility: 'Exposes clean REST APIs with Pydantic contracts and exportable PDF audit summaries compatible with enterprise GIS toolchains.',
    viability: 'Seamlessly embeds into existing ISRO, state emergency operations, and municipal GIS portals without requiring workflow overhauls.',
  },
  {
    dimension: 'Constellation Scalability',
    feasibility: 'Modular Model Registry architecture decoupled from specific satellite geometries.',
    viability: 'Directly extensible to Landsat-8/9, PlanetScope, NISAR (NASA-ISRO SAR), and commercial high-resolution imaging constellations.',
  },
]

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'agriculture',
    title: 'Precision Agriculture & Food Security',
    iconName: 'Sprout',
    subtitle: 'Crop Health, Irrigation & Soil Moisture',
    description: 'Track vegetative vigor using NDVI spectral curves, estimate surface soil moisture with Sentinel-1 SAR backscatter, and monitor crop rotation cycles.',
    exampleQuery: '“Assess the crop health across the agricultural parcels and identify areas experiencing water stress.”',
    modalities: ['Sentinel-2 Optical (NIR/Red)', 'Sentinel-1 SAR (Soil Moisture)'],
    metrics: ['NDVI Z-Score', 'Soil Moisture Proxy (dB)', 'Vegetation Cover %'],
  },
  {
    id: 'disaster',
    title: 'Disaster Response & Flood Inundation',
    iconName: 'Waves',
    subtitle: 'All-Weather Flood Extent & Damage Assessment',
    description: 'Penetrate storm cloud cover and darkness using Sentinel-1 C-band SAR to map active flood waters and calculate submerged critical infrastructure.',
    exampleQuery: '“Map the inundated zones through cloud cover and calculate total flooded acreage in the southern river basin.”',
    modalities: ['Sentinel-1 SAR (Lee Filter)', 'Pre-event Optical Reference'],
    metrics: ['Inundated Hectares', 'Specular Water Boundary', 'Infrastructure Risk'],
  },
  {
    id: 'forestry',
    title: 'Forest Conservation & Deforestation Tracking',
    iconName: 'Trees',
    subtitle: 'Bi-Temporal Canopy Loss & Illegal Clearing',
    description: 'Apply Change Vector Analysis across bi-temporal Sentinel-2 acquisitions to detect logging trails, canopy thinning, and wildfire burn scars.',
    exampleQuery: '“Identify any forest loss or canopy disturbance between January 2024 and March 2026.”',
    modalities: ['Bi-temporal Sentinel-2 (T1/T2)', 'Change Vector Analysis (CVA)'],
    metrics: ['Canopy Loss (ha)', 'MAD Deviation Magnitude', 'Transition Direction'],
  },
  {
    id: 'urban',
    title: 'Smart Urban Planning & Sprawl Detection',
    iconName: 'Building2',
    subtitle: 'Built-up Expansion & Impervious Surface Mapping',
    description: 'Arbitrate optical NDBI with SAR double-bounce radar returns to distinguish genuine concrete infrastructure from fallow soil or bare rock.',
    exampleQuery: '“Has the built-up area expanded along the highway corridor, and what was the previous land use?”',
    modalities: ['Optical + SAR Fusion', 'Bi-temporal Optical Pair'],
    metrics: ['Urban Growth (km²)', 'SAR Double-Bounce (> -6dB)', 'Impervious Surface Ratio'],
  },
  {
    id: 'education',
    title: 'Research & Earth Observation Education',
    iconName: 'GraduationCap',
    subtitle: 'Democratizing Multimodal Remote Sensing',
    description: 'Empower researchers, students, and Earth scientists to explore complex remote-sensing datasets through conversational natural language.',
    exampleQuery: '“Explain the spectral differences between the wetland region and the surrounding agricultural plots.”',
    modalities: ['Multi-band GeoTIFF (Sentinel-2)', 'Linear Probe Classifier'],
    metrics: ['Class Distribution %', 'Spectral Reflection Profile', 'Observable Execution Trace'],
  },
]
