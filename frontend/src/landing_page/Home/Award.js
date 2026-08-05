import React from 'react';
function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'   >
            <div className='col-6   mt-5'>
             <img   src='media/images/largestBroker.svg'/>
                </div>   
            <div className="col-6 p-5 mt-5">
          <h1   className='text-muted'>Largest stock broker in India</h1>
          <p className="mb-5    text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p     className='text-muted'>Futures and Options</p>
                </li>
                <li>
                  <p     className='text-muted'>Commodity derivatives</p>
                </li>
                <li>
                  <p     className='text-muted'>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p     className='text-muted'>Stocks & IPOs</p>
                </li>
                <li>
                  <p     className='text-muted'>Direct mutual funds</p>
                </li>
                <li>
                  <p     className='text-muted'>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;

        