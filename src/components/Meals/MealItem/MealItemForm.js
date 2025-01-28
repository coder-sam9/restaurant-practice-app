import React, { useContext, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
import CartContext from '../../../store/cart-context';
function MealItemForm(props) {
  const cartCtx=useContext(CartContext);
  const currentItem = cartCtx.items.find(item => item.id === props.id);
  const [itemCount, setItemCount] = useState(currentItem ? currentItem.addedCount : 0);

    const input={
        label:'Amount',
        id:'amount_'+props.id,
        value:props.price*currentItem?.addedCount||0,
        type:'number'
    }
  return (  
   <form className={classes.form}>
    <Input input={input} />
    <button onClick={(event)=>{
      event.preventDefault();
      cartCtx.addItem({
        id: props.id,
        name: props.name, 
        price: props.price,
        addedCount: currentItem?.addedCount||0 + 1,
      },'add');
      setItemCount(prev=>prev+1);
    }}>+Add</button>
   </form>
  )
}

export default MealItemForm