import PageTitle from "./PageTitle";
import PageHeader from "./PageHeader";

function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <PageTitle title={title} />
      <PageHeader eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="section-padding">
        <div className="container legal">
          <p className="lead">{intro}</p>
          {sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LegalPage;