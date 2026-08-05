import React from 'react';
function Stats() {
    return ( 
        <div className='container   p-3'   >
            <div className='row p-3'   >
                <div className='col-6   p-3'   >
                <h1 className='text-muted   fs-4    mb-5'>Trust with confidence</h1>
                <h2 className='text-muted   fs-5    '>Customer-first always</h2>
                <p  className='text-muted   fs-6    mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h2 className='text-muted   fs-5'>No spam or gimmicks</h2>
                <p  className='text-muted   fs-6    mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a   href=''style={{textDecoration:"none"}}> Our philosophies</a> </p>
                <h2 className='text-muted   fs-5'>The Zerodha universe</h2>
                <p   className='text-muted   fs-6   mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h2 className='text-muted   fs-5'>Do better with money</h2>
                <p  className='text-muted   fs-6    mb-4' >With initiatives like <a href=''style={{textDecoration:"none"}}>Nudge</a> and <a    href=''style={{textDecoration:"none"}}>Kill Switch,</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div    className='col-6   mt-1    p-3'>
                <img src='media/images/ecosystem.png' style={{width:"100%"}} />
                <div    className='text-center  '>
                    <a  href='' className='mx-5'style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i>   </a>
                   <a   href=''style={{textDecoration:"none"}}>Try   kite    demo   <i class="fa-solid fa-arrow-right"></i>  </a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;