
import React from 'react';
import Hero from './components/HeroSection';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import HowSection from './components/HowSection';
import { Link } from 'react-router-dom';
import Newsletter from './components/Newsletter';

const Home = () => {
    
  return (
    <>

     <Hero/>

     <div className='mt-4'>
        <Row className="text-center justify-content-center">
            <Col className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </Col>
        </Row>
        <div className='w-75 mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis, sit amet fringilla odio lectus nec nunc. Ut auctor velit sit amet tortor efficitur, vel tincidunt purus pellentesque. Nunc quis odio sit amet velit ullamcorper rhoncus. Vivamus nec purus in elit hendrerit tincidunt. Proin a urna vel sapien vestibulum feugiat. Curabitur nec justo et justo tincidunt tincidunt. Integer in ultricies erat. Vestibulum ac eros eu turpis convallis bibendum ut non quam.</p></div>
     </div>

     <Container>
      <Row>
        <Col lg={6} className="image-container">
          <img src="images/img-11.jpg" alt="img" className="two-image" />
          <div className="text-container">
            <h4>Heading Goes Here</h4>
            <p>some kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>

        <Col lg={6} className="image-container mt-3">
          <img src="images/img-11.jpg" alt="img" className="two-image" />
          <div className="text-container">
            <h4>Heading Goes Here</h4>
            <p>some kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>
      
      </Row>
     </Container> 

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

      <Container className="mt-4">
      <Row className="brands-section">
        <Col md={2}><img src={"images/brands/jaguar.png"} alt="brand" /></Col>
        <Col md={2}><img src={"images/brands/kia.png"} alt="brand" /></Col>
        <Col md={2}><img src={"images/brands/dodge.png"} alt="brand" /></Col>
        <Col md={2}><img src={"images/brands/toyota.png"} alt="brand" /></Col>
        <Col md={2}><img src={"images/brands/hyundai.png"} alt="brand" /></Col>
        <Col md={2}><img src={"images/brands/subaru.png"} alt="brand" /></Col>
      </Row>
     </Container>

     <Testimonial/>
     
      <HowSection/>
      <Newsletter/>
    </>
    
  )
}

export default Home
