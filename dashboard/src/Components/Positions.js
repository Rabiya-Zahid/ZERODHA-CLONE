import React, {useState,useEffect} from 'react';
import  axios from  'axios';
// import  {positions} from    "../data/data";
const   Positions=()=>{

const [allPositions,setAllPositions]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allPositions").then((res)=>{
      console.log(res.data);
      setAllPositions(res.data);
    });
  },[]);

    return(
        <div  className='w-100  border-start   '>
      <div  className='row mt-5  '>
        <h5 className='mt-5 text-muted'>Positions  ({allPositions.length})</h5>
      </div>
      
       <div className="row  mt-5  "  >
        <table  className='border-top w-100 '>
          <thead  className='  justify-content-between  border-bottom'>
          <tr>
            <th className='me-4 text-end  px-4'>Product</th>
            <th className='me-4 text-end  px-4'>Instrument</th>
            <th className='me-4 text-end px-4'>Qty. cost</th>
            <th className='me-4 text-end  px-4'>Avg.    LTP</th>
            <th className='me-4 text-end  px-4'>LTP</th>
            <th className='me-4 text-end  px-4'>P&L</th>
            <th className='me-4 text-end  px-4'>Chg.</th>
            
          </tr>
          </thead>
            {allPositions.map((stock,index)=>{
                        const currValue=stock.price*stock.qty;
                        const isProfit=currValue-stock.avg*stock.qty>=0.0;
                        const profClass=isProfit?"text-success":"text-danger";
                        const dayClass=stock.isLoss?"text-danger":"text-success";
                        return  (
                        <tr key={index} >
                          <td className='me-4 text-end  px-4'>{stock.product}</td>
                          <td className='me-4 text-end  px-4'>{stock.name}</td>
                          <td className=''>{stock.qty}</td>
                          <td >{stock.avg.toFixed(2)}</td>
                           <td  >{stock.price.toFixed(2)}</td>
                           
                           <td className={profClass}>
                            {(currValue-stock.avg*stock.qty).toFixed(2)}
                           </td>
                          
                           <td  className={dayClass}>{stock.day}</td>
                        </tr>
                        );
                      })}



          </table>
          </div>
           </div>
    )
}
export  default Positions;