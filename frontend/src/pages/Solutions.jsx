import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import CallToAction from "../components/home/CallToAction";
import { solutions } from "../data/siteData";

function Solutions() {
  return (
    <>
      <PageTitle title="Our Solutions" />
      <PageHeader
        eyebrow="Our Solutions"
        title="Ready-To-Customise Business Solutions"
        subtitle="Start from a proven structure and shape it around your needs, so you launch faster and spend less."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="col-md-6 col-lg-4" key={s.title}>
                  <Reveal delay={(i % 3) * 100} className="h-100">
                    <div className="feature-card">
                      <div className="icon-box"><Icon size={24} /></div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <ul className="check-list mb-4">
                        {s.features.map((f) => (
                          <li key={f}><Check size={18} /> {f}</li>
                        ))}
                      </ul>
                      <Link to="/contact" className="link-arrow">
                        Discuss this solution <ArrowRight size={16} />
                      </Link>
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

export default Solutions;