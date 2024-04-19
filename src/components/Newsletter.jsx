import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';

const Newsletter = () => {
  return (
    <>
     <section className="newsletter p-5 mt-3">
     <Container>
        <Row className='text-white d-flex justify-content-center align-items-center'>
            <Col sm={12}>
                <div className="content">
                    <form>
                        <h2 className="text-center">Subscribe To Our News Letter</h2>
                        <Container>
                            <Row>
                                <Col sm={12} md={9}>
                                <input type="email" className="form-control mb-2" placeholder="Enter your email"/>
                                </Col>
                                <Col sm={12} md={3}>
                                <div className="text-center">
                                    <button className="btn btn-primary" type="submit">Subscribe Now</button>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </div>
            </Col>
        </Row>
    </Container>
    </section>  
    </>
  )
}

export default Newsletter