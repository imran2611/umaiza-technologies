const express = require("express");
const rateLimit = require("express-rate-limit");
const { createApplication } = require("../controllers/careerController");

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

router.post("/", careerLimiter, createApplication);

module.exports = router;