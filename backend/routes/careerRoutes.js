const express = require("express");
const rateLimit = require("express-rate-limit");
const { createApplication } = require("../controllers/careerController");
const { handleResumeUpload } = require("../middleware/uploadMiddleware");

const router = express.Router();

// Ek IP se ek ghante mein max 5 applications
const careerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many applications from this connection. Please try again later.",
  },
});

// Order important hai: pehle limiter, phir resume upload, phir controller
router.post("/", careerLimiter, handleResumeUpload, createApplication);

module.exports = router;