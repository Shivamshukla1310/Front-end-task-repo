import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container justify-center items-center flex pt-5">
      <form className=" w-full max-w-md bg-white p-8 rounded">
        <h2 className="text-2xl font-bold text-center mb-8">Welcome back</h2>

        {/* Username/Email */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter  your username or email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400"
          />
        </div>

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

        {/* Forgot Password */}
        <div className="mb-4 text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-teal-900 hover:bg-teal-800 text-white py-2 rounded font-semibold transition duration-200"
        >
          Login
        </button>

        {/* Sign up text */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-teal-600 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
