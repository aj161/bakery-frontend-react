import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import {MDBBtn} from 'mdb-react-ui-kit';


export default function BasketProducts(props) {
  const theme = useTheme();
  const [total, setTotal] = useState(0);

  return (
    <Card sx={{ display: 'flex', margin:3, height:200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:160 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography tag='medium' className='text-muted'>
          {props.item.name} 
          </Typography>
          <Typography tag='medium' className='text-muted'>
          {props.item.quantity} x £{props.item.price}  
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 1 }}>
        <MDBBtn style={{marginLeft:"15px",borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={()=> props.showUpdateModal(props.item)} outline color="secondary" size="sm" type='button'> Update</MDBBtn>
        <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={()=>props.deleteProduct(props.item._id)} outline color="secondary" size="sm" type='button'> Delete</MDBBtn>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.item.imageUrl}
        alt="Product image"
      />
    </Card>
  );
}