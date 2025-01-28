import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import Cartitem from "./Cartitem";
function Cart({ onClose }) {
  const cart = useContext(CartContext);
  const cartItems = <ul>
   { cart.items.map((item) => 
    <Cartitem item={item} key={item.id} />
  )}
  </ul>

  const closeCart = () => {
    onClose();
  };
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cart.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={() => closeCart()}>
          Close
        </button>
        <button className={classes.button} onClick={()=>closeCart()}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
