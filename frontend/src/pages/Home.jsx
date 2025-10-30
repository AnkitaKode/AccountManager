import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const [input, setInput] = useState('');
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleScan = () => {
        if (!input.trim()) {
            alert('Please enter a URL or IP address to scan.');
            return;
        }
        if (!isAuthenticated) {
            navigate('/signin');
            return;
        }
        navigate('/scan-results', { state: { url: input } });
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            handleScan();
        }
    };

    return (
        <div className="page">
            {/* --- Main Landing Section --- */}
            <div className="landing-container">
                <div className="landing-content">
                    <h1 className="main-title">SafeWallet AI</h1>
                    <p className="subtitle">Advanced URL & IP Security Scanner</p>
                    <div className="scan-container">
                        <input
                            type="text"
                            className="scan-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleEnterKey}
                            placeholder="Enter URL or IP address to scan..."
                        />
                        <button className="btn" onClick={handleScan}>Scan</button>
                    </div>
                    {isAuthenticated && (
                        <div className="user-info">
                            <p className="welcome-text">Welcome back! Ready to scan?</p>
                        </div>
                    )}
                </div>

                <div className="description">
                    <h3>Why SafeWallet AI?</h3>
                    <p>
                        Our advanced AI-powered security scanner analyzes URLs and IP addresses in real-time...
                        Protect yourself and your organization with comprehensive risk assessment powered by
                        machine learning algorithms.
                    </p>
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate(isAuthenticated ? '/' : '/signup')}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* --- Feature Cards Section --- */}
            <div className="features-section">
                <h2> Connect Your Wallet with Confidence</h2>
                <div className="features-grid">
                    {/* Card 1: The Need */}
                    <div className="feature-card">
                        <div className="feature-icon icon-risk">⚠️</div>
                        <h3>Expose Hidden Risks</h3>
                        <p>
                            Billions are lost to malicious contracts. We scan the code for wallet-draining
                            scripts, rug pulls, and hidden functions that most users can't see.
                        </p>
                    </div>

                    {/* Card 2: The Importance */}
                    <div className="feature-card">
                        <div className="feature-icon icon-clarity">🛡️</div>
                        <h3>AI-Powered Clarity</h3>
                        <p>
                            Our AI translates complex code into a simple 0-100 safety score and a human-readable
                            explanation. Understand the risks before you connect your wallet.
                        </p>
                    </div>

                    {/* Card 3: The Impact */}
                    <div className="feature-card">
                        <div className="feature-icon icon-protect">💎</div>
                        <h3>Protect Your Assets</h3>
                        <p>
                            By flagging threats in real-time, SafeWallet AI empowers you to avoid scams and interact
                            with Web3 confidently, protecting your valuable crypto assets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
