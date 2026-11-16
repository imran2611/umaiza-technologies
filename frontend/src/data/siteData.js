import {
  Eye, Award, Users, TrendingUp, MessageSquare, ShieldCheck,
  FileSearch, Briefcase, CalendarCheck, Cloud, Workflow, Plug,
  Wallet, GraduationCap, HeartPulse, ShoppingCart, Truck, Home, Rocket, Globe,
} from "lucide-react";

export const values = [
  { icon: Eye, title: "Transparency", desc: "Clear scope, clear cost and regular updates. No hidden surprises." },
  { icon: Award, title: "Quality First", desc: "Clean, tested and maintainable code that your team can build on." },
  { icon: MessageSquare, title: "Direct Communication", desc: "You talk to the people who actually build your product." },
  { icon: TrendingUp, title: "Long-term Thinking", desc: "We design for growth, so you don't rebuild every year." },
];

export const focusAreas = [
  "HR, payroll and leave management systems",
  "Recruitment and applicant tracking",
  "Third-party API integrations (Jira, Telegram, email and more)",
  "Scheduled jobs (crons) and workflow automation",
  "Full-stack web apps with the MERN stack",
  "Business websites with admin panels",
];

export const serviceFeatures = {
  "Website Development": ["Responsive, mobile-first design", "SEO-friendly structure", "Fast loading, optimized images", "Admin panel to update content"],
  "Custom Software Development": ["Built around your exact process", "Role-based access and reports", "Clean, documented code", "Easy to extend later"],
  "MERN Stack Development": ["React front-end with reusable components", "Node.js and Express REST APIs", "MongoDB database design", "JWT authentication"],
  "HRMS Development": ["Leave and attendance tracking", "Payroll and salary automation", "Onboarding and employee records", "Reimbursement workflows"],
  "CRM Development": ["Lead capture and tracking", "Follow-up reminders", "Sales pipeline view", "Reports and dashboards"],
  "ERP Solutions": ["Inventory and order management", "Accounts and billing", "Department-wise access", "Centralized reporting"],
  "SaaS Application Development": ["Multi-user and multi-tenant design", "Subscription-ready structure", "Admin and customer dashboards", "Built to scale"],
  "API Integration": ["Jira, Telegram and webhooks", "Payment and email services", "Third-party REST APIs", "Secure, logged integrations"],
  "AI-powered Solutions": ["Smart chatbots", "Automated reports and replies", "Document and data processing", "Workflow automation"],
};

export const solutions = [
  {
    icon: Users, title: "HRMS Platform",
    desc: "A complete HR system for small and mid-size teams.",
    features: ["Leave and sandwich-leave rules", "One-click salary automation", "Onboarding workflow", "Reimbursement approvals", "Employee records and documents"],
  },
  {
    icon: FileSearch, title: "Recruitment & ATS",
    desc: "Hire faster with an organised candidate pipeline.",
    features: ["Job posting and applications", "Candidate stages and notes", "Interview scheduling", "Automatic status emails"],
  },
  {
    icon: Briefcase, title: "CRM System",
    desc: "Never lose a lead or forget a follow-up again.",
    features: ["Lead and customer database", "Pipeline and deal stages", "Reminders and tasks", "Sales reports"],
  },
  {
    icon: CalendarCheck, title: "Office Management Suite",
    desc: "Everyday office tasks in one simple portal.",
    features: ["Conference room booking", "Library and asset tracking", "Request and approval flows", "Notifications by email"],
  },
  {
    icon: Cloud, title: "SaaS Starter Platform",
    desc: "Launch your subscription product on a solid base.",
    features: ["User accounts and roles", "Subscription-ready structure", "Admin dashboard", "API-first architecture"],
  },
  {
    icon: Workflow, title: "Workflow & API Automation",
    desc: "Connect your tools and remove repetitive manual work.",
    features: ["Jira ticket creation by API", "Telegram alerts via webhooks", "Scheduled jobs and crons", "Email integration"],
  },
];

export const industries = [
  { icon: Users, title: "HR & Staffing", desc: "Employee management, payroll, hiring pipelines and compliance-friendly records." },
  { icon: Wallet, title: "Finance & Fintech", desc: "Client onboarding flows, statements, dashboards and secure data handling." },
  { icon: GraduationCap, title: "Education", desc: "Student portals, course management, fee tracking and online enquiries." },
  { icon: HeartPulse, title: "Healthcare", desc: "Appointment systems, patient records and clinic management tools." },
  { icon: ShoppingCart, title: "E-commerce & Retail", desc: "Online stores, order management, inventory and customer portals." },
  { icon: Truck, title: "Logistics", desc: "Order tracking, dispatch dashboards and delivery management." },
  { icon: Home, title: "Real Estate", desc: "Property listings, lead management and customer follow-up systems." },
  { icon: Rocket, title: "Startups", desc: "MVPs and first versions built fast, so you can test your idea early." },
];

// SAMPLE projects. Clearly labelled on screen. Real projects aane par replace karo.
export const portfolioProjects = [
  { icon: Users, category: "HRMS", name: "HRMS Suite", desc: "Leave management, one-click salary automation, onboarding and reimbursement workflows for growing teams.", tech: ["React", "Node.js", "MongoDB"], gradient: "linear-gradient(135deg, #315efb, #8057e8)" },
  { icon: FileSearch, category: "Recruitment", name: "Hiring Hub (ATS)", desc: "Recruitment pipeline with applicant tracking, interview stages and automatic candidate emails.", tech: ["React", "Express", "MongoDB"], gradient: "linear-gradient(135deg, #0ea5e9, #315efb)" },
  { icon: Plug, category: "Integration", name: "Ticket & Alert Bridge", desc: "Creates Jira tickets by API and sends instant Telegram alerts using webhooks and scheduled jobs.", tech: ["Node.js", "REST API", "Cron"], gradient: "linear-gradient(135deg, #8057e8, #ec4899)" },
  { icon: Briefcase, category: "CRM", name: "Client Relationship CRM", desc: "Lead capture, follow-up reminders and a visual sales pipeline with simple reports.", tech: ["React", "Node.js", "MongoDB"], gradient: "linear-gradient(135deg, #059669, #0ea5e9)" },
  { icon: Cloud, category: "SaaS", name: "Subscription SaaS Starter", desc: "User roles, subscription plans and an admin dashboard, ready to customise for your product.", tech: ["React", "Express", "JWT"], gradient: "linear-gradient(135deg, #f59e0b, #ef4444)" },
  { icon: Globe, category: "Website", name: "Business Website + Admin", desc: "A fast, SEO-friendly company website where you can edit services, projects and enquiries yourself.", tech: ["React", "Bootstrap", "MongoDB"], gradient: "linear-gradient(135deg, #6366f1, #315efb)" },
];

export const careerPerks = [
  { icon: Rocket, title: "Real Products", desc: "Work on real client projects, not just practice tasks." },
  { icon: TrendingUp, title: "Fast Learning", desc: "Modern MERN stack, APIs and good engineering habits." },
  { icon: Users, title: "Small Team, Big Ownership", desc: "Your work is visible and your ideas are heard." },
  { icon: ShieldCheck, title: "Respectful Culture", desc: "Clear goals, honest feedback and fair expectations." },
];

export const careerRoles = [
  "Frontend Developer (React)",
  "Backend Developer (Node.js)",
  "Full Stack Developer (MERN)",
  "UI/UX Designer",
  "Intern",
  "Other",
];

export const experienceLevels = ["Fresher", "Less than 1 year", "1 – 3 years", "3 – 5 years", "5+ years"];