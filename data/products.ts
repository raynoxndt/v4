// ============================================================
// YO
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
slug: "radent-dc-yoke",
name: "Radent DC Yoke",
category: "magnetic-particle-inspection",
model: "Radent 8 Y BP",
shortDescription: "Portable DC magnetic yoke designed for magnetic particle inspection and crack detection of ferromagnetic components in industrial NDT applications.",
description:
"The Radent DC Yoke is a portable direct-current magnetic inspection yoke designed for magnetic particle testing of ferromagnetic components. Its adjustable pole distance allows positioning across different inspection areas, while the 12 V input supply makes it suitable for portable and field inspection applications. The yoke is designed for industrial non-destructive testing and surface and subsurface defect detection.",
images: [
"https://5.imimg.com/data5/AB/PE/UO/SELLER-1837183/dc-yoke-125x125.JPG",
],
specs: [
{ label: "Product Type", value: "DC Magnetic Yoke" },
{ label: "Model", value: "Radent 8 Y BP" },
{ label: "Usage", value: "Industrial" },
{ label: "Pole Distance", value: "50-300 mm" },
{ label: "Cord Length", value: "3 meters" },
{ label: "Input Supply", value: "12 V DC" },
{ label: "Magnetization Mode", value: "DC" },
],
features: [
"DC magnetization operation",
"Portable inspection design",
"Adjustable pole distance from 50 to 300 mm",
"3-meter power cord",
"12 V input supply",
"Suitable for industrial NDT applications",
"Designed for magnetic particle inspection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Defect Detection",
"Subsurface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
"Field Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "yoke-lifting-blocks",
name: "Yoke Lifting Blocks",
category: "magnetic-particle-inspection",
model: "TB-10",
shortDescription: "Magnetic weight lift test bars designed for calibration and certification of magnetic particle inspection yokes.",
description:
"The Yoke Lifting Blocks are magnetic weight lift test bars used for testing, calibration, and certification of Magnetic Particle Inspection yokes. The test bars allow the lifting performance of AC and DC yokes to be verified at specified pole spacing and lifting loads. Their galvanized finish provides durability for repeated industrial inspection and testing applications.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375864470/ZK/UB/EG/1837183/yoke-lifting-blocks-125x125.png",
],
specs: [
{ label: "Product Type", value: "Magnetic Yoke Lift Test Bar" },
{ label: "Model", value: "TB-10" },
{ label: "Required Part", value: "Elevator Cabin" },
{ label: "Usage", value: "Industrial Premises" },
{ label: "Test Bar Weight", value: "4.5 kg" },
{ label: "Finishing", value: "Galvanized" },
{ label: "Application", value: "Magnetic Particle Inspection Yoke Testing" },
{ label: "Purpose", value: "Calibration and Certification of MPI Yokes" },
{ label: "After-Sales Service", value: "Provided" },
],
features: [
"Designed for magnetic particle inspection yoke testing",
"Used for calibration and certification",
"4.5 kg test bar configuration",
"Suitable for AC yoke lift testing",
"Multiple bars can be combined for higher DC lift testing",
"Galvanized finish for durability",
"Designed for industrial inspection applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"MPI Yoke Calibration",
"MPI Yoke Certification",
"Yoke Lift Testing",
"AC Yoke Testing",
"DC Yoke Testing",
"Industrial NDT Equipment Testing",
],
datasheet: null,
featured: false,
},

  {
slug: "non-destructive-testing-yoke",
name: "Non Destructive Testing Yoke",
category: "magnetic-particle-inspection",
model: "Radent-1500",
shortDescription: "Heavy-duty magnetic inspection yoke designed for non-destructive testing and detection of surface and subsurface defects in ferromagnetic components.",
description:
"The Non Destructive Testing Yoke is a heavy-duty magnetic inspection system designed for industrial non-destructive testing. It is used for magnetic inspection of ferromagnetic components and can detect both surface and subsurface discontinuities. The equipment is designed for continuous industrial inspection and weld verification applications.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375839890/EF/JD/LO/1837183/non-destructive-testing-yoke-125x125.png",
],
specs: [
{ label: "Product Type", value: "Non Destructive Testing Yoke" },
{ label: "Model", value: "Radent-1500" },
{ label: "Testing Methodology", value: "Radiographic Testing" },
{ label: "Service Type", value: "Process Definition" },
{ label: "Weld Verification", value: "Required" },
{ label: "Application", value: "Mechanical Engineering" },
{ label: "Input Supply", value: "230 V, 50 Hz" },
{ label: "Maximum Output Current", value: "1500 A" },
{ label: "Current Drawn", value: "32 A" },
{ label: "Unit Weight", value: "40 kg" },
{ label: "Dimension", value: "550 x 240 x 240 mm" },
],
features: [
"Heavy-duty industrial construction",
"Designed for non-destructive testing",
"Suitable for continuous inspection",
"Designed for surface and subsurface defect detection",
"AC and HWDC current capability",
"Solid-state control system",
"Rugged construction for magnetic inspection",
"Suitable for weld verification",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Non-Destructive Testing (NDT)",
"Weld Inspection",
"Weld Verification",
"Surface Defect Detection",
"Subsurface Defect Detection",
"Mechanical Engineering Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},

  {
slug: "rel-10-magnetic-particle-crack-detector",
name: "Magnetic Particle Crack Detector",
category: "magnetic-particle-inspection",
model: "REL-10",
shortDescription: "Portable magnetic particle crack detector designed for industrial non-destructive testing and crack detection in ferromagnetic components.",
description:
"The REL-10 Magnetic Particle Crack Detector is a portable inspection device designed for magnetic particle testing and crack detection in ferromagnetic components. Its compact cylindrical inspection configuration is suitable for industrial non-destructive testing applications. The unit operates on 230 VAC or 115 VAC at 50-60 Hz and is designed for reliable industrial crack detection.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375857901/TU/GA/AW/1837183/magnetic-particle-crack-detector-125x125.png",
],
specs: [
{ label: "Product Type", value: "Magnetic Particle Crack Detector" },
{ label: "Model", value: "REL-10" },
{ label: "Application", value: "Industrial" },
{ label: "Inside Diameter", value: "250 mm" },
{ label: "Outside Diameter", value: "314 mm" },
{ label: "Width", value: "100 mm" },
{ label: "Line Voltage", value: "230 VAC / 115 VAC" },
{ label: "Frequency", value: "50-60 Hz" },
],
features: [
"Portable magnetic particle inspection design",
"Designed for crack detection",
"Suitable for industrial NDT applications",
"Dual 230 VAC / 115 VAC line voltage",
"50-60 Hz operation",
"Compact cylindrical inspection configuration",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Ferromagnetic Component Inspection",
"Industrial NDT",
"Surface Defect Detection",
"Weld Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "yoke-test-bar",
name: "Yoke Test Bar",
category: "magnetic-particle-inspection",
model: "Yoke Test Bar",
shortDescription: "Portable test bar designed to evaluate the performance of yoke-type magnetic crack detectors for detecting surface and subsurface defects.",
description:
"The Yoke Test Bar is a test piece designed to check and evaluate the performance of yoke-type magnetic crack detectors during magnetic particle inspection. It features drilled holes at different depths from the top surface, allowing the yoke's ability to detect near-surface and subsurface defects to be assessed. The portable test bar is suitable for industrial NDT equipment verification and inspection applications.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375831501/WL/YI/WT/1837183/yoke-test-bar-125x125.png",
],
specs: [
{ label: "Product Type", value: "Yoke Test Bar" },
{ label: "Test Type", value: "Yoke Performance Test Piece" },
{ label: "Defect Depths", value: "1, 2, 3, 4, 5, 6 and 7 mm" },
{ label: "Usage", value: "Testing Surface and Subsurface Defects with Yoke" },
{ label: "Type", value: "Portable" },
{ label: "Application", value: "Industrial" },
{ label: "Color", value: "Black" },
],
features: [
"Designed for testing yoke-type crack detectors",
"Portable test piece",
"Multiple simulated defect depths",
"Tests detection of near-surface defects",
"Tests detection of subsurface defects",
"Suitable for magnetic particle inspection equipment verification",
"Designed for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Yoke Performance Testing",
"Yoke Calibration Verification",
"Crack Detector Testing",
"Surface Defect Detection",
"Subsurface Defect Detection",
"NDT Equipment Verification",
],
datasheet: null,
featured: false,
},

  {
slug: "bhel-test-block",
name: "BHEL Test Block",
category: "magnetic-particle-inspection",
model: "BHEL Test Block",
shortDescription: "Magnetic particle inspection test block designed to verify and evaluate the performance of MPI machines for detecting subsurface discontinuities.",
description:
"The BHEL Test Block is a magnetic particle inspection test specimen designed for checking the performance and sensitivity of magnetic particle testing machines. It is primarily used for prod-type and coil-type magnetization to verify that an MPI system can detect subsurface discontinuities. The test block is manufactured to meet BHEL requirements and is suitable for industrial NDT equipment verification and performance testing.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375858723/LS/RD/AN/1837183/bhel-test-block-125x125.png",
],
specs: [
{ label: "Product Type", value: "BHEL Test Block" },
{ label: "Mounting Options", value: "Panel Mount" },
{ label: "Material", value: "Iron" },
{ label: "Application", value: "Industrial" },
{ label: "Surface Treatment", value: "Polished" },
{ label: "Usage", value: "Testing Machine" },
{ label: "Available Material", value: "Aluminum, Iron" },
],
features: [
"Designed for magnetic particle inspection equipment testing",
"Used to verify MPI machine performance",
"Suitable for detecting subsurface discontinuities",
"Designed for prod and coil magnetization methods",
"Manufactured to meet BHEL requirements",
"Polished surface finish",
"Suitable for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"MPI Machine Testing",
"MPI Equipment Verification",
"Prod Type Inspection",
"Coil Type Inspection",
"Subsurface Defect Detection",
"NDT Equipment Performance Testing",
"Industrial NDT",
],
datasheet: null,
featured: false,
},
  

{
slug: "radent-permanent-yoke",
name: "Radent Permanent Yoke",
category: "magnetic-particle-inspection",
model: "Permanent Yoke",
shortDescription: "Permanent magnetic yoke designed for industrial magnetic particle inspection and crack detection of ferromagnetic components.",
description:
"The Radent Permanent Yoke is a portable permanent magnetic inspection device designed for industrial magnetic particle testing and crack detection. It generates a strong magnetic field without requiring an external power supply, making it suitable for field and workshop inspection of ferromagnetic components. Its adjustable pole distance and lifting capacity make it suitable for a range of industrial inspection applications.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375826939/BJ/TD/NO/1837183/radent-permanent-yoke-125x125.png",
],
specs: [
{ label: "Product Type", value: "Permanent Magnetic Yoke" },
{ label: "Pole Distance", value: "0-350 mm" },
{ label: "Field Strength", value: "8500 Gauss" },
{ label: "Lifting Capacity", value: "23 kg" },
{ label: "Yoke Weight", value: "2.3 kg" },
{ label: "Operation", value: "Permanent Magnet - No External Power Required" },
{ label: "Application", value: "Industrial" },
],
features: [
"Permanent magnetic operation",
"No external power required",
"8500 Gauss field strength",
"23 kg lifting capacity",
"Adjustable pole distance up to 350 mm",
"Portable 2.3 kg design",
"Suitable for industrial inspection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Inspection",
"Ferromagnetic Component Inspection",
"Industrial NDT",
"Field Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "radent-ac-dc-yokes",
name: "Radent AC/DC Yokes",
category: "magnetic-particle-inspection",
model: "AC/DC Yoke",
shortDescription: "AC/DC electromagnetic yoke designed for magnetic particle inspection, crack detection, and surface and subsurface flaw detection in ferromagnetic materials.",
description:
"The Radent AC/DC Yokes are electromagnetic inspection yokes designed for magnetic particle testing of ferromagnetic components. They support both AC and DC magnetization modes, providing flexibility for surface and subsurface defect detection. With adjustable pole spacing, a 3-meter power cord, and single-phase 220 V operation, these yokes are suitable for industrial and field NDT applications.",
images: [
"https://5.imimg.com/data5/SELLER/Default/2024/1/375827967/OD/DA/WQ/1837183/radent-ac-dc-yokes-125x125.png",
],
specs: [
{ label: "Product Type", value: "AC/DC Electromagnetic Yoke" },
{ label: "Pole Distance", value: "50-300 mm" },
{ label: "Cord Length", value: "3 meters" },
{ label: "Input Supply", value: "220 V, 50 Hz, 1 Phase" },
{ label: "Maximum Current Drawn", value: "AC - 2.2 A / DC - 2.5 A" },
{ label: "Lifting Capacity", value: "100 mm" },
{ label: "Magnetization Modes", value: "AC / DC" },
],
features: [
"Dual AC and DC magnetization",
"Adjustable pole distance from 50 to 300 mm",
"3-meter power cord",
"Single-phase 220 V operation",
"Suitable for magnetic particle inspection",
"Designed for industrial NDT applications",
"Suitable for surface and subsurface defect detection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Defect Detection",
"Subsurface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},
  {
slug: "radent-mpi-yoke",
name: "Radent MPI Yoke",
category: "magnetic-particle-inspection",
model: "MPI Yoke",
shortDescription: "Industrial magnetic particle inspection yoke with AC and DC operation for detecting surface and subsurface discontinuities in ferromagnetic components.",
description:
"The Radent MPI Yoke is an industrial magnetic particle inspection device designed for non-destructive testing of ferromagnetic materials. It provides AC and DC magnetization modes with different lifting capacities, making it suitable for detecting surface and subsurface discontinuities. Its solid-state controls and automatic operation make it suitable for industrial inspection and routine NDT applications.",
images: [
"https://5.imimg.com/data5/IQ/WA/LB/SELLER-1837183/mpi-yoke-125x125.JPG",
],
specs: [
{ label: "Product Type", value: "Magnetic Particle Inspection Yoke" },
{ label: "Usage", value: "Industrial" },
{ label: "Lifting Capacity", value: "27 kg in DC Mode / 5 kg in AC Mode" },
{ label: "Operation", value: "Automatic" },
{ label: "Controls", value: "Solid State" },
{ label: "Warranty", value: "12 Months" },
{ label: "Magnetization Modes", value: "AC / DC" },
],
features: [
"AC and DC magnetization modes",
"27 kg lifting capacity in DC mode",
"5 kg lifting capacity in AC mode",
"Automatic operation",
"Solid-state controls",
"Designed for magnetic particle inspection",
"Suitable for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Defect Detection",
"Subsurface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},
  {
slug: "eeciflux-electromagnetic-inspection-ac-yoke",
name: "EECIFLUX Electromagnetic Inspection AC Yoke",
category: "magnetic-particle-inspection",
model: "EECIFLUX",
shortDescription: "Heavy-duty AC electromagnetic inspection yoke designed for crack detection and surface and subsurface inspection of ferromagnetic materials.",
description:
"The EECIFLUX Electromagnetic Inspection AC Yoke is a heavy-duty electromagnetic yoke designed for industrial magnetic particle inspection and non-destructive testing. It generates an AC magnetic field across ferromagnetic components to help detect surface and subsurface discontinuities. Its robust Fe-alloy construction, powder-coated finish, and AC mains operation make it suitable for demanding industrial inspection applications.",
images: [
"https://cpimg.tistatic.com/04289981/b/4/EECIFLUX-Electromagnetic-Inspection-AC-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Electromagnetic Inspection AC Yoke" },
{ label: "Application", value: "Crack Detection, Surface & Subsurface Inspection" },
{ label: "Lifting Capacity", value: "Up to 10 kg" },
{ label: "Magnet Type", value: "Electromagnetic" },
{ label: "Magnet Grade", value: "Industrial Grade" },
{ label: "Material", value: "Robust Fe-Alloy Material" },
{ label: "Composite", value: "Heavy Duty Metal Alloy" },
{ label: "Power Supply", value: "AC Mains" },
{ label: "Power", value: "2.5 A" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Voltage", value: "230 V AC" },
{ label: "Shape", value: "U-Shape" },
{ label: "Size Range", value: "Standard Inspection Yoke Size" },
{ label: "Surface Finish", value: "Powder Coated" },
{ label: "Weight", value: "6 kg" },
],
features: [
"AC electromagnetic operation",
"Up to 10 kg lifting capacity",
"Heavy-duty metal alloy construction",
"Robust Fe-alloy material",
"Industrial-grade electromagnet",
"U-shaped inspection design",
"Powder-coated surface finish",
"Designed for surface and subsurface flaw detection",
"Suitable for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Flaw Detection",
"Subsurface Flaw Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},

  {
slug: "eeciflux-flux-yokes",
name: "EECIFLUX Flux Yokes",
category: "magnetic-particle-inspection",
model: "EECIFLUX",
shortDescription: "Electromagnetic flux yoke designed for magnetic particle inspection, crack detection, and routine and field testing of ferromagnetic components.",
description:
"The EECIFLUX Flux Yokes are U-shaped electromagnetic inspection devices designed for magnetic particle testing and crack detection in ferrous components. The yokes use insulated copper coils within a powder-coated steel housing to generate a magnetic field across the inspection area. Their continuous-duty operation and robust construction make them suitable for industrial NDT, quality inspection, routine testing, and field inspection applications.",
images: [
"https://cpimg.tistatic.com/04289982/b/4/EECIFLUX-Flux-Yokes.jpg",
],
specs: [
{ label: "Product Type", value: "Electromagnetic Flux Yoke" },
{ label: "Application", value: "Magnetic Particle Inspection and Crack Detection in Ferrous Components" },
{ label: "Capacity", value: "Continuous Duty" },
{ label: "Magnet Type", value: "Electromagnetic Yoke" },
{ label: "Magnet Grade", value: "High Strength Professional Grade" },
{ label: "Material", value: "Insulated Copper Coil with Powder-Coated Steel Housing" },
{ label: "Composite", value: "Metal Alloy Core with Insulated Copper Coils" },
{ label: "Power Supply", value: "AC Mains" },
{ label: "Power", value: "2.5 A" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Voltage", value: "220 V" },
{ label: "Shape", value: "U-Shape" },
{ label: "Size Range", value: "Standard and Custom Sizes Available" },
{ label: "Surface Finish", value: "Powder Coated" },
{ label: "Weight", value: "Approx. 6.5 kg" },
],
features: [
"Electromagnetic U-shaped yoke",
"Continuous-duty operation",
"High-strength professional-grade magnet",
"Insulated copper coils",
"Powder-coated steel housing",
"Designed for crack detection",
"Suitable for routine and field testing",
"Standard and custom sizes available",
"Suitable for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Ferrous Component Inspection",
"Weld Inspection",
"Quality Inspection",
"Routine NDT Testing",
"Field NDT Testing",
"Industrial NDT",
],
datasheet: null,
featured: false,
},
  {
slug: "magnetic-particle-yokes",
name: "Magnetic Particle Yokes",
category: "magnetic-particle-inspection",
model: "Magnetic Particle Yoke",
shortDescription: "AC/DC electromagnetic yoke designed for magnetic particle inspection, surface crack detection, and weld inspection of ferromagnetic materials.",
description:
"The Magnetic Particle Yoke is a U-shaped electromagnetic inspection device designed for non-destructive magnetic particle testing of ferromagnetic materials. It generates a magnetic field across the inspection area, allowing magnetic particles to gather around flux leakage caused by surface and subsurface discontinuities. The mild steel body with copper winding and AC/DC operation make it suitable for weld inspection, crack detection, and industrial NDT applications.",
images: [
"https://cpimg.tistatic.com/04290032/b/4/Magnetic-Particle-Yokes.jpg",
],
specs: [
{ label: "Product Type", value: "Magnetic Particle Inspection Yoke" },
{ label: "Application", value: "Surface Crack Detection in Ferrous Materials" },
{ label: "Capacity", value: "Up to 22 kg Lift" },
{ label: "Magnet Type", value: "Electromagnetic Yoke" },
{ label: "Material", value: "Mild Steel with Copper Coil" },
{ label: "Composite", value: "Mild Steel Body with Copper Winding" },
{ label: "Power Supply", value: "AC / DC" },
{ label: "Power", value: "60 VA" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Voltage", value: "220 V" },
{ label: "Shape", value: "U-Shape" },
{ label: "Size", value: "220 x 60 x 120 mm" },
{ label: "Surface Finish", value: "Powder Coated" },
{ label: "Weight", value: "2.3 kg" },
],
features: [
"AC/DC electromagnetic operation",
"U-shaped yoke design",
"Up to 22 kg lifting capacity",
"Mild steel body with copper winding",
"Powder-coated surface finish",
"Suitable for surface and subsurface flaw detection",
"Designed for weld crack inspection",
"Suitable for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Surface Crack Detection",
"Subsurface Flaw Detection",
"Weld Crack Inspection",
"Ferrous Material Inspection",
"Industrial NDT",
"Non-Destructive Testing",
],
datasheet: null,
featured: false,
},

  {
slug: "ef-2y-ef-3y-ac-hwdc-dual-magnetization-yoke",
name: "EF-2Y EF-3Y AC HWDC Dual Magnetization Yoke",
category: "magnetic-particle-inspection",
model: "EF-2Y / EF-3Y",
shortDescription: "Heavy-duty dual magnetization yoke with AC and HWDC operation for detecting surface and subsurface discontinuities in ferromagnetic materials.",
description:
"The EF-2Y EF-3Y AC HWDC Dual Magnetization Yoke is an electromagnetic magnetic particle inspection device designed for non-destructive testing of ferromagnetic components. It provides both AC and HWDC magnetization modes, allowing inspectors to perform surface and subsurface defect detection. With adjustable pole legs, an insulated housing, and a high-strength alloy core, the yoke is designed for demanding industrial inspection applications.",
images: [
"https://cpimg.tistatic.com/03417551/b/5/EF-2Y-EF-3Y-AC-HWDC-Dual-Magnetization-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Dual Magnetization Magnetic Yoke" },
{ label: "Model", value: "EF-2Y / EF-3Y" },
{ label: "Inspection Method", value: "Magnetic Particle Inspection (MPI)" },
{ label: "Magnetization", value: "AC / HWDC" },
{ label: "Capacity", value: "Up to 18 kg (AC) / Up to 23 kg (HWDC)" },
{ label: "Magnet Type", value: "Electromagnetic Yoke" },
{ label: "Magnet Grade", value: "Heavy-Duty Industrial Grade" },
{ label: "Material", value: "High Strength Alloy Core with Molded Insulated Housing" },
{ label: "Power Supply", value: "AC / HWDC (Hand Wave Direct Current)" },
{ label: "Power", value: "Approx. 50-60 W" },
{ label: "Frequency", value: "50/60 Hz" },
{ label: "Voltage", value: "12 V" },
{ label: "Shape", value: "Rectangle" },
{ label: "Size Range", value: "Standard Yoke Size with Adjustable Pole Legs" },
{ label: "Surface Finish", value: "Matte Enamel Painted, Corrosion-Resistant" },
{ label: "Weight", value: "2.8-3.1 kg" },
],
features: [
"Dual AC and HWDC magnetization",
"Heavy-duty industrial-grade construction",
"Adjustable pole legs",
"High-strength alloy core",
"Molded insulated housing",
"Suitable for surface and subsurface defect detection",
"Corrosion-resistant matte enamel finish",
"Designed for demanding magnetic particle inspection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Surface Crack Detection",
"Subsurface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
"Field Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "ef-4y-ef-5y-mains-operated-ac-yoke",
name: "EF-4Y / EF-5Y Mains Operated AC Yoke",
category: "magnetic-particle-inspection",
model: "EF-4Y / EF-5Y",
shortDescription: "Mains-operated AC electromagnetic yoke designed for magnetic particle inspection, crack detection, and weld inspection of ferromagnetic components.",
description:
"The EF-4Y / EF-5Y Mains Operated AC Yoke is an industrial electromagnetic yoke designed for magnetic particle inspection of ferromagnetic materials. It generates an AC magnetic field for detecting surface and subsurface discontinuities and features adjustable legs for positioning on components of different shapes and sizes. Its rugged epoxy-coated housing and high-strength steel core make it suitable for weld inspection, crack detection, and industrial NDT applications.",
images: [
"https://cpimg.tistatic.com/03417552/b/5/EF-4Y-EF-5Y-Mains-Operated-AC-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Mains Operated AC Yoke" },
{ label: "Model", value: "EF-4Y / EF-5Y" },
{ label: "Inspection Method", value: "Magnetic Particle Inspection (MPI)" },
{ label: "Capacity", value: "Up to 20 kg lifting" },
{ label: "Magnet Type", value: "Electromagnet" },
{ label: "Magnet Grade", value: "Industrial" },
{ label: "Material", value: "High Strength Steel Core" },
{ label: "Housing", value: "Rugged Epoxy-Coated Housing" },
{ label: "Power Supply", value: "Mains Operated" },
{ label: "Power", value: "12 W" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Voltage", value: "230 V AC" },
{ label: "Shape", value: "U-Shape" },
{ label: "Leg Adjustment", value: "Adjustable Legs up to 150 mm" },
{ label: "Surface Finish", value: "Epoxy-Coated" },
{ label: "Weight", value: "4 kg" },
],
features: [
"Mains-operated AC electromagnetic yoke",
"Up to 20 kg lifting capacity",
"Adjustable legs up to 150 mm",
"High-strength steel magnetic core",
"Rugged epoxy-coated housing",
"Industrial-grade construction",
"Designed for surface and subsurface flaw detection",
"Suitable for weld inspection and crack detection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Weld Inspection",
"Surface Flaw Detection",
"Subsurface Flaw Detection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},

  {
slug: "py-1-permanent-magnetic-yoke",
name: "PY-1 Permanent Magnetic Yoke",
category: "magnetic-particle-inspection",
model: "PY-1",
shortDescription: "Permanent magnetic yoke designed for magnetic particle inspection, crack detection, and surface inspection of ferromagnetic components without external power.",
description:
"The PY-1 Permanent Magnetic Yoke is a manual magnetic inspection device designed for Magnetic Particle Inspection and non-destructive testing of ferromagnetic materials. It uses strong-grade ferrite permanent magnets to generate a magnetic field without requiring an external power supply. Its U-shaped steel construction and polished or plated finish make it suitable for crack detection and surface inspection applications in field and workshop environments.",
images: [
"https://cpimg.tistatic.com/03417553/b/4/PY-1-Permanent-Magnetic-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Permanent Magnetic Yoke" },
{ label: "Model", value: "PY-1" },
{ label: "Inspection Method", value: "Magnetic Particle Inspection (MPI)" },
{ label: "Capacity", value: "Up to 22 kg Lifting Force" },
{ label: "Magnet Type", value: "Permanent Magnetic Yoke" },
{ label: "Magnet Grade", value: "Strong Grade Ferrite" },
{ label: "Material", value: "High Quality Steel with Magnet Core" },
{ label: "Composite", value: "Steel Frame with Permanent Magnets" },
{ label: "Power", value: "Manual - No External Power Required" },
{ label: "Frequency", value: "N/A (Permanent Magnet)" },
{ label: "Voltage", value: "N/A" },
{ label: "Shape", value: "U-Shape" },
{ label: "Size Range", value: "Standard PY-1 Size" },
{ label: "Surface Finish", value: "Polished / Plated" },
{ label: "Weight", value: "18 kg" },
],
features: [
"No external power required",
"Strong-grade ferrite permanent magnets",
"U-shaped design",
"Up to 22 kg lifting force",
"High-quality steel construction",
"Polished and plated surface finish",
"Manual operation",
"Suitable for portable inspection applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Inspection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
"Field Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "py-2-permanent-magnetic-yoke",
name: "PY-2 Permanent Magnetic Yoke",
category: "magnetic-particle-inspection",
model: "PY-2",
shortDescription: "Permanent magnetic yoke designed for magnetic particle inspection, crack detection, and field inspection of ferromagnetic components without external power.",
description:
"The PY-2 Permanent Magnetic Yoke is a manual magnetic inspection device designed for Magnetic Particle Inspection and non-destructive testing of ferromagnetic materials. It uses a permanent magnet to generate a magnetic field without requiring an external power supply. Its U-shaped high-strength alloy steel construction makes it suitable for crack detection, magnetic field generation, and field inspection applications.",
images: [
"https://cpimg.tistatic.com/03417554/b/4/PY-2-Permanent-Magnetic-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Permanent Magnetic Yoke" },
{ label: "Model", value: "PY-2" },
{ label: "Inspection Method", value: "Magnetic Particle Inspection (MPI)" },
{ label: "Lifting Capacity", value: "Up to 22 kg (Approx.)" },
{ label: "Magnet Type", value: "Permanent Magnetic Yoke" },
{ label: "Magnet Grade", value: "Industrial Grade" },
{ label: "Material", value: "High-Strength Alloy Steel with Permanent Magnet" },
{ label: "Power Supply", value: "Not Required (Permanent Magnet)" },
{ label: "Frequency", value: "N/A (Permanent Magnet)" },
{ label: "Voltage", value: "N/A (Permanent Magnet)" },
{ label: "Shape", value: "U-Shape" },
{ label: "Size Range", value: "Standard" },
{ label: "Surface Finish", value: "Paint Coated" },
{ label: "Weight", value: "18.2 kg" },
],
features: [
"No external power supply required",
"Permanent magnet operation",
"U-shaped design",
"Up to 22 kg approximate lifting capacity",
"High-strength alloy steel construction",
"Industrial-grade permanent magnet",
"Paint-coated surface finish",
"Suitable for field inspection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Magnetic Field Generation",
"Surface Inspection",
"Field Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
],
datasheet: null,
featured: false,
},

  {
slug: "industrial-magnetic-yokes",
name: "Industrial Magnetic Yokes",
category: "magnetic-particle-inspection",
model: "Industrial Magnetic Yoke",
shortDescription: "Heavy-duty magnetic yokes designed for industrial lifting, hoisting, and handling of ferromagnetic materials.",
description:
"Industrial Magnetic Yokes are magnetic lifting devices designed for handling and positioning ferromagnetic materials in industrial environments. Their steel alloy construction and permanent magnetic system provide magnetic holding force for lifting and handling applications. Depending on the model, these yokes may be available in different sizes and lifting capacities for industrial material handling.",
images: [
"https://cpimg.tistatic.com/04289992/b/4/Yokes-.jpg",
],
specs: [
{ label: "Product Type", value: "Magnetic Lifting Device" },
{ label: "Application", value: "Industrial Lifting and Handling" },
{ label: "Capacity", value: "Varies by Model / 1-10 Ton" },
{ label: "Magnet Type", value: "Permanent Magnet" },
{ label: "Magnet Grade", value: "N42 or Equivalent" },
{ label: "Material", value: "High-Grade Steel, Magnetic Alloy" },
{ label: "Composite", value: "Steel Alloy" },
{ label: "Power", value: "Mechanical - N/A" },
{ label: "Power Supply", value: "Electric" },
{ label: "Frequency", value: "50/60 Hz" },
{ label: "Voltage", value: "12 V" },
{ label: "Shape", value: "U-Shaped or Customized" },
{ label: "Size Range", value: "Customizable / 3-10 Typical" },
{ label: "Surface Finish", value: "Powder Coated" },
{ label: "Weight", value: "4 kg" },
],
features: [
"Permanent magnetic lifting system",
"Designed for industrial material handling",
"High-grade steel and magnetic alloy construction",
"Available in different lifting capacities",
"U-shaped and customized configurations",
"Powder-coated surface finish",
"Designed for handling ferromagnetic materials",
],
applications: [
"Industrial Lifting",
"Magnetic Hoisting",
"Material Handling",
"Ferromagnetic Material Handling",
"Steel Handling",
"Industrial Handling",
],
datasheet: null,
featured: false,
},

  {
slug: "magnetic-crack-detectors",
name: "Magnetic Crack Detectors",
category: "magnetic-particle-inspection",
model: "EF-3Y",
shortDescription: "U-shaped magnetic crack detector designed for magnetic particle inspection and detection of surface discontinuities in ferromagnetic materials.",
description:
"The Magnetic Crack Detector is a U-shaped electromagnetic inspection device designed for magnetic particle testing of ferromagnetic components. The EF-3Y configuration generates a magnetic field across the inspection area, allowing magnetic particles to accumulate around flux leakage caused by cracks and other discontinuities. Its portable design makes it suitable for industrial weld inspection, crack detection, and field NDT applications.",
images: [
"https://cpimg.tistatic.com/04330139/b/4/Magnetic-Crack-Detectors.jpg",
],
specs: [
{ label: "Product Type", value: "Magnetic Crack Detector" },
{ label: "Model", value: "EF-3Y" },
{ label: "Power Supply", value: "1 Phase" },
{ label: "Shape", value: "U-Shape" },
{ label: "Voltage", value: "220 V" },
{ label: "Weight", value: "4 kg" },
{ label: "Color", value: "Sky Blue" },
],
features: [
"U-shaped electromagnetic design",
"Designed for magnetic particle inspection",
"Suitable for crack detection",
"Portable inspection design",
"Suitable for ferromagnetic components",
"Designed for industrial NDT applications",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Crack Detection",
"Surface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
"Field Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "ef-1y-battery-powered-yoke",
name: "EF-1Y Battery Powered Yoke",
category: "magnetic-particle-inspection",
model: "EF-1Y",
shortDescription: "Portable battery-powered magnetic yoke designed for magnetic particle inspection and detection of surface and near-surface discontinuities in ferromagnetic materials.",
description:
"The EF-1Y Battery Powered Yoke is a portable magnetic inspection device designed for magnetic particle testing of ferromagnetic components. Its battery-powered operation allows magnetic particle inspections to be performed without direct connection to an AC power source, making it suitable for field and maintenance inspection applications. The compact design provides convenient handling during weld and component inspections.",
images: [
"https://cpimg.tistatic.com/03417550/b/5/EF-1Y-Battery-Powered-Yoke.jpg",
],
specs: [
{ label: "Product Type", value: "Battery Powered Magnetic Yoke" },
{ label: "Model", value: "EF-1Y" },
{ label: "Color", value: "Blue and Black" },
{ label: "Power", value: "375 W" },
{ label: "Shape", value: "Rectangle" },
{ label: "Voltage", value: "12 V" },
{ label: "Weight", value: "4 kg" },
{ label: "Power Source", value: "Battery Powered" },
],
features: [
"Battery-powered operation",
"Portable magnetic inspection design",
"Designed for magnetic particle testing",
"Suitable for field inspection",
"Convenient handheld operation",
"Suitable for ferromagnetic components",
"Useful for weld and surface inspection",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Surface Crack Detection",
"Near-Surface Defect Detection",
"Weld Inspection",
"Field Inspection",
"Maintenance Inspection",
"Ferromagnetic Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "magnetic-particle-testing-equipment",
name: "Magnetic Particle Testing Equipment",
category: "magnetic-particle-inspection",
model: "U-Shape Electromagnetic Yoke",
shortDescription: "U-shaped electromagnetic yoke designed for continuous-duty magnetic particle testing and detection of surface and slightly subsurface discontinuities in ferromagnetic materials.",
description:
"The Magnetic Particle Testing Equipment is a U-shaped electromagnetic magnetic inspection device designed for non-destructive magnetic particle testing of ferromagnetic materials. It generates a magnetic field across the inspection area, allowing magnetic particles to accumulate around flux leakage caused by surface and slightly subsurface discontinuities. Its insulated handle, alloy steel construction, protective coating, and continuous-duty operation make it suitable for industrial inspection applications.",
images: [
"https://cpimg.tistatic.com/04274392/b/5/Magnetic-Particle-Testing-Equipment.jpg",
],
specs: [
{ label: "Product Type", value: "Magnetic Devices" },
{ label: "Application", value: "Non-Destructive Magnetic Particle Testing" },
{ label: "Capacity", value: "Continuous Duty Cycle" },
{ label: "Magnet Type", value: "Electromagnet" },
{ label: "Magnet Grade", value: "High Performance, Industrial Grade" },
{ label: "Material", value: "Alloy Steel with Protective Coating" },
{ label: "Composite", value: "Metal Body with Insulated Handle" },
{ label: "Shape", value: "U-Shape" },
{ label: "Power", value: "800 W" },
{ label: "Power Supply", value: "AC Electric" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Voltage", value: "220 V" },
{ label: "Surface Finish", value: "Powder Coated" },
{ label: "Weight", value: "3 kg" },
{ label: "Size Range", value: "Standard Size" },
],
features: [
"U-shaped electromagnetic design",
"Designed for magnetic particle testing",
"Continuous-duty operation",
"High-performance industrial-grade electromagnet",
"Alloy steel construction with protective coating",
"Insulated handle for operation",
"Powder-coated surface finish",
"Suitable for detecting surface discontinuities",
"Suitable for detecting slightly subsurface discontinuities",
],
applications: [
"Magnetic Particle Inspection (MPI)",
"Magnetic Particle Testing (MT)",
"Surface Crack Detection",
"Near-Surface Defect Detection",
"Weld Inspection",
"Ferromagnetic Material Inspection",
"Industrial NDT",
"Structural Inspection",
],
datasheet: null,
featured: false,
},
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


  
  // ─── ULTRASONIC TESTING EQUIPMENT ───────────────────────

{
slug: "ultrasonic-transducers-equipment",
name: "Ultrasonic Transducers Equipment",
category: "ultrasonic-testing-equipment",
model: "Ultrasonic Transducer",
shortDescription: "Ultrasonic transducer equipment designed for industrial ultrasonic testing and non-destructive inspection applications.",
description:
"Ultrasonic Transducers Equipment is designed for use with ultrasonic testing systems to transmit and receive ultrasonic waves during non-destructive inspection. These transducers are used for detecting internal discontinuities, evaluating materials, and performing ultrasonic inspection of industrial components. The compact metal construction makes them suitable for industrial inspection environments.",
images: [
"https://cpimg.tistatic.com/04290000/b/4/Transducers-equipment.jpg",
],
specs: [
{ label: "Product Type", value: "Ultrasonic Transducer Equipment" },
{ label: "Color", value: "Black" },
{ label: "Material", value: "Metal" },
{ label: "Operating Temperature", value: "10°C to 60°C" },
{ label: "Voltage", value: "20 V" },
{ label: "Weight", value: "250 g" },
],
features: [
"Designed for ultrasonic testing applications",
"Suitable for industrial NDT",
"Metal construction",
"Compact and lightweight design",
"Suitable for transmitting and receiving ultrasonic signals",
"Designed for use with ultrasonic inspection equipment",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Inspection",
"Material Inspection",
"Weld Inspection",
"Industrial NDT",
"Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "rail-tester-probes",
name: "Rail Tester Probes",
category: "ultrasonic-testing-equipment",
model: "Rail Tester Probe",
shortDescription: "Industrial rail tester probes designed for ultrasonic inspection and non-destructive testing of railway components.",
description:
"Rail Tester Probes are inspection probes designed for ultrasonic testing of railway components, particularly rail sections. They are used with compatible ultrasonic testing equipment to transmit and receive ultrasonic signals for detecting internal flaws and discontinuities. The stainless steel construction provides durability for demanding inspection environments.",
images: [
"https://cpimg.tistatic.com/04290008/b/4/Rail-Tester-Probes.jpg",
],
specs: [
{ label: "Product Type", value: "Rail Tester Probes" },
{ label: "Color", value: "Silver" },
{ label: "Material", value: "Stainless Steel" },
{ label: "Machine Weight", value: "0.250-3.0 kg" },
{ label: "Usage", value: "Rail Inspection" },
{ label: "Voltage", value: "220 V" },
],
features: [
"Designed for rail inspection",
"Suitable for ultrasonic testing applications",
"Stainless steel construction",
"Durable design for industrial inspection",
"Designed for use with ultrasonic inspection equipment",
"Suitable for non-destructive testing of railway components",
],
applications: [
"Ultrasonic Testing (UT)",
"Rail Inspection",
"Railway NDT",
"Ultrasonic Flaw Detection",
"Material Inspection",
"Rail Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "ultrasonic-probes",
name: "Ultrasonic Probes",
category: "ultrasonic-testing-equipment",
model: "Ultrasonic Probe",
shortDescription: "Industrial ultrasonic probes designed for ultrasonic testing, flaw detection, and non-destructive inspection applications.",
description:
"Ultrasonic Probes are transducer components used with ultrasonic testing equipment to transmit and receive ultrasonic waves during non-destructive inspection. They are designed for industrial applications including material inspection, weld testing, and flaw detection. The metal construction provides durability for use in demanding inspection environments.",
images: [
"https://cpimg.tistatic.com/04290021/b/4/Ultrasonic-Probes.jpg",
],
specs: [
{ label: "Product Type", value: "Ultrasonic Probes" },
{ label: "Color", value: "Black and Silver" },
{ label: "Material", value: "Metal" },
{ label: "Machine Weight", value: "0.25-1.2 kg" },
{ label: "Operating Temperature", value: "0°C to 50°C" },
{ label: "Usage", value: "Industrial" },
{ label: "Voltage", value: "24 V" },
],
features: [
"Designed for ultrasonic testing",
"Suitable for industrial NDT applications",
"Metal construction",
"Available in different weight configurations",
"Suitable for ultrasonic flaw detection",
"Designed for use with compatible ultrasonic inspection equipment",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Flaw Detection",
"Weld Inspection",
"Material Inspection",
"Industrial NDT",
"Component Inspection",
],
datasheet: null,
featured: false,
},
{
slug: "digiscan-ds-322-at-digital-ultrasonic-weld-tester",
name: "Digital Ultrasonic Weld Tester - DIGISCAN DS-322 AT",
category: "ultrasonic-testing-equipment",
model: "DS-322 AT",
shortDescription: "Digital ultrasonic weld tester designed for reliable weld inspection and ultrasonic non-destructive testing in industrial applications.",
description:
"The DIGISCAN DS-322 AT is a digital ultrasonic weld tester designed for ultrasonic inspection of welds and industrial components. Its compact design and 2.4 kg weight make it suitable for industrial inspection environments. The instrument is designed for ultrasonic weld testing and non-destructive evaluation of materials and welded joints.",
images: [
"https://cpimg.tistatic.com/09079997/b/4/Digital-Ultrasonic-Weld-Tester-DIGISCAN-DS-322-AT.jpg",
],
specs: [
{ label: "Product Type", value: "Digital Ultrasonic Weld Tester" },
{ label: "Model", value: "DS-322 AT" },
{ label: "Dimension", value: "243 x 56 x 195 mm" },
{ label: "Frequency", value: "50/60 Hz" },
{ label: "Operating Temperature", value: "0°C to 50°C" },
{ label: "Voltage", value: "230 V AC" },
{ label: "Weight", value: "2.4 kg" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Digital ultrasonic weld testing",
"Designed for industrial NDT applications",
"Compact inspection instrument",
"Suitable for weld inspection",
"Suitable for non-destructive evaluation",
"Portable 2.4 kg design",
"Designed for industrial inspection environments",
],
applications: [
"Ultrasonic Testing (UT)",
"Weld Inspection",
"Ultrasonic Weld Testing",
"Non-Destructive Testing (NDT)",
"Material Inspection",
"Industrial Inspection",
"Fabrication Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "ultrasonic-probe-and-accessories",
name: "Ultrasonic Probe and Accessories",
category: "ultrasonic-testing-equipment",
model: "Ultrasonic Probe",
shortDescription: "Industrial ultrasonic probe and accessory components designed for ultrasonic testing and non-destructive inspection applications.",
description:
"The Ultrasonic Probe and Accessories are designed for use with ultrasonic testing equipment in industrial non-destructive testing applications. These components are used to transmit and receive ultrasonic signals during material and weld inspection. The stainless steel construction provides durability for industrial inspection environments.",
images: [
"https://cpimg.tistatic.com/03407185/b/5/Ultrasonic-Probe-Accessories.jpg",
],
specs: [
{ label: "Product Type", value: "Ultrasonic Probe and Accessories" },
{ label: "Color", value: "White and Gold" },
{ label: "Dimension", value: "200 x 25 x 25 mm" },
{ label: "Frequency", value: "20-25 kHz" },
{ label: "Material", value: "Stainless Steel" },
{ label: "Power", value: "50-200 W" },
{ label: "Operating Temperature", value: "10°C to 50°C" },
{ label: "Voltage", value: "220 V" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Designed for ultrasonic testing applications",
"Suitable for industrial NDT inspection",
"Stainless steel construction",
"Compact probe design",
"Suitable for ultrasonic signal transmission and reception",
"Designed for use with ultrasonic inspection equipment",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Inspection",
"Weld Inspection",
"Material Inspection",
"Industrial NDT",
"Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "ultrasonic-couplants",
name: "Ultrasonic Couplants",
category: "ultrasonic-testing-equipment",
model: "Ultrasonic Couplant",
shortDescription: "Ultrasonic coupling gel designed to improve acoustic transmission between ultrasonic probes and test surfaces during inspection.",
description:
"Ultrasonic Couplants are coupling materials used during ultrasonic testing to provide effective acoustic transmission between the ultrasonic probe and the surface of the test component. The gel-based formulation helps eliminate air gaps between the probe and inspection surface, improving ultrasonic signal transmission and inspection reliability. They are suitable for ultrasonic inspection applications across industrial and laboratory environments.",
images: [
"https://cpimg.tistatic.com/03407241/b/4/Ultrasonic-Couplants.jpg",
],
specs: [
{ label: "Product Type", value: "Ultrasonic Couplant" },
{ label: "Control Mode", value: "Manual" },
{ label: "Material", value: "Gel" },
{ label: "Temperature", value: "Up to 160°C" },
{ label: "Usage", value: "Ultrasonic Inspection" },
],
features: [
"Improves acoustic coupling between probe and test surface",
"Helps eliminate air gaps during ultrasonic inspection",
"Gel-based formulation",
"Designed for ultrasonic testing applications",
"Easy manual application",
"Suitable for inspection of various test surfaces",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Inspection",
"Weld Inspection",
"Material Inspection",
"Industrial NDT",
"Laboratory Inspection",
],
datasheet: null,
featured: true,
},
  {
slug: "immersion-probes",
name: "Immersion Probes",
category: "ultrasonic-testing-equipment",
model: "Immersion Probe",
shortDescription: "Industrial immersion ultrasonic probes designed for ultrasonic testing applications where the probe is coupled to the test component through a liquid medium.",
description:
"Immersion Probes are ultrasonic transducers designed for immersion-based non-destructive testing applications. They are used with a liquid coupling medium to transmit ultrasonic energy between the probe and the test component. Their durable brass construction makes them suitable for industrial ultrasonic inspection and material evaluation applications.",
images: [
"https://cpimg.tistatic.com/04274236/b/5/Immersion-Probes.jpg",
],
specs: [
{ label: "Product Type", value: "Immersion Probe" },
{ label: "Color", value: "Silver" },
{ label: "Material", value: "Brass" },
{ label: "Weight", value: "200 g" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Designed for immersion ultrasonic testing",
"Suitable for industrial NDT applications",
"Brass construction",
"Lightweight 200 g design",
"Designed for use with liquid coupling mediums",
"Suitable for ultrasonic material inspection",
],
applications: [
"Ultrasonic Testing (UT)",
"Immersion Ultrasonic Testing",
"Material Inspection",
"Industrial NDT",
"Weld Inspection",
"Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "electrical-wedges",
name: "Electrical Wedges",
category: "ultrasonic-testing-equipment",
model: "Electrical Wedge",
shortDescription: "Stainless steel electrical wedges designed for equipment and ultrasonic inspection applications.",
description:
"Electrical Wedges are stainless steel components designed for use with specialized inspection and equipment applications. Their compact construction and durable stainless steel material make them suitable for demanding operating environments. The supplied specifications indicate use with medical machines and 220 V systems.",
images: [
"https://cpimg.tistatic.com/04289993/b/4/Electrical-Wedges.jpg",
],
specs: [
{ label: "Product Type", value: "Electrical Wedges" },
{ label: "Application", value: "Medical Machine" },
{ label: "Color", value: "Silver" },
{ label: "Material", value: "Stainless Steel" },
{ label: "Machine Weight", value: "0.225 kg" },
{ label: "Voltage", value: "220 V" },
],
features: [
"Stainless steel construction",
"Compact and lightweight design",
"Designed for specialized equipment applications",
"Suitable for demanding operating environments",
"Compatible with 220 V systems",
],
applications: [
"Medical Equipment",
"Inspection Equipment",
"Ultrasonic Equipment",
"Industrial Equipment",
],
datasheet: null,
featured: false,
},
{
slug: "multi-channel-digital-ultrasonic-flaw-detector",
name: "Multi-Channel Digital Ultrasonic Flaw Detector",
category: "ultrasonic-testing-equipment",
model: "Multi-Channel Digital",
shortDescription: "Multi-channel digital ultrasonic flaw detector designed for industrial non-destructive testing and material inspection applications.",
description:
"The Multi-Channel Digital Ultrasonic Flaw Detector is an industrial inspection instrument designed for ultrasonic non-destructive testing and flaw detection. Its multi-channel configuration allows ultrasonic inspection across multiple inspection points, making it suitable for industrial material evaluation, weld inspection, and other demanding NDT applications. The combination of ABS plastic and metal construction provides a durable enclosure for field and workshop use.",
images: [
"https://cpimg.tistatic.com/09079996/b/4/Multi-Channel-Digital-Ultrasonic-Flaw-Detector.jpg",
],
specs: [
{ label: "Product Type", value: "Multi-Channel Digital Ultrasonic Flaw Detector" },
{ label: "Dimension", value: "350 x 270 x 110 mm" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Material", value: "ABS Plastic and Metal" },
{ label: "Power", value: "AC Adapter or Rechargeable Battery" },
{ label: "Operating Temperature", value: "-10°C to +50°C" },
{ label: "Voltage", value: "220 V" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Multi-channel digital ultrasonic inspection",
"Designed for industrial NDT applications",
"AC adapter and rechargeable battery operation",
"Combination ABS plastic and metal construction",
"Suitable for field and workshop inspection",
"Wide operating temperature range",
"Designed for ultrasonic flaw detection",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Flaw Detection",
"Weld Inspection",
"Material Inspection",
"Industrial NDT",
"Steel Inspection",
"Component Inspection",
"Field Inspection",
],
datasheet: null,
featured: false,
},  
{
slug: "advanscan-as-414-ultrasonic-portable-flaw-detector",
name: "Advanscan AS-414 Ultrasonic Portable Flaw Detector",
category: "ultrasonic-testing-equipment",
model: "AS-414",
shortDescription: "Portable ultrasonic flaw detector designed for industrial non-destructive testing, weld inspection, and material flaw detection.",
description:
"The Advanscan AS-414 is a portable ultrasonic flaw detector designed for industrial non-destructive testing applications. Its compact and rugged ABS construction makes it suitable for field and workshop inspections. With a 0.5 to 10 MHz frequency range and battery or AC operation, the instrument is designed for reliable ultrasonic inspection of industrial components, welds, and materials.",
images: [
"https://cpimg.tistatic.com/09079995/b/4/Advanscan-AS-414-Ultrasonic-Portable-Flaw-Detector.jpg",
],
specs: [
{ label: "Product Type", value: "Ultrasonic Portable Flaw Detector" },
{ label: "Brand", value: "EECI" },
{ label: "Model", value: "AS-414" },
{ label: "Frequency Range", value: "0.5 - 10 MHz" },
{ label: "Dimension", value: "200 x 92 x 164 mm" },
{ label: "Material", value: "High Strength ABS Plastic" },
{ label: "Power", value: "12 W" },
{ label: "Operating Temperature", value: "-10°C to +50°C" },
{ label: "Voltage", value: "DC 7.2V / AC 100-240V" },
{ label: "Weight", value: "1.8 kg" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Portable ultrasonic flaw detection",
"Compact and rugged construction",
"High-strength ABS plastic body",
"Wide 0.5-10 MHz frequency range",
"Battery and AC power operation",
"Suitable for field and workshop inspection",
"Designed for industrial NDT applications",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Flaw Detection",
"Weld Inspection",
"Material Inspection",
"Industrial NDT",
"Steel Inspection",
"Forging Inspection",
"Casting Inspection",
"Field Inspection",
],
datasheet: null,
featured: true,
},
  {
slug: "multi-scan-flaw-detector",
name: "Multi Scan Flaw Detector",
category: "ultrasonic-testing-equipment",
model: "Not Specified",
shortDescription: "Portable multi-scan flaw detector designed for ultrasonic non-destructive testing and industrial material inspection.",
description:
"The Multi Scan Flaw Detector is a portable ultrasonic inspection instrument designed for detecting internal flaws and discontinuities in industrial components and materials. With multiple selectable test ranges, it can be used for different inspection depths and specimen requirements. Its lightweight construction makes it suitable for field and workshop non-destructive testing applications.",
images: [
"https://cpimg.tistatic.com/00550952/b/5/Multi-Scan-Flaw-Detectors.jpg",
],
specs: [
{ label: "Product Type", value: "Multi Scan Flaw Detector" },
{ label: "Material", value: "Plastic" },
{ label: "Specimen Size", value: "144.78 mm" },
{ label: "Test Range", value: "0-6000, 0-9999, 0-25000 mm" },
{ label: "Voltage", value: "220 V" },
{ label: "Weight", value: "800 g" },
],
features: [
"Portable and lightweight design",
"Multiple selectable test ranges",
"Designed for ultrasonic flaw detection",
"Suitable for industrial NDT applications",
"Plastic construction",
"Suitable for field and workshop inspection",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Flaw Detection",
"Industrial NDT",
"Material Inspection",
"Weld Inspection",
"Component Inspection",
"Field Inspection",
],
datasheet: null,
featured: false,
},
{
slug: "multi-channel-ultrasonic-flaw-detector",
name: "Multi Channel Ultrasonic Flaw Detector",
category: "ultrasonic-testing-equipment",
model: "DS-518",
shortDescription: "Multi-channel digital ultrasonic flaw detector designed for industrial ultrasonic inspection and non-destructive testing applications.",
description:
"The EECI DS-518 Multi Channel Digital Ultrasonic Flaw Detector is designed for industrial ultrasonic non-destructive testing and material inspection. It provides multi-channel ultrasonic inspection capabilities for detecting flaws and discontinuities in industrial components. Its rugged metal construction and wide operating temperature range make it suitable for demanding industrial inspection environments, including weld, steel, railway, oil and gas, and heavy engineering applications.",
images: [
"https://cpimg.tistatic.com/03379736/b/5/Multi-Channel-Ultrasonic-Flaw-Detector.jpg",
],
specs: [
{ label: "Product Type", value: "Multi-Channel Digital Ultrasonic Flaw Detector" },
{ label: "Brand", value: "EECI" },
{ label: "Model", value: "DS-518" },
{ label: "Application", value: "Multi-Channel Digital Ultrasonic Inspection" },
{ label: "Dimension", value: "355 x 320 x 140 mm" },
{ label: "Frequency", value: "50/60 Hz" },
{ label: "Material", value: "Metal" },
{ label: "Power", value: "22 W" },
{ label: "Operating Temperature", value: "-10°C to +45°C" },
{ label: "Voltage", value: "90-240 V" },
],
features: [
"Multi-channel digital ultrasonic inspection",
"Designed for industrial ultrasonic flaw detection",
"Suitable for demanding NDT applications",
"Rugged metal construction",
"Wide operating temperature range",
"Suitable for weld and material inspection",
"Designed for industrial inspection environments",
],
applications: [
"Ultrasonic Testing (UT)",
"Ultrasonic Flaw Detection",
"Weld Inspection",
"Material Inspection",
"Steel Inspection",
"Heavy Engineering Inspection",
"Railway Inspection",
"Oil & Gas Inspection",
"Industrial NDT",
],
datasheet: null,
featured: true,
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
slug: "radiography-source-projector",
name: "Radiography Source Projector",
category: "radiographic-equipment",
model: "Source Projector",
shortDescription: "Industrial radiography source projector designed for controlled gamma radiography and non-destructive testing applications.",
description:
"The Radiography Source Projector is an industrial radiographic device designed for controlled projection of a radioactive source during gamma radiography. It is used in non-destructive testing to inspect welds, pipelines, castings, and other industrial components for internal discontinuities. Its robust metal construction and wide operating temperature range make it suitable for demanding field radiography applications.",
images: [
"https://cpimg.tistatic.com/04290011/b/4/Radiography-Source-Projector.jpg",
],
specs: [
{ label: "Product Type", value: "Radiography Source Projector" },
{ label: "Color", value: "Yellow" },
{ label: "Dimension", value: "350 x 280 x 260 mm" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Material", value: "Metal" },
{ label: "Power", value: "230 V" },
{ label: "Operating Temperature", value: "-20°C to +50°C" },
{ label: "Voltage", value: "220 V" },
],
features: [
"Designed for industrial radiography",
"Suitable for gamma radiography applications",
"Robust metal construction",
"Designed for controlled radioactive source projection",
"Suitable for field radiography",
"Wide operating temperature range",
"Designed for industrial NDT environments",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Weld Inspection",
"Pipeline Inspection",
"Casting Inspection",
"Non-Destructive Testing (NDT)",
"Industrial Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "gamma-radiography-products",
name: "Gamma Radiography Products",
category: "radiographic-equipment",
model: "Gamma Radiography Equipment",
shortDescription: "Industrial gamma radiography equipment designed for non-destructive testing and radiographic inspection of industrial components.",
description:
"Gamma Radiography Products are designed for industrial radiographic testing using gamma radiation to inspect internal structures and detect discontinuities in components without damaging them. The equipment is constructed for demanding industrial environments and is suitable for radiographic inspection applications where gamma-ray sources are used for non-destructive testing.",
images: [
"https://cpimg.tistatic.com/04290037/b/4/Gamma-Radiography-Products.jpg",
],
specs: [
{ label: "Product Type", value: "Gamma Radiography Equipment" },
{ label: "Color", value: "Yellow" },
{ label: "Height", value: "228.6 mm" },
{ label: "Dimension", value: "228.6 mm Height" },
{ label: "Material", value: "Metal" },
{ label: "Frequency", value: "50 Hz" },
{ label: "Operating Temperature", value: "-20°C to 55°C" },
{ label: "Voltage", value: "220 W" },
],
features: [
"Designed for gamma radiographic inspection",
"Suitable for industrial non-destructive testing",
"Metal construction",
"Designed for demanding inspection environments",
"Suitable for internal defect detection",
"Suitable for industrial radiography applications",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Weld Inspection",
"Pipeline Inspection",
"Casting Inspection",
"Non-Destructive Testing (NDT)",
"Industrial Component Inspection",
],
datasheet: null,
featured: false,
},
  {
slug: "gamma-radiography-camera",
name: "Gamma Radiography Camera",
category: "radiographic-equipment",
model: "Gamma Radiography Camera",
shortDescription: "Industrial gamma radiography camera designed for non-destructive testing and radiographic inspection of welds, pipelines, and industrial components.",
description:
"The Gamma Radiography Camera is an industrial radiographic inspection device designed for gamma-ray non-destructive testing. It is used with a suitable radioactive source to produce radiographic images for detecting internal discontinuities in welds, pipelines, castings, and other industrial components. Its metal construction and robust design make it suitable for demanding industrial radiography applications.",
images: [
"https://cpimg.tistatic.com/04289979/b/4/Gamma-Radiography-Camera.jpg",
],
specs: [
{ label: "Product Type", value: "Gamma Radiography Camera" },
{ label: "Color", value: "Yellow" },
{ label: "Material", value: "Metal" },
{ label: "Height", value: "22.9 cm" },
{ label: "Width", value: "19.1 cm" },
{ label: "Weight", value: "23.6 kg" },
],
features: [
"Designed for industrial gamma radiography",
"Suitable for non-destructive testing",
"Robust metal construction",
"Designed for industrial radiographic inspection",
"Suitable for use with compatible gamma radiation sources",
"Suitable for demanding field inspection environments",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Weld Inspection",
"Pipeline Inspection",
"Casting Inspection",
"Non-Destructive Testing (NDT)",
"Industrial Component Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "gamma-radiography-equipment",
name: "Gamma Radiography Equipment",
category: "radiographic-equipment",
model: "Gamma Radiography Equipment",
shortDescription: "Industrial gamma radiography equipment designed for non-destructive testing and radiographic inspection of welds, pipelines, and industrial components.",
description:
"Gamma Radiography Equipment is designed for industrial radiographic testing using gamma radiation to inspect the internal condition of components without damaging them. It is used with suitable radioactive sources and radiographic accessories to detect internal discontinuities in welds, pipelines, castings, and other industrial components. Its compact construction makes it suitable for industrial field radiography applications.",
images: [
"https://cpimg.tistatic.com/04274293/b/5/Gamma-Radiography-Equipment.jpg",
],
specs: [
{ label: "Product Type", value: "Gamma Radiography Equipment" },
{ label: "Color", value: "Yellow" },
{ label: "Height", value: "22.9 mm" },
{ label: "Length", value: "33.8 mm" },
{ label: "Width", value: "19.1 mm" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Designed for industrial gamma radiography",
"Suitable for non-destructive testing",
"Compact equipment design",
"Suitable for industrial field inspection",
"Designed for internal defect detection",
"Compatible with gamma radiography inspection applications",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Weld Inspection",
"Pipeline Inspection",
"Casting Inspection",
"Non-Destructive Testing (NDT)",
"Industrial Component Inspection",
],
datasheet: null,
featured: false,
},

  {
slug: "880-delta-series-source-projector",
name: "880 Delta Series Source Projector",
category: "radiographic-equipment",
model: "880 Delta Series",
shortDescription: "Industrial gamma radiography source projector designed for controlled radiographic inspection and non-destructive testing applications.",
description:
"The 880 Delta Series Source Projector is a gamma radiography source projector designed for industrial non-destructive testing. It is used to safely house and project a radioactive gamma source during radiographic inspection of welds, pipelines, castings, and other industrial components. Its robust metal construction and compact design make it suitable for demanding field radiography applications.",
images: [
"https://cpimg.tistatic.com/03284539/b/5/880-Delta-Series-Source-Projector.jpg",
],
specs: [
{ label: "Product Type", value: "Gamma Radiography Source Projector" },
{ label: "Model", value: "880 Delta Series" },
{ label: "Color", value: "Yellow" },
{ label: "Dimension", value: "338.582 x 228.6 x 190.5 mm" },
{ label: "Material", value: "Metal" },
{ label: "Usage", value: "Gamma Radiography" },
{ label: "Weight", value: "23.6 kg" },
],
features: [
"Designed for industrial gamma radiography",
"Robust metal construction",
"Designed for controlled radioactive source projection",
"Suitable for field radiography applications",
"Compact and durable design",
"Designed for industrial NDT environments",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Weld Inspection",
"Pipeline Inspection",
"Casting Inspection",
"Non-Destructive Testing (NDT)",
"Industrial Component Inspection",
],
datasheet: null,
featured: true,
},
  {
  slug: "trans-4v-optical-densitometer",

  name: "Trans-4V Optical Densitometer with Built-In Light Source",

  category: "radiographic-equipment",

  brand: "Pulsecho",

  model: "Trans-4V",

  shortDescription: "Portable battery-operated optical densitometer with a built-in light source for measuring the optical density of radiographic films.",

  description:
    "The Trans-4V is a portable, battery-operated black-and-white transmission densitometer designed for measuring the optical density of films. It features a built-in light source and sensor, making it suitable for use without an external film viewer. The instrument is primarily used for measuring X-ray radiographic films and can also be used with metallised and plastic films. Its compact design makes it suitable for laboratory, plant, workshop, and field applications.",

  images: [
    "https://www.pulsecho.com/img/resources/trans-4v.jpg",
  ],

  specs: [
    { label: "Product Type", value: "Optical Densitometer" },
    { label: "Brand", value: "Pulsecho" },
    { label: "Model", value: "Trans-4V" },
    { label: "Colour Response", value: "Black & White" },
    { label: "Light Source", value: "Built-In Sensor and Lamp" },
    { label: "Measuring Range", value: "0.00D to 4.00D" },
    { label: "Measuring Area", value: "2.0 mm Diameter Aperture" },
    { label: "Measuring Length", value: "150 mm Throat Depth" },
    { label: "Accuracy", value: "Better than ±0.02D" },
    { label: "Repeatability", value: "±0.02D" },
    { label: "Operating Temperature", value: "10°C to 50°C" },
    { label: "Display", value: "3½ Digit LCD, 10 mm" },
    { label: "Dimensions", value: "190 x 78 x 55 mm" },
    { label: "Weight", value: "Approx. 745 g with battery" },
    { label: "Operation", value: "Battery Operated" },
  ],

  features: [
    "Built-in light source and sensor",
    "Portable handheld design",
    "Battery-operated operation",
    "Auto-zero function",
    "Easy press-button operation",
    "3½ digit LCD display",
    "Excellent repeatability",
    "Suitable for field and laboratory use",
    "Designed for measuring radiographic film density",
  ],

  applications: [
    "Radiographic Film Density Measurement",
    "Radiographic Testing (RT)",
    "Industrial Radiography",
    "X-Ray Film Inspection",
    "Non-Destructive Testing (NDT)",
    "Metallised Film Measurement",
    "Plastic Film Measurement",
    "Laboratory Film Analysis",
  ],

  datasheet: null,

  featured: true,
},
  {
  slug: "radiographic-film-viewer-12x4-inch",

  name: "Radiographic Film Viewer 12x4 Inch",

  category: "radiographic-equipment",

  brand: "Kirti NDT",

  model: "12x4",

  shortDescription: "Industrial radiographic film viewer with a 12 x 4 inch viewing area for clear examination and interpretation of NDT radiographic films.",

  description:
    "The Radiographic Film Viewer 12x4 Inch is designed for viewing and interpreting conventional radiographic films used in industrial non-destructive testing. The illuminated viewing screen provides controlled and uniform illumination to help inspectors examine radiographs and identify indications or discontinuities. It is suitable for weld inspection, casting inspection, pipeline inspection, and other industrial radiography applications.",

  images: [
    "https://img3.exportersindia.com/product_images/bc-500/2023/9/5288857/clipboard1-1673067130_6707706_1738721.jpeg",
  ],

  specs: [
    { label: "Product Type", value: "Radiographic Film Viewer" },
    { label: "Brand", value: "Kirti NDT" },
    { label: "Model", value: "12x4" },
    { label: "Viewing Area", value: "12 x 4 inches" },
    { label: "Application", value: "Industrial Radiographic Film Interpretation" },
    { label: "Inspection Method", value: "Radiographic Testing (RT)" },
    { label: "Usage", value: "Industrial NDT Radiography" },
    { label: "Illumination", value: "High-Intensity Film Illumination" },
  ],

  features: [
    "12 x 4 inch viewing area",
    "High-intensity illumination for radiographic films",
    "Designed for conventional industrial radiography",
    "Provides controlled illumination for film interpretation",
    "Suitable for viewing radiographs of varying densities",
    "Suitable for weld and component inspection",
    "Designed for workshop and inspection environments",
  ],

  applications: [
    "Radiographic Testing (RT)",
    "Industrial Radiography",
    "Radiographic Film Interpretation",
    "Weld Inspection",
    "Casting Inspection",
    "Pipeline Inspection",
    "Industrial Component Inspection",
    "Non-Destructive Testing (NDT)",
  ],

  datasheet: null,

  featured: true,
},
  {
  slug: "radiographic-film-viewer-12x3",

  name: "Radiographic Film Viewer 12x3",

  category: "radiographic-equipment",

  brand: "Kirti NDT",

  model: "12x3",

  shortDescription: "Industrial radiographic film viewer with a 12 x 3 inch viewing area for clear examination and interpretation of NDT radiographic films.",

  description:
    "The Radiographic Film Viewer 12x3 is an industrial viewing unit designed for examination and interpretation of radiographic films used in non-destructive testing. It provides bright, uniform illumination across the viewing area to assist in identifying indications and discontinuities on industrial radiography films. The 12 x 3 inch format makes it suitable for weld inspection, casting inspection, pipeline inspection, and other industrial radiographic applications.",

  images: [
    "https://img3.exportersindia.com/product_images/bc-500/2023/1/5288857/industrial-radiography-film-viewer-1673067127-6707706.jpeg",
  ],

  specs: [
    { label: "Product Type", value: "Radiographic Film Viewer" },
    { label: "Brand", value: "Kirti NDT" },
    { label: "Model", value: "12x3" },
    { label: "Viewing Area", value: "12 x 3 inches" },
    { label: "Application", value: "Industrial Radiographic Film Interpretation" },
    { label: "Usage", value: "Industrial NDT Radiography" },
    { label: "Illumination", value: "High-Intensity Illumination" },
    { label: "Construction", value: "Metal Body" },
  ],

  features: [
    "12 x 3 inch viewing area",
    "High-intensity illumination for radiographic film viewing",
    "Designed for industrial NDT applications",
    "Clear and uniform film illumination",
    "Suitable for radiographic film interpretation",
    "Durable construction for industrial use",
    "Suitable for workshop and inspection environments",
  ],

  applications: [
    "Radiographic Testing (RT)",
    "Industrial Radiography",
    "Radiographic Film Interpretation",
    "Weld Inspection",
    "Casting Inspection",
    "Pipeline Inspection",
    "Industrial Component Inspection",
    "Non-Destructive Testing (NDT)",
  ],

  datasheet: null,

  featured: false,
},
  {
  slug: "radiographic-film-viewer-6x3",

  name: "Radiographic Film Viewer 6x3",

  category: "radiographic-equipment",

  brand: "Kirti NDT",

  model: "6x3",

  shortDescription: "High-luminance radiographic film viewer with a 6 x 3 inch viewing area for industrial radiographic film interpretation.",

  description:
    "The Radiographic Film Viewer 6x3 is an industrial film viewing unit designed for examination and interpretation of radiographic films used in non-destructive testing. It provides high-intensity illumination for clear viewing of radiographic images and includes adjustable viewing-area control and electronic brightness adjustment. The 6 x 3 inch viewing format makes it suitable for focused inspection of industrial radiography films.",

  images: [
    "https://img3.exportersindia.com/product_images/bc-500/2023/9/5288857/clipboard1-1673067130_6707706_1738722.jpeg",
  ],

  specs: [
    { label: "Product Type", value: "Radiographic Film Viewer" },
    { label: "Brand", value: "Kirti NDT" },
    { label: "Model", value: "6x3" },
    { label: "Viewing Area", value: "6 x 3 inches" },
    { label: "Application", value: "Industrial Radiographic Film Interpretation" },
    { label: "Illumination", value: "High Luminance" },
    { label: "Brightness Control", value: "Electronic Brightness Control" },
    { label: "Film Density", value: "Up to 4.0 Density" },
    { label: "Input Voltage", value: "230V ±5%" },
    { label: "Power Consumption", value: "Approx. 160W" },
    { label: "Cooling", value: "Cooling Fan" },
    { label: "Heat Sink", value: "Heavy Aluminium Heat Sink" },
  ],

  features: [
    "High-luminance illumination",
    "6 x 3 inch viewing area",
    "Adjustable shutter for viewing area",
    "Electronic brightness control",
    "Suitable for viewing high-density radiographic films",
    "Heavy aluminium heat sink",
    "Built-in cooling fan",
    "Designed for industrial NDT film interpretation",
  ],

  applications: [
    "Radiographic Testing (RT)",
    "Industrial Radiography",
    "Radiographic Film Interpretation",
    "Weld Inspection",
    "Casting Inspection",
    "Pipeline Inspection",
    "Non-Destructive Testing (NDT)",
    "Industrial Component Inspection",
  ],

  datasheet: null,

  featured: false,
},
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
slug: "gamma-ray-collimators",
name: "Gamma-Ray Collimators",
category: "radiographic-accessories",
model: "Gamma-Ray Collimator",
shortDescription: "Industrial gamma-ray collimators designed to control and direct gamma radiation during radiographic testing and non-destructive inspection.",
description:
"Gamma-Ray Collimators are radiation control accessories used during industrial gamma radiography to restrict and direct the radiation beam toward the inspection area. By controlling the radiation field, collimators help improve radiographic image quality and reduce unnecessary radiation exposure outside the intended inspection area. They are available in different sizes and configurations for industrial radiographic applications.",
images: [
"https://cpimg.tistatic.com/09079988/b/4/Gamma-Ray-Collimators.jpg",
],
specs: [
{ label: "Product Type", value: "Gamma-Ray Collimator" },
{ label: "Color", value: "Silver" },
{ label: "Material", value: "Metal" },
{ label: "Dimension", value: "Different sizes available" },
{ label: "Size", value: "Different sizes available" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Controls and directs gamma radiation",
"Designed for industrial radiography",
"Helps restrict the radiation beam to the inspection area",
"Metal construction",
"Available in different sizes and configurations",
"Suitable for industrial NDT applications",
],
applications: [
"Gamma Radiography Testing",
"Radiographic Testing (RT)",
"Industrial Radiography",
"Radiation Beam Control",
"Weld Inspection",
"Pipeline Inspection",
"Non-Destructive Testing (NDT)",
],
datasheet: null,
featured: true,
},

  {
slug: "industrial-guide-tubes",
name: "Industrial Guide Tubes",
category: "radiographic-accessories",
model: "Industrial Guide Tube",
shortDescription: "Industrial guide tubes designed to guide and protect radiographic source cables during gamma radiography and non-destructive testing applications.",
description:
"Industrial Guide Tubes are durable guide components used with industrial radiography systems to provide a controlled path for radiographic source cables during inspection. Their stainless steel construction offers durability and resistance to demanding industrial environments. The tubes can be customized according to application requirements and are suitable for use in gamma radiography and other industrial NDT applications.",
images: [
"https://cpimg.tistatic.com/09079989/b/4/Industrial-Guide-Tubes.jpg",
],
specs: [
{ label: "Product Type", value: "Industrial Guide Tubes" },
{ label: "Color", value: "Multicolor" },
{ label: "Material", value: "Stainless Steel" },
{ label: "Dimension", value: "Customizable as per Requirement" },
{ label: "Size", value: "Different Sizes Available" },
{ label: "Operating Temperature", value: "Up to 400°C" },
{ label: "Usage", value: "Industrial" },
],
features: [
"Stainless steel construction",
"Customizable dimensions",
"Available in different sizes",
"Designed for industrial radiography applications",
"Durable construction for demanding environments",
"High-temperature resistance up to 400°C",
"Suitable for use with radiographic source delivery systems",
],
applications: [
"Gamma Radiography Testing",
"Industrial Radiography",
"Radiographic Source Guidance",
"Radiographic Testing (RT)",
"Non-Destructive Testing (NDT)",
"Weld Inspection",
"Pipeline Inspection",
],
datasheet: null,
featured: false,
},
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
