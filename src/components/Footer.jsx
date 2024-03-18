import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid py-y dark-color'>
        <div className=' container mt-4 bg-dark'>
            {/* columns */}
            <section className='row text-white'>
               {/* 1 */}
               <div className="col-md-3 my-2">
                <Link to="/" className="navbar-brand p-0">
                    <h2 className="m-0">Tyre Site</h2>
                </Link>
                {/* Icons */}
                <div className='d-flex align-items-center gap-3'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p className='mt-3'>some pseudo company address <br /> will go here</p>
                </div>
                
                <div className='d-flex align-items-center gap-3'>
                    <i class="fa-solid fa-phone"></i>
                    <p className='mt-3'>+44 0123456789 <br /> Mon-Fri 8:00 to 19:00</p>
                </div>
                
                <div className='d-flex align-items-center gap-3'>
                    <i class="fa-solid fa-envelope"></i>
                    <p className='mt-3'>something@email.com</p>
                </div>

               </div>
               {/* 2 */}
               <div className="col-md-3 my-2">
                <h4>Useful links</h4>
                <ul className='d-flex flex-column'>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                </ul>
               </div>
               {/* 3 */}
               <div className="col-md-3 my-2">
                <h4>Useful links</h4>
                <ul className='d-flex flex-column'>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                    <Link to="/" className='footer-link'>Link</Link>
                </ul>
               </div>
               {/* 4 */}
               <div className="col-md-3 my-2">
                <h5>Subscribe the Newsletter for discount</h5>
                <form action="#" method="post">
                <div className="form-group">
                    <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</label>
                    <input type="text" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subscribe"/>
                    <button className='btn btn-success'>Subscribe</button>
                </div>
                </form>
               </div>
               {/* END */}
            </section>
        </div>
      </footer>
    </>
  )
}

export default Footer;
