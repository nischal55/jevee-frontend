import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaHome, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import "./admin.css";

const AdminHeader = ({ setOpen, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-header">
      <div
        className={`fixed top-0 left-0 bg-[#6777EF] h-16 flex items-center justify-between transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-20"
        } w-full`}
      >
        <div className="flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none text-4xl px-4"
            onClick={() => setOpen((prev) => !prev)}
          >
            &#9776;
          </button>
        </div>
        <div className="flex items-center gap-7 relative  ">
          <Link to={"/"} className="flex items-center gap-1 text-white text-lg">
            <FaHome />
            visit website
          </Link>
          <Link to={"/admin"}>
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
          <button
            className="text-gray-300  hover:text-white mr-8 focus:outline-none flex items-center gap-2"
            onClick={handleProfileMenuOpen}
          >
            <span className="hidden md:block">Admin</span>
            <span className="mt-1">
              <FaChevronDown />
            </span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-4 top-10 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link
                to={"/admin"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to={"/admin"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
