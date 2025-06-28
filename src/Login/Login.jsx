import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from '../assets/google.png';

const Login = () => {
  const navigate = useNavigate();

  // title for the page
  useEffect(() => {
    document.title = "Sign In - Dorzeno";
  }, []);

  // State
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Basic input validation
  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // API call should be made here
    console.log("API CALL Line Number: 50")
    console.log('Email:', email);
    console.log('Password:', password);
    // alert('Form submitted successfully!');
    // If success, route to dashboard/home
    // navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-[60px]">
      <div className="text-[28px] font-bold">Welcome Back</div>

      {/* Email */}
      <div className="flex justify-items-center w-[450px] mt-[50px] mb-[5px] text-[13px]">
        <label>Email Address</label>
        {errors.email && <div className="ml-auto text-red-500">Wrong email</div>}
      </div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="johndeo@example.com"
        className={`rounded-[6px] border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0`}
      />

      {/* Password */}
      <div className="flex justify-items-center w-[450px] mt-[20px] mb-[5px] text-[13px]">
        <label>Password</label>
        {errors.password && <div className="ml-auto text-red-500">Wrong password</div>}
      </div>
      <div className={`relative w-[450px] border border-[#ddd] rounded-[6px] ${errors.password ? 'border-red-500' : ''}`}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="xyz"
          className="rounded-[6px] border-none text-[#000000] w-full px-[20px] py-[15px] text-[14px] outline-0"
        />
        <span
          onClick={togglePassword}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[12px] cursor-pointer text-[#6D8299] material-icons-round"
        >
          {showPassword ? 'visibility' : 'visibility_off'}
        </span>
      </div>

      {/* Remember + Forgot */}
      <div className="w-[450px] flex justify-between items-center py-[20px]">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#1F2937]">Remember Me</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-[#0D5F65] transition-all"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-3 h-3 rounded-full transition-all peer-checked:translate-x-4"></div>
          </label>
        </div>
        <div
          onClick={() => navigate('/reset')}
          className="text-[13px] text-[#1F2937] cursor-pointer border-b border-[#1F2937] border-dashed hover:font-bold transition-all duration-350"
        >
          Forget Password?
        </div>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="bg-[#0D5F65] text-[14px] text-white rounded-[6px] w-[450px] p-[15px] text-center cursor-pointer hover:bg-[#fff] hover:text-[#000] border-[1px] border-[#0D5F65] transition-all duration-350"
      >
        Sign in
      </button>

      {/* Divider */}
      <div className="max-w-[450px] min-w-[250px] flex items-center my-[20px]">
        <div className="w-[195px] border-b border-[#ddd]"></div>
        <div className="px-[20px]">or</div>
        <div className="w-[195px] border-b border-[#ddd]"></div>
      </div>

      {/* Google login */}
      <div className="rounded-[6px] p-[15px] text-center w-[450px] bg-[#ddd] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#fff] border-[1px] border-[#ddd]">
        <img src={googleIcon} alt="Google" className="w-[15px] h-[15px]" />
        <div className="text-[14px]">Sign in with Google</div>
      </div>

      {/* Signup link */}
      <div className="m-[20px] w-[450px] text-[14px] flex items-center justify-center">
        <div>Don’t have an account?</div>
        <div
          onClick={() => navigate('/sign-up')}
          className="ml-[5px] cursor-pointer border-b border-[#0D5F65] hover:font-bold text-[#0D5F65]"
        >
          Signup
        </div>
      </div>
    </form>
  );
};

export default Login;
