import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, subtitle, dark = false, center = true }) {
  const d = dark ? " on-dark" : "";
  return (
    <Reveal className={`section-head mb-5 ${center ? "text-center center" : ""}`}>
      {eyebrow && <span className={`eyebrow${d}`}>{eyebrow}</span>}
      <h2 className={`section-title${d}`}>{title}</h2>
      {subtitle && <p className={`section-sub${d} mt-3`}>{subtitle}</p>}
    </Reveal>
  );
}

export default SectionHeading;