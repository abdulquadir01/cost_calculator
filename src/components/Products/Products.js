import React from 'react'
import Product from '../Product/Product';
import  '../Products/Products.css';

function Products({ state, dispatch }) {
    const { products } = state;
    return (
        <div className='products'>
            {products.map((item, index) => {

                return <Product cart={state.cart} dispatch={dispatch} key={item.id} item={item}/>
            })}

        </div>
    )

}

export default Products