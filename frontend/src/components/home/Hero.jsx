import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "../common/Reveal";

const codeText = `// umaiza.config.js
const project = {
  idea: "Your big idea",
  stack: ["React", "Node", "MongoDB"],
  secure: true,
  scalable: true,
};

await umaiza.build(project);
// ✓ Deployed. Ready to grow.`;

function Hero() {
  return (
    <section className="hero">
      <span className="orb orb-blue"></span>
      <span className="orb orb-purple"></span>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal>
              <span className="hero-badge">
                <Sparkles size={16} /> Software Development &amp; IT Services
              </span>
              <h1 className="hero-title">
                Transforming Ideas Into{" "}
                <span className="text-gradient-light">
                  Powerful Digital Solutions
                </span>
              </h1>
              <p className="hero-text">
                We design and develop innovative digital solutions, scalable web applications and intelligent automation systems that simplify business operations, enhance productivity and accelerate growth.

              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/services"
                  className="btn btn-brand d-inline-flex align-items-center gap-2"
                >
                  Explore Our Services <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Let's Discuss Your Project
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal delay={150}>
              <div className="hero-visual">
                <div className="code-window">
                  <div className="code-bar">
                    <span style={{ background: "#ff5f57" }}></span>
                    <span style={{ background: "#febc2e" }}></span>
                    <span style={{ background: "#28c840" }}></span>
                  </div>
                  <pre className="code-body">{codeText}</pre>
                </div>

                <div className="float-chip chip-1">
                  <ShieldCheck size={18} color="#315efb" /> Secure by design
                </div>
                <div className="float-chip chip-2">
                  <CheckCircle2 size={18} color="#16a34a" /> Built to scale
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
