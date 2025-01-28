import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
function Cart(props) {
    const cartItem=<ul>{

    [{id:1,name:'Sushi',amount:2,price:12.99}].map(item=>{return <li key={item.div}> 
        {item.name}
    </li>})}
    </ul>
  return (
    <Modal>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart