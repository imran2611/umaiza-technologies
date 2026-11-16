import { Quote } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/homeData";

function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Will Say About Us"
          subtitle="Sample testimonials are shown until real client feedback is available."
        />
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={i}>
              <Reveal delay={i * 100} className="h-100">
                <div className="quote-card">
                  <span className="sample-tag">Sample testimonial</span>
                  <Quote size={30} className="quote-icon" />
                  <p>{t.text}</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <span className="avatar">SC</span>
                    <div>
                      <div className="fw-bold">{t.name}</div>
                      <div className="small text-secondary">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;