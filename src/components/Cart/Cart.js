import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
function Cart({onClose}) {
    const cartItem=(<ul>{

    [{id:1,name:'Sushi',amount:2,price:12.99}].map(item=>{return <li key={item.id}> 
        {item.name}
    </li>})}
    </ul>);

    const closeCart=()=>{
        onClose();
    }
  return (
    <Modal>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={()=>closeCart()} >Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart