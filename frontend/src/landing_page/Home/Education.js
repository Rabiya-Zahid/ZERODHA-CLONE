import React from 'react';
function Education() {
    return ( 
        <div    className='container'>
            <div    className='row  text-center'>
            <div className='col-6  '   >
                <img    src='media/images/education.svg'  className='mb-5'  />
            </div>
            <div    className='col-6  mt-4  p-5'>
                <h1 className='fs-4 mb-3    text-muted'>Free and open market education</h1>
                <p  className='text-muted   fs-6    mb-2 ' >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a  href=''style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i></a>
                <p  className='text-muted   fs-6    mt-3 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href=''style={{textDecoration:"none"}} >TradingQ&A   <i class="fa-solid fa-arrow-right"></i></a>

            </div>
            </div   >
        </div>
     );
}

export default Education;