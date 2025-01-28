import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // Compute total amount and total items dynamically
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.addedCount, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.addedCount, 0);

  // Add item handler
  const addItemHandler = (item,type) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        // If item already exists, update its addedCount
        const updatedItem = { ...existingItem, addedCount: type==='add'? existingItem.addedCount+1:existingItem.addedCount-1 };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // If item doesn't exist, add it
        updatedItems = [...prevItems, { ...item, addedCount: 1 }];
      }
      
      return updatedItems;
    });
  };

  // Remove item handler
  const removeItemHandler = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Provide context value
  const initialState = {
    items: cartItems,
    totalAmount: totalAmount,
    totalItems: totalItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={initialState}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
