const multer = require("multer");
const path = require("path");

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5 MB

// Sirf ye 3 formats allowed hain
const ALLOWED_TYPES = {
  ".pdf": ["application/pdf"],
  ".doc": ["application/msword"],
  ".docx": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
};

const TYPE_MESSAGE = "Please upload your resume as a PDF, DOC or DOCX file.";
const SIZE_MESSAGE = "Resume must be 5 MB or smaller.";

// File ke shuru ke bytes (signature) se asli type pata chalta hai
const startsWith = (buffer, bytes) => bytes.every((byte, i) => buffer[i] === byte);

const hasValidSignature = (extension, buffer) => {
  if (!buffer || buffer.length < 4) return false;
  if (extension === ".pdf") return startsWith(buffer, [0x25, 0x50, 0x44, 0x46]); // %PDF
  if (extension === ".docx") return startsWith(buffer, [0x50, 0x4b, 0x03, 0x04]); // ZIP (PK)
  if (extension === ".doc") return startsWith(buffer, [0xd0, 0xcf, 0x11, 0xe0]); // old Office
  return false;
};

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();
  const allowedMimes = ALLOWED_TYPES[extension];

  if (!allowedMimes || !allowedMimes.includes(file.mimetype)) {
    const error = new Error(TYPE_MESSAGE);
    error.isResumeError = true;
    return cb(error);
  }

  cb(null, true);
};

// memoryStorage: file RAM mein buffer ban kar aati hai (disk par save nahi hoti)
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: { fileSize: MAX_RESUME_SIZE, files: 1 },
}).single("resume");

const rejectResume = (res, message) =>
  res.status(400).json({
    success: false,
    message,
    errors: { resume: message },
  });

// Route mein ye middleware lagega: handleResumeUpload
const handleResumeUpload = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") return rejectResume(res, SIZE_MESSAGE);
        return rejectResume(res, "Please upload only one file in the 'resume' field.");
      }
      if (err.isResumeError) return rejectResume(res, err.message);
      return next(err);
    }

    // File aayi hai to uske bytes check karo
    if (req.file) {
      const extension = path.extname(req.file.originalname).toLowerCase();
      if (!hasValidSignature(extension, req.file.buffer)) {
        return rejectResume(res, TYPE_MESSAGE);
      }
    }

    next();
  });
};

module.exports = { handleResumeUpload, MAX_RESUME_SIZE };