import { ServiceIcons, FeatureIcons } from "../assets/Icons";

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  "Home",
  "About Us",
  "Services",
  "Clients",
  "Data Analytics",
  "Contact Us",
];

// ─── Services Data ─────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: ServiceIcons.Business,
    title: "Business Consulting",
    desc: "Expert strategic guidance to optimize your business operations, increase efficiency, and drive sustainable growth.",
    tab: "Business Consulting",
    tags: [
      "Strategic Strategy",
      "Operational Efficiency",
      "Growth Acceleration",
      "Risk Management",
      "Business Planning",
      "Market Intelligence",
      "Process Optimization",
      "Change Management",
      "Digital Roadmap",
      "M&A Advisory",
    ],
  },
  {
    icon: ServiceIcons.HR,
    title: "HR Consulting",
    desc: "Comprehensive human resource solutions including policy development, compliance, and employee engagement strategies.",
    tab: "HR Consulting",
    tags: [
      "Payroll Mgmt",
      "Legal Compliance",
      "Company Culture",
      "Policy Framework",
      "Employee Retention",
      "Benefit Systems",
      "Talent Strategy",
      "Labor Relations",
      "Audit Services",
      "Performance Mgmt",
    ],
  },
  {
    icon: ServiceIcons.Startup,
    title: "Startup Consulting",
    desc: "End-to-end support for new ventures, from business model validation to scaling and investor readiness.",
    tab: "Startup Consulting",
    tags: [
      "MVP Development",
      "Venture Capital",
      "Rapid Scaling",
      "Pitch Decks",
      "Market Validation",
      "Strategic Mentors",
      "Business Models",
      "Entity Selection",
      "Equity Design",
      "Pre-Launch PR",
    ],
  },
  {
    icon: ServiceIcons.Hiring,
    title: "Talent Acquisition",
    desc: "Streamlined recruitment processes to help you find, vet, and onboard the best talent for your team.",
    tab: "Talent Acquisition",
    tags: [
      "CXO Search",
      "Technical Vetting",
      "Global Sourcing",
      "Onboarding Flow",
      "Candidate Pools",
      "Employer Brand",
      "Diversity Hiring",
      "Interviews",
      "Skill Assessment",
      "Internal Mobility",
    ],
  },
  {
    icon: ServiceIcons.Training,
    title: "Training Services",
    desc: "Customized corporate training programs to upskill your workforce in leadership and soft skills.",
    tab: "Training Services",
    tags: [
      "Skill Workshops",
      "Workforce Upskilling",
      "Leadership Lab",
      "Technical Track",
      "EQ Soft Skills",
      "Team Cohesion",
      "E-Learning Design",
      "Corporate L&D",
      "Sales Coaching",
      "Customer Care",
    ],
  },
  {
    icon: ServiceIcons.Data,
    title: "Data Analytics",
    desc: "Data analytics and automation platform designed to help businesses visualize data and automate workflows.",
    tab: "Data Analytics",
    tags: [
      "Data Integration",
      "Cleansing",
      "Visualisation",
      "Workflows",
      "Governance",
      "Dashboards",
      "Real-time",
      "Insights",
      "Automation",
      "Reports",
    ],
  },
];

// Single point of truth for tabs (Derived from SERVICES)
export const SERVICE_TABS = [
  "All Services",
  ...new Set(SERVICES.map((s) => s.tab)),
];

// ─── Features ────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: FeatureIcons.Global,
    title: "Global Expertise",
    desc: "Access a world-class network of consultants with deep domain knowledge across various industries.",
  },
  {
    icon: FeatureIcons.Strategy,
    title: "Innovative Strategies",
    desc: "Custom-tailored business roadmaps and extensive experience to further your growth.",
  },
  {
    icon: FeatureIcons.Trust,
    title: "Confidentiality & Trust",
    desc: "We prioritize your business security and data privacy through strict protocols.",
  },
  {
    icon: FeatureIcons.Support,
    title: "Strategic Support",
    desc: "Dedicated round-the-clock advisory services to ensure your business stays ahead.",
  },
];

// ─── Footer Links ────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  QuickLinks: ["Home", "About Us", "Our Leadership", "Services", "Clients", "Data Analytics", "Contact Us"],
  Services: SERVICES.map((s) => s.title),
};
