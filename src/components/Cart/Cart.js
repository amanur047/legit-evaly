import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const totalPrice = cart.reduce((total, prd)=>total+prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total >0) {
        shipping = 12.99;
    }

    const tax = (total/10);

    return (
        <div>
            <h4>Order Summary:</h4>
            <h4>Items Ordered: {cart.length} </h4>
            <p>total price: {total}</p>
            <p>Tax: {tax}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Price : {total+shipping+tax}</p>

        </div>
    );
};

export default Cart;