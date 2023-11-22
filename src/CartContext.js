import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let newTotalQuantity = 0;
        let newTotalPrice = 0;

        if (cart && cart.length > 0) {
            cart.forEach(element => {
                newTotalQuantity += element.quantity;
                newTotalPrice += element.quantity * element.price;
            });
        }

        setTotalQuantity(newTotalQuantity);
        setTotalPrice(newTotalPrice);
    }, [cart]);
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            setCart(newCart);
        }
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    const decreaseItem = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        const newCart = [...cart];
        if (newCart[existingProductIndex].quantity === 1) {
            newCart.splice(existingProductIndex, 1);
        } else {
            newCart[existingProductIndex].quantity -= 1;
        }
        setCart(newCart);
    };
    const increaseItem = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        const newCart = [...cart];
        newCart[existingProductIndex].quantity += 1;
        setCart(newCart);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseItem, increaseItem, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
