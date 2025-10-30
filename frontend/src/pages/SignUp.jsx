import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirm) {
            alert('Passwords do not match!');
            return;
        }
        signup({ name, email });
        alert('Account created successfully!');
        navigate('/');
    };

    return (
        <div className="page">
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="signup-name">Full Name</label>
                            <input type="text" id="signup-name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-email">Email</label>
                            <input type="email" id="signup-email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-password">Password</label>
                            <input type="password" id="signup-password" value={password} onChange={e => setPassword(e.target.value)} required minLength="8" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-confirm">Confirm Password</label>
                            <input type="password" id="signup-confirm" value={confirm} onChange={e => setConfirm(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Sign Up</button>
                    </form>
                    <div className="auth-switch">
                        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;