import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        alert('Logged out successfully!');
    };

    return (
        <nav className="nav-header">
            <Link to="/" className="logo">SafeWallet AI</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/settings">Settings</Link>
                        <a href="#" onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</a>
                    </>
                ) : (
                    <Link to="/signin">Sign In</Link>
                )}
            </div>
        </nav>
    );
};

export default Header;