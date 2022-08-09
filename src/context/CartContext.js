import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isInCart = cart.some((producto) => producto.id === item.id);

    if (isInCart) {
      const updateCart = cart.map((producto) => {
        if (producto.id === item.id) {
          return { ...producto, quantity: producto.quantity + item.quantity };
        }
      });
      setCart(updateCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const cleanCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const cantInCart = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };
  const valueToShare = {
    cart,
    cleanCart,
    addToCart,
    removeItem,
    cantInCart,
    totalPrice,
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
};

export { CartProvider };
