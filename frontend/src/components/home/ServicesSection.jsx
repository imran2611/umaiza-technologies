import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/homeData";

function ServicesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need To Go Digital"
          subtitle="From a simple website to a complete business system, we cover the full journey."
        />
        <div className="row g-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <Reveal delay={(i % 3) * 100} className="h-100">
                  <div className="feature-card">
                    <div className="icon-box"><Icon size={24} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <Link to="/services" className="link-arrow">
                      Learn more <ArrowRight size={16} />
                    </Link>
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

export default ServicesSection;
