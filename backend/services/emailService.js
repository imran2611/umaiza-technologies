const { Resend } = require("resend");
const {escapeHtml} = require("../utils/escapeHtml");
const { careerEmailHtml } = require("./emailTemplates");

let resend;

const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing");
  }

  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }

  return resend;
};

const row = (label, value) => `
  <tr>
    <td style="padding:10px 12px;border:1px solid #e6e9f0;background:#f6f8fc;font-weight:600;width:170px;">${label}</td>
    <td style="padding:10px 12px;border:1px solid #e6e9f0;">${escapeHtml(value || "-").replace(/\n/g, "<br>")}</td>
  </tr>`;

const sendEmail = async ({ subject, html, text, replyTo, attachments }) => {
  const to = process.env.EMAIL_TO;

  if (!to) {
    throw new Error("EMAIL_TO is missing");
  }

  const { data, error } = await getResend().emails.send({
    from: process.env.EMAIL_FROM || "UMAIZA Technologies <onboarding@resend.dev>",
    to: [to],
    replyTo,
    subject,
    html,
    text,
    // attachments sirf tab jaayenge jab file ho
    ...(attachments && attachments.length ? { attachments } : {}),
  });

  if (error) {
    throw new Error(error.message || "Resend email failed");
  }

  return data;
};

const sendEnquiryEmail = async (enquiry) => {
  const isQuote = enquiry.source === "quote";
  const label = isQuote ? "Quote Request" : "Contact Enquiry";

  const safeName = enquiry.fullName.replace(/[\r\n]+/g, " ");
  const received = new Date(enquiry.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033;">
      <h2 style="margin:0 0 4px;color:#315efb;">New ${label}</h2>
      <p style="margin:0 0 16px;color:#5b6475;">Received on ${escapeHtml(received)} (IST)</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        ${row("Name", enquiry.fullName)}
        ${row("Email", enquiry.email)}
        ${row("Phone", enquiry.phone)}
        ${row("Company", enquiry.company)}
        ${row("Service Required", enquiry.service)}
        ${row("Budget", enquiry.budget)}
        ${isQuote ? row("Timeline", enquiry.timeline) : ""}
        ${row("Project Description", enquiry.description)}
        ${row("Source", isQuote ? "Get a Quote page" : "Contact Us page")}
      </table>
      <p style="margin-top:16px;color:#5b6475;font-size:13px;">
        Tip: just click Reply to answer ${escapeHtml(safeName)} directly.
      </p>
    </div>`;

  const text = [
    `New ${label}`,
    `Received: ${received} (IST)`,
    `Name: ${enquiry.fullName}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Company: ${enquiry.company || "-"}`,
    `Service: ${enquiry.service}`,
    `Budget: ${enquiry.budget || "-"}`,
    isQuote ? `Timeline: ${enquiry.timeline || "-"}` : "",
    `Description: ${enquiry.description}`,
  ].filter(Boolean).join("\n");

  await sendEmail({
    subject: `New ${label} from ${safeName}`,
    html,
    text,
    replyTo: enquiry.email,
  });
};

// resumeFile = { filename, content (Buffer), mimeType, size } ya null
const sendCareerEmail = async (application, resumeFile) => {
  const safeName = application.fullName.replace(/[\r\n]+/g, " ");
  const received = new Date(application.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  const resumeLabel = resumeFile ? `${resumeFile.filename} (attached)` : "Not uploaded";

  // Design ab emailTemplates/careerApplication.js se aata hai
  const html = careerEmailHtml(application, { resumeFile });

  // Plain text version (jin email apps mein HTML nahi khulta, unke liye)
  const text = [
    "New Career Application",
    `Received: ${received} (IST)`,
    `Name: ${application.fullName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone}`,
    `Role: ${application.position}`,
    `Experience: ${application.experience}`,
    `Profile link: ${application.profileLink || "-"}`,
    `Resume: ${resumeLabel}`,
    `About: ${application.message}`,
  ].join("\n");

  await sendEmail({
    subject: `New Career Application from ${safeName}`,
    html,
    text,
    replyTo: application.email,
    attachments: resumeFile
      ? [{ filename: resumeFile.filename, content: resumeFile.content }]
      : undefined,
  });
};

module.exports = { sendEnquiryEmail, sendCareerEmail };