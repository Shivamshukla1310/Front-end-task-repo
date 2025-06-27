import React from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      <form className="w-full max-w-md mx-auto bg-white p-4 rounded">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-900 hover:bg-teal-800 text-white py-2 font-semibold transition duration-200 rounded-3xl"
        >
          Reset Password
        </button>
        <div className="text-center m-1">or</div>
        <button className="w-full bg-white hover:bg-teal-800 hover:text-white text-teal-900 py-1 rounded-3xl font-semibold transition duration-200  border-teal-900 mt-2 border-2">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="inline-block h-4 w-4 mr-2"
          />
          Login with Gmail
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
