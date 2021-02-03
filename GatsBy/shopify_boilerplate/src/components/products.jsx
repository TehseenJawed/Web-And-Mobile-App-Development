import React from 'react'
import './products.css';
import Product from '../images/products/prod-1.png'
function Products() {
    return (
        <div className='productContainer'>
            <h1>All Products</h1>
            <img src={Product} alt='product'/>
            <div className='itemInfo'>
                <h1>Custom Product</h1>
                <p><b>Description: </b>ggggg fffffff dfff</p>
            </div>
        </div>
    )
}

export default Products
