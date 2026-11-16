import Reveal from "./Reveal";

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="page-header">
      <span className="orb orb-blue"></span>
      <span className="orb orb-purple"></span>
      <div className="container position-relative">
        <Reveal>
          {eyebrow && <span className="eyebrow on-dark">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export default PageHeader;