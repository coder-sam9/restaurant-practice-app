import React, { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
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
            <MealItemForm id={props.id} price={props.item.price} name={props.item.name}/>
        </div>
    </li>
  )
}

export default MealItem