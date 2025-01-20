import React from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

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
            <MealItemForm />
        </div>
    </li>
  )
}

export default MealItem