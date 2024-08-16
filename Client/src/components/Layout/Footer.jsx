import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gradient-to-r from-gray-700 to-black text-white p-6">
      <h1 className="text-center">All Right Reserved &copy; PG</h1>
      <p className="text-center mt-1.2">
        <Link
          to="/about"
          className="no-underline text-white px-2 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
        >
          About
        </Link>
        |
        <Link
          to="/contact"
          className="no-underline text-white px-2 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
        >
          Contact
        </Link>
        |
        <Link
          to="/policy"
          className="no-underline text-white px-2 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
