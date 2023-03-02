import React from "react";
import Modal from "../UI/Modal";

import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{ id:'c1', name:'Shushi', amount:3, price:123.33}].map((item) => (<li>{item.name}</li>))}</ul>
    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>13.23</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;