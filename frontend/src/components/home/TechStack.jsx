import SectionHeading from "../common/SectionHeading";
import { techStack } from "../../data/homeData";

function TechStack() {
  const items = [...techStack, ...techStack]; // duplicate for seamless loop

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title="Our Technology Stack"
          subtitle="Proven tools we use to build fast, secure and maintainable products."
        />
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((t, i) => (
            <div className="tech-chip" key={`${t.name}-${i}`}>
              <span className="tech-dot" style={{ background: t.color }}>{t.abbr}</span>
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;