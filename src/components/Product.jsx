import React, { useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CartContext from '../contexts/Cart';
import '../styles/Product.css';

export default function ProductPage() {
    const product = useLocation().state;
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        console.log(`Added ${quantity} ${product.title} to cart.`);
    };

    return (
        <div className="product-page">
            <h1>Product Details</h1>
            {product && (
                <div className="product-details">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">{product.description}</p>
                        <h3 className="product-price">{product.price} $</h3>
                        <div className="quantity-selector">
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}