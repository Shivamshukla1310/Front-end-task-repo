import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import for navigation

const SetNewPassword = () => {

  // title for the page
  useEffect(() => {
    document.title = "Set New Password - Dorzeno";
  }, []);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ password: "", confirm: "" });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate(); // initialize navigation

  // Check if both password fields are valid
  const validate = () => {
    const newErrors = { password: "", confirm: "" };
    let valid = true;

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      valid = false;
    }

    if (confirmPassword.length < 8) {
      newErrors.confirm = "Confirm Password must be at least 8 characters.";
      valid = false;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirm = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(valid);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Password matched and valid! at line 37");

      // Call your API here to update the user's password
      // Example: await api.updatePassword({ password })

      setIsSubmitted(true); // Disable inputs after successful update
    }
  };

  // Navigate back to login screen
  const goToLogin = () => {
    navigate("/sign-in"); // redirect to login page
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-[60px]"
    >
      {/* Page title */}
      <div className="text-[28px] font-bold mb-[30px]">Set New Password</div>

      {/* New Password field with validation message */}
      <div className="flex justify-items-center w-[450px] mt-[10px] mb-[5px] text-[13px]">
        <label>New Password</label>
        {errors.password && (
          <div className="ml-auto text-red-500">Invalid password</div>
        )}
      </div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter new password"
        disabled={isSubmitted}
        className={`rounded-[6px] border ${
          errors.password ? "border-red-500" : "border-[#ddd]"
        } text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0 ${
          isSubmitted ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />

      {/* Confirm Password field with validation message */}
      <div className="flex justify-items-center w-[450px] mt-[20px] mb-[5px] text-[13px]">
        <label>Confirm Password</label>
        {errors.confirm && (
          <div className="ml-auto text-red-500">Mismatch or invalid</div>
        )}
      </div>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter new password"
        disabled={isSubmitted}
        className={`rounded-[6px] border ${
          errors.confirm ? "border-red-500" : "border-[#ddd]"
        } text-[#000000] w-[450px] px-[20px] py-[15px] mt-0 text-[14px] outline-0 ${
          isSubmitted ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />

      {/* Save button */}
      <button
        type="submit"
        disabled={isSubmitted}
        className={`mt-[40px] rounded-[6px] w-[450px] p-[15px] text-[14px] border-[1px] transition-all duration-350 text-center cursor-pointer ${
          isSubmitted
            ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
            : "bg-[#0D5F65] text-white hover:bg-[#fff] hover:text-[#000] border-[#0D5F65]"
        }`}
      >
        Save Password
      </button>

      {/* Return to Sign In button after success */}
      {isValid && isSubmitted && (
        <div
          onClick={goToLogin}
          className="mt-[20px] rounded-[6px] p-[15px] text-center w-[450px] bg-[#ddd] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#fff] border-[1px] border-[#ddd] text-[14px]"
        >
          Return to Sign In
        </div>
      )}
    </form>
  );
};

export default SetNewPassword;
