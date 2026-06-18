import React, { useState } from "react";
import API from "./api/api";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await API.post("/auth/login", form);

      console.log("LOGIN RESPONSE:", res.data);

      setMessage(res.data.msg || "Login successful!");
      setError("");

      // SAFE TOKEN HANDLING (fix for different backend formats)
      const token = res.data.token || res.data.data?.token;

      if (token) {
        localStorage.setItem("token", token);
      } else {
        console.warn("No token received from backend");
      }

      setTimeout(() => {
        if (onClose) onClose();

        //  redirect to dashboard (not home)
        navigate("/dashboard");

      }, 1000);

    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.msg || "Error during login");
      setMessage("");
    } finally {
      setIsLoading(false);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-500 px-4">
      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 relative">
        
        <button onClick={handleClose} className="absolute top-3 right-3">
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          />

          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2">
            {isLoading ? "Logging In..." : "Login"}
          </button>

        </form>

        <div className="text-center mt-4">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <p className="text-center mt-4">
          <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import API from "../component/API"; // Axios instance
// import { Link, useNavigate } from "react-router-dom";

// const Login = ({ setUser }) => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // 1️⃣ Login request
//       const res = await API.post("/auth/login", form);

//       // Save token
//       localStorage.setItem("token", res.data.token);
//       setUser({ role: res.data.role, email: form.email });

//       // 2️⃣ Fetch user-specific data after login
//       const userDataRes = await API.get("/dashboard/mydata", {
//         headers: { Authorization: `Bearer ${res.data.token}` },
//       });

//       // Show alert with success message + data
//       alert(
//        " Login Successful!"
//       );

//       setError("");
//       navigate("/dashboard"); // redirect to dashboard
//     } catch (err) {
//       console.log(err.response);
//       setError(err.response?.data?.msg || "Error during login");
//     }
//   };
//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//       </form>

//       <div style={{ textAlign: "center", marginTop: "10px" }}>
//         <Link to="/forgot-password">Forgot Password?</Link>
//       </div>

//       <p style={{ textAlign: "center", marginTop: "10px" }}>
//         Don't have an account? <Link to="/signup">Signup</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;





