import { useLocation, Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isSignupPage = location.pathname === '/signup'
  
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
       <div className="flex items-center justify-center">
  <div className="flex">
    <div className="w-2 h-5 bg-black rounded-full"></div>
    <div className="w-2 h-5 bg-black rounded-full"></div>
    <div className="w-2 h-5 bg-black rounded-full"></div>
  </div>
</div>



          <span className="text-xl font-bold text-secondary-900 font-poppins">
            Dorzeno
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {isSignupPage ? (
            <>
              <Link 
                to="/login" 
                className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <span className="text-sm text-secondary-500 font-medium">Sign Up</span>
            </>
          ) : (
            <>
              <span className="text-sm text-secondary-500 font-medium">Login</span>
              <Link 
                to="/signup" 
                className="px-4 py-2 text-sm text-secondary-700 hover:text-secondary-900 transition-colors duration-200 font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header