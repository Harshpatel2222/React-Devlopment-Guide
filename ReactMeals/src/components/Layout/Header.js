import React from 'react'

import mealsImage from '../../assest/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return(
        <>
            <header className={classes.header}>
                <div>ReactMeals</div>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of delecious food!"></img>
            </div>
        </>
    )
}

export default Header;