import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/logo.png";



export default function App() {
  return (<div>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem style={{maxHeight:"960px"}}
        className='w-100 d-block'
        itemId={1}
        src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...' 
        >
        <img style={{height:250, marginBottom:"35vh"}} src={logo}></img>
        <h5 style={{fontFamily:"Poiret One"}}>"I have experienced some amazing food! Yet when I think about the most luxurious and exquisite meals I have had, visions of simple food made from a few natural ingredients are what most excite me"</h5>
        <h4 style={{fontFamily:"Poiret One"}} marginLeft="auto">Mark Hyman</h4>
      </MDBCarouselItem>
      <MDBCarouselItem style={{maxHeight:"960px"}}
        className='w-100 d-block'
        itemId={2}
        src='https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...'
        >
        <img style={{height:250, marginBottom:"40vh"}} src={logo}></img>
        <h5 style={{fontFamily:"Poiret One"}}>"Good food and a warm kitchen are what makes a house a home"</h5>
        <h4 style={{fontFamily:"Poiret One"}}>Rachael Ray</h4>
      </MDBCarouselItem>
      <MDBCarouselItem style={{maxHeight:"960px"}}
        className='w-100 d-block'
        itemId={3}
        src='https://images.pexels.com/photos/5323489/pexels-photo-5323489.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='...'
        >
        <img style={{height:250, marginBottom:"35vh"}} src={logo}></img>
        <h5 style={{fontFamily:"Poiret One"}}>"The fact that food plays such an important part in my films has everything to do with my family"</h5>
        <h4 style={{fontFamily:"Poiret One"}}>Martin Scorsese</h4>
      </MDBCarouselItem>
    </MDBCarousel>
        </div>
  );
}