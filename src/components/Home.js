import Carousel from "./Carousel";
import About from "./About";

export default function Home() {
  return (
    <>
    <Carousel/>
    <h1 style={{fontFamily:"Poiret One", textAlign:"center", paddingTop:70, paddingBottom:50, fontWeight:"bold"}}>The home away from home</h1>
    <h4 style={{fontFamily:"Poiret One", textAlign:"center", paddingBottom:70, maxWidth:"800px", margin:"auto"}}>In the heart of historic city of York</h4>
    <About/>
    </>
  );
}