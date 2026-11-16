import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import CallToAction from "../components/home/CallToAction";
import { industries } from "../data/siteData";

function Industries() {
  return (
    <>
      <PageTitle title="Industries" />
      <PageHeader
        eyebrow="Industries"
        title="Software For Every Kind Of Business"
        subtitle="Different industries, different workflows. We learn yours first, then build."
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="col-sm-6 col-lg-3" key={item.title}>
                  <Reveal delay={(i % 4) * 100} className="h-100">
                    <div className="feature-card">
                      <div className="icon-box"><Icon size={24} /></div>
                      <h3>{item.title}</h3>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default Industries;