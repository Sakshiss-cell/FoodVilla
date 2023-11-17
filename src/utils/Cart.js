import React from 'react';
import { useDispatch } from "react-redux";
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { clearCart } from './cartSlice';




const Cart=()=> {

    const cartItems=useSelector(store=>store.cart.items);

    const dispatch=useDispatch();

const handleClearCart=()=>{
   dispatch(clearCart());
}

    
  return (
    <div>
        <h1>Cart Items</h1>
         {
            cartItems.map((item)=>{
                return <p>{item}</p>
            })
         }

         <button onClick={()=>handleClearCart()}>clear Item</button>
    </div>
  )
}

export default Cart