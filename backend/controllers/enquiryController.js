const Enquiry = require("../models/Enquiry");
const { sendEnquiryEmail } = require("../services/emailService");

// Sirf ye fields user se liye jaayenge. status, emailSent jaise fields kabhi nahi.
const ALLOWED_FIELDS = [
  "fullName", "email", "phone", "company",
  "service", "budget", "timeline", "description",
];

const SUCCESS_MESSAGE = "Thank you! Your message has been received. We will get back to you soon.";

// POST /api/enquiries
const createEnquiry = async (req, res) => {
  const body = req.body || {};

  // Honeypot: asli user ko ye field dikhta nahi. Bot ise bhar deta hai.
  if (body.website) {
    return res.status(201).json({ success: true, message: SUCCESS_MESSAGE });
  }

  // Sirf text (string) values aur sirf allowed fields
  const data = {};
  ALLOWED_FIELDS.forEach((key) => {
    if (typeof body[key] === "string") data[key] = body[key];
  });

  data.source = body.source === "quote" ? "quote" : "contact";
  data.ipAddress = req.ip || "";

  let enquiry;
  try {
    enquiry = await Enquiry.create(data);
  } catch (err) {
    if (err.name === "ValidationError") {
      const errors = {};
      Object.values(err.errors).forEach((e) => {
        errors[e.path] = e.message;
      });
      return res.status(400).json({
        success: false,
        message: "Please fix the highlighted fields.",
        errors,
      });
    }
    throw err; // baaki errors errorHandler sambhalega (500)
  }

  // ---- Email bhejna (fail hone par bhi enquiry safe hai) ----
  try {
    await sendEnquiryEmail(enquiry);
    await Enquiry.updateOne({ _id: enquiry._id }, { emailSent: true });
  } catch (emailError) {
    console.error(`Enquiry ${enquiry._id} saved, but email failed:`, emailError.message);
  }

  return res.status(201).json({
    success: true,
    message: SUCCESS_MESSAGE,
    data: { id: enquiry._id },
  });
};

module.exports = { createEnquiry };