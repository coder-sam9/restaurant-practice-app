import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{

    const [cartItems, setCartItems] = useState([]);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.addedCount, 0);
    const removeItemHandler = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      }
      const addItemHandler = (item) => {
        setCartItems((prevItems) => {
          const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
          const existingItem = prevItems[existingItemIndex];
          let updatedItems;
          if (existingItem) {
            const updatedItem = {
              ...existingItem,
              addedCount: existingItem.addedCount + 1,
            };
            updatedItems = [...prevItems];
            updatedItems[existingItemIndex] = updatedItem;
          } else {
            updatedItems = [...prevItems, { ...item, addedCount: 1 }];
          }
          return updatedItems;
        });
      };
    const initialState={
        items:[],
        totalAmount:totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return (
        <CartContext.Provider value={initialState}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;