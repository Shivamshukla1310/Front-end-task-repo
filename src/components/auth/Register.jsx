import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container justify-center items-center flex pt-5">
      <form className=" w-full max-w-md bg-white p-8 rounded">
        <h2 className="text-2xl font-bold text-center mb-8">
          Sign up for Home Services
        </h2>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400 mb-4"
        />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400 mb-4"
        />
        {/* Password */}
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400"
          />
          <div
            className="absolute top-9 right-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400"
          />
          {/* <div
            className="absolute top-9 right-3 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </div> */}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-900 hover:bg-teal-800 text-white py-2 rounded font-semibold transition duration-200 mb-4"
        >
          Sign up
        </button>
        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
