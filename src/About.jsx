import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from './components/Cards';
import Newsletter from './components/Newsletter';

function About() {

  return (
    <div>
      {/* Banner Section */}
      <header className='headerStyle'>
        <h1 data-aos="fade-right">About Us</h1>
        <h5 data-aos="fade-left"><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | About</h5>
      </header>
      {/* Main Content */}
      <div className='mt-4'>
        <Row className="text-center justify-content-center" data-aos="fade-right">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </Row>
        <div className='w-75 mx-auto' data-aos="fade-left"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis.</p></div>
     </div>

     {/* New Section */}
     <Container>
      <Row>
        <Col lg={6} className='d-flex align-items-center mt-2' data-aos="fade-right">
          <div className='about-circle'><i class="fa-solid fa-check fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Good Quality</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
        <Col lg={6} className='d-flex align-items-center mt-2' data-aos="fade-left">
          <div className='about-circle'><i class="fa-regular fa-clock fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6} className='d-flex align-items-center mt-2' data-aos="fade-right">
          <div className='about-circle'><i class="fa-solid fa-comment fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Availability</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
        <Col lg={6} className='d-flex align-items-center mt-2' data-aos="fade-left">
          <div className='about-circle'><i class="fa-solid fa-truck-fast fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Fast</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
      </Row>
      
     </Container>
     {/* New Section */}

      <Container className="py-5">
        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6} data-aos="fade-right">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col lg={6} data-aos="fade-left" className='order-small-1 d-flex justify-content-center'>
            <img src={"images/img-11.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        <div className='mt-4'>
        <Row className="text-center justify-content-center" data-aos="fade-right">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </Row>
        <div className='w-75 mx-auto' data-aos="fade-left"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis.</p></div>
        </div>
        
        <Cards/>

        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6} data-aos="fade-left" className='order-2'>
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet, praesentium consectetur, temporibus assumenda eius maiores possimus explicabo quos officiis dolorum quod? Vitae harum delectus porro perspiciatis architecto ipsum sed.
            Suscipit architecto rem voluptatibus quibusdam provident. Error excepturi sunt perspiciatis earum accusantium, cum blanditiis eius similique vero pariatur. Ea debitis explicabo accusamus molestiae ullam unde sunt provident saepe voluptatum animi?
            Et nulla saepe quis esse ad ut, ea quod earum illum labore sint dolor velit reiciendis voluptatum, nihil quia corrupti, explicabo sit ex rem suscipit! Mollitia voluptatibus iste ab ex.
            Iure autem molestiae perferendis hic nesciunt id eos voluptas deserunt necessitatibus est eum, eaque labore aspernatur reprehenderit itaque totam adipisci vel. Fugit voluptates culpa debitis. Autem cupiditate ipsum suscipit natus?</p>
          </Col>
          <Col lg={6} data-aos="fade-right" className='order-1 d-flex justify-content-center'>
            <img src={"images/img-11.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="mt-5" data-aos="fade-up">
          <Col lg={6}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Convenient mobile service</li>
              <li>Wide selection of tyres</li>
              <li>Expertise and professionalism</li>
              <li>Competitive pricing</li>
              <li>Customer satisfaction guarantee</li>
            </ul>
          </Col>
          <Col lg={6}>
            <h2>Our Values</h2>
            <p>At Mobile Fit Tyres, we prioritize integrity, reliability, and safety in everything we do. We strive to build lasting relationships with our customers based on trust and transparency.</p>
          </Col>
        </Row>
      </Container>
      <Newsletter/>
    </div>
  );
}

export default About;