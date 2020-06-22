import React from 'react';
import './Products.css';

function Products(props) {
    return (
        <div className="products-container">
            <h1>
                <span>
                    {props.productName}
                </span>
                <span>
                    {props.price}
                </span>
            </h1>
        </div>
    )
}

export default Products;