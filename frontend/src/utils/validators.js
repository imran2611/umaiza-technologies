export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v) => /^\+?[0-9\s-]{10,15}$/.test(v.trim());
export const isUrl = (v) => {
  try {
    const u = new URL(v.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

// ---------- Resume file ----------
export const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5 MB (backend ki limit ke barabar)
const RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

// Sahi file ya koi file nahi -> "" (error nahi). Galat file -> error message.
export const getResumeError = (file) => {
  if (!file) return "";
  const name = file.name.toLowerCase();

  if (!RESUME_EXTENSIONS.some((ext) => name.endsWith(ext))) {
    return "Please upload your resume as a PDF, DOC or DOCX file.";
  }
  if (file.size === 0) {
    return "This file is empty. Please choose another file.";
  }
  if (file.size > MAX_RESUME_SIZE) {
    return "Resume must be 5 MB or smaller.";
  }
  return "";
};