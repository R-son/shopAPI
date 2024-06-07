import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import CartContext from '../contexts/Cart';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, cartTotal, totalCount, clearCart, pay } = useContext(CartContext);
    const [error, setError] = useState('');
    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login');
    };

    const handlePay = () => {
        pay();
        navigate('/checkout');
    };

    if (!token) {
        return (
            <div className="cart-container-no-log">
                <h1>You are not logged in</h1>
                <button onClick={handleRedirect} className='go-to-login'>Login</button>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
                <div>
                    <h2>Your cart is empty</h2>
                    <button className='shop-button' onClick={() => navigate('/')}>Go to Products</button>
                </div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.productId} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="cart-item-details">
                                <p className="cart-item-title">{item.title}</p>
                                <p className="cart-item-quantity">Quantity:
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                                        <span className="quantity-display">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.productId)}>+</button>
                                    </div>
                                </p>
                                <p className="cart-item-price">{item.price} $</p>
                            </div>
                            <button className="remove-item-button" onClick={() => removeFromCart(item.productId)}>
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                    <div className="cart-totals">
                        <p>Total Price: {cartTotal()} $</p>
                        <p>Total Items: {totalCount()}</p>
                        <button className="pay-button" onClick={handlePay}>Pay</button>
                        <button className="empty-cart-button" onClick={clearCart}>Empty Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
