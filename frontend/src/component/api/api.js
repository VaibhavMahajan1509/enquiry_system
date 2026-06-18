import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: BASE_URL,
});

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// optional helper APIs
export const getAdmissions = async () => {
  return await axios.get(`${BASE_URL}/admission/all`, {
    headers: getAuthHeaders(),
  });
};

export const getRegistrations = async () => {
  return await axios.get(`${BASE_URL}/registration/getall_registrations`, {
    headers: getAuthHeaders(),
  });
};

export default API; // 
// import axios from "axios";

// const BASE_URL = "https://enquiry-system-qsp8.onrender.com";

// const getAuthHeaders = () => {
//   const token = localStorage.getItem("token");
//   return {
//     Authorization: `Bearer ${token}`,
//   };
// };

// export const getAdmissions = async () => {
//   return await axios.get(
//     `${BASE_URL}/admissions`,
//     { headers: getAuthHeaders() }
//   );
// };

// export const getRegistrations = async () => {
//   return await axios.get(
//     `${BASE_URL}/registrations`,
//     { headers: getAuthHeaders() }
//   );
// };
