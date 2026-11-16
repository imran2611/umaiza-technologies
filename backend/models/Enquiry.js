const mongoose = require("mongoose");
const { ENQUIRY_SOURCES, ENQUIRY_STATUSES } = require("../utils/constants");

const enquirySchema = new mongoose.Schema(
  {
    // ---- Form se aane wale fields ----
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [100, "Full name must be at most 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      maxlength: [150, "Email is too long"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\+?[0-9\s-]{10,15}$/, "Please enter a valid phone number"],
    },
    company: { type: String, trim: true, maxlength: 150, default: "" },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
      maxlength: 100,
    },
    budget: { type: String, trim: true, maxlength: 60, default: "" },
    timeline: { type: String, trim: true, maxlength: 60, default: "" },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
      minlength: [20, "Description must be at least 20 characters"],
      maxlength: [2000, "Description must be at most 2000 characters"],
    },

    // ---- Backend ke fields ----
    source: { type: String, enum: ENQUIRY_SOURCES, default: "contact" },
    status: { type: String, enum: ENQUIRY_STATUSES, default: "new" },
    adminNotes: { type: String, trim: true, maxlength: 2000, default: "" },
    emailSent: { type: Boolean, default: false },
    ipAddress: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

// Admin panel mein latest enquiries aur status ke hisaab se jaldi dikhane ke liye
enquirySchema.index({ createdAt: -1 });
enquirySchema.index({ status: 1, createdAt: -1 });

// Teesra argument collection ka naam fix karta hai: "enquiries"
module.exports = mongoose.model("Enquiry", enquirySchema, "enquiries");