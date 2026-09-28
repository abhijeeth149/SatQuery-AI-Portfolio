export const CAPABILITY_AREAS = [
  {
    id: 'single-image',
    title: 'Single-Image Optical Intelligence',
    subtitle: 'Spectral Decision Trees, Land-Cover VQA & Text-Guided Grounding',
    tag: 'LIVE',
    iconName: 'Eye',
    description: 'SatQuery AI processes high-resolution multispectral Sentinel-2 imagery through physics-grounded spectral index formulations and dynamic thresholding rather than generative guessing.',
    features: [
      {
        name: 'Hierarchical Spectral Indices',
        detail: 'Computes NDVI (Vegetation), NDWI/MNDWI (Water), and NDBI (Built-up) from physical band reflectance.',
        formula: 'NDVI = (NIR - Red) / (NIR + Red)',
      },
      {
        name: 'Otsu Adaptive Slicing',
        detail: 'Automatically calculates scene-specific dynamic thresholds based on histogram bimodal variance minimization.',
        formula: 'sigma_B^2(t) = w_0(t)w_1(t)[mu_0(t) - mu_1(t)]^2',
      },
      {
        name: 'Text-Guided Vector Grounding',
        detail: 'Extracts contiguous feature masks into geo-referenced polygon contours, bounding boxes, and compass quadrants.',
        formula: 'Polygon Contours + Centroid + Geodesic Area (ha/km²)',
      },
      {
        name: 'EuroSAT Linear Probe Scene Classifier',
        detail: 'Fine-tuned ResNet-18 head (87.25% test accuracy) for 10-class land-use verification.',
        formula: 'ResNet-18 (Frozen Backbone) + Linear Head (10 Classes)',
      },
    ],
  },
  {
    id: 'bi-temporal',
    title: 'Bi-Temporal Change Vector Analysis',
    subtitle: 'Co-Registration, Multi-Spectral CVA & Grounded Change VQA',
    tag: 'LIVE',
    iconName: 'Clock',
    description: 'Enables temporal Earth Observation analysis to detect urban sprawl, deforestation, and water reservoir fluctuations between two acquisition dates.',
    features: [
      {
        name: 'Phase-Correlation Co-Registration',
        detail: 'Aligns sub-pixel geometric discrepancies between T1 and T2 rasters using frequency-domain cross-power spectrum.',
        formula: 'F_{co} = F(T1) * F*(T2) / |F(T1) * F*(T2)|',
      },
      {
        name: 'Change Vector Analysis (CVA)',
        detail: 'Computes spectral Euclidean trajectory across NDVI, NDWI, and NDBI multi-dimensional feature space.',
        formula: 'Delta rho = sqrt((Delta NDVI)^2 + (Delta NDWI)^2 + (Delta NDBI)^2)',
      },
      {
        name: 'MAD Outlier Thresholding',
        detail: 'Identifies statistically significant change using Median Absolute Deviation without requiring manual thresholding.',
        formula: 'Threshold = Median(Delta rho) + 1.4826 * MAD(Delta rho)',
      },
      {
        name: 'Change Direction & Area Math',
        detail: 'Classifies the transition vector (e.g. Vegetation -> Urban) and aggregates exact changed surface area.',
        formula: 'Surface Area = Changed Pixels * GSD^2',
      },
    ],
  },
  {
    id: 'optical-sar',
    title: 'Optical + SAR Cross-Modal Fusion',
    subtitle: 'Speckle Filtering, Radar Backscatter & Decision-Level Arbitration',
    tag: 'LIVE',
    iconName: 'Radio',
    description: 'Fuses Sentinel-2 optical spectral reflectance with Sentinel-1 SAR C-band radar backscatter (VV/VH) to achieve all-weather, shadow-resilient scene interpretation.',
    features: [
      {
        name: 'Multiplicative Lee MMSE Filter',
        detail: 'Applied across a 7x7 sliding kernel in the linear power domain to suppress SAR speckle while preserving sharp boundaries.',
        formula: 'I_filtered = bar{I} + K * (I - bar{I}), where K = var(I) / (var(I) + sigma_v^2)',
      },
      {
        name: 'Scattering Regime Segmentation',
        detail: 'Separates specular calm water (< -18 dB), diffuse vegetation (-12 to -8 dB), and urban double-bounce (> -6 dB).',
        formula: 'sigma^0 (dB) = 10 * log10(Power / DigitalNumber)',
      },
      {
        name: 'Physical Rule Arbitration',
        detail: 'Uses SAR double-bounce to verify urban structures obscured by cloud shadows, and optical SWIR to confirm water bodies.',
        formula: 'Decision = SAR_double_bounce OR (Optical_NDBI AND NOT Optical_Shadow)',
      },
      {
        name: 'Dual-Mask Geospatial Synthesis',
        detail: 'Outputs unified multi-modal land-cover masks with conflict logs identifying discrepancies between sensors.',
        formula: 'Fused Layer = Arbitrate(Optical_Mask, SAR_Mask)',
      },
    ],
  },
]
