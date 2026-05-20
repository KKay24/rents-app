import axios from "axios";

// For Android emulator, localhost is 10.0.2.2. For iOS, it's 127.0.0.1.
// Usually better to use the machine's local IP address if testing on physical devices.
const API_BASE_URL = "http://10.0.2.2:5001/api"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const propertyService = {
  getAll: (params) => api.get("/properties", { params }),
  getFeatured: () => api.get("/properties/featured"),
  getRecent: () => api.get("/properties/recent"),
  getById: (id) => api.get(`/properties/${id}`),
};

export const contactService = {
  submitContact: (data) => api.post("/contact", data),
  submitInquiry: (data) => api.post("/contact/inquiry", data),
};

export default api;
