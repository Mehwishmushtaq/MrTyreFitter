
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

const Home = () => {
    
  return (
    <>

     <Hero/>

     <div className='mt-4 first-section-margin'>
        <Row className="text-center justify-content-center">
            <Col className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </Col>
        </Row>
        <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam magni similique explicabo quisquam maxime ad autem quaerat aliquam fugit. Aperiam cupiditate perferendis eius officiis nemo? Quam pariatur aliquid harum laboriosam ad officia perferendis quidem similique? Neque officiis dignissimos quod accusamus facilis minima maxime doloremque, necessitatibus distinctio, voluptas tempora eum!</p></div>
     </div>

     <DualBanners/>

      <Container>
        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6}>
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. sint dolor velit reiciendis voluptatum, nihil quia corrupti</p>
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
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </div>
        <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda.</p></div>
     </div>
     
     <section className='container'><Cards/></section>
     
     <Banner/>

     <section className='container'>
        <Row style={{ marginTop: '6rem' }}>
          <Col lg={6} className='order-2'>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
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
      <Newsletter/>
    </>
    
  )
}

export default Home
