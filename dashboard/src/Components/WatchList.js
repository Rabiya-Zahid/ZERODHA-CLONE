import React,{useState,useContext} from 'react';
import GeneralContext from "./GeneralContext";
import  {Tooltip,Grow, formControlClasses} from "@mui/material";
import  {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from    "@mui/icons-material";
import  { watchlist} from  "../data/data"    ; 
import { DoughnutChart } from './DoughnutChart';
const labels=watchlist.map((subArray)=> subArray["name"]);
const   WatchList=()=>{
    const   data={
        labels,
        datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
    }
    return(
       <div className='container    mt-2'>
        <div className="position-relative"   >
            {/* <span   className='px-0'> */}
            <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy,bse,nifty fut weekly,gold mcx"
          className="form-control   form-control-sm rounded-0   border-0 pe-5   border-bottom  shadow-none "
       ></input>
       <span    className="position-absolute top-50 end-0  translate-middle-y me-1" > {watchlist.length}/50</span>
        {/* </span> */}
        
        </div>
        <ul className='px-0'>
            {watchlist.map((stock,index)=>{
            return <WatchListItem stock={stock}   key={index}></WatchListItem>;
                 
            })}
        </ul>
        <DoughnutChart  data={data}></DoughnutChart>
       </div>
    );
};
export  default WatchList;

const   WatchListItem=({stock})=>{
    const [showWatchlistActions,setShowWatchlistActions]  =useState(false);
    const   handleMouseEnter=(e)=>{
        setShowWatchlistActions(true);
    };
    const   handleMouseLeave=(e)=>{
        setShowWatchlistActions(false);
    };
    return  (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        className="position-relative"
        >
            <div    className='container d-flex align-items-center justify-content-between '>
            <p  className={stock.isDown  ? "text-danger":"text-success"}>{stock.name}</p>
            <div    className="d-flex align-items-center gap-2">
                <span >{stock.percent}</span>
                {stock.isDown   ?(
                    <KeyboardArrowDown  className='text-danger'></KeyboardArrowDown>
                ):(
                    <KeyboardArrowUp    className='text-success'></KeyboardArrowUp>
                )}
                <span   >{stock.price}</span>
            </div>
            
            </div>
            {showWatchlistActions   &&  <WatchListActions uid={stock.name}   />}
        </li>
    );
};

const   WatchListActions=({uid})=>{
     const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
};
return(
    <span   className="position-absolute top-0 end-0 h-100 d-flex align-items-center bg-white pe-2">
        <span   className="d-flex align-items-center gap-2">
            <Tooltip    title="Buy (B)"  placement='top' arrow   TransitionComponent={Grow}  onClick={handleBuyClick}>
            <button>    Buy</button>
            </Tooltip>
            <Tooltip    title="Sell (S)"  placement='top' arrow   TransitionComponent={Grow}    onClick={handleSellClick}>
            <button>   Sell</button>
            </Tooltip>
            <Tooltip    title="Analytics (A)"  placement='top' arrow   TransitionComponent={Grow}>
            <button className='action'><BarChartOutlined className='icon' />  </button>
            </Tooltip>
             <Tooltip    title="More"  placement='top' arrow TransitionComponent={Grow}>
            <button className='action' ><MoreHoriz className='icon' /></button>
            </Tooltip>

        </span>
    </span>
);
};
