import React from 'react';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
    const { currentUser } = useAuth();

    const updateProfile = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    const updatePassword = (e) => {
        e.preventDefault();
        const newPassword = e.target.elements['new-password'].value;
        const confirmPassword = e.target.elements['confirm-new-password'].value;
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        alert('Password updated successfully!');
        e.target.reset();
    };

    return (
        <div className="page">
            <div className="settings-container">
                <h2 className="settings-title">Account Settings</h2>
                <div className="settings-section">
                    <h3>Profile Information</h3>
                    <form onSubmit={updateProfile}>
                        <div className="form-group">
                            <label htmlFor="profile-name">Full Name</label>
                            <input type="text" id="profile-name" defaultValue={currentUser?.name || ''} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-email">Email</label>
                            <input type="email" id="profile-email" defaultValue={currentUser?.email || ''} readOnly/>
                        </div>
                        <button type="submit" className="btn">Update Profile</button>
                    </form>
                </div>
                <div className="settings-section">
                    <h3>Change Password</h3>
                    <form onSubmit={updatePassword}>
                        <div className="form-group">
                            <label htmlFor="current-password">Current Password</label>
                            <input type="password" id="current-password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">New Password</label>
                            <input type="password" id="new-password" required minLength="5" />
                        </div>
                        <div className="form-group">
                             <label htmlFor="confirm-new-password">Confirm New Password</label>
                            <input type="password" id="confirm-new-password" required />
                        </div>
                        <button type="submit" className="btn">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;