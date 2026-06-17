import React, { useState } from "react";
import API from "../component/API";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ onClose }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", form);
      setMessage(res.data.msg);
      setError("");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.msg || "Error during signup");
      setMessage("");
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-500 px-4 px-4">
      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative">
        
        {/* Close button - Top Right INSIDE the form box */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close signup"
        >
          <svg 
            className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        {message && (
          <p className="text-green-600 text-sm text-center mb-2">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Signup
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import API from "../component/API";
// // import "../styles/auth.css";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/signup", form);
//       setMessage(res.data.msg);
//       setError("");
//       setForm({ name: "", email: "", password: "" });
//     } catch (err) {
//       setError(err.response?.data?.msg || "Error during signup");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="singup-mainbody" style={{ background: "linear-gradient(135deg, #2563eb, #1e3a8a)" }}>

   
//     <div className="auth-container">
//       <h2>Signup</h2>
//       {error && <div className="error">{error}</div>}
//       {message && <div className="message">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Signup</button>
//       </form>
//       <p style={{ textAlign: "center", marginTop: "10px" }}>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//     </div>
//   );
// };

// export default Signup;

