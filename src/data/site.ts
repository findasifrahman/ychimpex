import {
  Activity,
  BadgeCheck,
  Boxes,
  Cpu,
  Flame,
  Microscope,
  MonitorSmartphone,
  Radiation,
  ScanSearch,
  ShieldCheck,
  SunMedium,
  Waves,
} from "lucide-react";

export const company = {
  name: "CHIMPEX INTERNATIONAL CO., LIMITED",
  shortName: "Chimpex International",
  tagline:
    "Trusted Hong Kong partner for laboratory, scientific and industrial equipment",
  addresses: [
    {
      label: "Hong Kong Office",
      lines: [
        "Ho King Commercial Center",
        "2-16 Fa Yuen Street, Mong Kok",
        "Kowloon, Hong Kong",
      ],
    },
    {
      label: "Guangzhou Office",
      lines: [
        "Room 13D, 13th Floor, Rongjian Building, No. 29 Liuma Road,",
        "Huale Construction, Yuexiu District, Guangzhou, Guangzhou, China",
      ],
    },
  ],
  phone: "+8613265980063",
  heroTrust:
    "Trusted sourcing partner for laboratories, universities, industrial users, and institutional buyers",
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products & Solutions", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Authorization Letters", href: "/authorization-letters" },
  { label: "Contact", href: "/contact" },
];

export const featuredCategories = [
  {
    title: "Laboratory Equipment",
    description:
      "Core laboratory systems and instruments for sample handling, sterilization, preparation, and controlled testing environments.",
    icon: Microscope,
    exampleBrands: ["Systec", "Cole-Parmer"],
    badge: "Lab",
    href: "/products",
  },
  {
    title: "Test & Measurement Instruments",
    description:
      "Electrical and electronic measurement solutions for diagnostics, validation, calibration, and advanced technical analysis.",
    icon: Activity,
    exampleBrands: ["Hioki", "Tektronix", "Pico Technology"],
    badge: "Measurement",
    href: "/products",
  },
  {
    title: "3D Scanning & 3D Printing",
    description:
      "Professional additive manufacturing and reverse-engineering tools for design teams, labs, and prototyping workflows.",
    icon: ScanSearch,
    exampleBrands: ["SHINING 3D", "Creality"],
    badge: "Design",
    href: "/products",
  },
  {
    title: "Electronics Development Tools",
    description:
      "Embedded development boards, controllers, and engineering tools supporting firmware, prototyping, and validation work.",
    icon: Cpu,
    exampleBrands: ["Microchip", "Tektronix"],
    badge: "Electronics",
    href: "/products",
  },
  {
    title: "PCB Prototyping Systems",
    description:
      "In-house PCB prototyping, drilling, and structuring platforms for fast-turn engineering and educational electronics labs.",
    icon: Boxes,
    exampleBrands: ["LPKF"],
    badge: "Electronics",
    href: "/products",
  },
  {
    title: "Radiation & Safety Monitoring",
    description:
      "Radiation monitoring and detection technologies for compliance-sensitive environments, research, and safety operations.",
    icon: Radiation,
    exampleBrands: ["Mirion"],
    badge: "Safety",
    href: "/products",
  },
  {
    title: "Fire Detection & Protection Systems",
    description:
      "Reliable detection and protection systems for buildings, technical facilities, and safety-critical infrastructure projects.",
    icon: Flame,
    exampleBrands: ["Securiton"],
    badge: "Safety",
    href: "/products",
  },
  {
    title: "Solar & Environmental Measurement",
    description:
      "Measurement systems for solar irradiance, meteorological observation, and environmental data collection applications.",
    icon: SunMedium,
    exampleBrands: ["EKO Instruments", "Newport / MKS Instruments"],
    badge: "Environmental",
    href: "/products",
  },
  {
    title: "Industrial Workstations & Engineering Computing",
    description:
      "High-performance workstations and engineering computing platforms for modeling, simulation, design, and technical analysis.",
    icon: MonitorSmartphone,
    exampleBrands: ["Dell Precision"],
    badge: "Engineering",
    href: "/products",
  },
  {
    title: "Air Purification & Technical Facility Solutions",
    description:
      "Air treatment and purification systems supporting controlled spaces, technical rooms, and process-sensitive facilities.",
    icon: Waves,
    exampleBrands: ["Quatro Air Technologies"],
    badge: "Facility",
    href: "/products",
  },
];

export const authorizedBrands = [
  {
    name: "EKO Instruments",
    category: "Environmental Measurement",
    description:
      "Solar irradiance, weather, and environmental measurement systems for research-grade and field-based data programs.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/eko-instruments.png",
    logoMode: "light",
  },
  {
    name: "Hioki",
    category: "Electrical Test & Measurement",
    description:
      "Electrical testing and measurement instruments for diagnostics, QA, maintenance, and energy-related applications.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/hioki.png",
    logoMode: "light",
  },
  {
    name: "Newport / MKS Instruments",
    category: "Photonics & Scientific Instrumentation",
    description:
      "Optics, photonics, solar simulation, and scientific instrumentation used across advanced laboratory environments.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/newport-mks.png",
    logoMode: "dark",
  },
  {
    name: "Quatro Air Technologies",
    category: "Air Purification",
    description:
      "Air purification and extraction systems for technical spaces, laboratories, and application-specific facility requirements.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/quatro-air-technologies.svg",
    logoMode: "light",
  },
  {
    name: "Securiton",
    category: "Fire Detection & Protection",
    description:
      "Fire alarm and detection systems for secure, compliant, and monitored building protection programs.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/securiton-wordmark.svg",
    logoMode: "light",
  },
  {
    name: "Systec",
    category: "Laboratory Sterilization",
    description:
      "Autoclaves and laboratory sterilization systems for controlled and regulated scientific workflows.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/systec.svg",
    logoMode: "light",
  },
  {
    name: "Tektronix",
    category: "Test & Measurement",
    description:
      "Oscilloscopes, source measure units, and electronic test systems for research, teaching, and engineering validation.",
    badge: "Authorized",
    href: "/authorization-letters",
    logo: "/brands/tektronix-wordmark.svg",
    logoMode: "light",
  },
];

export const featuredBrands = [
  {
    name: "Cole-Parmer",
    category: "Laboratory Equipment",
    description:
      "Broad laboratory equipment portfolio supporting day-to-day analytical and general lab operations.",
    logo: "/brands/cole-parmer.svg",
    logoMode: "light",
  },
  {
    name: "Creality",
    category: "3D Printing",
    description:
      "3D printing systems for prototyping, educational fabrication, and design iteration programs.",
    logo: "/brands/creality.svg",
    logoMode: "light",
  },
  {
    name: "Dell Precision",
    category: "Engineering Workstations",
    description:
      "Professional workstations tailored for simulation, CAD, technical computing, and engineering design environments.",
    logo: "/brands/dell-technologies.png",
    logoMode: "light",
  },
  {
    name: "SHINING 3D",
    category: "3D Scanning",
    description:
      "Professional 3D scanning tools for digital capture, reverse engineering, and design validation.",
    logo: "/brands/shining-3d.svg",
    logoMode: "light",
  },
  {
    name: "LPKF",
    category: "PCB Prototyping",
    description:
      "PCB prototyping and structuring systems for electronics development, training, and fast-turn validation.",
    logo: "/brands/lpkf.svg",
    logoMode: "light",
  },
  {
    name: "Microchip",
    category: "Embedded Development",
    description:
      "Embedded development boards, controllers, and engineering ecosystems for firmware and hardware projects.",
    logo: "/brands/microchip.svg",
    logoMode: "light",
  },
  {
    name: "Mirion",
    category: "Radiation Monitoring",
    description:
      "Radiation monitoring, measurement, and detection technologies for technical and safety-driven applications.",
    logo: "/brands/mirion.svg",
    logoMode: "light",
  },
  {
    name: "Pico Technology",
    category: "PC-Based Test Systems",
    description:
      "PC-based oscilloscopes and data acquisition systems for laboratory, field, and instructional environments.",
    logo: "/brands/pico-technology.svg",
    logoMode: "dark",
  },
];

export const authorizationLetters = [
  {
    brand: "EKO Instruments",
    note: "Selected manufacturer authorization and supply confirmation documentation.",
    summary: "Environmental measurement brand support documentation.",
    imagePath: "/images/authorization/eko.png",
  },
  {
    brand: "Hioki",
    note: "Documentation supporting supply and manufacturer-backed channel confidence.",
    summary: "Electrical measurement authorization reference.",
    imagePath: "/images/authorization/hioki.png",
  },
  {
    brand: "Newport / MKS",
    note: "Authorization material for photonics and scientific instrumentation support.",
    summary: "Photonics and instrumentation document reference.",
    imagePath: "/images/authorization/newport.png",
  },
  {
    brand: "Quatro Air Technologies",
    note: "Air purification product support documentation available for review.",
    summary: "Air purification authorization reference.",
    imagePath: "/images/authorization/quarto.png",
  },
  {
    brand: "Securiton",
    note: "Brand support record for fire detection and protection solution engagement.",
    summary: "Fire protection documentation reference.",
    imagePath: "/images/authorization/securation.png",
  },
  {
    brand: "Systec",
    note: "Laboratory sterilization support and product documentation entry.",
    summary: "Autoclave and sterilization authorization reference.",
    imagePath: "/images/authorization/systec.png",
  },
  {
    brand: "Tektronix",
    note: "Test and measurement documentation supporting quotation and procurement workflows.",
    summary: "Measurement systems authorization reference.",
    imagePath: "/images/authorization/tektronics.png",
  },
];

export const solutions = [
  {
    title: "Laboratory Baths & Core Lab Systems",
    category: "Laboratory Equipment",
    industry: "University and research laboratories",
    useCase:
      "Reliable bench-scale and controlled-environment equipment for sample preparation, routine workflows, and teaching labs.",
    applications: ["Sample preparation", "Academic laboratories", "Quality control"],
    imagePath: "/images/products/lab-bath.jpg",
  },
  {
    title: "Professional 3D Printing Systems",
    category: "3D Printing",
    industry: "Product development teams",
    useCase:
      "Rapid prototyping platforms for concept iteration, educational fabrication, and engineering design trials.",
    applications: ["Design iteration", "Prototype fabrication", "Training labs"],
    imagePath: "/images/products/3d-printer.jpg",
  },
  {
    title: "Engineering Workstations",
    category: "Engineering Computing",
    industry: "Industrial design and simulation",
    useCase:
      "High-performance systems for CAD, simulation, photonics workflows, and technical application software.",
    applications: ["CAD and modeling", "Simulation", "Technical analysis"],
    imagePath: "/images/products/workstation.jpg",
  },
  {
    title: "Handheld 3D Scanners",
    category: "3D Scanning",
    industry: "Reverse engineering and inspection",
    useCase:
      "Portable scanning for digital capture, product redesign, geometry inspection, and training environments.",
    applications: ["Reverse engineering", "Inspection", "Digital archiving"],
    imagePath: "/images/products/handheld-3d-scanner.jpg",
  },
  {
    title: "PCB Prototyping Machines",
    category: "PCB Prototyping",
    industry: "Electronics and embedded R&D",
    useCase:
      "Fast in-house board prototyping for electronics education, validation, and engineering iteration cycles.",
    applications: ["Prototype PCBs", "Teaching labs", "Validation boards"],
    imagePath: "images/products/pcb-prototyping-machine.png",
  },
  {
    title: "Embedded Development Boards",
    category: "Embedded Development",
    industry: "Electronics and embedded R&D",
    useCase:
      "Development platforms for controllers, firmware experimentation, and hardware-software integration work.",
    applications: ["Firmware development", "Controller validation", "R&D training"],
    imagePath: "/images/products/embedded-development-board.jpg",
  },
  {
    title: "Radiation Monitoring Systems",
    category: "Safety Monitoring",
    industry: "Industrial safety and facility compliance",
    useCase:
      "Monitoring systems for safety-sensitive sites, laboratories, and compliance-oriented technical operations.",
    applications: ["Compliance monitoring", "Safety programs", "Research facilities"],
    imagePath: "/images/products/radiation-monitoring-system.jpg",
  },
  {
    title: "Oscilloscopes & Test Systems",
    category: "Test & Measurement",
    industry: "Calibration and test benches",
    useCase:
      "Diagnostic and waveform analysis systems supporting education, maintenance, and advanced engineering benches.",
    applications: ["Signal analysis", "Bench testing", "Calibration support"],
    imagePath: "/images/products/oscilloscope-test-system.jpg",
  },
];

export const brandLogoWall = [
  ...authorizedBrands.map((brand) => ({
    name: brand.name,
    logo: brand.logo,
    logoMode: brand.logoMode,
  })),
  ...featuredBrands.map((brand) => ({
    name: brand.name,
    logo: brand.logo,
    logoMode: brand.logoMode,
  })),
];

export const galleryItems = [
  {
    title: "Laboratory Instrumentation",
    category: "Scientific Equipment",
    image: "/images/gallery/1.jpg",
  },
  {
    title: "Precision Measurement Systems",
    category: "Test & Measurement",
    image: "/images/gallery/2.jpg",
  },
  {
    title: "3D Scanning & Modeling",
    category: "Engineering Design",
    image: "/images/gallery/3.jpg",
  },
  {
    title: "PCB Prototyping Environment",
    category: "Electronics Lab",
    image: "/images/gallery/4.jpg",
  },
  {
    title: "Embedded Development Bench",
    category: "R&D Tools",
    image: "/images/gallery/5.jpg",
  },
  {
    title: "Radiation Safety Monitoring",
    category: "Safety Systems",
    image: "/images/gallery/6.jpg",
  },
  {
    title: "Industrial Engineering Workstations",
    category: "Technical Computing",
    image: "/images/gallery/7.jpg",
  },
  {
    title: "Solar & Environmental Measurement",
    category: "Environmental Systems",
    image: "/images/gallery/8.jpg",
  },
];

export const whyChimpex = [
  "Access to reputed international brands",
  "Documentation-backed procurement support",
  "Technical product sourcing across diverse categories",
  "Support for research and institutional procurement",
  "Multi-category solution capability",
  "Reliable Hong Kong business base for international trade",
];

export const values = [
  "Integrity",
  "Technical reliability",
  "Long-term partnerships",
  "Service responsiveness",
  "Quality-driven sourcing",
];

export const industries = [
  "Universities & Research Institutes",
  "Laboratories",
  "Government Projects",
  "Industrial Plants",
  "Electronics & Embedded R&D",
  "Energy & Environmental Projects",
  "Safety & Security Infrastructure",
  "Product Development Teams",
];

export const contactDetails = [
  {
    label: "Office",
    value: company.addresses
      .map((address) => `${address.label}: ${address.lines.join(", ")}`)
      .join(" | "),
    icon: BadgeCheck,
  },
  {
    label: "Email",
    value: company.email,
    icon: Activity,
  },
  {
    label: "Phone",
    value: company.phone,
    icon: ShieldCheck,
  },
];
