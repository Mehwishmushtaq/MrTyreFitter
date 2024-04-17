
import React from 'react';
import Hero from './components/HeroSection';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import HowSection from './components/HowSection';
// import { Link } from 'react-router-dom';
import Newsletter from './components/Newsletter';
import SingleBanner from './components/SingleBanner';
import DualBanners from './components/DualBanners';
import CTA from './components/CTA';

const Home = () => {
    
  return (
    <>

     <Hero/>

     <div className='mt-4 first-section-margin'>
        <Row className="text-center justify-content-center">
            <Col className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Experience our excellent mobile tyre fitting in London</h2>
                </div>
            </Col>
        </Row>
        <div className='para-width mx-auto'><p>Welcome to the hub of the best tyres and best tyre services that solve all your tyre-related problems. Pro Tyre Fitters is a platform that provides you with the best tyre-related service to ensure your journey is smooth and easy. Tyre-related issues can occur anywhere at any time that can disrupt your travel schedule. It disrupts your daily travel, office work schedule, and even travel for a specific reason. This causes you to arrive late at your destination or miss an essential part of the event.</p></div>
     </div>

     <DualBanners/>

      <Container>
        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6}>
            <h2 className='text-success'>Simplify your journey with Mobile tyre fitting</h2>
            <p>Mobile Tyre Fittings London manages a wide range of tyre-related issues, covering emergencies and providing you with services from tyre repairs to tyre replacements. We provide mobile tyre fitting services at your designated location for your convenience. Our trained professionals know all tyre-related problems, handle emergencies easily and know possible solutions. They ensure your safety first and then implement the best possible solution to prevent the problem from happening again.</p>
          </Col>
          <Col lg={6} className='order-small-1 d-flex justify-content-center'>
            <img src={"images/img-10.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

     <div className='mt-4'>
        <div className="row text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Nimble mobile tyre service near me</h2>
                </div>
            </div>
        </div>
        <div className='para-width mx-auto'><p>A tyre-related problem can lead to unpleasant incidents that cause trouble for you and your vehicle. To save you from the damage, we offer you seamless service of a mobile tyre fitting near me that serves you at your directed location. Our professionals are available 24/7 to serve you on a single call, no matter where you are and when you need help. They reach the location as per your instruction without time and space restrictions.</p></div>
     </div>
     
     <section className='container'><Cards/></section>
     
     <Banner/>

     <section className='container'>
        <Row style={{ marginTop: '6rem' }}>
          <Col lg={6} className='order-2'>
            <h2>Our Mission</h2>
            <p>We aim to provide you with the best services at the most affordable price that reduces your mental, physical and financial burden. We bring the garage to you with all the necessary equipment and toolkits to save you from the physical burden of taking the car to the garage. Our professionals arrive at your designated location for service and fix your tyre problem to get you back on the journey faster. We aim to make your journey safe, convenient and memorable for you. A sudden tyre problem also burdens your pocket but we take care of your finances and offer you the best affordable services at an affordable price.</p>
          </Col>
          <Col lg={6} className='order-1 d-flex justify-content-center'>
            <img src={"images/img-10.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>
      </section>

      <Container className="mt-4 brands-section">
            <Row style={{ marginTop: '6rem' }}>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/jaguar.png"} alt="brand" /></div>
                </Col>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/kia.png"} alt="brand" /></div>
                </Col>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/dodge.png"} alt="brand" /></div>
                </Col>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/toyota.png"} alt="brand" /></div>
                </Col>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/hyundai.png"} alt="brand" /></div>
                </Col>
                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                    <div><img className='img-fluid' src={"images/brands/subaru.png"} alt="brand" /></div>
                </Col>
            </Row>
        </Container>

     <SingleBanner/>
     
      <HowSection/>
      <Testimonial/>
      <CTA
      ctaText="Share your tyre-related issues with our experts. Call us today to tackle your tyre problem and solve it with the best possible solution. Our professionals reach your location no matter where you are, and when you need help, they help you at your home, workplace and roadside. " 
      />
      <Newsletter/>
    </>
    
  )
}

export default Home
