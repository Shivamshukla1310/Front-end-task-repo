import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from '../assets/google.png';

const Signup = () => {
  // Set the document title when the component mounts
  useEffect(() => {
    document.title = "Sign Up - Dorzeno";
  }, []);

  const navigate = useNavigate();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Form data state
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Error messages for form validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // Handle input field changes and validate as user types
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Field-specific validation
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      switch (name) {
        case "name":
          updatedErrors.name = value.trim() ? '' : 'Name is required.';
          break;
        case "email":
          updatedErrors.email = !value.trim()
            ? 'Email is required.'
            : !/\S+@\S+\.\S+/.test(value)
            ? 'Enter a valid email address.'
            : '';
          break;
        case "password":
          updatedErrors.password = !value.trim()
            ? 'Password is required.'
            : value.length < 6
            ? 'Password must be at least 6 characters.'
            : '';
          // Also check confirm password again if it was already filled
          updatedErrors.confirmPassword =
            form.confirmPassword && form.confirmPassword !== value
              ? 'Passwords do not match.'
              : '';
          break;
        case "confirmPassword":
          updatedErrors.confirmPassword = !value.trim()
            ? 'Confirm your password.'
            : value !== form.password
            ? 'Passwords do not match.'
            : '';
          break;
        default:
          break;
      }

      return updatedErrors;
    });
  };

  // Validate the full form before submitting
  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm your password.';
      valid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Add your signup API call here
    console.log("Signup API CALL");
    console.log(form);

    // Redirect after signup (uncomment when needed)
    // navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-[20px]">
      {/* Heading */}
      <div className="text-[28px] font-bold">Welcome! SignUp</div>

      {/* Name Field */}
      <div className="flex justify-items-center w-[450px] mt-[30px] mb-[5px] text-[13px]">
        <label>Name</label>
        {errors.name && <div className="ml-auto text-red-500">{errors.name}</div>}
      </div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        className={`rounded-[6px] border ${errors.name ? 'border-red-500' : 'border-[#ddd]'} text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0`}
      />

      {/* Email Field */}
      <div className="flex justify-items-center w-[450px] mt-[20px] mb-[5px] text-[13px]">
        <label>Email Address</label>
        {errors.email && <div className="ml-auto text-red-500">{errors.email}</div>}
      </div>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="johndoe@example.com"
        className={`rounded-[6px] border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0`}
      />

      {/* Password Field */}
      <div className="flex justify-items-center w-[450px] mt-[20px] mb-[5px] text-[13px]">
        <label>Password</label>
        {errors.password && <div className="ml-auto text-red-500">{errors.password}</div>}
      </div>
      <div className={`relative w-[450px] border ${errors.password ? 'border-red-500' : 'border-[#ddd]'} rounded-[6px]`}>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="rounded-[6px] border-none text-[#000000] w-full px-[20px] py-[15px] text-[14px] outline-0"
        />
        <span
          onClick={togglePassword}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[12px] cursor-pointer text-[#6D8299] material-icons-round"
        >
          {showPassword ? 'visibility' : 'visibility_off'}
        </span>
      </div>

      {/* Confirm Password Field */}
      <div className="flex justify-items-center w-[450px] mt-[20px] mb-[5px] text-[13px]">
        <label>Confirm Password</label>
        {errors.confirmPassword && <div className="ml-auto text-red-500">{errors.confirmPassword}</div>}
      </div>
      <input
        type={showPassword ? 'text' : 'password'}
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        className={`rounded-[6px] border ${errors.confirmPassword ? 'border-red-500' : 'border-[#ddd]'} text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0`}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#0D5F65] text-[14px] text-white rounded-[6px] w-[450px] p-[15px] text-center cursor-pointer hover:bg-[#fff] hover:text-[#000] border-[1px] border-[#0D5F65] transition-all duration-350 mt-[20px]"
      >
        Sign up
      </button>

      {/* Divider */}
      <div className="max-w-[450px] min-w-[250px] flex items-center my-[20px]">
        <div className="w-[195px] border-b border-[#ddd]"></div>
        <div className="px-[20px]">or</div>
        <div className="w-[195px] border-b border-[#ddd]"></div>
      </div>

      {/* Google Signup Option */}
      <div className="rounded-[6px] p-[15px] text-center w-[450px] bg-[#ddd] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#fff] border-[1px] border-[#ddd]">
        <img src={googleIcon} alt="Google" className="w-[15px] h-[15px]" />
        <div className="text-[14px]">Sign up with Google</div>
      </div>

      {/* Link to Sign In */}
      <div className="m-[20px] w-[450px] text-[14px] flex items-center justify-center">
        <div>Already have an account?</div>
        <div
          onClick={() => navigate('/sign-in')}
          className="ml-[5px] cursor-pointer border-b border-[#0D5F65] hover:font-bold text-[#0D5F65]"
        >
          Sign in
        </div>
      </div>
    </form>
  );
};

export default Signup;
