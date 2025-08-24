import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Urvann Plant Store</Link>
        
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/catalog" className="hover:text-green-200 transition-colors">Catalog</Link>
            </li>
            
            {currentUser ? (
              <li className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center hover:text-green-200 transition-colors"
                >
                  <span className="mr-1">Admin</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50">
                    <Link 
                      to="/admin" 
                      className="block px-4 py-2 hover:bg-green-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-green-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              // Show Login link instead of Admin link when not logged in
              <li>
                <Link to="/login" className="hover:text-green-200 transition-colors">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;