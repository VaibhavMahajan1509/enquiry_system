import React from "react";

import map from "./images/about_images/new-map.jpeg";

import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_auto_2fr] gap-12">

          {/* COMPANY */}
          <div className="space-y-5">

            <h3 className="text-white text-2xl font-bold">
              Code of School
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Industry-aligned tech education with practical learning and
              career-focused training.
            </p>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3 items-start">
                <FaPhone className="text-indigo-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p>+91 99777 23584</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-indigo-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p>thecodeofschool@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FaClock className="text-indigo-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p>Mon - Sat: 10 AM - 8 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-5">

            <h4 className="text-white font-semibold">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              {["Home", "About Us", "Courses", "Placements", "Contact Us"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                )
              )}

            </div>
          </div>


          {/* GET IN TOUCH (NEW SECTION) */}
          <div className="space-y-5">

            <h4 className="text-white font-semibold text-lg">
              Get In Touch
            </h4>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden border border-gray-700">
              <img
                src={map}
                alt="contact"
                className="w-full h-36 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* INFO */}
            <div className="space-y-3 text-sm">

              <p className="text-gray-400 leading-relaxed">
                Have questions about courses, admissions, or career guidance?
                We are here to help you anytime.
              </p>

              <div>
                <p className="text-white font-medium">📍 Address</p>
                <p className="text-gray-400">
                  Indore, Madhya Pradesh, India
                </p>
              </div>

              <div>
                <p className="text-white font-medium">📞 Phone</p>
                <p className="text-gray-400">
                  +91 99777 23584
                </p>
              </div>

              <div>
                <p className="text-white font-medium">✉ Email</p>
                <p className="text-gray-400">
                  thecodeofschool@gmail.com
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Code of School
          </p>

          <div className="flex gap-5 text-lg">

            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="text-gray-400 hover:text-white hover:scale-110 transition cursor-pointer"
                />
              )
            )}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;