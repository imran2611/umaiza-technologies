const CareerApplication = require("../models/CareerApplication");
const { sendCareerEmail } = require("../services/emailService");
const formatValidationErrors = require("../utils/formatValidationErrors");

const ALLOWED_FIELDS = ["fullName", "email", "phone", "position", "experience", "profileLink", "message"];

const SUCCESS_MESSAGE =
  "Thank you for applying! We have received your application and will contact you if a suitable role opens.";

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
    await sendCareerEmail(application);
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