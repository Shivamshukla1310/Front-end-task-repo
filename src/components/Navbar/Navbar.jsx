import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbg">
      <div className="container flex items-center justify-between  py-2">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-4" />
          <div className=" py-4 px-3 text-black text-lg font-bold">
            Home Services
          </div>
        </div>
        <div>
          <Link to="/login">
            <button className=" text-white px-4 py-2 rounded-md hover:bg-teal-800 mx-2">
              login
            </button>
          </Link>
          <Link to="/register">
            <button className="buttonbg text-white px-4 py-2 rounded-md hover:bg-teal-800 hover:text-white">
              sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
