const nodemailer = require("nodemailer");
const escapeHtml = require("../utils/escapeHtml");

let transporter;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }
  return transporter;
};

const row = (label, value) => `
  <tr>
    <td style="padding:10px 12px;border:1px solid #e6e9f0;background:#f6f8fc;font-weight:600;width:170px;">${label}</td>
    <td style="padding:10px 12px;border:1px solid #e6e9f0;">${escapeHtml(value || "-").replace(/\n/g, "<br>")}</td>
  </tr>`;

const sendEnquiryEmail = async (enquiry) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER or EMAIL_PASS is missing in backend/.env");
  }

  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const isQuote = enquiry.source === "quote";
  const label = isQuote ? "Quote Request" : "Contact Enquiry";
  const safeName = enquiry.fullName.replace(/[\r\n]+/g, " ");
  // Inbox mein sender ka naam client ka dikhega
  const displayName = `${safeName.replace(/["<>]/g, "")} (via UMAIZA Website)`;
  const received = new Date(enquiry.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

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
  ]
    .filter(Boolean)
    .join("\n");

  await getTransporter().sendMail({
    from: `"${displayName}" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: `"${safeName.replace(/"/g, "")}" <${enquiry.email}>`,
    subject: `New ${label} from ${safeName}`,
    text,
    html,
  });
};

const sendCareerEmail = async (application) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL_USER or EMAIL_PASS is missing in backend/.env");
  }

  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const safeName = application.fullName.replace(/[\r\n]+/g, " ");
  const displayName = `${safeName.replace(/["<>]/g, "")} (Career Application)`;
  const received = new Date(application.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033;">
      <h2 style="margin:0 0 4px;color:#315efb;">New Career Application</h2>
      <p style="margin:0 0 16px;color:#5b6475;">Received on ${escapeHtml(received)} (IST)</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        ${row("Name", application.fullName)}
        ${row("Email", application.email)}
        ${row("Phone", application.phone)}
        ${row("Role Applied", application.position)}
        ${row("Experience", application.experience)}
        ${row("Profile Link", application.profileLink)}
        ${row("About", application.message)}
      </table>
      <p style="margin-top:16px;color:#5b6475;font-size:13px;">
        Tip: click Reply to answer ${escapeHtml(safeName)} directly.
      </p>
    </div>`;

  const text = [
    "New Career Application",
    `Received: ${received} (IST)`,
    `Name: ${application.fullName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone}`,
    `Role: ${application.position}`,
    `Experience: ${application.experience}`,
    `Profile link: ${application.profileLink || "-"}`,
    `About: ${application.message}`,
  ].join("\n");

  await getTransporter().sendMail({
    from: `"${displayName}" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: `"${safeName.replace(/"/g, "")}" <${application.email}>`,
    subject: `New Career Application from ${safeName}`,
    text,
    html,
  });
};


module.exports = { sendEnquiryEmail, sendCareerEmail };