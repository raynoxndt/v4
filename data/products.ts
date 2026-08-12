// ============================================================
// PRODUCTS DATABASE — RAYNOX NDT SOLUTIONS
// ============================================================
// TO ADD A PRODUCT: copy an existing product block, paste at
// the end of the array, change the fields. That's it.
// The website auto-generates pages, cards, and search results.
//
// TO CHANGE AN IMAGE: update the `images` array path.
//   - Place images in /public/images/products/
//   - Use: images: ["/images/products/your-image.jpg"]
//
// SLUG: must be unique and URL-safe (lowercase, hyphens only)
// ============================================================

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string; // must match a category slug in categories.ts
  shortDescription: string;
  description: string;
  images: string[];
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  datasheet: string | null; // path to PDF in /public/ or null
  featured: boolean;
  brand?: string;
  model?: string;
}

export const products: Product[] = [
  // ─── MAGNETIC PARTICLE INSPECTION ───────────────────────
  {
  slug: "magnetic-particle-testing-yoke",

  name: "Magnetic Particle Testing Yoke",

  category: "magnetic-particle-inspection",

  brand: "Magnetic Particle Testing",

  model: "Yoke",

  shortDescription: "Portable electromagnetic yoke designed for magnetic particle inspection and surface crack detection on ferromagnetic components.",

  description:
    "The Magnetic Particle Testing Yoke is a portable handheld magnetic inspection instrument designed to magnetize ferromagnetic components during Magnetic Particle Inspection. The yoke creates a magnetic field across the inspection area, allowing magnetic particles to gather around flux leakage caused by surface and near-surface discontinuities. Its compact handheld design makes it suitable for weld inspection, structural inspection, maintenance, and field NDT applications.",

  images: [
    "https://kirtindt.com/images/product-images/small_16387935581978706479.jpg",
  ],

  specs: [
    { label: "Product Type", value: "Magnetic Particle Inspection Yoke" },
    { label: "Inspection Method", value: "Magnetic Particle Testing (MT / MPI)" },
    { label: "Equipment Type", value: "Electromagnetic Yoke" },
    { label: "Application", value: "Surface and Near-Surface Defect Detection" },
    { label: "Material", value: "Ferromagnetic Components" },
    { label: "Operation", value: "Handheld / Portable" },
  ],

  features: [
    "Portable handheld design",
    "Designed for magnetic particle inspection",
    "Magnetizes ferromagnetic components for flaw detection",
    "Suitable for surface and near-surface discontinuities",
    "Easy to position on inspection areas",
    "Suitable for field and workshop inspections",
    "Useful for weld and structural inspection",
  ],

  applications: [
    "Magnetic Particle Inspection (MPI)",
    "Magnetic Particle Testing (MT)",
    "Surface Crack Detection",
    "Near-Surface Defect Detection",
    "Weld Inspection",
    "Structural Inspection",
    "Maintenance Inspection",
    "Field NDT Inspection",
  ],

  datasheet: null,

  featured: true,
},
  {
  slug: "y-7-ac-dc-electromagnetic-yoke",

  name: "Y-7 AC/DC Electromagnetic Yoke",

  category: "magnetic-particle-inspection",

  brand: "Magnaflux",

  model: "Y-7",

  shortDescription: "Durable AC/DC electromagnetic yoke for detecting surface and sub-surface indications during magnetic particle inspection.",

  description:
    "The Magnaflux Y-7 AC/DC Electromagnetic Yoke is a high-strength handheld magnetic particle inspection instrument designed for detecting surface and sub-surface discontinuities in ferromagnetic materials. It provides switchable AC and DC magnetic fields, allowing AC operation for surface indications and DC operation for surface and near-surface indications. Its rugged, sealed construction and articulating legs make it suitable for field testing, weld inspection, in-service inspections, and demanding industrial environments.",

  images: [
    "https://magnaflux.in/IN-Files/Images/Accessories/Y-7-yoke-IN.jpg",
  ],

  specs: [
    { label: "Model", value: "Y-7" },
    { label: "NDT Type", value: "Magnetic Particle Testing" },
    { label: "Magnetic Field", value: "AC / DC" },
    { label: "AC Mode", value: "Constant magnetic field for surface indications" },
    { label: "DC Mode", value: "Pulsed magnetic field for surface and near-surface indications" },
    { label: "Leg Span", value: "2–12 in / 5.1–30 cm" },
    { label: "Weight", value: "Approx. 3.3–3.4 kg depending on voltage version" },
    { label: "Cord Length", value: "12 ft / 3.7 m" },
    { label: "Duty Cycle", value: "25%, maximum on time 90 seconds" },
    { label: "Electrical Requirements", value: "115V or 220/230V versions available" },
    { label: "Standards", value: "ASME BPVC, ASTM E709, ASTM E1444, ASTM E3024, ISO 9934-3" },
  ],

  features: [
    "AC and DC magnetic field operation",
    "Detects surface and sub-surface indications",
    "Durable and sealed construction",
    "Chemical and abrasion resistant",
    "Articulating legs for improved contact with different component shapes",
    "Lightweight handheld design",
    "Suitable for demanding industrial environments",
    "Demagnetization capability",
  ],

  applications: [
    "Magnetic Particle Inspection (MPI)",
    "Surface Crack Detection",
    "Sub-Surface Crack Detection",
    "Weld Inspection",
    "Field Testing",
    "Spot Inspections",
    "In-Service Inspections",
    "Industrial Component Inspection",
  ],

  datasheet: null,

  featured: true,
},
  {
    slug: "mpy-permanent-magnet-yoke",
    name: "Permanent Magnet Yoke — MPY",
    category: "magnetic-particle-inspection",
    brand: "MAXIFLUX",
    model: "MPY",
    shortDescription: "Lightweight portable yoke for MPI using permanent magnets — no external power required.",
    description:
      "The MAXIFLUX MPY Permanent Magnet Yoke supplies longitudinal flux with no external power needed for operation. Ideal for testing finished parts during production, maintenance, and repairs. Highly flexible with articulating arms and rotating poles. Weighs only 2.00 Kg and meets ASTM specifications in load carrying.",
    images: [
      "https://img500.exportersindia.com/product_images/bc-500/2023/9/33363/magniflux-prod-type-1534246473-4196567.jpg",
    ],
    specs: [
      { label: "Type", value: "Permanent Magnet" },
      { label: "Weight", value: "2.00 Kg" },
      { label: "Pole Configuration", value: "Articulating arms with rotating poles" },
      { label: "Standard", value: "ASTM" },
      { label: "Power", value: "No external power required" },
    ],
    features: [
      "No external power needed for operation",
      "Articulating arms and rotating poles for odd shapes",
      "Highly flexible — fits various component geometries",
      "Meets ASTM specifications for load carrying capacity",
      "Lightweight at only 2.00 Kg",
    ],
    applications: [
      "Testing finished parts during production",
      "Maintenance and repair inspections",
      "Field inspections without power access",
      "Weld inspection",
      "Aerospace component inspection",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "mey-electromagnetic-yoke",
    name: "Electromagnetic Yokes — MEY Series",
    category: "magnetic-particle-inspection",
    brand: "MAXIFLUX",
    model: "MEY Series",
    shortDescription: "AC/DC electromagnetic yoke with battery-operated models — meets ASTM/ASME/BS/MIL specs.",
    description:
      "The MAXIFLUX MEY Series electromagnetic yokes feature articulated legs and flexible poles to fit odd shapes with no separate power supply needed. Operates on 110V AC or 48V/12V DC with a duty cycle of 2 min ON / 2 min OFF. Battery-operated models include built-in charging system. Weighs 2.8–3.25 Kg and meets ASTM/ASME/BS/MIL specifications.",
    images: [
      "https://img500.exportersindia.com/product_images/bc-500/2023/9/33363/magniflux-prod-type-1534246473-4196567.jpg",
    ],
    specs: [
      { label: "Power Supply", value: "110V AC or 48V/12V DC" },
      { label: "Duty Cycle", value: "2 min ON / 2 min OFF" },
      { label: "Weight", value: "2.8 – 3.25 Kg" },
      { label: "Model MEY-1", value: "With AC only" },
      { label: "Standards", value: "ASTM / ASME / BS / MIL" },
    ],
    features: [
      "Articulated legs and flexible poles for odd shapes",
      "Battery-operated models with built-in charging",
      "Operates on AC or DC",
      "Meets ASTM / ASME / BS / MIL specifications",
      "Compact and portable",
    ],
    applications: [
      "Weld inspection in oil & gas",
      "Structural steel inspection",
      "Pressure vessel inspection",
      "Field and workshop MPI",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "ad-series-prod-crack-detector",
    name: "MAXIFLUX Prod Type Crack Detector — AD Series",
    category: "magnetic-particle-inspection",
    brand: "MAXIFLUX",
    model: "AD Series",
    shortDescription: "Portable prod-type MPI unit with AC/HWDC flux — available in 1500A to 6000A.",
    description:
      "Available in both AC and HWDC flux. Rugged design for long trouble-free service with advanced electronics and low maintenance. Supplied with magnetising cables and contact prods. Available in five current ratings from 1500A to 6000A.",
    images: [
      "https://img500.exportersindia.com/product_images/bc-500/2023/9/33363/magniflux-prod-type-1534246473-4196567.jpg",
    ],
    specs: [
      { label: "AD 1500 P", value: "1500 A (AC & HWDC)" },
      { label: "AD 2000 P", value: "2000 A (AC & HWDC)" },
      { label: "AD 3000 M", value: "3000 A (AC & HWDC)" },
      { label: "AD 4000 M", value: "4000 A (AC & HWDC)" },
      { label: "AD 6000 M", value: "6000 A (AC & HWDC)" },
      { label: "Flux Type", value: "AC / HWDC" },
    ],
    features: [
      "Available in AC and HWDC flux",
      "Advanced electronics with low maintenance",
      "Rugged design for long service life",
      "Supplied with magnetising cables and contact prods",
      "Multiple current ratings available",
    ],
    applications: [
      "Weld seam inspection",
      "Casting and forging inspection",
      "Pressure vessel inspection",
      "Pipe and pipeline inspection",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "magnetic-particle-accessories",
    name: "Magnetic Particle Accessories",
    category: "magnetic-particle-inspection",
    shortDescription: "Complete range of MPI consumables including inks, UV lamps, field indicators, and gauges.",
    description:
      "Complete range of magnetic particle inspection accessories including fluorescent and non-fluorescent magnetic inks, magnetic particle powder, contrast aid paint, Black Light (UV-A) lamps, field indicators, pie gauges, and gaussmeters/magnetometers.",
    images: [
      "https://trinityndt.com/wp-content/uploads/2020/09/Pie_gauge.jpg",
    ],
    specs: [
      { label: "Magnetic Ink", value: "Fluorescent & Non-Fluorescent" },
      { label: "UV Lamps", value: "Black Light UV-A" },
      { label: "Field Indicators", value: "Pie Gauges" },
      { label: "Measurement", value: "Gaussmeters / Magnetometers" },
    ],
    features: [
      "Fluorescent and non-fluorescent magnetic inks",
      "Contrast aid paint for enhanced visibility",
      "UV-A black light lamps",
      "Field indicators and pie gauges",
      "Gaussmeters and magnetometers",
    ],
    applications: [
      "MPI consumable supply",
      "Production line inspection",
      "Field inspection kits",
      "Training and demonstration",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── ULTRASONIC CALIBRATION BLOCKS ───────────────────────
  {
    slug: "iiw-type-2-block",
    name: "IIW-Type 2 Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "IIW standard calibration block for angle beam probe calibration — available in CS, SS & Aluminium.",
    description:
      "IIW standard calibration block used for calibration of angle beam probes. Available in Carbon Steel (CS), Stainless Steel (SS), and Aluminium. Machined to precise dimensional tolerances for accurate calibration.",
    images: [
      "https://ndetech.org.in/admin/images/product/1621605679_IIW-Type%202%20Block.jpg",
    ],
    specs: [
      { label: "Standard", value: "IIW (International Institute of Welding)" },
      { label: "Materials", value: "CS, SS & Aluminium" },
      { label: "Application", value: "Angle beam probe calibration" },
      { label: "Thickness Range", value: "As per IIW standard" },
    ],
    features: [
      "IIW standard compliant",
      "Available in CS, SS and Aluminium",
      "Precision machined to tight tolerances",
      "Used for angle beam probe calibration",
    ],
    applications: [
      "Ultrasonic flaw detector calibration",
      "Angle beam probe setup",
      "Weld inspection calibration",
      "Training and qualification",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "v2-dc-block",
    name: "V2 Block (DC Block)",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "V2 calibration block as per BS 4331 for ultrasonic equipment calibration.",
    description:
      "V2 calibration block manufactured as per BS 4331. Used for calibration of ultrasonic testing equipment, particularly for distance and sensitivity setting.",
    images: [
      "https://ndt-kits.com/wp-content/uploads/2021/04/V-2-Calibration-Block.webp",
    ],
    specs: [
      { label: "Standard", value: "BS 4331" },
      { label: "Type", value: "DC (Distance/Calibration) Block" },
    ],
    features: [
      "Manufactured to BS 4331",
      "Precision machined",
      "Durable carbon steel construction",
    ],
    applications: [
      "UT equipment calibration",
      "Distance and sensitivity setting",
      "Probe index point determination",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "dac-block",
    name: "DAC Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "Distance Amplitude Correction (DAC) block for 1\", 2\" & 3\" thickness ranges.",
    description:
      "Distance Amplitude Correction (DAC) calibration block available for 1\", 2\", and 3\" thickness ranges. Used to plot DAC curves for sizing and acceptance criteria in ultrasonic testing.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhuG0fkDYYY21DG27-AYxGVQuyeGSeC1ntya8A439zg&s=10",
    ],
    specs: [
      { label: "Thickness Range", value: "1\", 2\" & 3\"" },
      { label: "Application", value: "DAC curve plotting" },
    ],
    features: [
      "Available for 1\", 2\" and 3\" thickness",
      "Precision machined side-drilled holes",
      "Used for DAC curve generation",
    ],
    applications: [
      "Weld inspection",
      "Pressure vessel inspection",
      "Pipeline inspection",
      "Sizing and acceptance criteria",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "mini-resolution-block",
    name: "Mini Resolution Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "Compact resolution test block for ultrasonic probe resolution verification.",
    description:
      "Mini resolution block for verifying the resolution capability of ultrasonic probes and instruments. Compact size for easy portability in field inspections.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNsup8lsp163V9R2nDvC6kPLYqpsbUWwbqeUT8ALLSg&s=10",
    ],
    specs: [
      { label: "Type", value: "Resolution Test Block" },
      { label: "Size", value: "Mini / Compact" },
    ],
    features: [
      "Compact and portable",
      "For probe resolution verification",
      "Precision machined",
    ],
    applications: [
      "Probe resolution testing",
      "Instrument verification",
      "Field calibration checks",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "resolution-test-block",
    name: "Resolution Test Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "Full-size resolution test block for comprehensive UT probe and instrument qualification.",
    description:
      "Full-size resolution test block for comprehensive qualification of ultrasonic probes and instruments. Used to verify near-surface resolution and dead zone performance.",
    images: [
      "https://tiimg.tistatic.com/fp/2/009/187/ut-resolution-calibration-block-015.jpg",
    ],
    specs: [
      { label: "Type", value: "Full Resolution Test Block" },
      { label: "Application", value: "Near-surface resolution & dead zone" },
    ],
    features: [
      "Verifies near-surface resolution",
      "Dead zone performance testing",
      "Full qualification of probes and instruments",
    ],
    applications: [
      "UT probe qualification",
      "Instrument performance verification",
      "Near-surface defect detection capability testing",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "asme-basic-calibration-block",
    name: "ASME Sec. V Basic Calibration Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "ASME Section V compliant basic calibration block for pressure vessel and piping inspection.",
    description:
      "Basic calibration block manufactured to ASME Section V requirements. Essential for ultrasonic inspection of pressure vessels and piping in accordance with ASME codes.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10g65rwnzUoWz88xoPhJCZYG6enMLCKjkR_2oDjE7kNrBqgvcn0XBOMQ&s=10",
    ],
    specs: [
      { label: "Standard", value: "ASME Section V" },
      { label: "Application", value: "Pressure vessel & piping inspection" },
    ],
    features: [
      "ASME Section V compliant",
      "Precision side-drilled hole references",
      "Suitable for pressure vessel inspection",
    ],
    applications: [
      "ASME code-compliant pressure vessel inspection",
      "Piping inspection",
      "Power plant inspection",
      "Refinery inspection",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "ds-block",
    name: "DS Block",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "DS calibration block for distance and sensitivity calibration in UT.",
    description:
      "DS (Distance & Sensitivity) calibration block for setting distance and sensitivity during ultrasonic testing. Widely used in weld and structural inspection.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7E761toimVK0F-FqY5xHU7DcJ6XXf3h_YEE1RBmjyQ&s=10",
    ],
    specs: [
      { label: "Type", value: "DS (Distance & Sensitivity)" },
      { label: "Application", value: "UT calibration" },
    ],
    features: [
      "Distance and sensitivity calibration",
      "Machined to precise tolerances",
      "Widely recognised standard",
    ],
    applications: [
      "Weld inspection",
      "Structural inspection",
      "General UT calibration",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "step-blocks",
    name: "Step Blocks & Coated Step Blocks",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "Step blocks in 12mm, 20mm & 25mm thickness for thickness gauge calibration.",
    description:
      "Step calibration blocks available in 12mm, 20mm, and 25mm thicknesses for ultrasonic thickness gauge calibration. Also available in coated versions for calibrating through-coating thickness gauges.",
    images: [
      "https://cpimg.tistatic.com/07541951/s/4/Step-Block-Set.jpg",
    ],
    specs: [
      { label: "Thickness Steps", value: "12mm, 20mm & 25mm" },
      { label: "Versions", value: "Plain & Coated" },
      { label: "Material", value: "Carbon Steel" },
    ],
    features: [
      "Multiple thickness steps",
      "Coated versions for through-coating calibration",
      "Precision machined",
      "Durable carbon steel",
    ],
    applications: [
      "Thickness gauge calibration",
      "Through-coating thickness measurement setup",
      "Training and demonstration",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "astm-distance-amplitude-block-set",
    name: "ASTM Distance Amplitude Block — 19 Blocks Set",
    category: "ultrasonic-calibration-blocks",
    shortDescription: "Complete 19-block ASTM DAC set for comprehensive ultrasonic calibration per ASTM standards.",
    description:
      "Complete set of 19 ASTM Distance Amplitude Calibration blocks for comprehensive ultrasonic testing calibration. Covers the full range of ASTM standard requirements for weld and component inspection.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZ7oYtubKkTmDGvdnKHuuGorfWWT76RKaVIk7tD11AQ&s=10",
    ],
    specs: [
      { label: "Set", value: "19 Blocks" },
      { label: "Standard", value: "ASTM" },
      { label: "Type", value: "Distance Amplitude Calibration" },
    ],
    features: [
      "Complete 19-block set",
      "Meets ASTM standards",
      "Comprehensive coverage of calibration requirements",
      "Supplied in protective carrying case",
    ],
    applications: [
      "ASTM compliant UT inspection",
      "Weld inspection",
      "Aerospace inspection",
      "Laboratory and field calibration",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── VACUUM BOX LEAK TESTING ──────────────────────────────
  {
    slug: "vacuum-box-flat-type",
    name: "Vacuum Box — Flat Type",
    category: "vacuum-box-leak-testing",
    shortDescription: "Flat vacuum box for bubble leak testing of flat weld surfaces and tank floors.",
    description:
      "Flat-type vacuum box for bubble leak testing of flat weld surfaces, tank floors, and plate welds. Supplied complete with vacuum pump, connecting hose, foot switch, and all accessories required for immediate operation.",
    images: [
      "https://ndetech.org.in/admin/images/product/1617559114_Flat%20Bottom%20Vacuum%20Box%20Bubble%20Leak%20Testing%20Equipment.jpg",
    ],
    specs: [
      { label: "Type", value: "Flat / Standard" },
      { label: "Application", value: "Tank floors & flat weld surfaces" },
      { label: "Kit Includes", value: "Vacuum pump, connecting hose, foot switch" },
    ],
    features: [
      "For tank floors and flat weld surfaces",
      "Supplied as complete kit",
      "Durable acrylic viewing window",
      "Quick-connect fittings",
    ],
    applications: [
      "Storage tank floor weld inspection",
      "Plate weld leak testing",
      "Pipeline coating holiday testing",
      "Pressure vessel leak testing",
    ],
    datasheet: null,
    featured: true,
  },
  {
    slug: "vacuum-box-inside-corner",
    name: "Vacuum Box — Inside Corner",
    category: "vacuum-box-leak-testing",
    shortDescription: "Inside corner vacuum box for leak testing of internal corner welds and T-joints.",
    description:
      "Vacuum box specifically designed for inside corner weld inspection. Allows bubble leak testing of internal corner joints, T-joints, and fillet welds where a flat box cannot be used.",
    images: [
      "https://ndetech.org.in/admin/images/product/1617599261_Inside%20Corner%20Vacuum%20Box%20Bubble%20Leak%20Testing.jpg",
    ],
    specs: [
      { label: "Type", value: "Inside Corner" },
      { label: "Application", value: "Internal corner welds & T-joints" },
    ],
    features: [
      "Designed for inside corner joints",
      "Acrylic viewing window",
      "Durable aluminium frame",
      "Compatible with standard vacuum pumps",
    ],
    applications: [
      "T-joint weld inspection",
      "Internal corner leak testing",
      "Storage tank internal welds",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "vacuum-box-outside-corner",
    name: "Vacuum Box — Outside Corner",
    category: "vacuum-box-leak-testing",
    shortDescription: "Outside corner vacuum box for bubble leak testing of external corner joints.",
    description:
      "Outside corner vacuum box for bubble leak testing of external corner joints and welds. Specifically shaped to seat firmly on external corners for effective vacuum seal.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/2/394298961/QW/AM/PC/2468937/outside-corner-vacuum-box-weld-leak-test-1000x1000.jpg",
    ],
    specs: [
      { label: "Type", value: "Outside Corner" },
      { label: "Application", value: "External corner welds" },
    ],
    features: [
      "Designed for external corner joints",
      "Secure vacuum seal on corner geometry",
      "Durable construction",
    ],
    applications: [
      "External corner weld inspection",
      "Box section inspection",
      "Structural weld leak testing",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "vacuum-pump-kit",
    name: "Vacuum Pump with Connecting Hose & Foot Switch",
    category: "vacuum-box-leak-testing",
    shortDescription: "Standard vacuum pump kit supplied with all vacuum box sets for bubble leak testing.",
    description:
      "Vacuum pump kit supplied as standard with every vacuum box set. Includes connecting hose and foot switch for hands-free operation during bubble leak testing.",
    images: [
      "https://cpimg.tistatic.com/04411237/b/4/Vacuum-Box-With-Vacuum-Pump.jpg",
    ],
    specs: [
      { label: "Kit Includes", value: "Vacuum pump, connecting hose, foot switch" },
      { label: "Operation", value: "Hands-free with foot switch" },
    ],
    features: [
      "Foot switch for hands-free operation",
      "Standard connecting hose included",
      "Compatible with all vacuum box types",
      "Supplied with every vacuum box set",
    ],
    applications: [
      "Bubble leak testing accessory",
      "Vacuum box system completion",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── HEAT TREATMENT EQUIPMENT ────────────────────────────
  {
    slug: "temcon-tr-transformer-power-source",
    name: "TEMCON-TR — Mobile Transformer Power Sources",
    category: "heat-treatment-equipment",
    brand: "TEMCON",
    model: "TEMCON-TR",
    shortDescription: "Rugged mobile PWHT transformer power sources for power plants, refineries, and offshore projects.",
    description:
      "Ruggedly built mobile units in heavy gauge CRCA/SS steel with castors. Class H windings with forced air cooling for long trouble-free service. Designed for pre-heat and post weld heat treatment in power plants, refineries, and offshore projects.",
    images: [
      "https://3.imimg.com/data3/DH/WJ/MY-1529372/untitled-3-1000x1000.jpg",
    ],
    specs: [
      { label: "Primary Supply", value: "380V / 415V / 440V — 3Ph, 50/60Hz" },
      { label: "Construction", value: "Heavy gauge CRCA / SS steel with castors" },
      { label: "Windings", value: "Class H" },
      { label: "Cooling", value: "Forced air" },
    ],
    features: [
      "Mobile units with castors for easy positioning",
      "Class H windings for high-temperature operation",
      "Forced air cooling for continuous duty",
      "Heavy gauge CRCA/SS steel construction",
      "Suitable for power plants, refineries, and offshore",
    ],
    applications: [
      "Pre-heat treatment",
      "Post weld heat treatment (PWHT)",
      "Stress relieving",
      "Power plant maintenance",
      "Refinery piping maintenance",
      "Offshore project heat treatment",
    ],
    datasheet: null,
    featured: true,
  },
  {
    slug: "temcon-power-control-panels",
    name: "TEMCON Power Control Panels",
    category: "heat-treatment-equipment",
    brand: "TEMCON",
    shortDescription: "Computerised heat treatment cycle control panels for PWHT systems.",
    description:
      "Computerised heat treatment cycle control panels for precise temperature control during pre-heat and post weld heat treatment operations. Provides accurate cycle control, logging, and reporting.",
    images: [
      "https://cpimg.tistatic.com/04411241/b/4/Temcon-Power-Control-Panels.jpg",
    ],
    specs: [
      { label: "Control Type", value: "Computerised heat treatment cycle control" },
      { label: "Function", value: "Pre-heat & PWHT cycle management" },
    ],
    features: [
      "Computerised cycle control",
      "Precise temperature management",
      "Data logging and reporting",
      "Compatible with TEMCON transformer units",
    ],
    applications: [
      "PWHT cycle control",
      "Stress relieving cycle management",
      "Piping and vessel heat treatment",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "temcon-tau-99-thermocouple-welding-unit",
    name: "TEMCON TAU-99 — Thermocouple Welding Unit",
    category: "heat-treatment-equipment",
    brand: "TEMCON",
    model: "TAU-99",
    shortDescription: "Capacitor discharge thermocouple welding unit for attaching thermocouples to components.",
    description:
      "The TEMCON TAU-99 is a capacitor discharge thermocouple welding unit for fast, reliable attachment of thermocouples directly to components during heat treatment operations.",
    images: [
      "https://tiimg.tistatic.com/fp/1/006/628/easily-operate-thermocouple-welding-unit-026.jpg",
    ],
    specs: [
      { label: "Model", value: "TAU-99" },
      { label: "Type", value: "Capacitor discharge thermocouple welder" },
    ],
    features: [
      "Fast and reliable thermocouple attachment",
      "Capacitor discharge technology",
      "Simple to operate",
      "Portable and compact",
    ],
    applications: [
      "Thermocouple attachment for PWHT monitoring",
      "Heat treatment temperature measurement",
      "Stress relieving monitoring",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "temperature-recorders-6-12-point",
    name: "Temperature Recorders (6 & 12 Point)",
    category: "heat-treatment-equipment",
    shortDescription: "6 and 12-point chart temperature recorders for PWHT cycle documentation.",
    description:
      "6-point and 12-point chart temperature recorders for documenting heat treatment cycles. Provides permanent chart records of temperature vs time for compliance with PWHT procedures.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7E761toimVK0F-FqY5xHU7DcJ6XXf3h_YEE1RBmjyQ&s=10",
    ],
    specs: [
      { label: "Channels", value: "6 or 12 point" },
      { label: "Recording", value: "Chart recorder" },
      { label: "Input", value: "Thermocouple" },
    ],
    features: [
      "6 and 12 channel versions",
      "Permanent chart records",
      "Thermocouple input",
      "For PWHT compliance documentation",
    ],
    applications: [
      "PWHT cycle recording",
      "Stress relieving documentation",
      "Compliance reporting",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "heat-treatment-accessories",
    name: "Heat Treatment Accessories",
    category: "heat-treatment-equipment",
    shortDescription: "Flexible ceramic pad heaters, thermocouples, cables, and PWHT accessories.",
    description:
      "Complete range of heat treatment accessories including flexible ceramic pad heaters, thermocouples, extension cables, insulation blankets, and all ancillary items required for PWHT operations.",
    images: [
      "https://5.imimg.com/data5/TC/SE/GQ/SELLER-19218076/cp17-flexible-ceramic-pad-heater-80v-3-6kw--500x500.png",
    ],
    specs: [
      { label: "Heaters", value: "Flexible ceramic pad heaters" },
      { label: "Accessories", value: "Thermocouples, cables, blankets" },
    ],
    features: [
      "Flexible ceramic pad heaters",
      "Thermocouple extension cables",
      "Insulation blankets",
      "Complete PWHT accessory range",
    ],
    applications: [
      "PWHT heating elements",
      "Temperature measurement",
      "Heat retention during treatment",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── RADIATION SAFETY ────────────────────────────────────
  {
    slug: "radax-radiation-survey-meters",
    name: "RADAX Radiation Survey Meters",
    category: "radiation-safety",
    brand: "RADAX",
    shortDescription: "Heavy-duty radiation survey meters for X-ray and gamma radiation monitoring in NDT.",
    description:
      "RADAX SM-1000 heavy-duty radiation survey meters for monitoring X-ray and gamma radiation exposure in radiographic testing environments. Reliable, accurate, and built for demanding industrial use.",
    images: [
      "https://5.imimg.com/data5/TW/PZ/SC/SELLER-1529372/radax-sm-1000-heavy-duty-.JPG",
    ],
    specs: [
      { label: "Model", value: "SM-1000" },
      { label: "Type", value: "Heavy duty radiation survey meter" },
      { label: "Radiation Type", value: "X-ray & Gamma" },
    ],
    features: [
      "Heavy-duty construction for industrial use",
      "Accurate X-ray and gamma detection",
      "Audible and visual alarm",
      "Robust for field use",
    ],
    applications: [
      "Radiographic inspection areas",
      "Radiation zone monitoring",
      "Industrial NDT radiation safety",
      "Pipeline radiography",
    ],
    datasheet: null,
    featured: true,
  },
  {
    slug: "dosimeters",
    name: "Dosimeters",
    category: "radiation-safety",
    shortDescription: "EPD-113 digital and pen-type pocket dosimeters for personal radiation dose monitoring.",
    description:
      "Personal radiation dosimeters including EPD-113 digital electronic personal dosimeter and Arrow-Tech quartz pen-type pocket dosimeters for monitoring individual radiation exposure during radiographic testing.",
    images: [
      "https://5.imimg.com/data5/SELLER/PDFImage/2023/12/365250706/RI/ON/PY/96589305/pen-type-pocket-dosimeter-1000x1000.png",
    ],
    specs: [
      { label: "EPD-113", value: "Digital electronic personal dosimeter" },
      { label: "Arrow-Tech", value: "Quartz pen type pocket dosimeter" },
      { label: "Application", value: "Personal radiation dose monitoring" },
    ],
    features: [
      "Digital and analog options",
      "Compact pocket-sized design",
      "For personal dose monitoring",
      "Industry standard compliance",
    ],
    applications: [
      "Radiographic technician protection",
      "Personal dose monitoring",
      "Industrial radiography sites",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "pocket-bleeper-area-zone-monitor",
    name: "Pocket Bleeper & Area Zone Monitor",
    category: "radiation-safety",
    shortDescription: "Personal alarm and area zone monitors for real-time radiation detection and warning.",
    description:
      "Pocket bleeper personal radiation alarm and area zone monitor with extension probe for real-time radiation detection and warning in radiographic inspection areas.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/2/384156248/AS/PJ/QK/1529372/area-zone-monitor-with-extension-probe-1000x1000.jpeg",
    ],
    specs: [
      { label: "Pocket Bleeper", value: "Personal radiation alarm" },
      { label: "Area Zone Monitor", value: "With extension probe" },
      { label: "Output", value: "Audible and visual alarm" },
    ],
    features: [
      "Real-time radiation detection",
      "Audible and visual alarm",
      "Area monitor with extension probe",
      "Compact personal bleeper",
    ],
    applications: [
      "Radiographic inspection area safety",
      "Perimeter monitoring during radiography",
      "Personal safety during RT operations",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "radiation-warning-devices-raw",
    name: "Radiation Warning Devices — RAW Series",
    category: "radiation-safety",
    brand: "RAW Series",
    shortDescription: "Radioactivity warning blinker with siren for perimeter safety during radiographic testing.",
    description:
      "RAW Series radiation warning blinker with siren for perimeter safety during radiographic testing operations. Provides clear visual and audible warning to prevent unauthorised entry into radiation zones.",
    images: [
      "https://cpimg.tistatic.com/04407825/b/4/Radioactivity-Warning-Blinker-With-Siren.jpg",
    ],
    specs: [
      { label: "Series", value: "RAW" },
      { label: "Output", value: "Visual blinker and audible siren" },
      { label: "Application", value: "Radiation zone perimeter warning" },
    ],
    features: [
      "Visual blinker and audible siren",
      "Perimeter safety during radiography",
      "Prevents unauthorised zone entry",
      "Weatherproof construction",
    ],
    applications: [
      "Radiographic inspection site safety",
      "Radiation zone demarcation",
      "Industrial RT safety compliance",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── RADIOGRAPHIC EQUIPMENT ──────────────────────────────
  {
  slug: "fujifilm-industrial-radiographic-film",

  name: "Fujifilm Industrial Radiographic Film",

  category: "radiographic-equipment",

  brand: "Fujifilm",

  model: "IX-Film",

  shortDescription: "High-quality industrial X-ray film designed for conventional radiographic testing and non-destructive testing applications.",

  description:
    "Fujifilm Industrial Radiographic Film is designed for conventional X-ray radiography and non-destructive testing applications. The IX-Film range uses advanced emulsion technology to provide consistent image quality across a wide range of industrial inspection requirements. Different film grades are available to suit different materials, thicknesses, radiation sources, and required inspection accuracy. The films are suitable for applications including weld inspection, casting inspection, aerospace components, pipelines, and other industrial components.",

  images: [
    "https://5.imimg.com/data5/SELLER/Default/2021/3/EC/KL/YW/74148599/fujifilm-digital-x-ray-film-500x500.jpg",
  ],

  specs: [
    { label: "Product Type", value: "Industrial X-Ray Film" },
    { label: "Brand", value: "Fujifilm" },
    { label: "Product Line", value: "IX-Film" },
    { label: "Application", value: "Industrial Radiography / NDT" },
    { label: "Inspection Method", value: "Radiographic Testing (RT)" },
    { label: "Film Types", value: "IX20, IX25, IX30, IX50, IX80, IX100, IX150, IX29, IX59" },
    { label: "Radiation Sources", value: "X-Ray and Gamma Ray" },
    { label: "Packaging", value: "Sheet and Roll Film Options" },
  ],

  features: [
    "Designed specifically for industrial radiographic testing",
    "Consistent high-quality radiographic imaging",
    "Advanced emulsion technology",
    "Available in multiple film speeds and grain types",
    "Suitable for different materials and specimen thicknesses",
    "Compatible with conventional NDT film processing systems",
    "Available with different packaging options",
    "Suitable for demanding industrial inspection applications",
  ],

  applications: [
    "Radiographic Testing (RT)",
    "Weld Inspection",
    "Casting Inspection",
    "Pipeline Inspection",
    "Aerospace Component Inspection",
    "Industrial Component Inspection",
    "Oil and Gas Inspection",
    "Non-Destructive Testing (NDT)",
    "X-Ray Radiography",
    "Gamma Ray Radiography",
  ],

  datasheet: null,

  featured: true,
},
 {
  slug: "industrex-industrial-radiographic-film",

  name: "INDUSTREX Industrial Radiographic Film",

  category: "radiographic-equipment",

  brand: "Carestream",

  model: "INDUSTREX",

  shortDescription: "Industrial radiographic film designed for reliable, high-quality imaging in non-destructive testing and industrial radiography applications.",

  description:
    "Carestream INDUSTREX Industrial Radiographic Film is designed for conventional industrial radiography and non-destructive testing. The INDUSTREX film range provides consistent and detailed radiographic images for detecting and evaluating internal discontinuities in industrial components. It is available in different film types to suit various radiographic inspection requirements, including weld, casting, pipeline, and other industrial applications.",

  images: [
    "https://carestreamhealthcare.com/content/dam/carestream/site/public-website/global/products/non-destructive-test(ndt)/industrex-film/product-image/row-ndt-industrex-film4194.jpg",
  ],

  specs: [
    { label: "Product Type", value: "Industrial Radiographic Film" },
    { label: "Brand", value: "Carestream" },
    { label: "Product Line", value: "INDUSTREX" },
    { label: "Application", value: "Industrial Radiography / NDT" },
    { label: "Inspection Method", value: "Radiographic Testing (RT)" },
    { label: "Film Types", value: "DR50, M100, MX125, T200, AA400, HS800" },
    { label: "Radiation", value: "X-Ray and Gamma Ray" },
  ],

  features: [
    "Designed specifically for industrial radiographic testing",
    "Consistent and predictable imaging results",
    "High-quality radiographic image production",
    "Available in multiple film speeds and types",
    "Suitable for direct X-ray and lead foil screen applications",
    "Fine grain and high contrast options available",
    "Suitable for demanding industrial inspection environments",
  ],

  applications: [
    "Radiographic Testing (RT)",
    "Weld Inspection",
    "Casting Inspection",
    "Pipeline Inspection",
    "Aerospace Component Inspection",
    "Industrial Component Inspection",
    "Non-Destructive Testing (NDT)",
    "X-Ray Radiography",
    "Gamma Ray Radiography",
  ],

  datasheet: null,

  featured: true,
},
  {
    slug: "smart-pipeline-crawler",
    name: "Smart Pipeline Crawler",
    category: "radiographic-equipment",
    shortDescription: "Automatic radiographic inspection crawler for 6\" to 48\" pipelines.",
    description:
      "Smart pipeline crawler for automatic radiographic inspection of pipelines from 6\" to 48\" diameter. Self-propelled with wireless control and built-in source holder.",
    images: [
      "https://www.3endt.eu/_media/img/large/cr.jpg",
    ],
    specs: [
      { label: "Pipeline Range", value: "6\" to 48\" diameter" },
      { label: "Operation", value: "Automatic / Self-propelled" },
      { label: "Exports", value: "Over 2000 nos. exported" },
      { label: "Control", value: "Wireless remote control" },
    ],
    features: [
      "Covers 6\" to 48\" pipe diameters",
      "Self-propelled with wireless control",
      "Latest and economical design",
      "Over 2000 units exported worldwide",
      "Built-in source holder",
    ],
    applications: [
      "Pipeline weld radiographic inspection",
      "Onshore and offshore pipeline RT",
      "Oil & gas pipeline construction",
      "Process piping inspection",
    ],
    datasheet: null,
    featured: true,
  },
  {
    slug: "luminux-led-film-viewers",
    name: "LUMINUX High Intensity LED Film Viewers",
    category: "radiographic-equipment",
    brand: "LUMINUX",
    model: "LH-P1",
    shortDescription: "High intensity LED X-ray film viewers for clear and accurate radiograph interpretation.",
    description:
      "LUMINUX High Intensity LED Film Viewers — latest economical design with over 2000 units exported. Provides high intensity uniform illumination for accurate radiograph viewing and interpretation.",
    images: [
      "https://cpimg.tistatic.com/04408414/b/4/Luminux-High-Intensity-X-Ray-Film-Viewers-Model-LH-P1.jpg",
    ],
    specs: [
      { label: "Model", value: "LH-P1" },
      { label: "Type", value: "High Intensity LED" },
      { label: "Application", value: "X-ray film viewing" },
    ],
    features: [
      "High intensity LED illumination",
      "Uniform light distribution",
      "Low power consumption",
      "Available in single and multi-film formats",
      "Over 2000 units exported",
    ],
    applications: [
      "Radiograph interpretation",
      "Weld film viewing",
      "Casting and forging film inspection",
      "Darkroom and field use",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "xray-film-drying-cabinet",
    name: "X-Ray Film Drying Cabinet — D-25 / D-50",
    category: "radiographic-equipment",
    shortDescription: "Heated film drying cabinets for rapid processing of X-ray radiographic films.",
    description:
      "X-ray film drying cabinet in D-25 and D-50 capacities for rapid and uniform drying of radiographic films after wet processing. Electrically heated with adjustable temperature control.",
    images: [
      "https://cpimg.tistatic.com/00270690/b/3/X-Ray-Film-Drying-Cabinet.jpg",
    ],
    specs: [
      { label: "Models", value: "D-25 & D-50" },
      { label: "Heating", value: "Electric with temperature control" },
      { label: "Application", value: "Radiographic film drying" },
    ],
    features: [
      "D-25 and D-50 capacity options",
      "Adjustable temperature control",
      "Uniform heated airflow",
      "Rapid film drying",
    ],
    applications: [
      "Radiographic darkroom processing",
      "Film drying after wet processing",
      "NDT laboratory darkrooms",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "stainless-steel-processing-tanks",
    name: "Stainless Steel Processing Tanks",
    category: "radiographic-equipment",
    shortDescription: "SS 316 TIG-welded processing tanks for X-ray film chemical processing.",
    description:
      "Stainless Steel 316 TIG-welded film processing tanks for X-ray film chemical processing. Available in standard sizes and 3-in-1 type for developer, stop bath, and fixer in one unit.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525984574/YP/XU/VX/3732093/ss-developing-tank.jpg",
    ],
    specs: [
      { label: "Material", value: "SS 316 TIG Welded" },
      { label: "Type", value: "Standard & 3-in-1" },
      { label: "Application", value: "X-ray film chemical processing" },
    ],
    features: [
      "SS 316 material for chemical resistance",
      "TIG welded for durability",
      "3-in-1 type available",
      "Standard sizes available",
    ],
    applications: [
      "X-ray film developing",
      "Radiographic darkroom",
      "NDT laboratory",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "darkroom-accessories",
    name: "Darkroom Accessories",
    category: "radiographic-equipment",
    shortDescription: "Film hangers, steel spools, alarm timers, and safe lights for X-ray darkrooms.",
    description:
      "Complete range of darkroom accessories including film hangers, steel spools, alarm timers, and safe lights for X-ray film processing darkrooms.",
    images: [
      "https://sc04.alicdn.com/kf/H86d04830eb9b4bf3ab298b362d07fe22e.jpg",
    ],
    specs: [
      { label: "Includes", value: "Film hangers, steel spools, alarm timer, safe light" },
    ],
    features: [
      "Film hangers for multiple film sizes",
      "Steel spools for film transport",
      "Alarm timer for processing control",
      "Safe lights for darkroom illumination",
    ],
    applications: [
      "Radiographic darkroom setup",
      "X-ray film processing",
      "NDT laboratory darkrooms",
    ],
    datasheet: null,
    featured: false,
  },

  // ─── RADIOGRAPHIC ACCESSORIES ────────────────────────────
  {
    slug: "calden-densitometers",
    name: "CALDEN Densitometers — CD-1, CD-2, CD-3",
    category: "radiographic-accessories",
    brand: "CALDEN",
    model: "CD-1 / CD-2 / CD-3",
    shortDescription: "Precision densitometers for measuring optical density of radiographic films.",
    description:
      "CALDEN precision densitometers in CD-1, CD-2, and CD-3 models for accurate measurement of optical density of radiographic films. Essential for radiograph quality verification.",
    images: [
      "https://cpimg.tistatic.com/04408389/b/4/CALDEN-Densitometer-CD-2.jpg",
    ],
    specs: [
      { label: "Models", value: "CD-1, CD-2, CD-3" },
      { label: "Application", value: "Optical density measurement of RT films" },
      { label: "Brand", value: "CALDEN" },
    ],
    features: [
      "Three model options for different requirements",
      "Accurate optical density measurement",
      "For radiograph quality verification",
      "Compact and portable",
    ],
    applications: [
      "Radiograph density verification",
      "Film processing quality control",
      "RT code compliance",
      "NDT laboratory use",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "image-quality-indicators-wire-type",
    name: "Image Quality Indicators — Wire Type",
    category: "radiographic-accessories",
    shortDescription: "EN 462-1 & ASTM E-747 wire type IQIs for radiographic sensitivity verification.",
    description:
      "Wire type Image Quality Indicators (IQIs) manufactured to EN 462-1 and ASTM E-747 standards. Used to verify the sensitivity and quality of radiographic images.",
    images: [
      "https://3.imimg.com/data3/KJ/SH/MY-4471710/image-quality-indicators-penetrameters-wire-type-1000x1000.jpg",
    ],
    specs: [
      { label: "Standard", value: "EN 462-1 & ASTM E-747" },
      { label: "Type", value: "Wire type IQI" },
    ],
    features: [
      "EN 462-1 and ASTM E-747 compliant",
      "Accurate sensitivity verification",
      "Multiple wire diameter sets",
      "For all industrial radiography applications",
    ],
    applications: [
      "Radiographic image quality verification",
      "Weld RT sensitivity check",
      "Code compliance radiography",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "penetrameters-strip-hole-type",
    name: "Penetrameters — Strip / Hole Type",
    category: "radiographic-accessories",
    shortDescription: "ASTM E-1025 & E-1742 compliant hole-type penetrameters for radiographic quality control.",
    description:
      "Hole-type (strip) penetrameters manufactured to ASTM E-1025 and E-1742 standards for radiographic sensitivity and quality verification.",
    images: [
      "https://cdn11.bigcommerce.com/s-wd3bd4agi/images/stencil/375x375/j/newiqi1742-mainsquare__76751.original.png",
    ],
    specs: [
      { label: "Standard", value: "ASTM E-1025 & E-1742" },
      { label: "Type", value: "Strip / Hole type" },
    ],
    features: [
      "ASTM E-1025 and E-1742 compliant",
      "Strip and hole type options",
      "Accurate quality verification",
    ],
    applications: [
      "Radiographic quality control",
      "ASTM-compliant radiography",
      "Weld and casting inspection",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "lead-letters-numbers-tapes",
    name: "Lead Letters, Numbers & Tapes",
    category: "radiographic-accessories",
    shortDescription: "Lead identification markers and tapes with vinyl backing for radiographic film identification.",
    description:
      "Lead letters, numbers, and identification tapes with vinyl backing for marking radiographic films. Available in rolls and cut sheets with rounded corners.",
    images: [
      "https://southmfg.com/wp-content/uploads/2016/09/high-energy-figures.jpg",
    ],
    specs: [
      { label: "Type", value: "Lead letters, numbers & tapes" },
      { label: "Backing", value: "Vinyl" },
      { label: "Format", value: "Rolls & cut sheets with rounded corners" },
    ],
    features: [
      "Vinyl backing for secure attachment",
      "Available as rolls and cut sheets",
      "Rounded corners for safe handling",
      "Complete alphanumeric sets",
    ],
    applications: [
      "Radiographic film identification",
      "Weld joint identification",
      "RT report traceability",
    ],
    datasheet: null,
    featured: false,
  },
  
  {
    slug: "maxon-lead-intensifying-screens",
    name: "MAXON Lead Intensifying Screens",
    category: "radiographic-accessories",
    brand: "MAXON",
    shortDescription: "Lead intensifying screens for enhanced radiographic image quality and reduced exposure times.",
    description:
      "MAXON lead intensifying screens for use with X-ray and gamma-ray radiographic film. Reduces exposure times while enhancing image quality and sensitivity.",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/8/533608072/WW/UU/XF/46222879/imgi-96-19600-aluminium-sheet-500x500.png",
    ],
    specs: [
      { label: "Brand", value: "MAXON" },
      { label: "Type", value: "Lead intensifying screens" },
      { label: "Application", value: "X-ray & gamma-ray radiography" },
    ],
    features: [
      "Reduces radiographic exposure time",
      "Enhances image quality",
      "Compatible with all RT film types",
      "Available in standard sizes",
    ],
    applications: [
      "Industrial radiographic inspection",
      "Weld radiography",
      "Casting and forging RT",
    ],
    datasheet: null,
    featured: false,
  },
  {
    slug: "pvc-cassettes",
    name: "PVC Cassettes & Special Cassettes",
    category: "radiographic-accessories",
    shortDescription: "PVC film cassettes for X-ray film protection and exposure during radiographic testing.",
    description:
      "PVC cassettes and special cassettes for protecting and holding X-ray films during radiographic exposure. Available in standard and special sizes for pipeline and vessel radiography.",
    images: [
      "https://product.ndtservis.com/768x768/278_pvc_film_kasetleri.png",
    ],
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Type", value: "Standard & Special" },
    ],
    features: [
      "Light-tight construction",
      "Standard and special sizes",
      "Reusable and durable",
      "Compatible with all X-ray films",
    ],
    applications: [
      "X-ray film holding during exposure",
      "Pipeline radiography",
      "Vessel and structural radiography",
    ],
    datasheet: null,
    featured: false,
  },
];

// Helper: get featured products
export const getFeaturedProducts = () => products.filter((p) => p.featured);

// Helper: get products by category
export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.category === categorySlug);

// Helper: get product by slug
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

// Helper: get related products (same category, excluding current)
export const getRelatedProducts = (slug: string, limit = 4) => {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.slug !== slug)
    .slice(0, limit);
};
