import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Fetch user data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Update the user data in localStorage
    const updatedUser = { email, password };
    localStorage.setItem('user', JSON.stringify(updatedUser));

    alert('Account updated!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">

        <div className="mb-4 flex justify-center">
          <button onClick={() => navigate('/')} className="text-white hover:text-blue-500">
            <FaHome size={24} />
          </button>
        </div>
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Account Information</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400">Email:</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="mt-1 block w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;