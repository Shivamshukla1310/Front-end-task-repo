import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="../../public/logo.png" alt="logo" className="h-4 w-auto" />
        <h1 className="text-lg font-semibold text-gray-800">Home Services</h1>
      </div>

      {/* Nav Links */}
      <div className="space-x-2 font-semibold">
        <Link
          to="/login"
          className={`px-4 py-2 rounded-md  transition ${
            location.pathname === '/login'
              ? 'bg-teal-800 text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`px-4 py-2 rounded-md transition ${
            location.pathname === '/signup'
              ? 'bg-teal-800 text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
