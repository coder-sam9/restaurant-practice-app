import React from 'react'
import Button from '../../UI/Button/Button';
import CartIcon from '../../../assets/icons/CartIcon.js';
import classes from './HeaderButtonCart.module.css'

function HeaderCardButton(props) {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
  )
}

export default HeaderCardButton