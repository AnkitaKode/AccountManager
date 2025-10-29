import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">AccountManager</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 text-white hover:text-blue-200 transition-colors ${isActive('/') ? 'font-semibold' : ''}`}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
            <Link 
              to="/login" 
              className={`flex items-center space-x-1 text-white hover:text-blue-200 transition-colors ${isActive('/login') ? 'font-semibold' : ''}`}
            >
              <FaSignInAlt className="text-lg" />
              <span>Login</span>
            </Link>
            <Link 
              to="/register" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
