import { useState } from "react";
import googleIcon from './google.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Validate form fields
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
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // ✅ Submit the form
      console.log('Email:', email);
      console.log('Password:', password);
      alert('Form submitted successfully!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-[60px]"
    >
      {/* Header */}
      <div className="text-[28px] font-bold">Welcome Back</div>

      {/* Email Input */}
      <label className="w-[450px] mt-[50px] mb-[-10px] text-[16px]">Email Address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="johndeo@example.com"
        className="rounded-[25px] border border-[#ddd] text-[#6D8299] w-[450px] px-[16px] py-[8px] text-[15px] outline-0 mt-[20px]"
      />
      {errors.email && <div className="w-[450px] text-red-500 text-sm mt-1">{errors.email}</div>}

      {/* Password Input */}
      <label className="w-[450px] mt-[20px] mb-[-10px] text-[16px]">Password</label>
      <div className="border border-[#ddd] w-[450px] px-[16px] mt-[20px] rounded-[25px] flex items-center text-[15px]">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="xyz"
          className="outline-0 flex-1 h-[40px] text-[#6D8299]"
        />
        <span
  onClick={togglePassword}
  className="ml-auto text-[16px] cursor-pointer text-[#6D8299] material-icons-round"
>
  {showPassword ? 'visibility' : 'visibility_off'}
</span>

      </div>
      {errors.password && <div className="w-[450px] text-red-500 text-sm mt-1">{errors.password}</div>}

      {/* Remember Me Toggle & Forget Password */}
      <div className="w-[450px] flex justify-between items-center py-[20px] mb-[10px]">
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[#1F2937]">Remember Me</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-4 bg-gray-200 rounded-full peer peer-checked:bg-[#0D5F65] transition-all"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-3 h-3 rounded-full transition-all peer-checked:translate-x-4"></div>
          </label>
        </div>
        <div className="text-[16px] text-[#1F2937] cursor-pointer">Forget Password?</div>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="bg-[#0D5F65] text-white rounded-[25px] w-[450px] py-[5px] text-center cursor-pointer"
      >
        Sign in
      </button>

      {/* Divider */}
      <div className="max-w-[450px] min-w-[250px] flex items-center my-[20px]">
        <div className="w-[180px] border-b border-[#000]"></div>
        <div className="px-[20px]">or</div>
        <div className="w-[180px] border-b border-[#000]"></div>
      </div>

      {/* Sign in with Google */}
      <div className="border border-[#6D8299] rounded-[25px] py-[8px] px-[16px] text-center w-[450px] flex items-center justify-center gap-2 cursor-pointer">
        <img src={googleIcon} alt="Google" className="w-[15px] h-[15px]" />
        <div className="text-[14px]">Sign in with Google</div>
      </div>

      {/* Signup Redirect */}
      <div className="m-[20px] w-[450px] text-[14px] flex items-center justify-center">
        <div>Don’t have an account?</div>
        <div className="font-bold ml-[5px] cursor-pointer">Signup</div>
      </div>
    </form>
  );
};

export default Login;
