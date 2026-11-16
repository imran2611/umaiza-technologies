import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import CallToAction from "../components/home/CallToAction";
import { services } from "../data/homeData";
import { serviceFeatures } from "../data/siteData";

function Services() {
  return (
    <>
      <PageTitle title="Services" />
      <PageHeader
        eyebrow="Our Services"
        title="Software Services That Move Your Business Forward"
        subtitle="From a simple website to a complete business system, we cover the full journey."
      />

      <section className="section-padding">
        <div className="container">
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
                      <ul className="check-list mb-4">
                        {(serviceFeatures[s.title] || []).map((f) => (
                          <li key={f}><Check size={18} /> {f}</li>
                        ))}
                      </ul>
                      <Link to="/get-a-quote" className="link-arrow">
                        Get a quote <ArrowRight size={16} />
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

export default Services;