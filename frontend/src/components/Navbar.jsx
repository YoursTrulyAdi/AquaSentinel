import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6a83a6]">Pravah</div>

        {/* Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-[#6a83a6] cursor-pointer">Home</li>
          <li className="hover:text-[#6a83a6] cursor-pointer">Dashboard</li>
          <li className="hover:text-[#6a83a6] cursor-pointer">Reports</li>
          <li className="hover:text-[#6a83a6] cursor-pointer">Admin</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
