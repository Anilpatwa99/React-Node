import React from 'react';
import "./Success.css";

const Success = () => {
  return (
    <div className="Success">
      <div className="card">
  <div style={{borderRadius: 200, height: 200, width: 200, background: '#F8FAF5', margin: '0 auto'}}>
    <i className="checkmark">✓</i>
  </div>
  <h1 className='success_h'> Payment Successful</h1>
  <p className='success_p'>
    We received your purchase request;
    <br /> we'll be in touch shortly!
  </p>
</div>

    </div>
  );
}

export default Success
