import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SITE } from "../../utils/siteConfig";


const LAYOUT = "rows"; // Layout badalne ke liye sirf ye ek line badlo: "split" | "tabs" | "rows"

// const letters = [
//   { letter: "U", word: "Unified", text: "Your tools, data and processes connected in one place.", points: ["One login, one dashboard", "All departments connected"] },
//   { letter: "M", word: "Management", text: "Simple control over your people, projects and daily work.", points: ["Leave, payroll and records", "Tasks and approvals"] },
//   { letter: "A", word: "Automation", text: "Repetitive tasks handled automatically, so your team saves time.", points: ["Scheduled jobs and auto emails", "Jira and Telegram integrations"] },
//   { letter: "I", word: "Intelligent", text: "Smart, data-driven features and AI-powered solutions.", points: ["Smart reports and insights", "AI chatbots and workflows"] },
//   { letter: "Z", word: "Zero-error", text: "Our goal: careful validation and testing to keep mistakes out.", points: ["Frontend and backend validation", "Testing before every release"] },
//   { letter: "A", word: "Administration", text: "Easy admin panels to run, track and monitor everything.", points: ["Powerful admin panel", "Role-based access"] },
// ];


const letters = [
  {
    letter: "U",
    word: "Unified",
    text: "We bring people, technology, data and business operations together through one seamless digital ecosystem.",
    points: [
      "One platform for every business need",
      "Seamless integration across departments",
      "Centralized data and communication",
      "Connected tools and workflows"
    ]
  },
  {
    letter: "M",
    word: "Management",
    text: "We simplify business operations by helping organizations manage people, projects, resources and daily activities efficiently.",
    points: [
      "Smart HRMS and employee management",
      "Project and task management",
      "Payroll, attendance and leave management",
      "Streamlined approvals and team collaboration"
    ]
  },
  {
    letter: "A",
    word: "Automation",
    text: "We transform repetitive tasks into automated workflows, reducing manual effort, saving time and increasing business productivity.",
    points: [
      "Automated business processes",
      "Smart notifications and scheduled tasks",
      "API and third-party integrations",
      "Automated reports, payroll and approvals"
    ]
  },
  {
    letter: "I",
    word: "Intelligent",
    text: "We combine modern technology, artificial intelligence and data-driven insights to create smarter solutions for evolving business needs.",
    points: [
      "AI-powered business solutions",
      "Data-driven reports and analytics",
      "Intelligent chatbots and virtual assistants",
      "Predictive insights and smart workflows"
    ]
  },
  {
    letter: "Z",
    word: "Zero-Error",
    text: "We prioritize accuracy, security and reliability at every stage of development to deliver dependable and high-quality software experiences.",
    points: [
      "Strong data validation and error handling",
      "Secure and reliable architecture",
      "Thorough testing and quality assurance",
      "Continuous monitoring and improvement"
    ]
  },
  {
    letter: "A",
    word: "Administration",
    text: "We build powerful administration systems that give businesses complete control over their operations, users, permissions and resources.",
    points: [
      "Customizable admin dashboards",
      "Role-based access and permissions",
      "Real-time monitoring and reporting",
      "Centralized configuration and control"
    ]
  }
];


function Row({ item }) {
  return (
    <div className="glass-card umaiza-row">
      <span className="umaiza-badge">{item.letter}</span>
      <div>
        <h3>{item.word}</h3>
        <p>{item.text}</p>
        <div className="d-flex flex-wrap gap-2">
          {item.points.map((p) => (
            <span className="point-tag" key={p}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Split({ brand }) {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-5">
        <Reveal>
          <span className="eyebrow on-dark">Our Name</span>
          <h2 className="section-title on-dark">What {brand} Stands For</h2>
          <p className="section-sub on-dark mt-3">
            Every letter of our name is a promise about the software we build for you.
          </p>
          <div className="umaiza-big" aria-hidden="true">
            {brand.split("").map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="col-lg-7">
        <div className="d-flex flex-column gap-3">
          {letters.map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <Row item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tabs({ brand }) {
  const [active, setActive] = useState(0);
  const cur = letters[active];

  return (
    <>
      <SectionHeading
        dark
        eyebrow="Our Name"
        title={`What ${brand} Stands For`}
        subtitle="Every letter of our name is a promise about the software we build for you."
      />
      <div className="umaiza-tabs" role="tablist">
        {letters.map((item, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={item.word}
            className={`umaiza-tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            {item.letter}
          </button>
        ))}
      </div>

      <div className="glass-card umaiza-panel" key={active}>
        <div className="row align-items-center g-4">
          <div className="col-md-4 text-center">
            <span className="umaiza-huge">{cur.letter}</span>
            <div className="umaiza-count">0{active + 1} / 06</div>
          </div>
          <div className="col-md-8">
            <h3>{cur.word}</h3>
            <p>{cur.text}</p>
            <ul className="check-list on-dark-list mb-0">
              {cur.points.map((p) => (
                <li key={p}><Check size={18} /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Rows({ brand }) {
  return (
    <>
      <SectionHeading
        dark
        eyebrow="Our Name"
        title={`What ${brand} Stands For`}
        subtitle="Every letter of our name is a promise about the software we build for you."
      />
      <div className="row g-4">
        {letters.map((item, i) => (
          <div className="col-md-6" key={i}>
            <Reveal delay={(i % 2) * 100} className="h-100">
              <Row item={item} />
            </Reveal>
          </div>
        ))}
      </div>
    </>
  );
}

function UmaizaMeaning() {
  const brand = SITE.name.split(" ")[0].toUpperCase();

  return (
    <section className="section-padding umaiza-section bg-navy position-relative overflow-hidden">
      <span className="orb orb-purple" style={{ opacity: 0.25, top: -140, bottom: "auto", right: -100 }}></span>
      <div className="container position-relative">
        {LAYOUT === "split" && <Split brand={brand} />}
        {LAYOUT === "tabs" && <Tabs brand={brand} />}
        {LAYOUT === "rows" && <Rows brand={brand} />}
      </div>
    </section>
  );
}

export default UmaizaMeaning;