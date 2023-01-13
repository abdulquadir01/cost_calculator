
import './App.css';
import axios from "axios";
import {useReducer,useState,useEffect} from "react";
import { cartReducer } from './reducers/cartReducer';

function App() {

  const [state, dispatch] = useReducer(cartReducer,{
    cart:[],
    products:[]
  });
  console.log(state);
  const fetchProducts=async()=>{
    const {data}=await axios.get('https://dummyjson.com/products');
    //console.log(data);
    dispatch({
      type:"ADD_PRODUCTS",
      payload:data.products
    })
  }

  useEffect(() => {
    fetchProducts();
  
    
  }, [])
  
 

  return (
   <h1>Hello</h1>
  );
}

export default App;
