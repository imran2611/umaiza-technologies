import api from "./api";

function toFormError(err) {
  // Backend ne jawab diya (400, 429, 500 etc.)
  if (err.response) {
    const { message, errors } = err.response.data || {};
    const error = new Error(message || "We could not send your message. Please try again.");
    if (errors) error.fieldErrors = errors;
    return error;
  }
  // Backend tak pahunch hi nahi paaya
  return new Error("Cannot reach the server. Please check your internet connection and try again.");
}

async function post(path, data, config) {
  try {
    const res = await api.post(path, data, config);
    return res.data.message;
  } catch (err) {
    throw toFormError(err);
  }
}

export const submitEnquiry = (data) => post("/enquiries", data);

// Career form: text fields + optional resume file ko FormData mein bhejte hain
export const submitCareerApplication = (values) => {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    if (key === "resume") return; // file alag se neeche jaati hai
    formData.append(key, value ?? "");
  });

  if (values.resume) {
    formData.append("resume", values.resume);
  }

  // File upload ke liye thoda zyada time (Render ka free server kabhi der se jaagta hai)
  return post("/careers", formData, { timeout: 60000 });
};