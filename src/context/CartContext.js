import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cleanCart = () => {
    setCart([]);
  };

  const removeToCart = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id) ? true : false;
  };

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    console.log(`carrito`, cart);
  };

  const valueToShare = {
    cart,
    isInCart,
    cleanCart,
    addToCart,
    removeToCart,
    cantInCart: cart.lenght,
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
};

export { CartProvider };
