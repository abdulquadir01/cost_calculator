import React from 'react'
import { useState ,useEffect} from 'react';
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

    <div style={{
    }}>
    <h1>Total Amount: ${total}</h1>
    
    {cart.length>0?(
        cart.map((cart_item)=>{
             return <div style={{
                    border: "2px solid black"
                }} key={cart_item.id}>
                <img src={cart_item.thumbnail}  alt="" width={"80%"} height={"150px"}/>
                <p>{cart_item.title}</p>
                <p>${cart_item.price}</p>
                <button onClick={()=>changeCartQty(cart_item.id,cart_item.qty-1)}>-</button>
                <p>{cart_item.qty}</p>
                <button onClick={()=>changeCartQty(cart_item.id,cart_item.qty+1)}>+</button>
        </div>
        })
        
        ):<></>
        
        
        }
    
    
    </div>
  )
}

export default Cart