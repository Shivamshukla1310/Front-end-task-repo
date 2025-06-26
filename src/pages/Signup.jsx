import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Sign up for Home Services</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-800">Name</label>
              <input
                type="text"
                placeholder="Enter  your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">Email</label>
              <input
                type="email"
                placeholder="Enter  your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">Password</label>
              <input
                type="password"
                placeholder="Enter  your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm  your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
            <button className="w-full bg-teal-800 text-white py-2 rounded-md font-medium hover:bg-teal-900 transition">
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-700 font-semibold hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
