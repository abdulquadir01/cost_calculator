import React from 'react'
import { useState ,useEffect} from 'react';
import CartElement from '../CartElement/CartElement';
import "./Cart.css";
function Cart({state,dispatch}) {
    const {cart}=state;
    const [total, setTotal] = useState(0);
    const changeCartQty=(cart_id,cart_qty)=>{
        console.log("CHHANGE HONA CHAHIYE")
        dispatch({
            type:"CHANGE_CART_QTY",
            payload:{
               id: cart_id,
               qty:cart_qty
            }
        });
    }

    useEffect(() => {
        setTotal(cart.reduce((acc,curr)=>{
            return acc+Number(curr.price)*curr.qty;
        },0))
    }, [cart])
    
  return (
    

    <div className='cart'>
    <p>Your Final Amount: ${total}</p>
    
    {cart.length>0?(
        cart.map((cart_item)=>{
      return <CartElement cart_item={cart_item} changeCartQty={changeCartQty}/>
        })
        
        ):<></>
        
        
        }
    
    
    </div>
  )
}

export default Cart