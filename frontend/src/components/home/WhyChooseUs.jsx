import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { whyChoose } from "../../data/homeData";

function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy position-relative overflow-hidden">
      <span className="orb orb-blue" style={{ opacity: 0.25, top: "auto", bottom: -160, left: -120 }}></span>
      <div className="container position-relative">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="Built Right, Delivered On Time"
          subtitle="Quality, clear communication and long-term thinking in every project."
        />
        <div className="row g-4 justify-content-center">
          {whyChoose.map((w, i) => {
            const Icon = w.icon;
            return (
              <div className="col-md-6 col-lg-4" key={w.title}>
                <Reveal delay={(i % 3) * 100} className="h-100">
                  <div className="glass-card">
                    <div className="icon-box"><Icon size={24} /></div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
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

export default WhyChooseUs;