
import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function WithContactForm() {
  return (

    <>
      {/* Banner Section */}
      <header className='headerStyle'>
        <h1>Faq Page</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Faq</h5>
      </header>
      <MDBContainer style={{ maxWidth: '1000px' }}>
        {/* <h2 className='text-center' style={{fontSize:'50px'}}><strong>Frequently Asked Question</strong></h2> */}
        <section className="mt-5">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4">
              <div>
                <p className="mb-1">
                  <strong>How often do I need car tyre maintenance?</strong>
                </p>
                <p className="mb-1">
                  <p>You need to check the health of your tyres once a month.</p>
                </p>
                {/* <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
              </ul> */}
              </div>

              <div>
                <p className="mb-1">
                  <strong>Do you offer mobile tyre fitting at my home?</strong>
                </p>
                <p className="mb-1">
                  <p>Yes, we provide mobile tyre fitting service at your home. Our professionals arrive at your location with a complete tool kit.
                  </p>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong>
                    Can you recommend the best tyres for my vehicle?
                  </strong>
                </p>
                <p className="mb-1">
                  <p>Yes, we recommend the best tyres according to your vehicle to make your journey easier.</p>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong>How long does it take you to replace a tyre?</strong>
                </p>
                <p className="mb-1">
                  <p>Our professionals are good at service; it takes 30 minutes to change your old tyre to a new one.</p>
                </p>
                <p className="mb-1">
                  Second part of the answer with more details.
                </p>
                <p>
                  Final part of the answer full of detais and Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="6" md="12" className="text-center mb-3">
              <p>
                <span class="fw-bold">
                  Still have any questions? Contact us to get your answer!
                </span>
              </p>

              <form>
                <MDBInput placeholder="Email address" required className="mb-4" />
                <MDBTextArea rows={4} placeholder="Message" className="mb-4" />
                <MDBBtn block className="bg-success w-25">Send</MDBBtn>            </form>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  );
}
