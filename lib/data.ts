export type ProofVector =
  | "WordPress"
  | "E-commerce"
  | "Backend"
  | "APIs"
  | "Infrastructure"
  | "Frontend"
  | "AI"
  | "Integrations";

export interface Project {
  id: string;
  index: string; // coordinate-style index e.g. "01"
  title: string;
  client: string;
  year: string;
  locale: "SA" | "DE" | "INT";
  summary: string;
  /** Business result delivered */
  outcome: string;
  /** Use cases this project demonstrates */
  useCases: string[];
  /** Live URL of the shipped work */
  url: string;
  /** The capability this project proves — drives the Evidence Matrix */
  proves: ProofVector[];
  /** Tech detected from the live build (honest, not overclaimed) */
  stack: string[];
  metric: { value: string; label: string };
  status: "Shipped" | "Live" | "In Production";
  /** Optional GitHub repository URL */
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "pbc-ksa",
    index: "01",
    title: "Professional Business Center",
    client: "PBC — KSA",
    year: "2026",
    locale: "SA",
    summary:
      "A digital agency platform that builds e-commerce stores and industrial-company marketing presences — from identity to deployed site.",
    outcome: "Automated 2 service tracks with a unified WordPress + WooCommerce stack.",
    useCases: ["ecommerce", "corporate"],
    url: "https://pbc-ksa.com",
    proves: ["WordPress", "E-commerce", "Frontend"],
    stack: ["WordPress", "Elementor", "Hub Theme", "Liquid"],
    metric: { value: "2", label: "service tracks" },
    status: "Live",
  },
  {
    id: "emaar-land",
    index: "02",
    title: "Emaar Land",
    client: "Emaar Land — KSA",
    year: "2026",
    locale: "SA",
    summary:
      "A bilingual RTL real-estate site for a Saudi land-development company, engineered for clarity and fast content publishing.",
    outcome: "Bilingual RTL publication workflow with fast content updates.",
    useCases: ["corporate"],
    url: "https://emaar.sa",
    proves: ["WordPress", "Frontend"],
    stack: ["WordPress", "Bricks", "LiteSpeed", "Arabic RTL"],
    metric: { value: "RTL", label: "bilingual build" },
    status: "Live",
  },
  {
    id: "4d-fur-dich",
    index: "03",
    title: "4D Für Dich",
    client: "4D Für Dich — DE",
    year: "2025",
    locale: "DE",
    summary:
      "A modern production website for a German design/production brand, with editorial motion and a structured content model.",
    outcome: "Editorial-grade production site with strong performance and structured content.",
    useCases: ["corporate"],
    url: "https://4d4dich.de",
    proves: ["Frontend"],
    stack: ["Next.js", "Tailwind", "Vercel"],
    metric: { value: "98", label: "Lighthouse perf" },
    status: "Live",
    github: "https://github.com/alymaher494/4d4dich.de",
  },
  {
    id: "pizza-by-hira",
    index: "04",
    title: "Pizza by Hira",
    client: "Pizza by Hira — DE",
    year: "2026",
    locale: "DE",
    summary:
      "An online ordering site for a German restaurant — menu, pickup/delivery flows, and conversion-focused layout.",
    outcome: "24/7 online ordering flow with no manual intervention required.",
    useCases: ["ecommerce"],
    url: "https://pizzahira-dingolfing.de",
    proves: ["WordPress", "E-commerce"],
    stack: ["WordPress", "WooCommerce", "LiteSpeed"],
    metric: { value: "24/7", label: "order flow" },
    status: "Live",
  },
  {
    id: "fitness-total",
    index: "05",
    title: "Fitness Total",
    client: "Fitness Total — DE",
    year: "2025",
    locale: "DE",
    summary:
      "A marketing site for a German fitness studio, built to convert visitors into members with clear offers and fast load.",
    outcome: "Conversion-focused membership landing with fast load and clear offers.",
    useCases: ["corporate"],
    url: "https://fitnesstotal-schoeneck.de",
    proves: ["WordPress", "Frontend"],
    stack: ["WordPress", "Astra", "LiteSpeed"],
    metric: { value: "Astra", label: "performance theme" },
    status: "Live",
  },
  {
    id: "super-marketer",
    index: "06",
    title: "Super Marketer",
    client: "Super Marketer — INT",
    year: "2026",
    locale: "INT",
    summary:
      "A regional real-estate marketing platform with AI-assisted expertise positioning, built as a custom Next.js application.",
    outcome: "AI-assisted regional expertise positioning with a custom Next.js platform.",
    useCases: ["custom", "ai", "corporate"],
    url: "https://supermarketer.net",
    proves: ["Frontend", "AI"],
    stack: ["Next.js", "Tailwind", "AI"],
    metric: { value: "AI", label: "regional expertise" },
    status: "Live",
    github: "https://github.com/alymaher494/supermarketer",
  },
  {
    id: "mtgar",
    index: "07",
    title: "MTGAR — Digital Growth Agency",
    client: "MTGAR — KSA",
    year: "2026",
    locale: "SA",
    summary:
      "A digital-growth agency storefront (Arabic RTL) presenting performance marketing and digital experiences.",
    outcome: "RTL agency storefront with performance marketing and digital experience focus.",
    useCases: ["corporate"],
    url: "https://landing.mtgar.com",
    proves: ["Frontend", "Integrations"],
    stack: ["React", "Vite", "Tailwind"],
    metric: { value: "RTL", label: "agency storefront" },
    status: "Live",
    github: "https://github.com/alymaher494/landing-mtgar",
  },
];

export interface Capability {
  domain: string;
  items: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    domain: "SPEC.DOM-01 · Headless Web & E-commerce",
    items: [
      "Next.js (App Router) + WordPress / ACF Pro",
      "On-Demand ISR & Edge caching",
      "Bilingual AR/EN · RTL-LTR",
      "Structured Data & local SEO",
      "WooCommerce & WPGraphQL",
    ],
  },
  {
    domain: "SPEC.DOM-02 · Payment Middleware & Checkout",
    items: [
      "Payment aggregation (Moyasar, EdfaPay, Payone)",
      "Webhook verification & reconciliation",
      "Cryptographic signatures",
      "Multi-currency / ISO-682 handling",
      "Ecwid · Shopify bridges",
    ],
  },
  {
    domain: "SPEC.DOM-03 · Applied AI & Automation",
    items: [
      "LLM multi-model routing",
      "Contract-first agent frameworks",
      "WhatsApp / Evolution API",
      "Contextual memory & state machines",
      "Whisper voice-to-text",
    ],
  },
  {
    domain: "SPEC.DOM-04 · Multi-Tenant & Infrastructure",
    items: [
      "Supabase · PostgreSQL RLS",
      "Linux VPS · Docker · Caddy / Nginx",
      "Dual-Node High Availability",
      "DNS failover & Cloudflare",
      "CI/CD & production hardening",
    ],
  },
];

export const PROFILE = {
  name: "Aly Maher",
  role: "AI-Powered Creative Full-Stack Developer & Systems Engineer",
  // Positioning one-liner — the north star
  positioning:
    "I build complete digital systems — from WordPress and commerce to full-stack applications, payment middleware, infrastructure, and applied AI.",
  // The commercial promise shown in the hero
  heroLead:
    "A developer who takes a digital problem and turns it into a production system — engineered, contract-first, and built to ship.",
  location: "Remote · GCC-friendly",
  email: "alymaher.494@gmail.com",
  github: "https://github.com/alymaher494",
  whatsapp: "https://wa.me/201152663461",
  socials: [
    { label: "GitHub", href: "https://github.com/alymaher494" },
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp", href: "https://wa.me/201152663461" },
    { label: "Email", href: "mailto:alymaher.494@gmail.com" },
  ],
};

export interface CaseStudy {
  id: string;
  index: string; // CS.01
  title: string;
  domain: string; // SPEC.DOM-XX
  summary: string;
  outcome: string;
  stack: string[];
  status: "Live" | "Delivered" | "Production Ready" | "In Development";
  /** Optional GitHub repository URL */
  github?: string;
  url: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "moysser",
    index: "01",
    title: "Moysser — Payment Gateway Middleware",
    domain: "SPEC.DOM-02",
    summary:
      "A Node.js/Express layer that normalizes checkout data, signs requests per gateway (Moyasar, EdfaPay, Payone), and reconciles orders via verified webhooks — bridging Ecwid/Shopify to Gulf payment rails.",
    outcome: "Unified checkout across multiple Gulf payment gateways with verified webhook reconciliation.",
    stack: ["Node.js", "Express", "Webhooks", "Crypto Signatures", "Docker"],
    status: "Production Ready",
    github: "https://github.com/alymaher494/moysser",
    url: "https://github.com/alymaher494/moysser",
  },
  {
    id: "aos",
    index: "02",
    title: "AOS — Agent Operating System",
    domain: "SPEC.DOM-03",
    summary:
      "A contract-first AI agent framework. A spec layer is the single source of truth; a typed Python runtime enforces frozen data contracts and fails explicitly (no-fabrication) instead of hallucinating.",
    outcome: "Eliminates AI hallucination through typed contracts and explicit failure modes.",
    stack: ["Python", "Pytest", "Ruff", "Mypy", "Typed Contracts"],
    status: "In Development",
    url: "#",
  },
  {
    id: "tqdr-plus",
    index: "03",
    title: "TQDR Plus — Multi-Shop Wallet & Loyalty",
    domain: "SPEC.DOM-04",
    summary:
      "A Nuxt 3 + Supabase platform for prepaid wallets and loyalty across branches, with strict tenant isolation via PostgreSQL Row-Level Security and OTP wallet switching.",
    outcome: "Multi-tenant wallet and loyalty system with strict data isolation across branches.",
    stack: ["Nuxt 3", "Supabase", "PostgreSQL RLS", "Tailwind", "Nginx"],
    status: "Delivered",
    url: "#",
  },
  {
    id: "whatsapp-ai",
    index: "04",
    title: "WhatsApp AI Business Assistant",
    domain: "SPEC.DOM-03",
    summary:
      "A FastAPI service wired to Evolution API that routes conversations across LLMs, holds per-client context, logs qualified leads to a CRM, and escalates to humans via a state machine.",
    outcome: "Qualified lead capture and human escalation through automated WhatsApp routing.",
    stack: ["Python", "FastAPI", "Evolution API", "Whisper", "SQLite"],
    status: "Live",
    url: "#",
  },
  {
    id: "alnebras",
    index: "05",
    title: "Alnebras — Corporate Platform",
    domain: "SPEC.DOM-01",
    summary:
      "A Next.js App Router platform with a Prisma data model feeding public views and an admin panel, using repeatable seed migrations and a Caddy edge server.",
    outcome: "Production-ready corporate platform with repeatable migrations and edge serving.",
    stack: ["Next.js", "TypeScript", "Prisma", "React", "Caddy"],
    status: "Live",
    github: "https://github.com/alymaher494/alnebras",
    url: "https://alnebras.com.sa",
  },
  {
    id: "deutschdruck",
    index: "06",
    title: "DEUTSCHDRUCK — Print Commerce",
    domain: "SPEC.DOM-01",
    summary:
      "A headless print-commerce platform with a live cm² price calculator consuming ACF fields via WPGraphQL, plus a custom WordPress hardening plugin.",
    outcome: "Live print-commerce pricing calculator with headless WordPress architecture.",
    stack: ["Next.js", "WooCommerce", "WPGraphQL", "ACF Pro", "PHP"],
    status: "Delivered",
    url: "#",
  },
  {
    id: "librairc",
    index: "07",
    title: "LibraIRC — High-Availability Modernization",
    domain: "SPEC.DOM-04",
    summary:
      "Legacy chat-network modernization: dual-node HA behind DNS failover, unified web gateways in Go, and hardened protocol stability with zero data loss on migration.",
    outcome: "Zero-data-loss migration to dual-node high availability with DNS failover.",
    stack: ["InspIRCd", "Atheme", "Go", "KiwiIRC", "Dual-Node VPS"],
    status: "Delivered",
    url: "#",
  },
  {
    id: "4d-headless",
    index: "08",
    title: "4D Für Dich — Headless Architecture",
    domain: "SPEC.DOM-01",
    summary:
      "Decoupled Next.js (Vercel Edge) frontend from a hardened WordPress/ACF backend, with On-Demand ISR, LocalBusiness JSON-LD, and Google Places live reviews.",
    outcome: "Headless architecture with edge caching and structured local SEO data.",
    stack: ["Next.js", "WordPress", "ACF Pro", "Cloudflare", "Vercel"],
    status: "Live",
    github: "https://github.com/alymaher494/4d4dich.de",
    url: "https://4d4dich.de",
  },
];

export interface LabRepo {
  name: string;
  language: string;
  updated: string; // human label e.g. "Aug 2026"
  url: string;
  /** Repos that already have a deeper write-up elsewhere */
  mapped?: boolean;
}

/** Live public GitHub activity — pulled from the real profile, honest signal. */
export const LAB_REPOS: LabRepo[] = [
  { name: "tqdr-plus", language: "Vue", updated: "Aug 2026", url: "https://github.com/alymaher494/tqdr-plus", mapped: true },
  { name: "dental-germany", language: "TypeScript", updated: "Aug 2026", url: "https://github.com/alymaher494/dental-germany" },
  { name: "ai-assistant", language: "TypeScript", updated: "Aug 2026", url: "https://github.com/alymaher494/ai-assistant" },
  { name: "beauty-academy", language: "JavaScript", updated: "Aug 2026", url: "https://github.com/alymaher494/beauty-academy" },
  { name: "alnebras", language: "TypeScript", updated: "Aug 2026", url: "https://github.com/alymaher494/alnebras", mapped: true },
  { name: "painting-woocomarce", language: "TypeScript", updated: "Jul 2026", url: "https://github.com/alymaher494/painting-woocomarce" },
  { name: "chat-project", language: "TypeScript", updated: "Jul 2026", url: "https://github.com/alymaher494/chat-project" },
  { name: "kobani-rsvp", language: "TypeScript", updated: "Jul 2026", url: "https://github.com/alymaher494/kobani-rsvp" },
  { name: "4d4dich.de", language: "TypeScript", updated: "Jun 2026", url: "https://github.com/alymaher494/4d4dich.de", mapped: true },
  { name: "shpifay-payzaty", language: "TypeScript", updated: "Apr 2026", url: "https://github.com/alymaher494/shpifay-payzaty" },
  { name: "Aqara-crm", language: "TypeScript", updated: "Mar 2026", url: "https://github.com/alymaher494/Aqara-crm" },
  { name: "supermarketer", language: "TypeScript", updated: "Feb 2026", url: "https://github.com/alymaher494/supermarketer", mapped: true },
  { name: "landing-mtgar", language: "JavaScript", updated: "Jan 2026", url: "https://github.com/alymaher494/landing-mtgar", mapped: true },
  { name: "voith-platform", language: "Python", updated: "Jan 2026", url: "https://github.com/alymaher494/voith-platform" },
  { name: "voith", language: "—", updated: "Dec 2025", url: "https://github.com/alymaher494/voith" },
  { name: "latakia-cus", language: "Dart", updated: "Aug 2025", url: "https://github.com/alymaher494/latakia-cus" },
];

export interface Client {
  name: string;
  slug: string;
  url: string;
  file: string;
}

/** Client brands worked with — rendered as a marquee (PNG/WEBP logo or text fallback). */
export const CLIENTS: Client[] = [
  { name: "PBC", slug: "pbc", url: "https://pbc-ksa.com", file: "PBC-logo-png.webp" },
  { name: "Emaar Land", slug: "emaar", url: "https://emaar.sa", file: "vecteezy_real-estate-construction-or-house-logo-vector-icon-design_29753930-4-768x285.png" },
  { name: "4D Für Dich", slug: "4d", url: "https://4d4dich.de", file: "4-scaled-e1746370016504.png" },
  { name: "Pizza by Hira", slug: "pizza", url: "https://pizzahira-dingolfing.de", file: "cropped-LOGO-PIZZA-BY-HIRA.png" },
  { name: "Fitness Total", slug: "fitness", url: "https://fitnesstotal-schoeneck.de", file: "logo-premium.png" },
  { name: "Super Marketer", slug: "super", url: "https://supermarketer.net", file: "Shandi-Marketing-5cc90f44.webp" },
  { name: "MTGAR", slug: "mtgar", url: "https://landing.mtgar.com", file: "eldidigroup.png" },
  { name: "Outgrid", slug: "outgrid", url: "#", file: "Outgrid-Logo.png" },
  { name: "Europa Grill", slug: "europa-grill", url: "#", file: "Europa-Grill.png" },
  { name: "Weisspro", slug: "weisspro", url: "#", file: "weisspro-01.png" },
  { name: "Maxx Firma", slug: "maxx-firma", url: "#", file: "maxx firma logo-03.png" },
  { name: "Logo Dark", slug: "logo-dark", url: "#", file: "logo-dark.png" },
  { name: "Logo White", slug: "logo-white", url: "#", file: "White-logo.webp" },
  { name: "Logo Main", slug: "logo-main", url: "#", file: "logo.png" },
  { name: "Layer 1", slug: "layer-1", url: "#", file: "Layer 1.png" },
  { name: "Layer 4", slug: "layer-4", url: "#", file: "Layer 4.png" },
  { name: "Layer 5", slug: "layer-5", url: "#", file: "Layer 5.png" },
  { name: "Layer 7", slug: "layer-7", url: "#", file: "Layer 7.png" },
  { name: "Layer 8", slug: "layer-8", url: "#", file: "Layer 8.png" },
  { name: "Black Version", slug: "black-version", url: "#", file: "Black Version.png" },
  { name: "No Padding", slug: "no-padding", url: "#", file: "no_padding-removebg-preview.png" },
  { name: "Vector Smart Object", slug: "vector-smart-object", url: "#", file: "Vector Smart Object-05.png" },
  { name: "WhatsApp 2026-02", slug: "whatsapp-2026-02", url: "#", file: "WhatsApp Image 2026-02-19 at 10.19.00 AM.jpeg" },
  { name: "WhatsApp 2026-05", slug: "whatsapp-2026-05", url: "#", file: "WhatsApp Image 2026-05-13 at 10.52.19 AM.jpeg" },
  { name: "WhatsApp 2023-12-1", slug: "whatsapp-2023-12-1", url: "#", file: "WhatsApp_Image_2023-12-23_at_1.01.46_AM__1_-removebg-preview.png" },
  { name: "WhatsApp 2023-12-2", slug: "whatsapp-2023-12-2", url: "#", file: "WhatsApp_Image_2023-12-23_at_1.01.46_AM__2_-removebg-preview.png" },
  { name: "IMG-20250920", slug: "img-20250920", url: "#", file: "IMG-20250920-WA0008.jpg" },
  { name: "عربي", slug: "arabic-logo", url: "#", file: "لوجو-300x300.png" },
];

export interface Tech {
  name: string;
  slug: string;
}

/** Technology stack — rendered as a grid (PNG logo or text fallback). */
export const TECH: Tech[] = [
  { name: "Next.js", slug: "nextjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "WordPress", slug: "wordpress" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Python", slug: "python" },
  { name: "Supabase", slug: "supabase" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Express", slug: "express" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Go", slug: "go" },
  { name: "Vue", slug: "vue" },
  { name: "Nuxt", slug: "nuxt" },
  { name: "ACF Pro", slug: "acf" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Caddy", slug: "caddy" },
];

export interface NavItem {
  id: string;
  label: string;
  coord: string;
}

export const TICKER_WORDS: string[] = [
  "WordPress",
  "E-commerce",
  "APIs",
  "AI",
  "Infrastructure",
  "Frontend",
];

export const NAV: NavItem[] = [
  { id: "nucleus", label: "Home", coord: "00" },
  { id: "evidence", label: "Projects", coord: "01" },
  { id: "architecture", label: "Services", coord: "02" },
  { id: "circuitry", label: "Case Studies", coord: "03" },
  { id: "pricing", label: "Pricing", coord: "05" },
  { id: "terminal", label: "Contact", coord: "06" },
];
