import React from "react";

import aboutimg from "../component/images/about_images/image1.png";
import ourvalues from "../component/images/about_images/value.jpg";
import ourmission from "../component/images/about_images/mission.jpg";
import ourvision from "../component/images/about_images/vision.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          Empowering learners with industry-ready skills, real projects, and
          expert mentorship.
        </p>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              We cultivate tech talent from day one
            </h2>

            <img
              src={aboutimg}
              alt="about"
              className="w-full max-w-[260px] h-[260px] object-cover rounded-xl shadow-sm"
            />

            <p className="text-gray-600 mt-6 leading-relaxed">
              We focus on building strong technical foundations with practical
              learning and real-world exposure to make students industry-ready.
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Welcome to Code of School
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              Your launchpad to tech excellence. We deliver industry-aligned
              tech education designed for modern digital careers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Powered by Inforag Technology, our programs combine practical
              skills, mentorship, and hands-on projects.
            </p>

            <h3 className="text-xl font-bold text-blue-700 mb-3">Who We Are</h3>

            <p className="text-gray-600 leading-relaxed">
              Code of School is a tech training institute focused on full-stack
              development, data science, and career-driven learning with
              industry mentors.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Student-Centered",
                desc: "Your success shapes our teaching.",
              },
              {
                title: "Future-Focused",
                desc: "Skills for tomorrow’s tech world.",
              },
              {
                title: "Expert Mentors",
                desc: "Industry professionals guide you.",
              },
              { title: "Career Driven", desc: "Focus on real job outcomes." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition text-center"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES / MISSION / VISION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VALUES */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-4">
              Our Values
            </h3>

            <img
              src={ourvalues}
              className="rounded-xl w-full h-52 object-cover mb-5"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              At Code of School, we uphold transparency for clear learning
              paths, foster innovation to impart cutting-edge skills, maintain a
              student-first focus to support every learner, strive for
              excellence in curriculum and delivery, ensure integrity in
              mentorship, encourage collaboration to build a strong community,
              embrace adaptability to meet evolving tech trends, and provide
              performance-focused training to guarantee genuine career
              growth.Deep Research Canvas Image.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-4">
              Our Mission
            </h3>

            <img
              src={ourmission}
              className="rounded-xl w-full h-52 object-cover mb-5"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to transform passionate learners into skilled tech
              professionals through innovative, impactful education that
              cultivates real-world expertise, enhances career readiness, and
              provides long-term value. We aim to equip students with
              future-ready skills, grounded in a foundation of integrity,
              collaboration, and a strong commitment to personal growth and
              success.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-4">
              Our Vision
            </h3>

            <img
              src={ourvision}
              className="rounded-xl w-full h-52 object-cover mb-5"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              Our vision is to be a global leader in providing education-first,
              career-driven programs that empower learners from all backgrounds.
              We aim to be recognized for our high-quality training, teaching
              excellence, transparent mentorship, and a student-first approach
              that fosters genuine skill development, career readiness,
              real-world confidence, and continuous growth in an ever-evolving
              technological landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="home_header">
//       <div className="about_section">
//         <h1>About Section</h1>
//       </div>
//     </div>
//   );
// };

// export default About;
