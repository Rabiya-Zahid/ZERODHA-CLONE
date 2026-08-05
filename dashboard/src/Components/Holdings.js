import React,{useState,useEffect} from 'react';
import  axios from  'axios';
import { VerticalGraph } from './VerticalGraph';
// import  {holdings}  from  "../data/data";

const   Holdings=()=>{
  const [allHoldings,setAllHoldings]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allHoldings").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data);
    });
  },[]);

  const labels=allHoldings.map((subArray)=> subArray["name"]);
  const data={
    labels,
    datasets:[
      {
        label:"Stock  Price",
        data:allHoldings.map((stock)=>stock.price),
        backgroundColor:"rgba(255,99,132,0.5)",
      },
    ],
  };
    return(
      <>
      <div  className='w-100    '>
      <div  className='row mt-5  '>
        <h5 className='mt-5 text-muted'>Holdings ({allHoldings.length})</h5>
      </div>
      
       <div className="row  mt-5  "  >
        <table  className='border-top w-100 '>
          <thead  className='  justify-content-between  border-bottom'>
          <tr>
            <th className='me-4 text-end  px-4'>Instrument</th>
            <th className='me-4 text-end  px-4'>Qty.</th>
            <th className='me-4 text-end px-4'>Avg. cost</th>
            <th className='me-4 text-end  px-4'>    LTP</th>
            <th className='me-4 text-end  px-4'>Cur. val</th>
            <th className='me-4 text-end  px-4'>P&L</th>
            <th className='me-4 text-end  px-4'>Net chg.</th>
            <th className='me-4 text-end  px-4'>Day chg.</th>
          </tr>
          </thead>
          {allHoldings.map((stock,index)=>{
            const currValue=stock.price*stock.qty;
            const isProfit=currValue-stock.avg*stock.qty>=0.0;
            const profClass=isProfit?"text-success":"text-danger";
            const dayClass=stock.isLoss?"text-danger":"text-success";
            return  (
            <tr key={index} >
              <td className='me-4 text-end  px-4'>{stock.name}</td>
              <td className='me-4 text-end  px-4'>{stock.qty}</td>
              <td >{stock.avg.toFixed(2)}</td>
               <td  >{stock.price.toFixed(2)}</td>
               <td  >{currValue.toFixed(2)}</td>
               <td className={profClass}>
                {(currValue-stock.avg*stock.qty).toFixed(2)}
               </td>
               <td   className={profClass}>{stock.net}</td>
               <td  className={dayClass}>{stock.day}</td>
            </tr>
            );
          })}
          </table>
          </div>
          <div className="row mt-5  w-100 justify-content-between">
        <div className="col-4 mt-5  px-4">
          <h5 className="d-flex flex-column">
            <span>29,875.</span>
            <span className='fs-6 text-muted'>55</span>
          </h5>
          <p  className='fs-6 text-muted'>Total investment</p>
        </div>
        <div className="col-4 mt-5  px-4">
          <h5 className="d-flex flex-column">
    <span>31,428.</span>
    <span className='fs-6 text-muted  '>95</span>
</h5>
          <p  className='fs-6 text-muted'>Current value</p>
        </div>
        <div className="col-4 mt-5  px-4  ">
          <h5 className="d-flex align-items-baseline  ">1,553.40 <span className="ms-2">(+5.20%)</span></h5>
          <p  className='mt-4 fs-6 text-muted '>P&L</p>
        </div>
      </div>

       </div>
       <VerticalGraph data={data}></VerticalGraph>
          </>
    );
};
export  default Holdings;