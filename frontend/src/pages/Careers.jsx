import { Send, Loader2 } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import FormField from "../components/common/FormField";
import { useForm } from "../hooks/useForm";
import { isEmail, isPhone, isUrl, getResumeError } from "../utils/validators";
import { submitCareerApplication } from "../services/enquiryService";
import { careerPerks, careerRoles, experienceLevels } from "../data/siteData";

const initial = { fullName: "", email: "", phone: "", position: "", experience: "", profileLink: "", message: "", website: "", resume: null };
function validate(v) {
  const e = {};
  if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!isEmail(v.email)) e.email = "Please enter a valid email address.";
  if (!isPhone(v.phone)) e.phone = "Please enter a valid phone number (10 to 15 digits).";
  if (!v.position) e.position = "Please select a role.";
  if (!v.experience) e.experience = "Please select your experience.";
  if (v.profileLink.trim() && !isUrl(v.profileLink)) e.profileLink = "Please enter a valid link starting with https://";
  const resumeError = getResumeError(v.resume);
  if (resumeError) e.resume = resumeError;
  if (v.message.trim().length < 20) e.message = "Please write at least 20 characters about yourself.";
  return e;
}

function Careers() {
  const { values, errors, status, loading, handleChange, handleSubmit } = useForm(
    initial,
    validate,
    submitCareerApplication
  );

  return (
    <>
      <PageTitle title="Careers" />
      <PageHeader
        eyebrow="Careers"
        title="Build Your Career With Us"
        subtitle="We are a growing team that values learning, ownership and honest work."
      />

      <section className="section-padding">
        <div className="container">
          <SectionHeading eyebrow="Why Join Us" title="A Place To Grow" />
          <div className="row g-4">
            {careerPerks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div className="col-md-6 col-lg-3" key={p.title}>
                  <Reveal delay={i * 100} className="h-100">
                    <div className="feature-card">
                      <div className="icon-box"><Icon size={24} /></div>
                      <h3>{p.title}</h3>
                      <p className="mb-0">{p.desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <SectionHeading
                eyebrow="Apply"
                title="Send Us Your Application"
                subtitle="There are no open positions listed right now, but we are always happy to meet talented people. Share your details and we will contact you when a suitable role opens."
              />
              <div className="form-card">
                <form onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <FormField label="Full Name" name="fullName" value={values.fullName} onChange={handleChange} error={errors.fullName} required />
                    </div>
                    <div className="col-md-6">
                      <FormField label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
                    </div>
                    <div className="col-md-6">
                      <FormField label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} required />
                    </div>
                    <div className="col-md-6">
                      <FormField label="Role You Are Interested In" name="position" as="select" options={careerRoles} value={values.position} onChange={handleChange} error={errors.position} required />
                    </div>
                    <div className="col-md-6">
                      <FormField label="Experience" name="experience" as="select" options={experienceLevels} value={values.experience} onChange={handleChange} error={errors.experience} required />
                    </div>
                    <div className="col-md-6">
                      <FormField label="Resume / LinkedIn / GitHub Link" name="profileLink" type="url" value={values.profileLink} onChange={handleChange} error={errors.profileLink} placeholder="https://" />
                    </div>
                    <div className="col-12">
                      <FormField
                        label="Upload Resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        value={values.resume}
                        onChange={handleChange}
                        error={errors.resume}
                        hint="Optional. PDF, DOC or DOCX, up to 5 MB."
                      />
                    </div>
                    <div className="col-12">
                      <FormField label="About You" name="message" as="textarea" rows={4} value={values.message} onChange={handleChange} error={errors.message} placeholder="Tell us about your skills and what you want to work on." required />
                    </div>
                  </div>

                  {status.message && (
                    <div className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                      {status.message}
                    </div>
                  )}

                  <button type="submit" className="btn btn-brand d-inline-flex align-items-center gap-2" disabled={loading}>
                    {loading ? <><Loader2 size={18} className="spin" /> Submitting...</> : <><Send size={18} /> Submit Application</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;