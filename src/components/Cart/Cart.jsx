import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
        // way 1
        if(product.quantity == 0){
            product.quantity = 1;
        }
        // way 2
        // simple way
        //product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h3>order summary </h3>
            <h4>selected items : {quantity}</h4>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;