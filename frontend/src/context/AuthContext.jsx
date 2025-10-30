import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setCurrentUser(userData);
    };

    const signup = (userData) => {
        setIsAuthenticated(true);
        setCurrentUser(userData);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setCurrentUser(null);
    };

    const value = { isAuthenticated, currentUser, login, signup, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};