import React, { createContext, useState, useContext } from "react";
import itemsData from "../components/items.json";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items] = useState(itemsData);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const itemToAdd = items.find((item) => item.id === id);
        return [...prevCart, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);
