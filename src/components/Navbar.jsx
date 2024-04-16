import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Topheader from './Topheader';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const screenWidth = window.innerWidth;

  // Conditionally render the appropriate navbar based on screen width
  if (screenWidth <= 992) {
    return (
      <>
        <Helmet>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        </Helmet>
    
        <Topheader/>

        <div className="container-fluid main-nav-bar p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-2 py-lg-0">
            <section className='ts-logo-container'>
              <Link to="/" className="p-0 m-0">
              <div className="ts-logo-mobile container p-0 m-0"><img src={logo} alt="logo" /></div>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} style={{ border: 'none', outline: 'none' }}>
                <span className="fa fa-bars"></span>
              </button>
            </section>
            
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact onClick={handleNavCollapse}>Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link" activeClassName="active" onClick={handleNavCollapse}>About</NavLink>
                <NavLink to="/blogs" className="nav-item nav-link" activeClassName="active" onClick={handleNavCollapse}>Blog</NavLink>
              <div className="nav-item dropdown">
              <button class="btn dropdown-toggle text-white px-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
                    <div className="dropdown-menu m-0">
                      <Link to="/services/mobile-tyre-fitting" className="dropdown-item" onClick={handleNavCollapse}>Mobile Tyre Fitting</Link>
                      <Link to="/services/mobile-tyre-repair" className="dropdown-item" onClick={handleNavCollapse}>Mobile Tyre Repair</Link>
                      <Link to="/services/tyre-replacement" className="dropdown-item" onClick={handleNavCollapse}>Tyre Replacement</Link>
                      <Link to="/services/flat-tyre" className="dropdown-item" onClick={handleNavCollapse}>Flat Tyre</Link>
                      <Link to="/services/burst-tyre" className="dropdown-item" onClick={handleNavCollapse}>Burst Tyre</Link>
                      <Link to="/services/part-worn-tyre" className="dropdown-item" onClick={handleNavCollapse}>Part Worn Tyre</Link>
                      <Link to="/services/jumpstart" className="dropdown-item" onClick={handleNavCollapse}>Jumpstart</Link>
                      <Link to="/services/locknut-wheel-removal" className="dropdown-item" onClick={handleNavCollapse}>Locknut Wheel Removal</Link>
                      <Link to="/services/mobile-breakdown" className="dropdown-item" onClick={handleNavCollapse}>Mobile Breakdown</Link>
                    </div>
                </div>
              <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
              <NavLink to="/faqs" className="nav-item nav-link" activeClassName="active">Faq</NavLink>
            </div>
          </div>
        </nav>
      </div>
      </>
    );
  } else {
    return (
      <>

    <Topheader/>

      <div className="container-fluid main-nav-bar p-0">
      <nav className="navbar navbar-expand-lg navbar-light py-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.705)', padding: '0.5rem 2rem' }}>
          <div className="container">
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0">
                    <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
                    <NavLink to="/blogs" className="nav-item nav-link" activeClassName="active">Blog</NavLink>
                  </div>
                </div>
              </div>
              <Link to="/">
                <div className="ts-logo container p-0 m-0"><img src={logo} alt="logo" /></div>
              </Link>
              <div>
                <div className="navbar-nav ms-auto py-0">
                  <div className="nav-item dropdown">
                    <Link to="/services/mobile-tyre-fitting" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                    <div className="dropdown-menu m-0">
                      <Link to="/services/mobile-tyre-fitting" className="dropdown-item">Mobile Tyre Fitting</Link>
                      <Link to="/services/mobile-tyre-repair" className="dropdown-item">Mobile Tyre Repair</Link>
                      <Link to="/services/tyre-replacement" className="dropdown-item">Tyre Replacement</Link>
                      <Link to="/services/flat-tyre" className="dropdown-item">Flat Tyre</Link>
                      <Link to="/services/burst-tyre" className="dropdown-item">Burst Tyre</Link>
                      <Link to="/services/part-worn-tyre" className="dropdown-item">Part Worn Tyre</Link>
                      <Link to="/services/jumpstart" className="dropdown-item">Jumpstart</Link>
                      <Link to="/services/locknut-wheel-removal" className="dropdown-item">Locknut Wheel Removal</Link>
                      <Link to="/services/mobile-breakdown" className="dropdown-item">Mobile Breakdown</Link>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                  <NavLink to="/faqs" className="nav-item nav-link" activeClassName="active">Faq</NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </>
    );
  }
}

export default Navbar;
