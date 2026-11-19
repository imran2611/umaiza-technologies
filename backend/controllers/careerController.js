const path = require("path");
const CareerApplication = require("../models/CareerApplication");
const { sendCareerEmail } = require("../services/emailService");
const formatValidationErrors = require("../utils/formatValidationErrors");

const ALLOWED_FIELDS = ["fullName", "email", "phone", "position", "experience", "profileLink", "message"];

const SUCCESS_MESSAGE =
  "Thank you for applying! We have received your application and will contact you if a suitable role opens.";

// File ka naam safe banata hai (folder path hatata hai, ajeeb characters _ se badalta hai)
const cleanFileName = (name) =>
  path.basename(name || "resume").replace(/[^\w.\- ()]/g, "_").slice(0, 200);

// POST /api/careers
const createApplication = async (req, res) => {
  const body = req.body || {};

  // Honeypot
  if (body.website) {
    return res.status(201).json({ success: true, message: SUCCESS_MESSAGE });
  }

  const data = {};
  ALLOWED_FIELDS.forEach((key) => {
    if (typeof body[key] === "string") data[key] = body[key];
  });
  data.ipAddress = req.ip || "";

  // Resume aayi hai to uski details database ke liye taiyar karo
  let resumeFile = null;
  if (req.file) {
    resumeFile = {
      filename: cleanFileName(req.file.originalname),
      content: req.file.buffer,
      mimeType: req.file.mimetype,
      size: req.file.size,
    };
    data.resume = {
      originalName: resumeFile.filename,
      mimeType: resumeFile.mimeType,
      size: resumeFile.size,
      data: resumeFile.content,
    };
  }

  let application;
  try {
    application = await CareerApplication.create(data);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Please fix the highlighted fields.",
        errors: formatValidationErrors(err),
      });
    }
    throw err;
  }

  try {
    await sendCareerEmail(application, resumeFile);
    await CareerApplication.updateOne({ _id: application._id }, { emailSent: true });
  } catch (emailError) {
    console.error(`Application ${application._id} saved, but email failed:`, emailError.message);
  }

  return res.status(201).json({
    success: true,
    message: SUCCESS_MESSAGE,
    data: { id: application._id },
  });
};

module.exports = { createApplication };