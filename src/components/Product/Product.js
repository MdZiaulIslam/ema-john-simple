import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, stock, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>By: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock} left in the stock - Order soon</small></p>
            </div>


        </div>
    );
};

export default Product;