import { useState } from 'react';
import Header from '../components/Header';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const SAMPLE_EMAIL = 'demo@dorzeno.com';
  const SAMPLE_PASSWORD = 'demo123';

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Field should not be empty';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid Email';
    if (form.password.length < 6) newErrors.password = 'Enter your password';
    if (form.password !== form.confirm) newErrors.confirm = 'Password not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (form.email === SAMPLE_EMAIL && form.password === SAMPLE_PASSWORD) {
        setInvalidUser(false);
        navigate('/login');
      } else {
        setInvalidUser(true);
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) setErrors(validate());
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 py-4 bg-white">
        <div className="w-full max-w-sm sm:max-w-md">
          <h2 className="text-2xl sm:text-3xl text-center text-black font-medium">Register</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Name</label>
              {submitted && errors.name && (
                <p className="absolute right-0 -top-3 text-red-500 text-sm">{errors.name}</p>
              )}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=""
                className={`w-full px-4 py-2 text-sm sm:text-base rounded-full border ${submitted && errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Email</label>
              {submitted && errors.email && (
                <p className="absolute right-0 -top-3 text-red-500 text-sm">{errors.email}</p>
              )}
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 text-sm sm:text-base rounded-full border ${submitted && errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              {submitted && errors.password && (
                <p className="absolute right-0 -top-3 text-red-500 text-sm">{errors.password}</p>
              )}
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 text-sm sm:text-base rounded-full border ${submitted && errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} className="absolute right-3 top-9 cursor-pointer text-gray-500 text-lg" />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} className="absolute right-3 top-9 cursor-pointer text-green-500 text-lg" />
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              {submitted && errors.confirm && (
                <p className="absolute right-0 -top-5 text-red-500 text-sm">{errors.confirm}</p>
              )}
              <input
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full px-4 py-2 text-sm sm:text-base rounded-full border ${submitted && errors.confirm ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-teal-800 text-white py-2 rounded-full font-semibold hover:bg-teal-900 text-sm sm:text-base">
              Sign Up
            </button>

            {/* Invalid user message */}
            {invalidUser && (
              <p className="text-red-500 text-sm text-right">User not recognized, try with valid sample</p>
            )}

            {/* Divider */}
            <div className="flex items-center text-gray-400 gap-2">
              <hr className="flex-grow border-gray-300" />
              <span className="text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-white border py-2 rounded-full shadow hover:shadow-md text-sm sm:text-base">
              <FcGoogle className="text-xl" /> sign up with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account? <Link to="/login" className="text-black font-medium text-xl">Signin</Link>
            </p>
          </form>
        </div>
      </div>

    </>
  );
}
