import React from 'react';
function Hero() {
    return ( 
        <section    className='container-fluid' id='supportHero'>
            <div    className=' p-5 '   id='supportWrapper'>
            <h4>Support Portal</h4>
            <a  href=''>Track   Tickets</a>
            </div>
            <div     className='row p-3 mr-5' >
                <div     className='col-6 p-5 ' >
                    <h1 className='fs-3'>Search  for an  answer  or  browse  help    topics  to  create  a   ticket</h1>
                    <input placeholder='Eg.how do I activate F&O,why is my order getting rejected..' /><br></br>
                    <a  href="" style={{marginRight:10}}>Track   account opening</a>
                    <a  href=""style={{marginRight:10}}>Track   segment activation</a>
                    <a  href="">Intraday margins</a><br></br>
                    <a  href="">Kite    user    manual</a>
                </div>
                <div     className='col-6 p-4' >
                    <h1 className='fs-3'>Featured</h1>
                    <ol style={{lineHeight:2}}>
                        <li style={{backgroundColor:"rgba(255,255,255,0.5)"}}> <a  href=''>Current Takeovers   and Delisting-January   2024</a></li>
                        <li style={{backgroundColor:"rgba(255,255,255,0.5)"}}><a  href=''>Latest  Intraday    leverages-MIS   &CO</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
     );
} 
export  default   Hero;