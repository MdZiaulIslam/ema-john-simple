import React from 'react';

const h4 = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, product) => total + product.price, 0)
    let total = 0;
    let shipping = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
        if(total > 35){
            shipping = 0;
        }
        else if(total > 15){
            shipping = 4.99;
        }
        else if(total > 0){
            shipping = 12.99;
        }
    }
    const tax = total / 10;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax} </small></p>
            <p>Total Price: {total + shipping + tax}</p>

        </div>
    );
};

export default h4;