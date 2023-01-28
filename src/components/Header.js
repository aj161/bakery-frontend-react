import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './login/LoginButton';
import LogoutButton from './login/LogoutButton';
import "./styles/Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../images/logo.png";
import { MDBIcon } from 'mdb-react-ui-kit';


function CollapsibleExample() {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar id="nav" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">
            <img
              src={logo}

              height="100px"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="products">Our Products</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="recipes">Our Recipes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="basket" style={{fontSize:"1.5rem"}}><MDBIcon fas icon="shopping-cart" /></Nav.Link>
          </Nav>
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
