import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from './components/Cards';
import FormSelect from './components/FormSelect';
import Newsletter from './components/Newsletter';

function About() {

  return (
    <div>
      {/* Banner Section */}
      <header className='headerStyle'>
        <h1>About Us</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | About</h5>
      </header>
      {/* Main Content */}
      <div className='mt-4'>
        <Row className="text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Choose us as your travel companion</h2>
                </div>
            </div>
        </Row>
        <div className='para-width mx-auto'><p>Pro Tyre Fitters is a platform that provides you with the best services for your tyres that make your journey easier or more convenient. We understand that a weak and damaged vehicle becomes a safety issue for you throughout the journey. To ensure your safety, we provide you with the best professionals who maintain your vehicle for the daily commute and resolve tyre-related issues. Our professionals are highly trained to handle emergencies, tackle the cause of the problem and resolve it permanently. They are well-trained in their service and fully aware of all tyre-related issues and their solutions.</p></div>
     </div>

     {/* New Section */}
     <Container>
      <Row>
        <Col lg={6} className='d-flex align-items-center mt-2'>
          <div className='about-circle'><i class="fa-solid fa-check fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Good Quality</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
        <Col lg={6} className='d-flex align-items-center mt-2'>
          <div className='about-circle'><i class="fa-regular fa-clock fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6} className='d-flex align-items-center mt-2'>
          <div className='about-circle'><i class="fa-solid fa-comment fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Availability</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
        <Col lg={6} className='d-flex align-items-center mt-2'>
          <div className='about-circle'><i class="fa-solid fa-truck-fast fa-2xl"></i></div>
          <div className="about-box border shadow-sm">
            <h3 className='text-center'>Fast</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore, autem veritatis, corporis natus facere sint sapiente minima, suscipit culpa ut quidem saepe.</p>
          </div>
        </Col>
      </Row>
      
     </Container>

     
     {/* New Section */}
      <FormSelect/>
      <Container className="py-5">
        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6}>
            <h2>We are your vehicle caretaker</h2>
            <p>We are available 24/7 to serve you beyond your expectations. Our experts serve you at your designated location to save you from the physical stress of taking the car to the garage. They immediately reach the spot, control the situation, reduce your stress and solve the problem quickly. They serve you at home to keep you stress-free, fix tyre problems at the office to save your work schedule from disruption, and save you on the roadside. Our experts save you time, energy and money by providing excellent services at your desired location.</p>
          </Col>
          <Col lg={6} className='order-small-1 d-flex justify-content-center'>
            <img src={"images/img-11.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        <div className='mt-4'>
        <Row className="text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </Row>
        <div className='para-width mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis.</p></div>
        </div>
        
        <Cards/>

        <Row style={{ marginTop: '4rem' }}>
          <Col lg={6} className='order-2'>
            <h2>Our commitment to serve you regardless of time and space </h2>
            <p>We aim to be a part of your journey and provide impeccable service that ensures your journey is smooth and easy. Our professionals are ready to handle any tyre-related problem, from flat to burst tyres; they tackle all issues efficiently. They are always prepared to help you no matter the time. They reach the spot even in the middle of the night and in bad weather. They always come with a complete tool kit and essential tyre accessories. They provide a service that helps you resume your journey to your destination and make it more convenient.</p>
          </Col>
          <Col lg={6} className='order-1 d-flex justify-content-center'>
            <img src={"images/img-11.jpg"} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={6}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Available 24/7 to serve you.</li>
              <li>A well-trained staff serves you.</li>
              <li>We offer you affordable services.</li>
              <li>Respond to your issue promptly.</li>
              <li>Serve at your designated location.</li>
              <li>Save you on the side of the road.</li>
              <li>Serve at your doorstep or workplace.</li>
              <li>Save your time, energy and money.</li>
              <li>Ensure the safety of you and your vehicle.</li>
              <li>Service specialists manage emergencies.</li>
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
