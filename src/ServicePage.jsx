import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import HowSection from './components/HowSection';
import Guarantee from './components/Guarantee';
import DualBanners from './components/DualBanners';
import Newsletter from './components/Newsletter';
import Button from 'react-bootstrap/Button';

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
        imgFive,
        scardparaOne,
        scardparaTwo,
        scardparaThree,
        scardOne,
        scardTwo,
        scardThree,
        ctaText
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
        <div className='para-width mx-auto'><p>{paraOne}</p></div>
    </div>

    {/* Image and Text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col lg={6}>
                <img src={imgOne} alt="Mission" className="img-fluid rounded img-fix" />
            </Col>
            <Col lg={6}>
                <h2 className='text-success'>{headingTwo}</h2>
                <p>{paraTwo}</p>
                <Button variant="success mt-3 px-4">Contact Us</Button>
            </Col>
        </Row>
    </div>

    {/* Image overlay */}
    <section className='container mt-4'>
        <div className='mt-4'>
            <h2 className="text-success text-center">{headingThree}</h2>
            <div className='para-width mx-auto'><p>{paraThree}</p></div>
        </div>
        <div className="row">
            {/* 1 */}
            <div className="col-md-4">
                <div className="parent-container my-2">
                    <img src={imgTwo} alt="Mission" className="img-fluid rounded" style={{height: '50vh'}} />

                    <div className="overlay">
                        <h5>{scardOne}</h5>
                        <p>{scardparaOne}</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="col-md-4">
                <div className="parent-container my-2">
                    <img src={imgThree} alt="Mission" className="img-fluid rounded" style={{height: '50vh'}}/>

                    <div className="overlay">
                        <h5>{scardTwo}</h5>
                        <p>{scardparaTwo}</p>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="col-md-4">
                <div className="parent-container my-2">
                    <img src={imgFour} alt="Mission" className="img-fluid rounded" style={{height: '50vh'}}/>

                    <div className="overlay">
                        <h5>{scardThree}</h5>
                        <p>{scardparaThree}</p>
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
        <div className='para-width mx-auto'><p>{paraFour}</p></div>
    </div>
    <DualBanners/>
    <Guarantee/>
    
    {/* Image and text */}
    <div className='container'>
        <Row style={{ marginTop: '4rem' }}>
            <Col lg={6} className='order-2 d-flex justify-content-center'>
                <img src={imgFive} alt="Mission" className="img-fluid rounded img-fix" />
            </Col>
            <Col lg={6} className='order-1'>
                <h2 className='text-success'>{headingFive}</h2>
                <p>{paraFive}</p>
            </Col>
        </Row>
    </div>
    <Container>
        <p>{ctaText}</p>
    </Container>
    <Newsletter/>
    </>
  )
}

export default ServicePage
