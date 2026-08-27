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
  /** Live URL of the shipped work */
  url: string;
  /** The capability this project proves — drives the Evidence Matrix */
  proves: ProofVector[];
  /** Tech detected from the live build (honest, not overclaimed) */
  stack: string[];
  metric: { value: string; label: string };
  status: "Shipped" | "Live" | "In Production";
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
    url: "https://4d4dich.de",
    proves: ["Frontend"],
    stack: ["Next.js", "Tailwind", "Vercel"],
    metric: { value: "98", label: "Lighthouse perf" },
    status: "Live",
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
    url: "https://supermarketer.net",
    proves: ["Frontend", "AI"],
    stack: ["Next.js", "Tailwind", "AI"],
    metric: { value: "AI", label: "regional expertise" },
    status: "Live",
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
    url: "https://landing.mtgar.com",
    proves: ["Frontend", "Integrations"],
    stack: ["React", "Vite", "Tailwind"],
    metric: { value: "RTL", label: "agency storefront" },
    status: "Live",
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
  email: "contact@alymaher.com",
  github: "https://github.com/alymaher494",
  socials: [
    { label: "GitHub", href: "https://github.com/alymaher494" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:contact@alymaher.com" },
  ],
};

export interface CaseStudy {
  id: string;
  index: string; // CS.01
  title: string;
  domain: string; // SPEC.DOM-XX
  summary: string;
  stack: string[];
  status: "Live" | "Delivered" | "Production Ready" | "In Development";
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
    stack: ["Node.js", "Express", "Webhooks", "Crypto Signatures", "Docker"],
    status: "Production Ready",
    url: "https://github.com/alymaher494/moysser",
  },
  {
    id: "aos",
    index: "02",
    title: "AOS — Agent Operating System",
    domain: "SPEC.DOM-03",
    summary:
      "A contract-first AI agent framework. A spec layer is the single source of truth; a typed Python runtime enforces frozen data contracts and fails explicitly (no-fabrication) instead of hallucinating.",
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
    stack: ["Next.js", "TypeScript", "Prisma", "React", "Caddy"],
    status: "Live",
    url: "https://alnebras.com.sa",
  },
  {
    id: "deutschdruck",
    index: "06",
    title: "DEUTSCHDRUCK — Print Commerce",
    domain: "SPEC.DOM-01",
    summary:
      "A headless print-commerce platform with a live cm² price calculator consuming ACF fields via WPGraphQL, plus a custom WordPress hardening plugin.",
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
    stack: ["Next.js", "WordPress", "ACF Pro", "Cloudflare", "Vercel"],
    status: "Live",
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

export interface NavItem {
  id: string;
  label: string;
  coord: string;
}

export const NAV: NavItem[] = [
  { id: "nucleus", label: "Core", coord: "00" },
  { id: "evidence", label: "Work", coord: "01" },
  { id: "architecture", label: "Capabilities", coord: "02" },
  { id: "circuitry", label: "Case Studies", coord: "03" },
  { id: "terminal", label: "Contact", coord: "04" },
];
