import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navBar.css';
import logo from '../res/ShopArnak.png'; //Import logo

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navLogo" />
      <div className="navLinks">
        <Link to="/" className="navLink-button">Home</Link>
        <Link to="/login" className="loginButton">Login</Link>
        <Link to="/cart" className="cartButton">Cart</Link>
      </div>
    </div>
  );
}