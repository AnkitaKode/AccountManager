import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RiskResults = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.url;

    useEffect(() => {
        if (!url) {
            navigate('/');
            return;
        }
        
        const timer = setTimeout(() => {
            const riskScore = Math.floor(Math.random() * 100);
            let riskLevel, securityChecksHTML;
        //Dummy logic for risk level based on risk score
            if (riskScore >= 70) {
                riskLevel = 'Low Risk';
                securityChecksHTML = `<li>✅ SSL Certificate Valid</li><li>✅ No Malware Detected</li><li>✅ Not in Blacklists</li><li>✅ Domain Reputation Good</li>`;
            } else if (riskScore >= 40) {
                riskLevel = 'Medium Risk';
                securityChecksHTML = `<li>✅ SSL Certificate Valid</li><li>✅ No Malware Detected</li><li>⚠️ Minor Security Flags</li><li>⚠️ Domain Reputation Moderate</li>`;
            } else {
                riskLevel = 'High Risk';
                securityChecksHTML = `<li>❌ SSL Certificate Issues</li><li>❌ Potential Malware</li><li>❌ Found in Blacklists</li><li>❌ Poor Domain Reputation</li>`;
            }

            setResults({ riskScore, riskLevel, securityChecksHTML });
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [url, navigate]);

    if (loading) {
        return (
            <div className="page">
                <div className="risk-container">
                    <div className="risk-header">
                        <h2 className="risk-title">Security Assessment</h2>
                        <p className="scanned-url">{url}</p>
                    </div>
                    <div className="loading" style={{ display: 'block' }}>
                        <div className="spinner"></div>
                        <p>Analyzing security risks...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="risk-container">
                 <div className="risk-header">
                    <h2 className="risk-title">Security Assessment</h2>
                    <p className="scanned-url">{url}</p>
                </div>

                <div className="risk-score-card">
                    <div className="score-display">
                        <div className="score-number">{results.riskScore}</div>
                        <div className="score-label">{results.riskLevel}</div>
                    </div>
                    <div className="risk-bar-container">
                        <div className="risk-bar">
                            <div className="risk-indicator" style={{ left: `${results.riskScore}%` }}></div>
                        </div>
                        <div className="risk-labels">
                            <span>Low Risk</span><span>Medium Risk</span><span>High Risk</span>
                        </div>
                    </div>
                </div>

                <div className="risk-details">
                    <div className="detail-card">
                        <h4>Security Checks</h4>
                        <ul dangerouslySetInnerHTML={{ __html: results.securityChecksHTML }}></ul>
                    </div>
                    <div className="detail-card">
                        <h4>Domain Information</h4>
                        <ul>
                            <li>Registered: 2022-08-10</li>
                            <li>Expires: 2026-08-10</li>
                            <li>Registrar: Cloudflare</li>
                            <li>Country: United States</li>
                        </ul>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button className="btn" onClick={() => navigate('/')}>Scan Another URL</button>
                </div>
            </div>
        </div>
    );
};

export default RiskResults;