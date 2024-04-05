import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import HowSection from './components/HowSection';
import Guarantee from './components/Guarantee';
import DualBanners from './components/DualBanners';
import Newsletter from './components/Newsletter';

const ServicePage = ({pageTitle, ...otherProps}) => {
    const { 
        headingTwo, 
        headingOne, 
        headingThree, 
        headingFour, 
        headingFive, 
        paraOne, 
        paraTwo, 
        paraThree,
        paraFour,
        paraFive,
        mergedHeaderStyle,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive
     } = otherProps;

  return (
    <>
      {/* Banner Section */}
     <header className={mergedHeaderStyle}>
        <h1>{pageTitle}</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | {pageTitle}</h5>
    </header>
    
    <div className='mt-4'>
            <div className="row text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">{headingOne}</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>{paraOne}</p></div>
    </div>

    {/* Image and Text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col lg={6}>
                <img src={imgOne} alt="Mission" className="img-fluid rounded" />
            </Col>
            <Col lg={6}>
                <h2>{headingTwo}</h2>
                <p>{paraTwo}</p>
                <a href="" className="btn btn-success rounded-pill py-2 px-4">Contact Us</a>
            </Col>
        </Row>
    </div>

    {/* Image overlay */}
    <section className='container mt-4'>
        <div className='mt-4'>
                <div className="row text-center justify-content-center">
                    <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                        <div className="section-title">
                            <h2 className="sec-title">{headingThree}</h2>
                        </div>
                    </div>
                </div>
            <div className='w-75 mx-auto'><p>{paraThree}</p></div>
        </div>
        <div className="row">
            {/* 1 */}
            <div className="col-md-4" >
                <div className="parent-container my-2">
                    <img src={imgTwo} alt="Mission" className="img-fluid rounded" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="col-md-4">
                <div className="parent-container my-2">
                    <img src={imgThree} alt="Mission" className="img-fluid rounded" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="col-md-4">
                <div className="parent-container my-2">
                    <img src={imgFour} alt="Mission" className="img-fluid rounded" />

                    <div className="overlay">
                        <h5>Something Heading</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    </section>
    
    {/* Text */}
    <div className='mt-4'>
            <div className="row text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">{headingFour}</h2>
                    </div>
                </div>
            </div>
        <div className='w-75 mx-auto'><p>{paraFour}</p></div>
    </div>
    <DualBanners/>
    <Guarantee/>
    
    {/* Image and text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col lg={6} className='order-2 d-flex justify-content-center'>
                <img src={imgFive} alt="Mission" className="img-fluid rounded" />
            </Col>
            <Col lg={6} className='order-1'>
                <h2>{headingFive}</h2>
                <p>{paraFive}</p>
            </Col>
        </Row>
    </div>
    {/* How it works */}
    <HowSection/>
    <Newsletter/>
    </>
  )
}

export default ServicePage