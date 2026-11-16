const express = require("express");
const rateLimit = require("express-rate-limit");
const { createEnquiry } = require("../controllers/enquiryController");

const router = express.Router();

// Ek IP se 15 minute mein max 10 enquiries
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again after some time.",
  },
});

router.post("/", enquiryLimiter, createEnquiry);

module.exports = router;