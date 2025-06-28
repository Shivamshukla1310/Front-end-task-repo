import { useRef } from 'react';
import Header from '../components/Header';

export default function ForgotPassword() {
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (idx < inputsRef.current.length - 1) {
        inputsRef.current[idx + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 bg-white font-sans">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Reset Password</h2>

          <div className="flex justify-center gap-2 sm:gap-3 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-semibold bg-[#d9d9d9] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={(e) => handleChange(e, i)}
                ref={(el) => (inputsRef.current[i] = el)}
              />
            ))}
          </div>

          <button className="w-full bg-teal-800 text-white py-2 rounded-full font-medium hover:bg-teal-900 transition">
            Send Reset Link
          </button>

          <button className="w-full mt-3 bg-slate-400 text-white py-2 rounded-full font-medium hover:bg-slate-500 transition">
            Change Email
          </button>
        </div>
      </div>
    </>
  );
}
