import React from "react";

export default function About () {
  return(
    <>
    <img
      src='https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      className='img-fluid hover-shadow'
      alt=''
    />
    <h1 style={{fontFamily:"Poiret One", textAlign:"center", paddingTop:70, fontWeight:"bold"}}>“Follow your dreams, they know the way”</h1>
    <h4 style={{fontFamily:"Poiret One", textAlign:"center", paddingBottom:70}}>Kobi Yamada</h4>
    <div style={{backgroundColor:"#C2A585", paddingLeft:"5%"}}>
    <img
      src='https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1600'
      className='img-fluid hover-shadow'
      alt=''
      width="45%"
    />

<img
      src='https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg?auto=compress&cs=tinysrgb&w=1600'
      className='img-fluid hover-shadow'
      alt=''
      width="50%"
      marginLeft="auto"
    />
    </div>
    <h1 style={{fontFamily:"Poiret One", textAlign:"center", paddingTop:70, paddingBottom:50, fontWeight:"bold"}}>The Oleria</h1>
    <h4 style={{fontFamily:"Poiret One", textAlign:"center", paddingBottom:70, maxWidth:"800px", margin:"auto"}}>We started as a small group of keen baking enthusiasts that met in cooking class in a small town on Greek island of Crete. With a lot of practice and determination Oleria was born, to give people cosy space, freshest produce and take them on a little taste journey of Mediterranean cuisine.</h4>
    </>
    

  );
}