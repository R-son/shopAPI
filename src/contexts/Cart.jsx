import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import {useNavigate} from 'react-router-dom';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({
        products: [],
        totalPrice: 0
    });
    const addProduct = (product) => {
        let updatedCart;
        setCart(currCart => {
            if (currCart.products.find(p => p.id === product.id))
                updatedCart = currCart.products.map(p => p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p);
            else
            updatedCart = [...currCart.products, product];
        const updatedTotalPrice = updatedCart.reduce((total, p) => total + p.price * p.quantity, 0);
        return { ...currCart, products: updatedCart, totalPrice: updatedTotalPrice };
    })
}
    const removeProduct = (productId) => {
        setCart(currCart => {
            let updatedCart = currCart.products.filter(p => p.id !== productId);
            return { ...currCart, products: updatedCart, totalPrice: updatedCart.reduce((total, p) => total + p.price * p.quantity, 0)};
        });
    };
    const emptyCart = () => {
        setCart({products:[], totalPrice:0});
    }
    const Validate = () => {
        const navigate = useNavigate();
        navigate('/checkout');
    }
}