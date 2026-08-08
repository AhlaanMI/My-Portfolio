export const projectsData = [
  {
    id: "flowstack-agency-os",
    title: "FlowStack Agency OS",
    subtitle: "Internal operating system for my agency",
    category: "featured",
    year: "2025 — Present",
    summary:
      "An internal operating system built to manage clients, projects, content and finances for Flowstack. A continuously evolving system used in daily agency operations.",
    role: "Creator · Designer · Developer",
    outcome:
      "Replaced scattered spreadsheets and messages with a single system that runs the agency's day-to-day operations.",
    challenge:
      "Turning a one-person agency workflow into structured client, project and financial tracking without adding overhead.",
    features: [
      "Client management",
      "Project management",
      "Workflow tracking",
      "Content & finance overview",
    ],
    tags: ["Product", "Internal tool", "Agency operations"],
    stack: ["Next.js", "TypeScript", "Auth", "State management", "Database"],
    image: "/images/flowstack-agency-os.svg",
    liveUrl: "https://flowstack.ink",
    github: "",
  },
  {
    id: "pharmacy-pos",
    title: "Pharmacy POS",
    subtitle: "Customized point-of-sale system",
    category: "secondary",
    year: "2026",
    summary:
      "A pharmacy point-of-sale system with domain-specific functionality such as expiry tracking, low-stock alerts and multi-user roles.",
    role: "Analyst · Developer",
    outcome:
      "Customized and extended an existing POS foundation with pharmacy-specific workflows and designed a web-based POS concept.",
    challenge:
      "Adapting a general POS to the real constraints of a pharmacy — expiry, stock and role-based access.",
    features: [
      "Expiry tracking",
      "Low-stock alerts",
      "Multi-user roles",
      "Web-based concept design",
    ],
    tags: ["Customized from PharmaSpot", "Electron", "Web concept"],
    stack: ["Electron", "JavaScript", "Database", "UI design"],
    image: "/images/pharmacy-pos.svg",
    liveUrl: "",
    github: "",
  },
  {
    id: "automile",
    title: "Automile",
    subtitle: "AI-Powered Vehicle Advisory Chatbot",
    category: "secondary",
    year: "2024 — 2025",
    summary:
      "Final-year research project focused on IoT-driven vehicle lifecycle optimization, featuring an AI-powered vehicle advisory chatbot.",
    role: "Researcher · ML Engineer · Developer",
    outcome:
      "Achieved ~98% accuracy in identifying vehicle issues and recommending maintenance actions, evaluated through structured testing.",
    challenge:
      "Working with noisy real-world mechanic data and improving domain-specific NLP recommendation quality while reducing false positives and negatives.",
    features: [
      "Mechanics' diagnostic process modeling",
      "Domain-specific NLP",
      "Recommendation engine",
      "Structured evaluation",
    ],
    tags: ["Research", "AI/ML", "NLP", "IoT"],
    stack: ["Python", "TensorFlow", "Flask", "NLP", "ML"],
    image: "/images/automile.svg",
    liveUrl: "https://automile-landing-page-main.vercel.app/",
    github: "",
  },
  {
    id: "extreme-fitness",
    title: "Extreme Fitness Center",
    subtitle: "Client website · Live marketing site",
    category: "secondary",
    year: "2026",
    summary:
      "A production marketing website delivered for a real client — my first Flowstack client project.",
    role: "Founder · Designer · Developer",
    outcome:
      "Deployed as a live marketing site with booking and inquiry flows designed around client goals.",
    challenge:
      "Delivering a conversion-focused site for a business — from design through SEO and social sharing.",
    features: [
      "Mobile experience",
      "Booking / inquiry flow",
      "SEO implementation",
      "Open Graph & Twitter cards",
    ],
    tags: ["Client project", "Marketing site", "SEO"],
    stack: ["React", "Tailwind CSS", "SEO", "Deployment"],
    image: "/images/extreme-fitness.svg",
    liveUrl: "",
    github: "",
  },
  {
    id: "vehicle-marketplace",
    title: "Vehicle Marketplace",
    subtitle: "Production engineering",
    category: "more",
    year: "Ongoing",
    summary:
      "Contributed to a production-level vehicle marketplace, developing frontend components and backend CRUD functionality.",
    role: "Full-stack contributor",
    outcome:
      "Shipped production features inside a real engineering team using Agile and CI/CD.",
    challenge: "Working within production standards — branching, reviews and deployment pipelines.",
    features: ["Vehicle listings", "Search & filter", "User dashboard", "CRUD APIs"],
    tags: ["Production", "Team", "Agile"],
    stack: ["React", "Next.js", "TypeScript", "Laravel", "Node.js", "MongoDB", "Firebase"],
    image: "/images/vehicle-marketplace.svg",
    liveUrl: "",
    github: "",
  },
  {
    id: "code-connect",
    title: "Real Time Code Connect",
    subtitle: "Collaborative code editor",
    category: "more",
    year: "2024",
    summary:
      "A real-time collaborative code editor with WebSocket synchronization, multi-user rooms and syntax highlighting.",
    role: "Solo developer",
    outcome:
      "Delivered a working multi-user collaboration product with live sync and presence tracking.",
    challenge: "Designing reliable real-time state synchronization across concurrent users.",
    features: ["Live code sync", "Rooms & presence", "Syntax highlighting", "REST APIs"],
    tags: ["Product", "Real-time"],
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Express"],
    image: "/images/code-connect.svg",
    liveUrl: "",
    github: "https://github.com/AhlaanMI/CCC",
  },
];

export const featuredProject = projectsData.find((p) => p.category === "featured");
export const secondaryProjects = projectsData.filter((p) => p.category === "secondary");
export const moreProjects = projectsData.filter((p) => p.category === "more");
