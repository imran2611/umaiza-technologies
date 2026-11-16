require("dotenv").config();
const mongoose = require("mongoose");
const Enquiry = require("./models/Enquiry");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log("Connected to:", mongoose.connection.name);

    // Test 1: sahi data save hona chahiye
    const doc = await Enquiry.create({
      fullName: "Test User (delete me)",
      email: "TEST@Example.com",
      phone: "+91 98765 43210",
      service: "HRMS Development",
      description: "This is a test enquiry to check the database model.",
    });
    console.log("Saved with id:", doc._id.toString());
    console.log("Email lowercase hua?", doc.email);
    console.log("Default status:", doc.status);

    // Test 2: galat data reject hona chahiye
    try {
      await Enquiry.create({ fullName: "A", email: "bad-email", phone: "123", service: "", description: "short" });
    } catch (err) {
      console.log("Validation kaam kar rahi hai. Galat fields:", Object.keys(err.errors).join(", "));
    }
  } catch (err) {
    console.error("Test failed:", err.message);
  } finally {
    await mongoose.disconnect();
  }
})();