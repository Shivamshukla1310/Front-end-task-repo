import { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [invalidUser, setInvalidUser] = useState(false);
  const navigate = useNavigate();

  const SAMPLE_EMAIL = 'demo@dorzeno.com';
  const SAMPLE_PASSWORD = 'demo123';

  const validate = () => {
    const newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid Email';
    if (password.length < 6) newErrors.password = 'Enter your password';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (email === SAMPLE_EMAIL && password === SAMPLE_PASSWORD) {
        setInvalidUser(false);
        navigate('/dashboard'); // Change as needed
      } else {
        setInvalidUser(true);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Welcome back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              {submitted && errors.email && (
                <p className="absolute right-0 -top-4 text-red-500 text-sm">{errors.email}</p>
              )}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded-full border ${submitted && errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Password</label>
              {submitted && errors.password && (
                <p className="absolute right-0 -top-4 text-red-500 text-sm">{errors.password}</p>
              )}
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-full border ${submitted && errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} className="absolute right-3 top-9 cursor-pointer text-gray-500 text-lg" />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} className="absolute right-3 top-9 cursor-pointer text-green-500 text-lg" />
              )}
            </div>

            {/* Invalid user */}
            {invalidUser && (
              <p className="text-red-500 text-sm text-right">Invalid credentials. Try again.</p>
            )}

            {/* Remember Me + Forgot */}
         <div className="flex justify-between items-center text-sm mt-2">
  <label className="flex items-center gap-3 text-black font-medium">
    Remember Me
    <div className="relative w-[34px] h-[20px]">
      <input
        type="checkbox"
        id="remember"
        className="peer sr-only"
      />
      {/* Toggle track */}
      <div className="w-full h-full bg-white border-2 border-gray-500 rounded-full transition-all duration-200 peer-checked:bg-green-500 peer-checked:border-0"></div>

      {/* Toggle circle */}
      <div className="absolute top-[3px] left-[3px] h-[14px] w-[14px] bg-white border-2 border-gray-500 rounded-full transition-all duration-200 peer-checked:left-[17px] peer-checked:border-0"></div>
    </div>
  </label>

  <Link to="/forget-password" className="text-gray-700 hover:underline">
    Forgot Password?
  </Link>
</div>


            {/* Submit */}
            <button type="submit" className="w-full bg-teal-800 text-white py-2 rounded-full font-semibold hover:bg-teal-900">
              Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center text-gray-400 gap-2">
              <hr className="flex-grow border-gray-300" />
              <span className="text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google */}
            <button className="w-full flex items-center justify-center gap-2 bg-white border py-2 rounded-full shadow hover:shadow-md">
              <FcGoogle className="text-xl" /> sign in with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm mt-3 text-gray-600">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-black font-medium text-lg">
                signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
