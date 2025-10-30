import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login({ email, name: 'John Doe' });
        alert('Successfully signed in!');
        navigate('/');
    };

    return (
        <div className="page">
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="signin-email">Email</label>
                            <input type="email" id="signin-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signin-password">Password</label>
                            <input type="password" id="signin-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Sign In</button>
                    </form>
                    <div className="auth-switch">
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;