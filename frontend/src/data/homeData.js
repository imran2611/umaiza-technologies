import {
  Globe, Code, Layers, Users, Briefcase, Building2, Cloud, Plug, Bot,
  Lightbulb, Zap, Server, ShieldCheck, Headset,
  ClipboardList, Workflow, PenTool, Bug, Rocket, Wrench,
  Wallet, FileSearch, CalendarCheck,
} from "lucide-react";

export const highlights = [
  { title: "Free Consultation", text: "Tell us your idea, get honest advice." },
  { title: "Fixed-Price Quotes", text: "Clear scope and cost before we start." },
  { title: "NDA on Request", text: "Your idea and data stay private." },
  { title: "Direct Developer Access", text: "Talk to the people who build it." },
];

export const services = [
  { icon: Globe, title: "Website Development", desc: "Fast, responsive and SEO-friendly websites that make a strong first impression." },
  { icon: Code, title: "Custom Software Development", desc: "Software built around your exact process, not a one-size-fits-all tool." },
  { icon: Layers, title: "MERN Stack Development", desc: "Modern full-stack apps with React, Node.js, Express and MongoDB." },
  { icon: Users, title: "HRMS Development", desc: "Leave, payroll, onboarding, reimbursements and employee management in one place." },
  { icon: Briefcase, title: "CRM Development", desc: "Track leads, follow-ups and customers so no opportunity is missed." },
  { icon: Building2, title: "ERP Solutions", desc: "Connect operations, inventory, accounts and reports into one system." },
  { icon: Cloud, title: "SaaS Application Development", desc: "Multi-user, subscription-ready platforms built to scale." },
  { icon: Plug, title: "API Integration", desc: "Connect Jira, Telegram, payment, email and other third-party services." },
  { icon: Bot, title: "AI-powered Solutions", desc: "Smart automation, chatbots and workflows that save your team hours." },
];

export const intro = [
  {
    title: "Who We Are",
    text: "Umaiza Technologies is a software development studio. We build websites, business applications and automation tools, with strong focus on HR, recruitment, payroll and workflow systems.",
  },
  {
    title: "Our Mission",
    text: "To help businesses grow by turning their ideas and daily processes into reliable, easy-to-use software at a fair price.",
  },
  {
    title: "Our Vision",
    text: "To become a trusted technology partner for businesses across India and around the world.",
  },
];

export const whyChoose = [
  { icon: Lightbulb, title: "Custom Solutions", desc: "We build for your process. No forced templates, no unnecessary features." },
  { icon: Zap, title: "Modern Technologies", desc: "React, Node.js, MongoDB and proven PHP frameworks, chosen to fit your project." },
  { icon: Server, title: "Scalable Architecture", desc: "Clean structure so your product keeps working as users and data grow." },
  { icon: ShieldCheck, title: "Secure Development", desc: "Validation, authentication and safe data handling from day one." },
  { icon: Headset, title: "Dedicated Support", desc: "Quick help after launch, with updates and maintenance when you need them." },
];

export const techStack = [
  { name: "React.js", abbr: "Re", color: "#0ea5e9" },
  { name: "Node.js", abbr: "No", color: "#16a34a" },
  { name: "Express.js", abbr: "Ex", color: "#475569" },
  { name: "MongoDB", abbr: "Mo", color: "#15803d" },
  { name: "PHP", abbr: "Ph", color: "#6366f1" },
  { name: "Laravel", abbr: "La", color: "#ef4444" },
  { name: "MySQL", abbr: "My", color: "#0369a1" },
  { name: "JavaScript", abbr: "JS", color: "#ca8a04" },
  { name: "Bootstrap", abbr: "Bo", color: "#7c3aed" },
];

// SAMPLE projects, clearly labelled. Real projects aayein toh yahan replace karna.
export const projects = [
  {
    icon: Users,
    name: "HRMS Suite",
    desc: "Leave management, one-click salary automation, onboarding and reimbursement workflows for growing teams.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #315efb, #8057e8)",
  },
  {
    icon: FileSearch,
    name: "Hiring Hub (ATS)",
    desc: "Recruitment pipeline with applicant tracking, interview stages and automatic email updates to candidates.",
    tech: ["React", "Express", "MongoDB"],
    gradient: "linear-gradient(135deg, #0ea5e9, #315efb)",
  },
  {
    icon: Plug,
    name: "Ticket & Alert Bridge",
    desc: "Connects your apps with Jira and Telegram. Creates tickets by API and sends instant alerts using webhooks and scheduled jobs.",
    tech: ["Node.js", "REST API", "Cron"],
    gradient: "linear-gradient(135deg, #8057e8, #ec4899)",
  },
];

export const process = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "We understand your goals, users and budget." },
  { icon: Workflow, title: "Planning", desc: "Scope, timeline and technology are agreed upfront." },
  { icon: PenTool, title: "UI/UX Design", desc: "Clean, simple screens you can review before coding." },
  { icon: Code, title: "Development", desc: "Clean code built in small, reviewable steps." },
  { icon: Bug, title: "Testing", desc: "We find and fix problems before your users do." },
  { icon: Rocket, title: "Deployment", desc: "Smooth launch on secure, reliable hosting." },
  { icon: Wrench, title: "Maintenance", desc: "Updates, fixes and support after go-live." },
];

// SAMPLE testimonials, clearly labelled. Real feedback milne par replace karo.
export const testimonials = [
  { text: "They turned our rough idea into a working product and kept us updated at every step.", name: "Sample Client", role: "Startup Founder" },
  { text: "Clear communication, a fair quote and a clean, well-organised delivery.", name: "Sample Client", role: "Operations Manager" },
  { text: "Our HR processes are now automated, which saves the team hours every week.", name: "Sample Client", role: "HR Lead" },
];

export { Wallet, CalendarCheck };