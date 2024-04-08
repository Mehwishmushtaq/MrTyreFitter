import React from 'react';

const HowSection = () => {
  return (
    <>
      {/* How it works */}
      <div className="container mt-4">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">How It Works</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-around">
          <div className="col-auto process-box mb-10" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '10px' }}>
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-headphones"></i></span>
              </div>
              <div className="col">
                <h3 className="h4 font-theme process-title mb-2">Call Us</h3>
                <p className="font-theme process-subtitle mb-2">Call us to schedule <br/>an appointment</p>
              </div>
            </div>
          </div>
          <div className="col-auto process-box mb-10" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '10px' }}>
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-user"></i></span>
              </div>
              <div className="col">
                <h3 className="h4 font-theme process-title mb-2">Get The Expert</h3>
                <p className="font-theme process-subtitle mb-2">Speak with our expert<br/>technicians</p>
              </div>
            </div>
          </div>
          <div className="col-auto process-box mb-10" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '10px' }}>
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-arrow-rotate-left"></i></span>
              </div>
              <div className="col">
                <h3 className="h4 font-theme process-title mb-2">Get Tyre Fixed</h3>
                <p className="font-theme process-subtitle mb-2">We'll fix your tire<br/> promptly</p>
              </div>
            </div>
          </div>
          <div className="col-auto process-box mb-10" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '10px' }}>
            <div className="row align-items-center">
              <div className="col-auto">
                <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-hand-holding-dollar"></i></span>
              </div>
              <div className="col">
                <h3 className="h4 font-theme process-title mb-2">Payment</h3>
                <p className="font-theme process-subtitle mb-2">Make your payment <br/>securely</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowSection;
