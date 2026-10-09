
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-[#181a1b] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#121415] border border-gray-800/80 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Username"
              className="w-full p-3.5 bg-[#121415] text-white border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 placeholder-gray-400 text-base"
            />
          </div>

          <div>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full p-3.5 bg-[#121415] text-white border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 placeholder-gray-400 text-base"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#2b7fff] text-white py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition-colors mt-2 text-base"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-300 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;