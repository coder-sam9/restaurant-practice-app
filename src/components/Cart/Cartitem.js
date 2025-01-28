import React, { useContext } from 'react'
import classes from './CartItem.module.css';
import Input from '../UI/Input/Input';
import CartContext from '../../store/cart-context';

function Cartitem({item}) {
  const cartCtx=useContext(CartContext);
  const adding=()=>{
    cartCtx.addItem({...item,addedCount:item.addedCount+1},'add')
  }
  const removing = () => {
    if (item.addedCount > 0) {
      // Decrease count or update the item in the cart
      cartCtx.addItem({
        ...item,
        addedCount: item.addedCount - 1,
      },'reduce');
    } else {
      // If count is 0, remove the item from the cart
      cartCtx.removeItem(item.id);
    }
  };
  
  return (
    <div className={classes['cart-item']}>
<div>
   <h2>{item.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{item.price}</div>
          <div className={classes.amount}>x{item.addedCount}</div>
          
        </div>
</div>
<div>
  <button onClick={()=>removing()}>
    -
  </button>
  <button onClick={()=>adding()}>
    +
  </button>
</div>
       
    </div>
  )
}

export default Cartitem;