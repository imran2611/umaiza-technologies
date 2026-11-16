import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import UmaizaMeaning from "../components/common/UmaizaMeaning";
import CallToAction from "../components/home/CallToAction";
import DevelopmentProcess from "../components/home/DevelopmentProcess";
import { Check } from "lucide-react";
import { SITE } from "../utils/siteConfig";
import { intro } from "../data/homeData";
import { values, focusAreas } from "../data/siteData";

function About() {
  return (
    <>
      <PageTitle title="About Us" />
      <PageHeader
        eyebrow="About Us"
        title={`The People Behind ${SITE.name}`}
        subtitle="A software studio focused on practical, reliable and well-built business software."
      />

      {/* ---------- Our Story ---------- */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">Our Story</span>
                <h2 className="section-title">Software That Fits Your Business, Not The Other Way Around</h2>
                <p className="text-secondary mt-3">
                  {SITE.name} was started by a full-stack developer with hands-on experience building
                  HR, recruitment, payroll and API integration systems. We saw that many businesses
                  struggle with tools that do not match how they really work.
                </p>
                <p className="text-secondary">
                  So we build custom software around your process, explain every decision in simple
                  words and stay with you after launch.
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={150}>
                <div className="feature-card">
                  <h3>What We Focus On</h3>
                  <ul className="check-list mt-3">
                    {focusAreas.map((f) => (
                      <li key={f}><Check size={18} /> {f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* Story section yahan khatam hota hai */}

      {/* ---------- UMAIZA meaning (full width) ---------- */}
      <UmaizaMeaning />

      {/* ---------- Mission & Vision ---------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading eyebrow="Mission & Vision" title="Where We Are Going" />
          <div className="row g-4">
            {intro.map((item, i) => (
              <div className="col-md-4" key={item.title}>
                <Reveal delay={i * 100} className="h-100">
                  <div className="feature-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeading eyebrow="Our Values" title="How We Work With You" />
          <div className="row g-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div className="col-md-6 col-lg-3" key={v.title}>
                  <Reveal delay={i * 100} className="h-100">
                    <div className="feature-card">
                      <div className="icon-box"><Icon size={24} /></div>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <DevelopmentProcess />
      <CallToAction />
    </>
  );
}

export default About;