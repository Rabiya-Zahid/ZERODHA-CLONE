import React from 'react';
import  Menu    from    "./Menu";
const   TopBar=()=>{
    return  (
       <div className=' topbar-container' >
        <div    className='row mb-3 mt-3'>
            <div    className='col-2    d-flex  align-items-center  mt-0    '>
                <p  className='index  mb-0 me-4 text-nowrap    '>NIFTY 50</p>
                <p  className='index-points mb-0 me-3'>{100.2}</p>
                <p  className='percent  mb-0    me-5'></p>
            </div>
        
        <div    className='col-2     d-flex  align-items-center  mt-0   '>
            <p  className='index    mb-0  me-4'>SENSEX</p>
            <p  className='index-points mb-0  me-4'>{100.2}</p>
            <p  className='percent  mb-0    me-5'></p>
        </div>
        <div    className='col border-start    '><Menu></Menu></div>
        
        </div>
       </div>
    );
};
export  default TopBar; 