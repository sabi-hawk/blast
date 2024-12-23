import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api" });

// Request Interceptor: Attach token to requests if available
API.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error: ", error);
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global responses or errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized responses (e.g., clear user session)
      console.error("Unauthorized Access - Please log in again.");
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default API;
