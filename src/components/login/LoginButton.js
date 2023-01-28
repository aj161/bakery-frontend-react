import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import '../styles/Header.css';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  
  return (
  !isAuthenticated && (
    //<button onClick={() => loginWithRedirect()}>Log In</button>
    <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey"}} onClick={() => loginWithRedirect()} outline color="secondary" size="medium" type='button'>
    Login
    </MDBBtn>
    )
  );
};

export default LoginButton;