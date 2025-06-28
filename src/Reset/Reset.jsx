import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reset = ({ email, setEmail }) => {

  // title for the page
  useEffect(() => {
    document.title = "Reset Password - Dorzeno";
  }, []);

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Quick validation before continuing (just making sure email looks good)
  const validate = () => {
    if (!email.trim()) {
      setError('Email is required.');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  // This runs when user clicks "Send OTP"
  const handleSendOtp = (e) => {
    e.preventDefault();
    const isValid = validate(); // run our checks

    if (!isValid) {
      console.warn("Validation failed. No navigation.");
      return; // don't continue if email is bad
    }

    // API call here to trigger OTP
    console.log("API call here OTP to:", email, "on line 32");

    // After successful OTP request, send user to the OTP page
    navigate('/otp');
  };

  const goToLogin = () => {
    // Simple route change back to the login screen
    navigate('/sign-in');
  };

  return (
    <form onSubmit={handleSendOtp} className="flex flex-col items-center justify-center mt-[60px]">
      {/* Page Title */}
      <div className="text-[28px] font-bold">Reset Password</div>

      {/* Email field label + inline error (if any) */}
      <div className="w-[450px] mt-[50px] mb-[5px] text-[13px] flex justify-items-center">
        <label>Email Address</label>
        {error && <div className="ml-auto text-red-500 text-[13px]">{error}</div>}
      </div>

      {/* Email input field */}
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value); // updates parent state
          if (error) setError('');  // clears error once user starts typing
        }}
        placeholder="johndeo@example.com"
        className={`rounded-[6px] border ${error ? 'border-red-500' : 'border-[#ddd]'} text-[#000000] w-[450px] px-[20px] py-[15px] text-[14px] outline-0`}
      />

      {/* Send OTP button */}
      <button
        type="submit"
        className="mt-[30px] bg-[#0D5F65] text-[14px] text-white rounded-[6px] w-[450px] p-[15px] text-center cursor-pointer hover:bg-[#fff] hover:text-[#000] border-[1px] border-[#0D5F65] transition-all duration-350"
      >
        Send OTP
      </button>

      {/* Back to login link */}
      <div className="m-[20px] w-[450px] text-[14px] flex items-center justify-center">
        <div
          className="cursor-pointer border-b border-[#0D5F65] hover:font-bold text-[#0D5F65]"
          onClick={goToLogin}
        >
          Back to Login
        </div>
      </div>
    </form>
  );
};

export default Reset;
