import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
        <div  className='row    text-center'  >
            <img src='media/images/homeHero.png'  alt='Hero Image' className="img-fluid mb-5 mx-auto d-block" style={{width:"70%"}} />
            <h1 className=' text-muted  mt-4'>    Invest in  everything </h1>
            <p  className='text-muted   mb-4    fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button class='btn  btn-primary p-2 fs-5    mb-5' style={{width:"20% ",margin:"0 auto"}} >Sign up for free  </button>
        </div>
       </div>
     );
}

export default Hero;