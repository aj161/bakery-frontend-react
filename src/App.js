import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import Basket from "./components/Basket";
//import About from "./components/About";
import Footer from "./components/Footer";
//import Profile from "./components/login/Profile";
//import Login from "./components/login/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={ isAuthenticated ? <MyProducts/> : <Login/>}/> */}
          <Route exact path="/products" element={<OurProducts/>}/>
          <Route exact path="/basket" element={<Basket/>}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;

