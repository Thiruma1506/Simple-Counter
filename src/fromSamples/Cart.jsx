import React from 'react';
import { useState } from 'react';
import "./cart.css";

export const Cart = () => {

const[cartCount,setCartCount]=useState(0);
const add=()=> setCartCount(cartCount+1);
const sub =() =>{

   cartCount>0 ? setCartCount(cartCount-1):setCartCount(cartCount=0);
} 
  return (
    <>
     <h1>Number of items in the cart {cartCount} </h1>
     <button className='button plus' onClick={add}>+</button>
     <button className='button minus' onClick={sub}>-</button>
    </>
  )
};
