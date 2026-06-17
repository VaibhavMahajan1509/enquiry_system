import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./images/home_bg.jpg";

import ai from "./images/courses_images/ai_course.jpeg";
import fullstack from "./images/courses_images/fullstack.png";
import digital from "./images/courses_images/digital_marketing_course.webp";
import mern from "./images/courses_images/MERN-1.png";
import python from "./images/courses_images/python.jpg";
import video from "./images/courses_images/video-editing-course.webp";

const Home = () => {
  const navigate = useNavigate();

  const courses = [
    { name: "MERN Stack Development", img: mern },
    { name: "Full Stack AI Development", img: fullstack },
    { name: "Digital Marketing", img: digital },
    { name: "Python Programming", img: python },
    { name: "Video Editing", img: video },
    { name: "AI", img: ai },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
     {/* Hero Section */}
<section
  className="min-h-screen flex items-center bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
      Welcome to <span className="text-blue-400">Code of School</span>
    </h1>

    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
      Complete Enquiry &amp; Admission Management System
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => navigate("/registration")}
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-2xl transition-all duration-300"
      >
        Register Now
      </button>

      <button
        onClick={() => navigate("/login")}
        className="border-2 border-white hover:bg-white hover:text-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-2xl transition-all duration-300"
      >
        Login
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-4xl animate-bounce">
    ↓
  </div>
</section>

      {/* Stats Section */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-1">Happy Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-600 mt-1">Courses</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600 mt-1">Success Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">4.9</h3>
            <p className="text-gray-600 mt-1">Rating</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Easy Enquiry",
                desc: "Simple and fast enquiry process",
              },
              {
                icon: "💰",
                title: "Flexible Payment",
                desc: "Cash & Online payment options",
              },
              {
                icon: "🎓",
                title: "Expert Guidance",
                desc: "Learn from experienced mentors",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id = "courses" className="py-10 bg-white ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Popular Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {course.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Duration: 3-6 Months
                  </p>

                  <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="relative py-24 bg-gradient-to-r from-indigo-400 to-cyan-400 text-white overflow-hidden">

  {/* Decorative blur shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-3xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Ready to Start Your{" "}
      <span className="text-yellow-300">Journey?</span>
    </h2>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-blue-100 mt-5">
      Join hundreds of students building real-world skills and launching
      their careers with us.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

      <button
        onClick={() => navigate("/registration")}
        className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
      >
        Register Now
      </button>

      {/* FIXED BUTTON */}
      <button
        onClick={() => {
          document.getElementById("courses")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="border border-white/40 text-white px-10 py-4 rounded-xl hover:bg-white/10 transition duration-300"
      >
        Explore Courses
      </button>

    </div>

    {/* Small note */}
    <p className="text-sm text-blue-100 mt-6">
      No credit card required • Start learning today
    </p>

  </div>
</section>
    </div>
  );
};

export default Home;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from './Navbar'

// export const Home = () => {
//   const [mobile, setMobile] = useState("");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   // use uselocation for navigate data
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.updatedMobile) {
//       setMobile(location.state.updatedMobile);
//       fetchData(location.state.updatedMobile);
//     }
//   }, [location.state]);

//   // Search API Call
//   const fetchData = async (mobileNumber) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/codeofschool/search/${mobileNumber}`,
//       );
//       setData(res.data.data);
//       setError("");
//     } catch (err) {
//       setData(null);
//       setError("No record found with this mobile number");
//     }
//   };

//   // Manual Search Button
//   const handleSearch = () => {
//     if (!mobile) {
//       setError("Please enter mobile number");
//       return;
//     }
//     fetchData(mobile);
//     setMobile(""); // clear input after search
//   };
//   // Edit register form
//   // const handleEdit = (id) => {
//   //   confirm("Are you sure you want to edit your")
//   //   navigate(`/editregistration/${id}`);
//   // };
//   const handleEdit = (id) => {
//     const ok = window.confirm("Are you sure you want to edit this?");
//     if (ok) {
//       navigate(`/editregistration/${id}`);
//     }
//   };
//   // admission
//   const handleAdmission = () => {
//     // navigate('/admission_form', { state: data });
//     const ok = window.confirm("Are you sure you want to take admission");
//     if (ok) {
//       navigate("/form_selector", {
//         state: { formType: "admission", formData: data },
//       });
//     }
//   };
//   // delete user
//   // const handleDelete = async (id) => {
//   //   try {
//   //     await axios.delete(
//   //       `http://localhost:5000/codeofschool/delete_user/${id}`
//   //     );
//   //     alert("Deleted Successfully");
//   //     setData(null);
//   //   } catch (error) {
//   //     alert("Error while deleting");
//   //   }
//   // };
//   const handleDelete = async (id) => {
//     const ok = window.confirm("Are you sure you want to delete this record?");
//     if (!ok) return;
//     try {
//       await axios.delete(
//         `http://localhost:5000/codeofschool/delete_user/${id}`,
//       );
//       alert("Deleted Successfully");
//       setData(null);
//     } catch (error) {
//       alert("Error while deleting");
//     }
//   };

//   return (
//     <div className="home_header">
//       <div className="search-container">
//         {/* <h2>Search Registration</h2> */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//           <button className="btn" onClick={handleSearch}>
//             Search
//           </button>
//         </div>

//         {error && <p className="error">{error}</p>}

//         {data && (
//           <div className="table-container">
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Course</th>
//                   <th>Mobile</th>
//                   <th>Payment</th>
//                   <th>Exam Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                   <td>{data.course}</td>
//                   <td>{data.mobile}</td>
//                   <td>{data.paymentMethod}</td>
//                   <td>{new Date(data.examDate).toLocaleDateString()}</td>
//                   <td>
//                     <button
//                       className="btn edit"
//                       onClick={() => handleEdit(data._id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn delete"
//                       onClick={() => handleDelete(data._id)}
//                     >
//                       Delete
//                     </button>
//                     {/* <button className="btn admission" onClick={handleAdmission}>Admission</button> */}
//                     {/* {data && (
//                       <button
//                         className="btn admission"
//                         onClick={handleAdmission}
//                         disabled={data.isAdmitted}  // disable if already admitted
//                        >
//                     {data.isAdmitted ? "Already Admitted" : "Admission"}
//                      </button>
//                     )} */}
//                     {!data.isAdmitted && (
//                       <button
//                         className="btn admission"
//                         onClick={handleAdmission}
//                       >
//                         Admission
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
