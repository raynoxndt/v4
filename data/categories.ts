// ============================================================
// PRODUCT CATEGORIES
// Add or edit categories here. slug must be URL-safe.
// ============================================================

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const categories: Category[] = [
  {
    slug: "magnetic-particle-inspection",
    name: "Magnetic Particle Inspection",
    description: "Yokes, prod-type detectors, and MPI accessories for surface and near-surface flaw detection in ferromagnetic materials.",
    icon: "Magnet",
  },
  {
    slug: "ultrasonic-calibration-blocks",
    name: "Ultrasonic Calibration Blocks",
    description: "IIW, V2, DAC, ASME, and ASTM calibration blocks for ultrasonic testing equipment setup and verification.",
    icon: "Blocks",
  },
  {
  slug: "ultrasonic-flaw-detector",
  name: "Ultrasonic Flaw detector",
  description: "Digital flaw detectors, multi-channel UT systems, and ultrasonic inspection instruments for weld, material, and component inspection.",
  icon: "Waves",
  },
  {
    slug: "vacuum-box-leak-testing",
    name: "Vacuum Box Leak Testing",
    description: "Flat, inside-corner, and outside-corner vacuum boxes for bubble leak testing of welds and joints.",
    icon: "Box",
  },
  {
    slug: "heat-treatment-equipment",
    name: "Heat Treatment Equipment",
    description: "TEMCON transformer power sources, control panels, thermocouple welding units, and heat treatment accessories.",
    icon: "Flame",
  },
  {
    slug: "radiation-safety",
    name: "Radiation Safety Equipment",
    description: "RADAX survey meters, dosimeters, pocket bleepers, area zone monitors, and radiation warning devices.",
    icon: "ShieldAlert",
  },
  {
    slug: "radiographic-equipment",
    name: "Radiographic Equipment",
    description: "Pipeline crawlers, film viewers, drying cabinets, processing tanks, and darkroom accessories.",
    icon: "ScanLine",
  },
  {
    slug: "radiographic-accessories",
    name: "Radiographic Accessories",
    description: "IQIs, penetrameters, lead letters, lead screens, PVC cassettes, and densitometers.",
    icon: "Layers",
  },
];
