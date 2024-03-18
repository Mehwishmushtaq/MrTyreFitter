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
                        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <div className="input-group">
                        <input type="email" class="form-control" placeholder="Enter your email"/>
                        <span className="input-group-btn">
                            <button className="btn" type="submit">Subscribe Now</button>
                        </span>
                        </div>
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
