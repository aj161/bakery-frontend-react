import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../images/logo.png";



export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{paddingTop:"10px"}}>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <img
              src={logo}

              height="200px"
              className="d-inline-block align-top"
              alt="Logo"
            />
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                OLERIA PATISSERIE
              </h6>
              <p>
                78-90 Gillygate, Guildhall<br></br>York, YO31 7EQ<br></br>England
              </p>
              <p> 
                <MDBIcon fas icon="envelope" />            
                info@example.com
              </p>
              
              <p><MDBIcon fas icon="phone" />+44 7554 879798</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='products' className='text-reset'>
                  Our Products
                </a>
              </p>
              <p>
                <a href='recipes' className='text-reset'>
                  Our Recipes
                </a>
              </p>
              <p>
                <a href='basket' className='text-reset'>
                  Basket
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Design & Code:<space> </space>
        <a className='text-reset fw-bold' href='https://github.com/aj161'>
            ajermasenoka@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}