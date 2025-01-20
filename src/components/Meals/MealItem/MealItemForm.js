import React, { Fragment } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
function MealItemForm(props) {
    const input={
        label:'Amount',
        id:'mealCount',
        value:1,
        type:'number'
    }
  return (
   <form className={classes.form}>
    <Input input={input}/>
    <button onClick={()=>console.log("hello")}>+Add</button>
   </form>
  )
}

export default MealItemForm