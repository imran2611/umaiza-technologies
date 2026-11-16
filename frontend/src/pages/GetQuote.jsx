import { Check } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import EnquiryForm from "../components/common/EnquiryForm";
import { highlights } from "../data/homeData";

const steps = [
  "We review your requirement carefully.",
  "If needed, we sign an NDA to protect your idea.",
  "You receive a clear proposal with scope, timeline and fixed price.",
];

function GetQuote() {
  return (
    <>
      <PageTitle title="Get a Quote" />
      <PageHeader
        eyebrow="Get a Quote"
        title="Tell Us What You Want To Build"
        subtitle="Free consultation, honest advice and a fixed-price estimate. No obligation."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <Reveal>
                <div className="form-card">
                  <h2 className="h4 fw-bold mb-4">Project Details</h2>
                  <EnquiryForm variant="quote" />
                </div>
              </Reveal>
            </div>

            <div className="col-lg-5">
              <Reveal delay={120}>
                <div className="feature-card mb-4">
                  <h3>What Happens Next?</h3>
                  <ol className="steps-list mt-3">
                    {steps.map((s, i) => (
                      <li key={i}>
                        <span className="step-num-sm">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="feature-card">
                  <h3>Our Promise</h3>
                  <ul className="check-list mt-3 mb-0">
                    {highlights.map((h) => (
                      <li key={h.title}><Check size={18} /> {h.title}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetQuote;