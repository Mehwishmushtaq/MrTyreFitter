import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const SingleBanner = () => {
  return (
    <div>
            {/* Section 5 */}
            <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                {/* Single Row */}
                <div className="row about-row text-center">
                    
                    <div className="single-banner-image text-light p-5 font-monospace">
                        <h4 className='mt-5'>Heading Goes Here</h4>
                        <h4><strong>The Sub Heading</strong><br /><span>of Heading</span></h4>
                        <MDBBtn color='light' rippleColor='dark'>
                            Shop Now
                        </MDBBtn>                    
                    </div>
                </div>
            </section>
        </div>
  )
}

export default SingleBanner
