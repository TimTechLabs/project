import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-56 h-screen sticky top-0 bg-[#424d58] text-white p-6 flex flex-col justify-between shrink-0">
      <div>
        <h1 className="text-xl font-medium tracking-wide">Portfolio</h1>
      </div>

      <nav className="flex flex-col space-y-4 text-base font-normal mt-auto">
        <Link to="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;