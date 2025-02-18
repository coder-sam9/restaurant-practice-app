import React from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>
{props.input.label}
    </label>
    <input {...props.input} disabled />
    </div>
  )
}

export default Input