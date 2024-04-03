import React, { useState } from 'react';
import img1 from '../assets/images/img1.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="hero__section" style={{ position: 'relative' }}>
      <img
        style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        src={img1}
        alt="Hero Image"
      />
      <div className="form-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <h2>Welcome to Our Website</h2>
        <p>This is the hero section of your website.</p>
        {/* Form */}
        <div className="hero-form row">
          <Form onSubmit={handleSubmit}>
            
            <div className="small-screen-form">
              <div className='col-6 col-md-12'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" value={formData.name} onChange={handleChange}/>
              </Form.Group>
              </div>

              <div className="col-6 col-md-12">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange}/>
              </Form.Group>
              </div>
            </div>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.message} onChange={handleChange} />
            </Form.Group>

            <Button variant="success" type="submit" className="d-block d-md-inline-block">Send Message</Button>
          </Form>
        </div>

        {/* Form */}
      </div>
    </div>
  );
}

export default HeroSection;