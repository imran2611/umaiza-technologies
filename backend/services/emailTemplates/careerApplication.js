// const escapeHtml = require("../utils/escapeHtml");

const escapeHtml = require("../../utils/escapeHtml");

// Logo ka URL: deploy ke baad frontend\public\brand\email-logo.png yahan se milega
const SITE_URL = (process.env.SITE_URL || "https://umaiza-technologies.pages.dev").replace(/\/$/, "");

const COLORS = {
  navy: "#101820",
  accent: "#5a5af1",
  accentSoft: "#eceefe",
  accentText: "#3b3fc4",
  text: "#172033",
  muted: "#5b6475",
  line: "#e6e9f0",
  panel: "#f6f8fc",
  page: "#eef1f7",
  green: "#eaf3de",
  greenText: "#27500a",
};
const FONT = "Arial, Helvetica, sans-serif";

// ---------- Chhote helper functions ----------
const esc = (value) =>
  escapeHtml(value === undefined || value === null || value === "" ? "-" : String(value));

const escMultiline = (value) => esc(value).replace(/\r?\n/g, "<br>");

const initials = (name) => {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  return (parts.slice(0, 2).map((p) => p[0]).join("") || "?").toUpperCase();
};

const formatSize = (bytes) => {
  if (!bytes) return "";
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
};

const fileExt = (name) => {
  const match = /\.([a-z0-9]+)$/i.exec(name || "");
  return match ? match[1].toUpperCase() : "FILE";
};

const phoneHref = (phone) => String(phone || "").replace(/[^\d+]/g, "");

const chip = (text, bg, color) =>
  `<span style="display:inline-block;background:${bg};color:${color};font-size:12px;padding:4px 10px;border-radius:12px;margin:0 6px 6px 0;">${esc(text)}</span>`;

const tile = (label, valueHtml, side) => `
  <td width="50%" valign="top" style="padding:${side === "left" ? "0 6px 12px 0" : "0 0 12px 6px"};">
    <div style="border:1px solid ${COLORS.line};border-radius:8px;padding:10px 12px;">
      <div style="font-size:11px;color:${COLORS.muted};">${label}</div>
      <div style="font-size:14px;color:${COLORS.text};padding-top:2px;word-break:break-all;">${valueHtml}</div>
    </div>
  </td>`;

const section = (label, innerHtml) => `
  <tr>
    <td style="padding:4px 28px 16px;">
      <div style="font-size:11px;color:${COLORS.muted};padding-bottom:6px;">${label}</div>
      ${innerHtml}
    </td>
  </tr>`;

// ---------- Career application email (Design J) ----------
const careerEmailHtml = (application, { resumeFile, logoUrl } = {}) => {
  const logo = escapeHtml(logoUrl || `${SITE_URL}/brand/email-logo.png`);
  
  const received = new Date(application.createdAt || Date.now()).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const name = String(application.fullName || "").replace(/[\r\n]+/g, " ");
  const phone = phoneHref(application.phone);
  const link = /^https?:\/\//i.test(application.profileLink || "") ? application.profileLink : "";
  const replySubject = encodeURIComponent("Re: Your application to Umaiza Technologies");

  const profileValue = link
    ? `<a href="${escapeHtml(link)}" style="color:${COLORS.accent};text-decoration:none;">${esc(link)}</a>`
    : "-";

  const resumeBlock = resumeFile
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${COLORS.line};border-radius:8px;">
        <tr>
          <td width="48" style="padding:10px 0 10px 12px;">
            <div style="width:36px;height:36px;line-height:36px;border-radius:8px;background:${COLORS.accentSoft};color:${COLORS.accentText};font-size:11px;font-weight:bold;text-align:center;">${esc(fileExt(resumeFile.filename))}</div>
          </td>
          <td style="padding:10px 12px;">
            <div style="font-size:14px;color:${COLORS.text};">${esc(resumeFile.filename)}</div>
            <div style="font-size:11px;color:${COLORS.muted};">${formatSize(resumeFile.size) ? esc(formatSize(resumeFile.size)) : ""}</div>
          </td>
          <td align="right" style="padding:10px 12px;">
            <span style="display:inline-block;background:${COLORS.green};color:${COLORS.greenText};font-size:11px;padding:3px 10px;border-radius:12px;">Attached</span>
          </td>
        </tr>
      </table>`
    : `<div style="border:1px dashed ${COLORS.line};border-radius:8px;padding:12px;font-size:14px;color:${COLORS.muted};">No resume uploaded</div>`;

  const callButton = phone
    ? `<td width="10"></td>
       <td style="border:1px solid ${COLORS.accent};border-radius:8px;">
         <a href="tel:${escapeHtml(phone)}" style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:bold;color:${COLORS.accent};text-decoration:none;">Call applicant</a>
       </td>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Career Application</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.page};font-family:${FONT};color:${COLORS.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(name)} applied for ${esc(application.position)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.page};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${COLORS.line};border-radius:12px;overflow:hidden;">

          <tr>
            <td style="background:${COLORS.navy};padding:18px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <img src="${logo}" alt="Umaiza Technologies" width="200" height="59" style="display:block;border:0;height:auto;color:#ffffff;font-size:16px;">
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;background:#26305f;color:#c3c8ff;font-size:11px;padding:4px 10px;border-radius:12px;">New application</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 12px;">
              <div style="font-size:22px;font-weight:bold;color:${COLORS.text};">New Career Application</div>
              <div style="font-size:12px;color:${COLORS.muted};padding-top:4px;">Received on ${esc(received)} (IST)</div>
            </td>
          </tr>

          <tr>
            <td style="padding:4px 28px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.panel};border:1px solid ${COLORS.line};border-radius:10px;">
                <tr>
                  <td width="60" valign="top" style="padding:16px 0 16px 16px;">
                    <div style="width:44px;height:44px;line-height:44px;border-radius:22px;background:${COLORS.accentSoft};color:${COLORS.accentText};font-size:15px;font-weight:bold;text-align:center;">${esc(initials(name))}</div>
                  </td>
                  <td valign="top" style="padding:16px;">
                    <div style="font-size:16px;font-weight:bold;color:${COLORS.text};">${esc(name)}</div>
                    <div style="font-size:13px;padding:2px 0 8px;"><a href="mailto:${escapeHtml(application.email || "")}" style="color:${COLORS.accent};text-decoration:none;">${esc(application.email)}</a></div>
                    ${chip(application.position, COLORS.accentSoft, COLORS.accentText)}${chip(application.experience, COLORS.green, COLORS.greenText)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  ${tile("Phone", esc(application.phone), "left")}
                  ${tile("Profile link", profileValue, "right")}
                </tr>
              </table>
            </td>
          </tr>

          ${section(
            "About the applicant",
            `<div style="border-left:3px solid ${COLORS.accent};background:${COLORS.panel};padding:12px 14px;font-size:14px;line-height:1.7;color:${COLORS.text};">${escMultiline(application.message)}</div>`
          )}

          ${section("Resume", resumeBlock)}

          <tr>
            <td style="padding:8px 28px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="${COLORS.accent}" style="border-radius:8px;">
                    <a href="mailto:${escapeHtml(application.email || "")}?subject=${replySubject}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">Reply to applicant</a>
                  </td>
                  ${callButton}
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="background:${COLORS.panel};border-top:1px solid ${COLORS.line};padding:20px 28px;">
              <div style="font-size:14px;font-weight:bold;color:${COLORS.text};">Umaiza Technologies</div>
              <div style="font-size:12px;color:${COLORS.muted};padding-top:2px;">Building Digital. Empowering Business.</div>
              <div style="font-size:12px;padding-top:6px;"><a href="${SITE_URL}" style="color:${COLORS.accent};text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a></div>
              <div style="font-size:11px;color:#8b95a7;padding-top:10px;">You received this email because someone applied on the Careers page.</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

module.exports = { careerEmailHtml };