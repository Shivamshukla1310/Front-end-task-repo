import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {

  // title for the page
  useEffect(() => {
    document.title = "OTP Verification to Reset Password - Dorzeno";
  }, []);

  const inputsRef = useRef([]); // refs to handle focus on input fields
  const [otp, setOtp] = useState(Array(6).fill("")); // store each OTP digit
  const [error, setError] = useState(""); // display error messages
  const [touched, setTouched] = useState(Array(6).fill(false)); // track which inputs are interacted with
  const CORRECT_OTP = "755943"; // hardcoded OTP for now
  const navigate = useNavigate(); // used to navigate between routes

  // Automatically focus the first input box when component mounts
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Check OTP automatically when all digits are filled
  useEffect(() => {
    const finalOtp = otp.join("");
    if (otp.every((val) => val !== "")) {
      if (finalOtp === CORRECT_OTP) {
        setError("");
        console.log("OTP verified:", finalOtp, "at line 25");

        // API should be called here to verify the OTP from backend

        navigate("/set-password"); // navigate to password screen on success
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }
  }, [otp, navigate]);

  // Update OTP state when user types a digit
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // only allow digits

    const newOtp = [...otp];
    const newTouched = [...touched];
    newOtp[index] = value;
    newTouched[index] = true;

    setOtp(newOtp);
    setTouched(newTouched);
    setError("");

    // Move focus to next input if a digit was entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace to focus previous input if current is empty
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Fallback for manual form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");

    if (otp.includes("")) {
      setError("Please enter all 6 digits.");
      setTouched(Array(6).fill(true));
      return;
    }

    if (finalOtp !== CORRECT_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setError("");
    console.log("OTP verified (manual):", finalOtp, "at line 70");

    // API should be called here as well before navigating

    navigate("/set-password");
  };

  // Navigate back to the reset password email screen
  const goBackToReset = () => {
    navigate("/reset");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-[60px]"
    >
      {/* Page title */}
      <div className="text-[28px] font-bold mb-[30px]">Enter OTP</div>

      {/* OTP input boxes */}
      <div className="flex">
        {otp.map((digit, index) => {
          const showErrorBorder = touched[index] && digit === "";
          return (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              placeholder="_"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-[66px] h-[66px] mx-[5px] text-[20px] text-center border rounded-[6px] outline-none ${
                showErrorBorder
                  ? "border-red-500"
                  : "border-[#ddd] focus:border-[#0D5F65]"
              }`}
            />
          );
        })}
      </div>

      {/* Display error if any */}
      {error && (
        <div className="text-red-500 text-sm mt-[20px] mb-[0px]">{error}</div>
      )}

      {/* Verify button (manual submission) */}
      <button
        type="submit"
        className="mt-[30px] bg-[#0D5F65] text-[14px] text-white rounded-[6px] w-[450px] p-[15px] text-center cursor-pointer hover:bg-[#fff] hover:text-[#000] border-[1px] border-[#0D5F65] transition-all duration-350"
      >
        Verify OTP
      </button>

      {/* Back to Email button */}
      <div
        onClick={goBackToReset}
        className="mt-[20px] rounded-[6px] p-[15px] text-center w-[450px] bg-[#ddd] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#fff] border-[1px] border-[#ddd] text-[14px]"
      >
        Back to Email
      </div>
    </form>
  );
};

export default OtpVerification;
