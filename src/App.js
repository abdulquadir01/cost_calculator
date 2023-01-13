
import './App.css';
import axios from "axios";
import { useReducer, useState, useEffect } from "react";
import { cartReducer } from './reducers/cartReducer';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: []
  });
  console.log(state);
  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    //console.log(data);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts();


  }, [])



  return (
    <>

      <div style={{ display: "flex" }}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>


    </>

  );
}

export default App;
