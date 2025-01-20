import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'
import MealsHeader from '../../../assets/images/meals.png';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

function Header() {
  return (
    <Fragment>

    <header className={classes.header}>
      <h1>
        ReactMeals
      </h1>
      <HeaderCardButton/>
    </header>
      <div className={classes['main-image']}>
        <img src={MealsHeader}/>
      </div>
    </Fragment>
  )
}

export default Header