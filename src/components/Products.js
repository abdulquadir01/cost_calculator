import React from 'react'

function Products({ state, dispatch }) {
    const { products, cart } = state;
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "80%"
        }}>

            {products.map((item, index) => {
                return <div style={{
                    width: "20%",
                    padding: "10px 10px",
                    border: "2px solid black"
                }} key={item.id}>
                    <img style={{ height: "150px", objectFit: "cover" }} src={item.thumbnail} alt={index} />
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
            })}

        </div>
    )
}

export default Products