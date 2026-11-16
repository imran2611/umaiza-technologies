require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const enquiryRoutes = require("./routes/enquiryRoutes");
const careerRoutes = require("./routes/careerRoutes");

const app = express();

// Live hosting (Render, Railway etc.) proxy ke peeche chalta hai.
// TRUST_PROXY=1 set karoge tabhi rate limit ko user ka asli IP milega.
if (process.env.TRUST_PROXY) {
  app.set("trust proxy", Number(process.env.TRUST_PROXY));
}

// CLIENT_URL mein comma se alag karke kai URLs de sakte ho
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// ---------- Middleware ----------
app.use(helmet());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json({ limit: "10kb" }));
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.json({ success: true, message: "Umaiza Technologies API. Try /api/health" });
});

app.get("/api/health", (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  res.json({
    success: true,
    message: "Umaiza Technologies API is running",
    database: dbConnected ? "connected" : "not connected",
    time: new Date().toISOString(),
  });
});

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/careers", careerRoutes);

// ---------- Errors (hamesha sabse neeche) ----------
app.use(notFound);
app.use(errorHandler);

// ---------- Start ----------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} (${process.env.NODE_ENV})`);
  });
});