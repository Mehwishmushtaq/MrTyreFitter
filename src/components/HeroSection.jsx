import React, { useState } from 'react';
import img1 from '../assets/images/mob-tyre-1.webp';

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
    <div className="hero-section" style={{ position: 'relative' }}>
      <img
        style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        src={img1}
        alt="Hero Image"
      />
      <div className="form-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <h1>Welcome to Your Website</h1>
        <p>This is the hero section of your website.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
