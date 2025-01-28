import React, { useContext } from 'react'
import Button from '../../UI/Button/Button.js';
import CartIcon from '../../../assets/icons/CartIcon.js';
import classes from './HeaderButtonCart.module.css'
import CartContext from '../../../store/cart-context.js';

function HeaderCardButton({onOpen}) {
  const cart=useContext(CartContext);
  const openCart=()=>{
    onOpen();
  }
  return (
    <button className={classes.button} onClick={()=>openCart()}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {cart.totalItems}
        </span>
    </button>
  )
}

export default HeaderCardButton