import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { process } from "../../data/homeData";

function DevelopmentProcess() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Development Process"
          subtitle="A simple, transparent 7-step process from first call to long-term support."
        />
        <div className="row g-4 justify-content-center">
          {process.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="col-sm-6 col-lg-3" key={s.title}>
                <Reveal delay={(i % 4) * 100} className="h-100">
                  <div className="step-card">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="step-icon"><Icon size={20} /></span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
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

export default DevelopmentProcess;