export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return { ...state, products: action.payload }
        case "ADD_TO_CART":
           // console.log("ADDEDD!!!");
            
            return { ...state, cart: [...state.cart, action.payload] }
        case "REMOVE_FROM_CART":
           // console.log("REMOVED!!!")
            return { ...state, cart: state.cart.filter((cart_item)=> cart_item.id!==action.payload.id) }
        case "CHANGE_CART_QTY":
            return {...state,cart:state.cart.filter((cart_item)=>{
               return  cart_item.id===action.payload.id?cart_item.qty=action.payload.qty:cart_item.qty;
            })}
        default:
            return state;
    }
}