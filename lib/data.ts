/* ============================================================
   All portfolio content lives here — edit this file to update
   the site. Components never hard-code content.
   ============================================================ */

export const profile = {
  name: "Nima Rajabi",
  role: "Front-End Developer",
  email: "nimarajabi2299@gmail.com",
  phone: "+98 994 188 2386",
  phoneHref: "tel:+989941882386",
  github: "https://github.com/itsnimadrs",
  reposUrl: "https://github.com/itsnimadrs?tab=repositories",
  location: "Tehran, Iran",
} as const;

export const typewriterRoles = [
  "Front-End Developer",
  "React & TypeScript Developer",
  "UI / UX Enthusiast",
  "Full-Stack Explorer",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "1.5+", label: "Years of Experience" },
  { value: "400+", label: "Hours React Bootcamp" },
  { value: "15+", label: "Public Repositories" },
  { value: "6+", label: "Tech Certifications" },
];

export const facts = [
  { key: "Location", value: "Tehran, Iran 🇮🇷" },
  { key: "Degree", value: "M.Sc. Software Eng. (in progress)" },
  { key: "Focus", value: "React · TypeScript · UI/UX" },
  { key: "English", value: "Advanced (C1 Certificate)" },
  { key: "Military Service", value: "Exempt" },
  { key: "Status", value: "● Open to work", highlight: true },
];

export interface Fact {
  key: string;
  value: string;
  highlight?: boolean;
}

export interface SkillGroup {
  title: string;
  subtitle: string;
  icon: string;
  /** optional color tone for the icon tile */
  tone?: "cyan" | "amber" | "green" | "blue";
  /** span the full grid width */
  full?: boolean;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End Core",
    subtitle: "My daily drivers",
    icon: "⚛",
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
      "Responsive Design (RWD)", "SPA Architecture", "Semantic HTML", "SVG", "Forms & Validation",
    ],
  },
  {
    title: "Styling & UI",
    subtitle: "Pixel-perfect interfaces",
    icon: "🎨",
    tone: "cyan",
    skills: [
      "Tailwind CSS", "SASS", "Bootstrap", "Material-UI (MUI)", "Styled Components",
      "CSS Modules", "Headless UI", "Flexbox", "Animations", "Font Awesome", "Figma",
    ],
  },
  {
    title: "React Deep-Dive",
    subtitle: "Patterns & state management",
    icon: "🔄",
    tone: "amber",
    skills: [
      "Hooks", "Context API", "Redux", "React Query", "React Router", "Lifecycle",
      "HOC", "Container-Presentational", "Component Architecture", "Suspense", "React DevTools",
    ],
  },
  {
    title: "Backend & Tools",
    subtitle: "Beyond the browser",
    icon: "🛠",
    tone: "blue",
    skills: [
      "C#", ".NET APIs", "Python", "SQL", "Delphi", "Git & GitHub",
      "jQuery", "Ajax / REST", "async/await",
    ],
  },
  {
    title: "Networking & IT",
    subtitle: "From my IT-administrator era",
    icon: "🌐",
    tone: "green",
    full: true,
    skills: [
      "MikroTik", "MTCNA", "MTCRE", "CCNA", "Network+",
      "Switching & Routing", "Network Security", "Technical Support",
    ],
  },
];

export type ProjectIcon = "bag" | "list" | "check" | "code";

export interface Project {
  name: string;
  href: string;
  description: string;
  tags: string[];
  lang: string;
  langColor: string;
  stars?: number;
  icon: ProjectIcon;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "drugstore-shop",
    href: "https://github.com/itsnimadrs/drugstore-shop",
    description:
      "A complete pharmacy e-commerce single-page application built with React & TypeScript — product catalog, shopping cart and checkout flow, with a fully responsive design. My flagship project from the Maktab Sharif bootcamp.",
    tags: ["React", "TypeScript", "SPA", "E-commerce", "Responsive"],
    lang: "TypeScript · React",
    langColor: "#3178c6",
    stars: 1,
    icon: "bag",
    featured: true,
  },
  {
    name: "projectYadegar",
    href: "https://github.com/itsnimadrs/projectYadegar",
    description:
      "A JavaScript project developed during my B.Sc. at Yadegar-e Imam Azad University.",
    tags: ["JavaScript", "DOM", "University Project"],
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 1,
    icon: "list",
  },
  {
    name: "todoApp",
    href: "https://github.com/itsnimadrs/todoApp",
    description:
      "A classic task-manager SPA — CRUD operations, filtering and state handling in JavaScript.",
    tags: ["JavaScript", "SPA", "CRUD"],
    lang: "JavaScript",
    langColor: "#f1e05a",
    icon: "check",
  },
  {
    name: "CSharpFinalProject",
    href: "https://github.com/itsnimadrs/CSharpFinalProject",
    description:
      "Final project of my C# programming course — object-oriented design and clean code practice.",
    tags: ["C#", "OOP", ".NET"],
    lang: "C#",
    langColor: "#178600",
    icon: "code",
  },
];

export interface ExperienceItem {
  date: string;
  badge?: string;
  title: string;
  company: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: "Oct 2025 — Present",
    title: "Laboratory Software Support Specialist",
    company: "Rahkar Teb Azma (آزما طب راهکار)",
    points: [
      "Providing comprehensive technical and IT-related software support for Laboratory Information Systems (LIS).",
      "Using SQL extensively for database management, query development and data reporting.",
      "Performing maintenance and minor updates on application modules developed with Delphi.",
      "Troubleshooting and resolving software issues for diverse client needs, ensuring system stability.",
    ],
  },
  {
    date: "Part-Time",
    badge: "React · TypeScript",
    title: "ReactJS Developer",
    company: "TOSSAM (Pardisan Sazeh)",
    points: [
      "Developed the Help Center user interface using React & TypeScript.",
      "Created and integrated APIs with C# and .NET.",
      "Collaborated with the team to design and develop web-based systems.",
      "Developing the PIS application.",
    ],
  },
  {
    date: "Mar 2024 — Dec 2024",
    badge: "Farvardin – Azar 1403",
    title: "IT Administrator",
    company: "Nik Andishan Dade Pardaz",
    points: [
      "Configured and managed MikroTik devices.",
      "Provided technical support and troubleshooting for various companies.",
      "Handled complete setup and maintenance of organizational networks — switching, routing and network security.",
    ],
  },
  {
    date: "Jun 2023 — Feb 2024",
    badge: "Tir – Bahman 1402",
    title: "React.js Intensive Bootcamp",
    company: "Maktab Sharif Bootcamp · +400 hours",
    points: [
      "Intensive JavaScript / React training program.",
      "Built a shoe-shopping mobile app with JavaScript.",
      "Built a complete shopping site with React + TypeScript (drugstore-shop on GitHub).",
    ],
  },
];

export interface EducationItem {
  icon: string;
  date: string;
  title: string;
  description: string;
  certs?: string[];
}

export const education: EducationItem[] = [
  {
    icon: "🎓",
    date: "2025 — Present",
    title: "M.Sc. in Software Engineering",
    description: "Master's degree in software engineering, in progress.",
  },
  {
    icon: "🎓",
    date: "2020 — 2024",
    title: "B.Sc. in Computer Engineering (Software)",
    description: "Yadegar-e Imam Azad University.",
  },
  {
    icon: "⚛",
    date: "2023 — 2024",
    title: "React.js Coding Bootcamp",
    description: "Maktab Sharif — intensive JavaScript / React program.",
    certs: ["+400 Hours"],
  },
  {
    icon: "💻",
    date: "Certificate",
    title: "C# Programming Course",
    description: "Tehran Technical Complex.",
    certs: ["+60 Hours"],
  },
  {
    icon: "🌍",
    date: "Language",
    title: "English — Advanced (C1)",
    description: "Iran Language Institute certificate.",
    certs: ["C1 Level"],
  },
  {
    icon: "📡",
    date: "Networking",
    title: "Network Certifications",
    description: "MikroTik & Cisco track certifications.",
    certs: ["MTCNA", "MTCRE", "CCNA", "Network+"],
  },
];
