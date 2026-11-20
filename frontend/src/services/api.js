import axios from "axios";

// Content-Type yahan jaan-boojhkar set nahi kiya.
// Axios khud sahi header lagata hai:
//   normal object  -> application/json
//   FormData (file) -> multipart/form-data (boundary ke saath)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

export default api;