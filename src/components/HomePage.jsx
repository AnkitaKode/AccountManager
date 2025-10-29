import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="text-center bg-gray-800 p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome</h1>
        <p className="text-gray-400 mb-8">Please login or register to access your account.</p>

        <div className="flex flex-col space-y-4">
          <Link to="/login" className="flex items-center justify-center bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            <FaUser className="mr-2" /> Login
          </Link>
          <Link to="/register" className="flex items-center justify-center bg-gray-600 text-white py-3 px-5 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out">
            <FaUser className="mr-2" /> Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;