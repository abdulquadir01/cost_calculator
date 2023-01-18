import React from 'react';
import "./Product.css";

function Product({cart,dispatch,item}) {
    
    return (
        <div className='product'>
            
                    <img style={{ height: "150px", objectFit: "cover" }} src={item.thumbnail} alt={"index"} />
                    {cart.some(cart_item => cart_item.id === item.id) ?(

                        <button onClick={()=>dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item
                        })} style={{ width: "100%" }}>REMOVE</button>

            ):(
                        <button onClick={()=>dispatch({
                            type: "ADD_TO_CART",
                            payload: {...item,qty:1}
                        })} style={{ width: "100%" }}>ADD</button>)

                    }

            
        

        
        </div>
    )

}

export default Product