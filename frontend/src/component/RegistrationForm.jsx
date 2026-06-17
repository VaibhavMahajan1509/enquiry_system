import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sideImage from "./images/registerside.jpg";

const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
    marks: "50 out of 100",
    registrationFees: "500",
    paymentMethod: "cash",
    transactionId: "",
    examDate: "",
  });

  const [loading, setLoading] = useState(false);

  const courses = [
    "Web Development", "MongoDB", "MERN Stack", "Full Stack", "Video Editing",
    "Digital Marketing", "Node.js", "Frontend Development", "Backend Development",
    "AI", "C & C++", "SQL",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleExamDate = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate.getDay() !== 5) {
      toast.warning("Please select a Friday for the exam date.");
      setForm({ ...form, examDate: "" });
    } else {
      setForm({ ...form, examDate: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }

    if (form.paymentMethod === "online" && !form.transactionId.trim()) {
      toast.error("Transaction ID is required for online payment");
      return;
    }

    if (!form.examDate) {
      toast.error("Please select exam date (Friday only)");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/registration/register", form);

      toast.success("Registration Successful!");

      setForm({
        name: "",
        email: "",
        course: "",
        mobile: "",
        marks: "50 out of 100",
        registrationFees: "500",
        paymentMethod: "cash",
        transactionId: "",
        examDate: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        {/* Image */}
        <div className="hidden lg:block lg:w-5/12">
          <img
            src={sideImage}
            alt="Registration"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-7/12 p-5 sm:p-6 md:p-10">

          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Registration Form
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details to complete registration.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Personal Information */}
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className={inputClass}
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    placeholder="10-digit mobile number"
                    className={inputClass}
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Course
                  </label>

                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Choose a course</option>

                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </section>

            {/* Exam Information */}
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Exam Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Passing Marks
                  </label>

                  <input
                    value={form.marks}
                    disabled
                    className={`${inputClass} bg-gray-100 text-gray-600`}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Exam Date
                  </label>

                  <input
                    type="date"
                    name="examDate"
                    value={form.examDate}
                    onChange={handleExamDate}
                    className={inputClass}
                    required
                  />

                  <p className="mt-1 text-xs text-gray-500">
                    Only Fridays can be selected.
                  </p>
                </div>

              </div>
            </section>

            {/* Payment Details */}
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Registration Fees
                  </label>

                  <input
                    value={`₹${form.registrationFees}`}
                    disabled
                    className={`${inputClass} bg-gray-100 text-gray-600`}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Payment Method
                  </label>

                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                  </select>
                </div>

              </div>

              {form.paymentMethod === "online" && (
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Transaction ID
                  </label>

                  <input
                    type="text"
                    name="transactionId"
                    value={form.transactionId}
                    onChange={handleChange}
                    placeholder="Enter transaction ID"
                    className={inputClass}
                  />
                </div>
              )}

            </section>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                disabled:bg-blue-400
                disabled:cursor-not-allowed
                text-white
                font-semibold
                py-3.5
                rounded-xl
                transition
                duration-200
              "
            >
              {loading
                ? "Submitting Registration..."
                : "Submit Registration"}
            </button>

          </form>

        </div>

      </div>
    </div>

    <ToastContainer
      position="top-center"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="colored"
    />
  </div>
);
};

export default RegistrationForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import sideImage from "./images/registerside.jpg";

// const RegistrationForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     course: "",
//     mobile: "",
//     marks: "50 out of 100",
//     registrationFees: "500",
//     paymentMethod: "cash",
//     transactionId: "",
//     examDate: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const courses = [
//     "Web Development",
//     "MongoDB",
//     "MERN Stack",
//     "Full Stack",
//     "Video Editing",
//     "Digital Marketing",
//     "Node.js",
//     "Frontend Development",
//     "Backend Development",
//     "AI",
//     "C & C++",
//     "SQL",
//   ];

//   // Handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Only allow Friday selection
//   const handleExamDate = (e) => {
//     const selectedDate = new Date(e.target.value);
//     const isFriday = selectedDate.getDay() === 5;

//     if (!isFriday) {
//       toast.warning("Please select a Friday for the exam date.");
//       setForm({ ...form, examDate: "" });
//     } else {
//       setForm({ ...form, examDate: e.target.value });
//     }
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!/^[0-9]{10}$/.test(form.mobile)) {
//       toast.error("Enter a valid 10-digit mobile number");
//       return;
//     }

//     if (form.paymentMethod === "online" && !form.transactionId) {
//       toast.error("Transaction ID is required for online payment");
//       return;
//     }

//     if (!form.examDate) {
//       toast.error("Please select exam date (Friday only)");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/codeofschool/register",
//         form
//       );

//       toast.success(response.data.message || "Registration successful!");

//       // Reset form
//       setForm({
//         name: "",
//         email: "",
//         course: "",
//         mobile: "",
//         marks: "50 out of 100",
//         registrationFees: "500",
//         paymentMethod: "cash",
//         transactionId: "",
//         examDate: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="registration-body">
//       <div className="registration-container">
//         {/* Left Image */}
//         <div className="form-image">
//           <img src={sideImage} alt="Register" />
//         </div>

//         {/* Form Section */}
//         <div className="form-section">
//           <h2>Registration Form</h2>

//           <form onSubmit={handleSubmit} className="form-data">
//             {/* Name + Email */}
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Course + Mobile */}
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Course</label>
//                 <select
//                   name="course"
//                   value={form.course}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Course</option>
//                   {courses.map((c, i) => (
//                     <option key={i} value={c}>
//                       {c}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Mobile</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Marks + Fees */}
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Marks</label>
//                 <input type="text" value={form.marks} disabled />
//               </div>

//               <div className="form-group">
//                 <label>Registration Fees</label>
//                 <input
//                   type="text"
//                   value={`₹${form.registrationFees}`}
//                   disabled
//                 />
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Payment Method</label>
//                 <select
//                   name="paymentMethod"
//                   value={form.paymentMethod}
//                   onChange={handleChange}
//                 >
//                   <option value="cash">Cash</option>
//                   <option value="online">Online</option>
//                 </select>
//               </div>

//               {form.paymentMethod === "online" && (
//                 <div className="form-group">
//                   <label>Transaction ID</label>
//                   <input
//                     type="text"
//                     name="transactionId"
//                     value={form.transactionId}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Exam Date */}
//             <div className="form-group">
//               <label>Exam Date (Friday only)</label>
//               <input
//                 type="date"
//                 name="examDate"
//                 value={form.examDate}
//                 onChange={handleExamDate}
//                 required
//               />
//             </div>

//             {/* Submit */}
//             <button type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </form>

//           <ToastContainer position="top-center" autoClose={3000} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from "react";

// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import "./RegistrationForm.css";
// import sideImage from "./images/registerside.jpg";

// const RegistrationForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     course: "",
//     mobile: "",
//     marks: "50 out of 100",
//     registrationFees: "500",
//     paymentMethod: "cash",
//     transactionId: "",
//     examDate: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const courses = [
//     "Web Development",
//     "Mongoose db",
//     "Mern-stack",
//     "Full-Stack",
//     "Video Editing",
//     "Digital Marketing",
//     "Node.js",
//     "Frontend development",
//     "Backend Development",
//     "AI",
//     "C & C++",
//     "SQL",
//   ];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const  handleExamDate = (e) => {
//     const selectedDate = new Date(e.target.value);
//     if (selectedDate.getDay() !== 5) {
//       toast.warning("Please select a Friday for the exam date.");
//       setForm({ ...form, examDate: "" });
//     } else {
//       setForm({ ...form, examDate: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/codeofschool/register",
//         form
//       );
//       toast.success(response.data.message);

//       setForm({
//         name: "",
//         email: "",
//         course: "",
//         mobile: "",
//         marks: "",
//         registrationFees: "500",
//         paymentMethod: "cash",
//         transactionId: "",
//         examDate: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="registration-body">
//     <div className="registration-container">
//       {/* Left side image */}
//       <div className="form-image">
//         <img src={sideImage} alt="Register" />
//       </div>

//       {/* Right side form */}
//       <div className="form-section">
//         <h2>Registration Form</h2>
//         <form onSubmit={handleSubmit} className="form-data">
//           <div className="form-row">
//             <div className="form-group">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Course</label>
//               <select
//                 name="course"
//                 value={form.course}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((c, i) => (
//                   <option key={i} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Mobile</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={form.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Marks</label>
//               <input type="text" name="marks" value={form.marks} disabled />
//             </div>

//             <div className="form-group">
//               <label>Registration Fees</label>
//               <input type="text" value={`₹${form.registrationFees}`} disabled />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Payment Method</label>
//               <select
//                 name="paymentMethod"
//                 value={form.paymentMethod}
//                 onChange={handleChange}
//               >
//                 <option value="cash">Cash</option>
//                 <option value="online">Online</option>
//               </select>
//             </div>

//             {form.paymentMethod === "online" && (
//               <div className="form-group">
//                 <label>Transaction ID</label>
//                 <input
//                   type="text"
//                   name="transactionId"
//                   value={form.transactionId}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Exam Date</label>
//             <input
//               type="date"
//               name="examDate"
//               value={form.examDate}
//               onChange={handleExamDate}
//               required
//             />
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegistrationForm = () => {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         course: "",
//         mobile: "",
//         marks:"50 out of 100",
//         registrationFees: "500",
//         paymentMethod: "cash",
//         transactionId: "",
//         examDate: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const courses = [
//         "Web Development",
//         "Mongoose db",
//         "Mern-stack",
//         "Full-Stack",
//         "Video Editing",
//         "Digital Marketing",
//         "Node.js",
//         "Frontend development",
//         "Backend Development",
//         "AI",
//         "C & C++",
//         "SQL",
//     ];

//     // Handle input changes
//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     // Ensure only Friday dates
//     const handleExamDate = (e) => {
//         const selectedDate = new Date(e.target.value);
//         if (selectedDate.getDay() !== 5) {
//             toast.warning("Please select a Friday for the exam date.");
//             setForm({ ...form, examDate: "" });
//         } else {
//             setForm({ ...form, examDate: e.target.value });
//         }
//     };

//     // Submit form to backend
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/codeofschool/register",
//                 form
//             );

//             toast.success(response.data.message);

//             // Reset form
//             setForm({
//                 name: "",
//                 email: "",
//                 course: "",
//                 mobile: "",
//                 marks: "",
//                 registrationFees: "500",
//                 paymentMethod: "cash",
//                 transactionId: "",
//                 examDate: "",
//             });
//         } catch (error) {
//             toast.error(error.response?.data?.message );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="registration_form">
//             <h2 className="form_heading">Registration Form</h2>

//             <form onSubmit={handleSubmit} className="form-data">
//                 <label>Full Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Course</label>
//                 <select
//                     name="course"
//                     value={form.course}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select Course</option>
//                     {courses.map((c, i) => (
//                         <option key={i} value={c}>
//                             {c}
//                         </option>
//                     ))}
//                 </select>

//                 <label>Mobile Number</label>
//                 <input
//                     type="text"
//                     name="mobile"
//                     value={form.mobile}
//                     onChange={handleChange}
//                     required
//                 />
//                <label>Marks</label>
//                <input 
//                type="text"
//                name="marks"
//                value={form.marks}
//                onChange={handleChange}
//                disabled
//                />
//                 <label>Registration Fees</label>
//                 <input
//                     type="text"
//                     name="registrationFees"
//                     value={`₹${form.registrationFees}`}
//                     disabled
//                 />

//                 <label>Payment Method</label>
//                 <select
//                     name="paymentMethod"
//                     value={form.paymentMethod}
//                     onChange={handleChange}
//                 >
//                     <option value="cash">Cash</option>
//                     <option value="online">Online</option>
//                 </select>

//                 {form.paymentMethod === "online" && (
//                     <>
//                         <label>Transaction ID</label>
//                         <input
//                             type="text"
//                             name="transactionId"
//                             value={form.transactionId}
//                             onChange={handleChange}
//                             required
//                         />
//                     </>
//                 )}

//                 <label className="exam-date">Exam Date</label>
//                 <input
//                     type="date"
//                     name="examDate"
//                     value={form.examDate}
//                     onChange={handleExamDate}
//                     required
//                 />

//                 <button type="submit" disabled={loading}>
//                     {loading ? "Submitting..." : "Submit"}
//                 </button>
//             </form>

//             {/* Toast Container */}
//             <ToastContainer position="top-center" autoClose={3000} />
//         </div>
//     );
// };

// export default RegistrationForm;





