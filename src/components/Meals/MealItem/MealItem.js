import React, { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
    const cartCtx=useContext(CartContext);
    const needItem=cartCtx.items.filter(item=>{
        return item.id===props.id;
    })
    const itemCount=needItem[0]?needItem[0].addedCount:0;
  return (
    <li className={classes.meal}>
        <div>
            <h3>
{props.item.name}
            </h3>
            <div className={classes.description}>
                {props.item.description}
            </div>
            <div className={classes.price}>
                {props.item.price}
            </div>
        </div>
        <div>
            <MealItemForm id={props.id} price={props.item.price}/>
        </div>
    </li>
  )
}

export default MealItem