import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo2 from "../Image/Logo-01.png"

const Footer = () => {
  return (
    <>
   <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
   

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 logo2'>
              <img src={Logo2} alt="" />
              <p>
              The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
              </p>
              <h6 className='text-uppercase fw-bold mb-4'>Address</h6>
              <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
             
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hello@osumare.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 8459 8762 26
              </p>
             
            </MDBCol>
            {/* <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
           
            </MDBCol> */}

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/faq' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/services' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/mind' className='text-reset'>
                  Work
                </a>
              </p>
              <p>
                <a href='/video' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='middle' className='text-reset'>
                  Career
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social</h6>
              <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
            </MDBCol>

        
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Osumare.
        <a href="/" className='fw-bold' >
         All Rights Reserverd Made By Shivtej Sonawane
        </a>
      </div>
    </MDBFooter>
    
    </>
  )
}

export default Footer