import { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import CallToAction from "../components/home/CallToAction";
import { portfolioProjects } from "../data/siteData";

const categories = ["All", ...new Set(portfolioProjects.map((p) => p.category))];

function Portfolio() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);

  return (
    <>
      <PageTitle title="Portfolio" />
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & Case Studies"
        subtitle="Sample projects that show what we can build. Real client work will be added here as we deliver it."
      />

      <section className="section-padding">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter-btn ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {list.map((p, i) => {
              const Icon = p.icon;
              return (
                <div className="col-md-6 col-lg-4" key={p.name}>
                  <Reveal delay={(i % 3) * 100} className="h-100">
                    <div className="project-card">
                      <div className="project-visual" style={{ background: p.gradient }}>
                        <span className="sample-badge">Sample Project</span>
                        <span className="project-icon"><Icon size={34} /></span>
                        <span className="mock-bars"><i></i><i></i><i></i></span>
                      </div>
                      <div className="project-body">
                        <span className="small fw-bold text-uppercase text-secondary mb-1">{p.category}</span>
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                          {p.tech.map((t) => (
                            <span className="tag" key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default Portfolio;