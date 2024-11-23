import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-4 w-full mt-auto">
      <div className="flex justify-center gap-6">
        <a
          href="https://www.facebook.com/abdullahwebmaster/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullahdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/abdullahwebmaster/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-pink-600 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-center text-sm mt-4 text-gray-200">
        &copy; {new Date().getFullYear()} Abdullahwebmaster. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
