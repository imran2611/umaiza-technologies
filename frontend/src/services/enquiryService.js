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

async function post(path, data) {
  try {
    const res = await api.post(path, data);
    return res.data.message;
  } catch (err) {
    throw toFormError(err);
  }
}

export const submitEnquiry = (data) => post("/enquiries", data);
export const submitCareerApplication = (data) => post("/careers", data);