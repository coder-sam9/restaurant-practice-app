import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../store/cart-context';
function Cart({onClose}) {
    const cart=useContext(CartContext);
    const cartItem=(<ul>{

    cart.items.map(item=>{return <li key={item.id}> 
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
            <span>{cart.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={()=>closeCart()} >Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart