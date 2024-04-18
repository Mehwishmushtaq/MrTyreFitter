import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactUsBar from './components/ContactUsBar';
import BG from './assets/images/contact-bg.png'
import Contact1 from './assets/images/contact1.png'

function ContactPage() {
    return (
        <div>
            {/* Banner Section */}
            <header className='headerStyle' style={{ backgroundImage: `url(${BG})` }}>
                <h1>Contact Us</h1>
                <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Contact</h5>
            </header>
            
            <div className='mt-4'>
            <Row className="text-center justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                    <div className="section-title">
                        <h2 className="sec-title">The Heading Goes Here</h2>
                    </div>
                </div>
            </Row>
            <div className='para-width mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis, sit amet fringilla odio lectus nec nunc. Ut auctor velit sit amet tortor efficitur, vel tincidunt purus pellentesque. Nunc quis odio sit amet velit ullamcorper rhoncus. Vivamus nec purus in elit hendrerit tincidunt. Proin a urna vel sapien vestibulum feugiat. Curabitur nec justo et justo tincidunt tincidunt. Integer in ultricies erat. Vestibulum ac eros eu turpis convallis bibendum ut non quam.</p></div>
            </div>
    
            <Container className="py-5">
                <Row>
                    <Col lg={6}>
                        <h1>Contact Us</h1>
                        <p>Have a question or want to get in touch? Fill out the form below:</p>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3 btn btn-success'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} className="d-flex align-items-center justify-content-center mt-2">
                        <img src={Contact1} alt="Contact" className='rounded' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='mt-5'>
                    <div className='row text-center justify-content-center'>
                        <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                            <div className="section-title">
                                <h2 className="sec-title">Our Location</h2>
                            </div>
                        </div>
                    </div>
                        <div style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}>
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.059773!3d42.360940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU1LjEiTiA3McKwMjAnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* ContactUS Bar */}
            <ContactUsBar/>
            {/* ContactUS Bar */}
        </div>

    );
}

export default ContactPage;
