import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
    <section className='ts-heading hero__section'>
      <div className="d-sm-flex align-items-center justify-content-between w-100" style={{ height: '82vh' }}>
        <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline container">
          <span className="text-secondary text-uppercase" data-aos="flip-up">Subheadline</span>
          <h1 className="display-4 my-4 font-weight-bold" data-aos="zoom-out-up">Enter Your <span className='text-success'>Headline Here</span></h1>
          <Link to="/contact" className="btn btn-success px-5 py-3 text-white mt-3 mt-sm-0" data-aos="fade-right">Contact Us</Link>
        </div>
        {/* in mobile remove the clippath */}
        <div className="col-md-8 h-100 clipped" data-aos="fade-left" style={{ minHeight: '350px', backgroundImage: 'url(images/hero.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
      </div>
    </section>
    </>
  )
}

export default Carousel