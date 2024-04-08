import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';

const SectionWithBanners = () => {


    return (
        <div>
            {/* Section 5 */}
            <section className="container" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                {/* Single Row */}
                <div className="row about-row text-center">
                    <div className="col-md-6 bg-secondary text-light p-4 font-monospace" style={{ height: '20rem' }}>
                        <h4 className='mt-5'><strong>Best Deal on Top</strong>
                        <br />
                        <span>Sellers</span></h4>
                        <h4 className="text-white">
                            GET 30% OFF
                        </h4>
                        <MDBBtn color='light' rippleColor='dark'>
                            Shop Now
                        </MDBBtn>
                    </div>

                    <div className="col-md-6 bg-dark text-light p-4 font-monospace" style={{ height: '20rem' }}>
                        <h4 className='mt-5'><strong>Auto Car</strong>
                        <br />
                        <span>Repair</span></h4>
                        <h4 className="text-white">
                            GET 30% OFF
                        </h4>
                        <MDBBtn color='light' rippleColor='dark'>
                            Shop Now
                        </MDBBtn>
                    </div>                
                    </div>
            </section>
        </div>

    );
};

export default SectionWithBanners;
