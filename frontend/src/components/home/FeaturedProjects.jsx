import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { projects } from "../../data/homeData";

function FeaturedProjects() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="What We Can Build For You"
          subtitle="Sample projects showing our capabilities. Real client work will be added as we deliver it."
        />
        <div className="row g-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <Reveal delay={i * 100} className="h-100">
                  <div className="project-card">
                    <div className="project-visual" style={{ background: p.gradient }}>
                      <span className="sample-badge">Sample Project</span>
                      <span className="project-icon"><Icon size={34} /></span>
                      <span className="mock-bars"><i></i><i></i><i></i></span>
                    </div>
                    <div className="project-body">
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {p.tech.map((t) => (
                          <span className="tag" key={t}>{t}</span>
                        ))}
                      </div>
                      <Link to="/portfolio" className="link-arrow mt-auto">
                        View Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;