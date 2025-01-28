import React, { useContext, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
import CartContext from '../../../store/cart-context';
function MealItemForm(props) {
  const cartCtx=useContext(CartContext);
  const needItem = cartCtx.items.find((item) => item.id === props.id);
  const [itemCount,setItemCount]=useState(needItem?needItem.addedCount:0);
    const input={
        label:'Amount',
        id:'amount_'+props.id,
        
        type:'number'
    }
  return (
   <form className={classes.form}>
    <Input input={input} defaultValue={props.price*itemCount}/>
    <button onClick={(event)=>{
      event.preventDefault()
      setItemCount(prevState=>prevState+1);
      cartCtx.addItem({
      id: props.id,
      name: props.name, 
      price: props.price,
      addedCount: itemCount + 1,
    });
    }}>+Add</button>
   </form>
  )
}

export default MealItemForm