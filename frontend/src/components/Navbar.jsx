import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6a83a6]">Pravah</div>

        {/* Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#6a83a6]">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-[#6a83a6]">Dashboard</Link></li>
          <li><Link to="/reports" className="hover:text-[#6a83a6]">Reports</Link></li>
          <li><Link to="/profile" className="hover:text-[#6a83a6]">Profile</Link></li>
          <li><Link to="/admin" className="hover:text-[#6a83a6]">Admin</Link></li>
          <li><Link to="/login" className="hover:text-[#6a83a6]">Login/signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
