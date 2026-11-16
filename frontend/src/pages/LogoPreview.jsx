import Logo from "../components/common/Logo";

const variants = ["spark", "hex", "pixel", "shield", "bracket", "layers", "orbit", "monogram", "ut"];

function LogoPreview() {
  return (
    <section className="section-padding" style={{ paddingTop: "calc(var(--navbar-height) + 3rem)" }}>
      <div className="container">
        <h1 className="mb-4">Logo Preview</h1>
        <div className="row g-4">
          {variants.map((v) => (
            <div className="col-6 col-md-3" key={v}>
              <div className="feature-card align-items-center text-center">
                <div style={{ width: 96, height: 96 }}>
                  <Logo variant={v} />
                </div>
                <h3 className="h6 mt-3 mb-0">{v}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoPreview;