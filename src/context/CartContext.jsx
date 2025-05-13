import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const saveCart = (items) => {
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const addToCart = (product, quantity, size, color) => {
    const key = `${product.id}_${size}_${color}`;
    const existing = cart.find(item => item.key === key);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map(item =>
        item.key === key
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          key,
          id: product.id,
          title: product.title_ru,
          price: product.price,
          image: product.images[0],
          size,
          color,
          quantity,
        },
      ];
    }
    saveCart(updatedCart);
  };

  const removeFromCart = (key) => {
    const updatedCart = cart.filter(item => item.key !== key);
    saveCart(updatedCart);
  };

  const updateQuantity = (key, quantity) => {
    const updatedCart = cart.map(item =>
      item.key === key ? { ...item, quantity } : item
    );
    saveCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
