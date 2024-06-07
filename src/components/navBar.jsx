import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../contexts/Cart';
import '../styles/Navbar.css';
import logo from '../res/ShopArnak.png';

export default function Navbar() {
    const { totalCount } = useContext(CartContext);
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
            <div className="navLogo">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <h1 className="shop-name">ShopArnak</h1>
            <div className="navLinks">
                <Link to="/" className="navLink-button">Home</Link>
                <Link to="/cart" className="navLink-button">
                    <FaShoppingCart />
                    <span className="cart-count">{totalCount()}</span>
                </Link>
                {token ? 
                    <Link to="/logout" className="logoutButton">Logout</Link> :
                    <Link to="/login" className="loginButton">Login</Link>
                }
            </div>
        </div>
    );
}