const mongoose = require("mongoose");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectDB = async (retries = 5) => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing. Add it to backend/.env");
    process.exit(1);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log(`MongoDB connected: ${conn.connection.host} / ${conn.connection.name}`);
      return;
    } catch (error) {
      console.error(`MongoDB connection error (attempt ${attempt}/${retries}): ${error.message}`);
      if (attempt < retries) {
        console.log("Retrying in 5 seconds...");
        await wait(5000);
      }
    }
  }

  console.error("Could not connect. Check Atlas Network Access, password and internet.");
  process.exit(1);
};

module.exports = connectDB;