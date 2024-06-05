import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();



export const useCartContext = () => useContext(CartContext);