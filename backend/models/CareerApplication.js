const mongoose = require("mongoose");
const { APPLICATION_STATUSES } = require("../utils/constants");

const careerApplicationSchema = new mongoose.Schema(
  {
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
    position: { type: String, required: [true, "Please select a role"], trim: true, maxlength: 100 },
    experience: { type: String, required: [true, "Please select your experience"], trim: true, maxlength: 60 },
    profileLink: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
      match: [/^https?:\/\/[^\s]+$/i, "Please enter a valid link starting with https://"],
    },
    message: {
      type: String,
      required: [true, "Please tell us about yourself"],
      trim: true,
      minlength: [20, "Please write at least 20 characters"],
      maxlength: [2000, "Message must be at most 2000 characters"],
    },

    // Resume (optional). File MongoDB mein save hoti hai, isliye Render restart par bhi bachi rehti hai.
    resume: {
      originalName: { type: String, trim: true, maxlength: 255 },
      mimeType: { type: String, trim: true, maxlength: 150 },
      size: { type: Number },
      // select:false = normal query mein badi file load nahi hogi
      data: { type: Buffer, select: false },
    },

    // Backend ke fields
    status: { type: String, enum: APPLICATION_STATUSES, default: "new" },
    adminNotes: { type: String, trim: true, maxlength: 2000, default: "" },
    emailSent: { type: Boolean, default: false },
    ipAddress: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

careerApplicationSchema.index({ createdAt: -1 });
careerApplicationSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("CareerApplication", careerApplicationSchema, "careerapplications");