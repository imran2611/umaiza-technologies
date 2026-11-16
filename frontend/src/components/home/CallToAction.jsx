import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";

function CallToAction() {
  return (
    <section className="section-padding">
      <div className="container">
        <Reveal>
          <div className="cta">
            <h2>Have an Idea? Let's Build Something Great Together.</h2>
            <p>Share your requirement and get a free consultation with a clear, fixed-price estimate.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/get-a-quote" className="btn btn-white d-inline-flex align-items-center gap-2">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CallToAction;