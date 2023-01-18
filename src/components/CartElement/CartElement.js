import React from 'react';
import "./CartElement.css";

function CartElement({cart_item,changeCartQty}) {
  return ( 
  <div className="cart-element" key={cart_item.id}>
  
    <img src={cart_item.thumbnail}  alt="" width={"80%"} height={"150px"}/>
    <p>{cart_item.title}</p>
    <p>${cart_item.price}</p>
    <div>
    <button onClick={()=>changeCartQty(cart_item.id,cart_item.qty-1)}>-</button>
    <span>{cart_item.qty}</span>
    <button onClick={()=>changeCartQty(cart_item.id,cart_item.qty+1)}>+</button>
    </div>
    
</div>
  )
}

export default CartElement