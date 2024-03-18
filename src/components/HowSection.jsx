import React from 'react'

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
    <div className="row justify-content-between">
        <div className="col-md-6 col-xl-auto process-box mb-10" data-aos="zoom-in">
            <span className="process-number">01</span> <span className="process-icon"><i className="fa-solid fa-headphones"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Call Us</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10" data-aos="zoom-in">
            <span className="process-number">02</span> <span className="process-icon"><i className="fa-solid fa-user"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Get The Expert</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10" data-aos="zoom-in">
            <span className="process-number">03</span> <span className="process-icon"><i className="fa-solid fa-arrow-rotate-left"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Get Tyre Fixed</h3>
        </div>
        <div className="col-md-6 col-xl-auto process-box mb-10" data-aos="zoom-in">
            <span className="process-number">04</span> <span className="process-icon"><i className="fa-solid fa-hand-holding-dollar"></i></span>
            <h3 className="h4 font-theme process-title mb-2">Payment</h3>
        </div>
    </div>
    <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus suscipit odit modi itaque expedita ipsam autem, quasi quam ratione eos aperiam ex harum sed est quia et voluptates quaerat rerum perspiciatis mollitia. Ratione qui dolore iste in!
    </p>
    </div>
    </>
  )
}

export default HowSection
