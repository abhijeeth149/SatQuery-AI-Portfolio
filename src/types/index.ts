export type StatusType = 'LIVE' | 'CURRENT' | 'COMPLETED' | 'EXPERIMENTAL' | 'RESEARCH' | 'PLANNED'

export interface ScreenshotItem {
  id: string
  title: string
  category: 'core' | 'analysis' | 'specialist' | 'management' | 'benchmarks'
  image: string
  alt: string
  caption: string
  capability: string
  status: StatusType
  tags: string[]
  highlights: string[]
}

export interface DemoScenario {
  id: string
  title: string
  query: string
  mode: 'SINGLE OPTICAL' | 'BI-TEMPORAL' | 'OPTICAL + SAR'
  task: string
  tools: string[]
  confidence: string
  confidenceLevel: 'High' | 'Moderate' | 'Evaluating'
  area: string
  location: string
  answer: string
  steps: {
    name: string
    status: 'PASSED' | 'EXECUTED'
    durationMs: number
    desc: string
    meta?: Record<string, string | number | boolean>
  }[]
  evidence: {
    dominantClass: string
    distribution: { label: string; percentage: number; color: string }[]
    groundedRegions: {
      label: string
      bounds: string
      areaKm2: number
      compassQuadrant: string
    }[]
  }
}

export interface ArchitectureLayer {
  id: string
  name: string
  subtitle: string
  description: string
  components: { name: string; desc: string; status: StatusType }[]
  color: string
}

export interface ModelRegistryEntry {
  id: string
  task: string
  inputModality: string
  outputType: string
  tier: 'PREFERRED' | 'FALLBACK' | 'RESEARCH'
  engine: string
  status: StatusType
  description: string
}

export interface TechStackCategory {
  title: string
  description: string
  items: {
    name: string
    role: string
    status: StatusType
    highlight?: boolean
  }[]
}

export interface ResearchDataset {
  name: string
  modality: string
  scale: string
  roleInSatQuery: string
  status: StatusType
  reference: string
}

export interface RoadmapPhase {
  phase: string
  title: string
  timeframe?: string
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED'
  items: { text: string; done: boolean }[]
}

export interface DecisionItem {
  question: string
  rationale: string
  alternative: string
  whyChosen: string
}

export interface FeasibilityDimension {
  dimension: string
  feasibility: string
  viability: string
}

export interface UseCaseItem {
  id: string
  title: string
  iconName: string
  subtitle: string
  description: string
  exampleQuery: string
  modalities: string[]
  metrics: string[]
}
