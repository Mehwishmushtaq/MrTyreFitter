import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import img1 from '../assets/images/tyre.jpg';
import Button from 'react-bootstrap/Button';

function HeroSection() {

  return (
    <div className="hero__section">

      <Container className="hero-form bg-white p-4">
        <h4 className='text-center'><b>Tyre Search</b></h4>
        <Row className='mt-4'>
          <Col sm={4}>
            <h5 className='text-center'>Width</h5>
            <Form.Select aria-label="Default select example">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>

          <Col sm={4}>
            <h5 className='text-center'>Height</h5>
            <Form.Select aria-label="Default select example">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>

          <Col sm={4}>
            <h5 className='text-center'>Diameter</h5>
            <Form.Select aria-label="Default select example">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
        </Row>
        <div className='d-flex justify-content-center mt-5'>
          <img src={img1} alt="tyre" />
        </div>
        <Button variant="success mt-3 px-4 w-100">Search for tyre</Button>
      </Container>
      
    </div>

  );
}

export default HeroSection;