import { Building2, Target, Eye } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import { intro } from "../../data/homeData";

const icons = [Building2, Target, Eye];

function CompanyIntro() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="About Us"
          title="A Technology Partner You Can Talk To"
          subtitle="Small team, direct communication and software that actually fits your business."
        />
        <div className="row g-4">
          {intro.map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="col-md-4" key={item.title}>
                <Reveal delay={i * 100} className="h-100">
                  <div className="feature-card">
                    <div className="icon-box"><Icon size={24} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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

export default CompanyIntro;