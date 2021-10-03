import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    console.log(props);

    const { img, name, seller, price, stock } = props.product;


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
                <p><small>Price: ${price}</small></p>
                <br />
                <p><small>only {stock} left in stock- order soon</small>
                </p>
                <br />
                <button className="buy-button" onClick={()=>props.handleAddProduct(props.product)}
                >


                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart
                </button>

            </div>

        </div>
    );
};

export default Product;