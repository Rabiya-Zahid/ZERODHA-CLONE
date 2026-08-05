import React from 'react';

const Summary = () => {
    return (
        
        <div className="summary">

            {/* Top 20% */}
            <div className="summary-top border-bottom">
                <h4 className='text-muted   fs-5   mt-4'>Hi, User!</h4>
            </div>

            {/* Middle 50% */}
            <div className="summary-middle   border-bottom">
                <h4 className='fs-6 mt-3    text-muted'>Equity</h4>
                <h2 className='mt-5 text-muted '>3.74k</h2>
                <p  className='mt-4 '>Margin available</p>
            </div>

            {/* Bottom 30% */}
            <div className="summary-bottom  ">
                <h4 className='fs-5 mt-5 mb-0 text-muted  '>Holdings(13)</h4>
            </div>

        </div>
       
    );
};

export default Summary;