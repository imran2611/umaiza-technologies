import { Send, Loader2 } from "lucide-react";
import FormField from "./FormField";
import { useForm } from "../../hooks/useForm";
import { isEmail, isPhone } from "../../utils/validators";
import { submitEnquiry } from "../../services/enquiryService";
import { services } from "../../data/homeData";

const serviceOptions = [...services.map((s) => s.title), "Other"];
const budgetOptions = [
  "Below ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Not sure yet",
];
const timelineOptions = ["As soon as possible", "Within 1 month", "1 – 3 months", "Flexible"];

const initial = {
  fullName: "", email: "", phone: "", company: "",
  service: "", budget: "", timeline: "", description: "",
  website: "", // honeypot: user ko dikhta nahi
};

function validate(v) {
  const e = {};
  if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (!isEmail(v.email)) e.email = "Please enter a valid email address.";
  if (!isPhone(v.phone)) e.phone = "Please enter a valid phone number (10 to 15 digits).";
  if (!v.service) e.service = "Please select a service.";
  if (v.description.trim().length < 20) e.description = "Please describe your project in at least 20 characters.";
  return e;
}

function EnquiryForm({ variant = "contact" }) {
  const isQuote = variant === "quote";
  const { values, errors, status, loading, handleChange, handleSubmit } = useForm(
    initial,
    validate,
    (data) => submitEnquiry({ ...data, source: variant })
  );

  return (
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
          <FormField label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} placeholder="+91 98765 43210" required />
        </div>
        <div className="col-md-6">
          <FormField label="Company Name" name="company" value={values.company} onChange={handleChange} error={errors.company} placeholder="Optional" />
        </div>
        <div className="col-md-6">
          <FormField label="Service Required" name="service" as="select" options={serviceOptions} value={values.service} onChange={handleChange} error={errors.service} required />
        </div>
        <div className="col-md-6">
          <FormField label="Project Budget" name="budget" as="select" options={budgetOptions} value={values.budget} onChange={handleChange} error={errors.budget} />
        </div>
        {isQuote && (
          <div className="col-12">
            <FormField label="Expected Timeline" name="timeline" as="select" options={timelineOptions} value={values.timeline} onChange={handleChange} error={errors.timeline} />
          </div>
        )}
        <div className="col-12">
          <FormField label="Project Description" name="description" as="textarea" value={values.description} onChange={handleChange} error={errors.description} placeholder="Tell us what you want to build, who will use it and any must-have features." required />
        </div>
      </div>

      {status.message && (
        <div className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
          {status.message}
        </div>
      )}

      <button type="submit" className="btn btn-brand d-inline-flex align-items-center gap-2" disabled={loading}>
        {loading ? <><Loader2 size={18} className="spin" /> Sending...</> : <><Send size={18} /> {isQuote ? "Request Free Quote" : "Send Message"}</>}
      </button>
    </form>
  );
}

export default EnquiryForm;