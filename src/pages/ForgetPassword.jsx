import Header from '../components/Header';
import { RiGoogleLine } from "react-icons/ri";

export default function ForgotPassword() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 font-sans">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Forgot Password</h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
            <button className="w-full bg-teal-800 text-white py-2 rounded-full font-medium hover:bg-teal-900 transition cursor-pointer">
              Reset Password
            </button>
            <div className="flex items-center justify-center text-sm text-black font-semibold">Or</div>
            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-black py-2 rounded-full hover:bg-gray-200 transition font-semibold cursor-pointer">
              <RiGoogleLine className="text-lg" />
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
