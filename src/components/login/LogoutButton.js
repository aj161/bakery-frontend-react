import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

const LogoutButton = () => {
  const { isAuthenticated,logout } = useAuth0();

  return (
    isAuthenticated && (
    //<button onClick={() => logout({ returnTo: window.location.origin })}> Log Out</button>
    <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey"}} onClick={() => logout({ returnTo: window.location.origin })} outline color="secondary" size="medium" type='button'>
    Logout
    </MDBBtn>
    )
  );
};

export default LogoutButton;