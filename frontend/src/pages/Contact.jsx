import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import EnquiryForm from "../components/common/EnquiryForm";
import { SITE } from "../utils/siteConfig";

const info = [
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: MapPin, label: "Location", value: SITE.location },
  { icon: Clock, label: "Working Hours", value: SITE.hours },
];

function Contact() {
  return (
    <>
      <PageTitle title="Contact Us" />
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Talk About Your Project"
        subtitle="Share a few details and we will get back to you with the next steps."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <Reveal>
                <h2 className="h3 fw-bold mb-4">Get In Touch</h2>
                <div className="d-flex flex-column gap-3">
                  {info.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="info-card" key={item.label}>
                        <span className="step-icon"><Icon size={20} /></span>
                        <div>
                          <div className="small text-secondary">{item.label}</div>
                          <div className="fw-semibold">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <div className="col-lg-7">
              <Reveal delay={120}>
                <div className="form-card">
                  <h2 className="h4 fw-bold mb-4">Send Us A Message</h2>
                  <EnquiryForm variant="contact" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;