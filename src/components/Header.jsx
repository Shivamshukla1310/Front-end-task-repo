import { Link, useLocation } from 'react-router-dom';


export default function Header() {

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">

      <Link to="/" className="flex items-center gap-2">
        <img src="../../public/logo.png" alt="logo" className="h-5 w-auto" />
        <h1 className="text-lg font-semibold text-gray-800">Dorzeno</h1>
      </Link>
    </header>
  );
}
