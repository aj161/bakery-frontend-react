import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {MDBBtn} from 'mdb-react-ui-kit';
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { MDBTypography } from 'mdb-react-ui-kit';

export default function ProductV2(props) {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [admin, setAdmin] = useState(false);

  
  useEffect(() => {
    const adminCheck = async () => {
      if(user.email == "ajermasenoka@gmail.com"){
        setAdmin(true);
        props.setAdmin(true);
      };
    }
    adminCheck();
  }, []);

  return (
    
<Card sx={{width: 440, height: 440}} style = {{margin: "20px", backgroundColor: "white"}}> 
      <CardMedia 
        component="img"
        height="340"
        image= {props.item.imageUrl}
        alt="album name"
      />
      <CardContent>
        <div>
        <MDBTypography tag='medium' className='text-muted'>
        {props.item.name}    £{props.item.price}
      </MDBTypography>
        </div>
        {admin && 
        <>
      <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={()=> props.showUpdateModal(props.item)} outline color="secondary" size="sm" type='button'> Update</MDBBtn>
      <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={()=>props.deleteProduct(props.item._id)} outline color="secondary" size="sm" type='button'> Delete Product</MDBBtn>
      </>}
      {isAuthenticated &&
      <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={()=> props.addToBasket(props.item)} outline color="secondary" size="sm" type='button'> Add to Basket</MDBBtn>
      }
      </CardContent>
    </Card>
  );
}