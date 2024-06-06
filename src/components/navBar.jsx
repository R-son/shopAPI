import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import logo from '../res/ShopArnak.png';

export default function Navbar() {
    const [token, setToken] = useState(localStorage.getItem('authToken'));

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem('authToken'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="navLogo" />
            <div className="navLinks">
                <Link to="/" className="navLink-button">Home</Link>
                <Link to="/cart" className="cartButton">Cart</Link>
                {token ? 
                    <Link to="/logout" className="logoutButton">Logout</Link> :
                    <Link to="/login" className="loginButton">Login</Link>
                }
            </div>
        </div>
    );
}