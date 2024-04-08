import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HowSection = () => {
  return (
    <div className="container mt-4">
      <Row className="text-center justify-content-center">
            <Col className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">How it works</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum recusandae distinctio reiciendis, eaque a?</p>
            </Col>
        </Row>

      <div className="row justify-content-around">
        <div className="col-md-3 mb-4">
          <div className="process-box" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '20px' }}>
            <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-headphones"></i></span>
            <h3 className="font-theme process-title mt-3 mb-2">Call Us</h3>
            <p className="font-theme process-subtitle mb-0">Call us to schedule an appointment</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="process-box" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '20px' }}>
            <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-user"></i></span>
            <h3 className="font-theme process-title mt-3 mb-2">Get The Expert</h3>
            <p className="font-theme process-subtitle mb-0">Speak with our expert technicians</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="process-box" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '20px' }}>
            <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-arrow-rotate-left"></i></span>
            <h3 className="font-theme process-title mt-3 mb-2">Get Tyre Fixed</h3>
            <p className="font-theme process-subtitle mb-0">We'll fix your tire promptly in no time</p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="process-box" style={{ border: '2px solid #18bd9d', borderRadius: '10px', padding: '20px' }}>
            <span className="process-icon" style={{ fontSize: '36px', color: '#18bd9d' }}><i className="fa-solid fa-hand-holding-dollar"></i></span>
            <h3 className="font-theme process-title mt-3 mb-2">Payment</h3>
            <p className="font-theme process-subtitle mb-0">Make your payment securely and Safely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
