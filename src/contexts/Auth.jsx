import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('authToken'),
        userId: localStorage.getItem('userId'),
    });

    const login = (token, userId) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId);
        setAuth({ token, userId });
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setAuth({ token: null, userId: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;