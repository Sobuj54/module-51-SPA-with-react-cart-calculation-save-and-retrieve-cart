import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
             <h3>order summary </h3>
            <h4>selected items : {cart.length}</h4>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${}</p>
            <p>Tax : ${}</p>
            <h6>Grand Total : ${}</h6>
        </div>
    );
};

export default Cart;