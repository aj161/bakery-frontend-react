import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import Basket from "./components/Basket";
//import About from "./components/About";
import Footer from "./components/Footer";
//import Profile from "./components/login/Profile";
import Login from "./components/login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";
import RecipeOfTheDay from "./components/RecipeOfTheDay";
import About from "./components/About";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/basket" element={ isAuthenticated ? <Basket/> : <Login/>}/>
          <Route exact path="/products" element={<OurProducts/>}/>
          <Route exact path="/recipes" element={<RecipeOfTheDay/>}/>
          <Route exact path="/about" element={<About/>}/>

          
          </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;

