
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">MyPortfolio</Link>
      </div>

      <nav className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
          Home
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">
          About
        </Link>
        <Link to="/skills" className="text-gray-600 hover:text-gray-900 font-medium">
          Skills
        </Link>
        <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium">
          Login
        </Link>
        <Link 
          to="/register" 
          className="bg-blue-600 text-white font-medium px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;