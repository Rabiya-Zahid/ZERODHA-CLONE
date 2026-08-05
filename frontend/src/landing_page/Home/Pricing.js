import React from 'react';
function Pricing() {
    return ( 
       <div className='container    mt-5'>
        <div    className='row'>
            <div    className='col-4'>
                <h1 className='text-muted   fs-4'>Unbeatable pricing</h1>
               <p    className='text-muted   fs-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a   href=''style={{textDecoration:"none"}}>See pricing</a>
                </div>
            
            <div    className='col-2'>
            </div>
            <div    className='col-6    '>
                <div    className='row  text-center'>
                <div    className='col  p-2 border'>
                    <h1 className='mb-4'>₹0</h1>
                    <p>Free equity delivery
and <br></br>direct mutual funds</p>
                </div>
                 <div    className='col p-2 border'>
                     <h1>₹20</h1>
                     <p>Intraday and
F&O
</p>
                 </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;