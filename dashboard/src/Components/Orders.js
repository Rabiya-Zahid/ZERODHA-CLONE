import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
const   Orders=()=>{
    const [allOrders,setAllOrders]=useState([]);
      useEffect(()=>{
        axios.get("http://zerodha-clone-8882.onrender.com/orders").then((res)=>{
          console.log(res.data);
          setAllOrders(res.data);
        }); 
      },[]);
    return(
        <div  className='w-100  border-start   '>
      <div  className='row mt-5  '>
        <h3 className='mt-5    text-muted'>Orders </h3>
      </div>
      
       <div className="row  mt-5  "  >
        <table  className='border-top w-100 '>
          <thead  className='  justify-content-between  border-bottom'>
          <tr>
            <th className='me-5 text-end  px-5'>Stock</th>
            <th className='me-5 text-end  px-5'>Qty.</th>
            <th className='me-5 text-end px-5'>Price</th>
            <th className='me-5 text-end  px-5'>Mode</th>
            <th className='me-5 text-end  px-5'>Total</th>
            
            
          </tr>
          </thead>

           <tbody>
    {allOrders.map((order) => (
        <tr key={order._id}>
            <td className='me-5 text-end  px-5'>{order.name}</td>
            <td className='me-5 text-end  px-5'>{order.qty}</td>
            <td className='me-5 text-end  px-5'>{order.price}</td>
            <td className='me-5 text-end  px-5'>{order.mode}</td>
            <td className='me-5 text-end  px-5'>₹{(order.qty * order.price).toFixed(2)}</td>
        </tr>
    ))}
</tbody> 

          </table>
          </div>
          </div>
    )
}
export  default Orders; 