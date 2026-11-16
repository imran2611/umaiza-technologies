import { Check } from "lucide-react";
import Reveal from "../common/Reveal";
import { highlights } from "../../data/homeData";

function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <Reveal>
          <div className="highlight-card">
            <div className="row g-4">
              {highlights.map((h) => (
                <div className="col-6 col-lg-3" key={h.title}>
                  <div className="d-flex gap-3">
                    <span className="check-dot"><Check size={16} /></span>
                    <div>
                      <h3 className="h6 fw-bold mb-1">{h.title}</h3>
                      <p className="small text-secondary mb-0">{h.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Highlights;