import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const increaseQuantity = (productId) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.productId === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.productId === productId && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    };

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find(item => item.productId === product.id);
        if (existingItem) {
            setCartItems(prevItems => {
                return prevItems.map(item => {
                    if (item.productId === product.id) {
                        return { ...item, quantity: item.quantity + quantity };
                    }
                    return item;
                });
            });
        } else {
            setCartItems(prevItems => [...prevItems, { 
                productId: product.id, 
                title: product.title, 
                price: product.price, 
                image: product.image,
                quantity 
            }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const pay = () => {
        clearCart();
    };

    return (
        <CartContext.Provider value={{ cartItems, increaseQuantity, decreaseQuantity, addToCart, removeFromCart, clearCart, cartTotal, totalCount, pay }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;