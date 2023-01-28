import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';


function RecipeOfTheDay() {
  const [results, setResults] = useState([]);
    const [showItems, setShowItems] = useState(false);
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

  useEffect(() => {
    // console.log(process.env.REACT_APP_SERVER);
    const getRecipe = async () => {
      let apiUrl = "https://api.api-ninjas.com/v1/recipe?query=cheesecake";
      let apiKey = process.env.REACT_APP_API_KEY;
      let resultAPI = await axios.get(apiUrl, { headers: {"X-Api-Key": apiKey} });
      let quote = resultAPI.data[0];
      console.log('inside useEffect AllDataAPI',quote);
      setResults(quote);
      setShowItems(true);
    };
    getRecipe();
  }, []);

  return (
    <> 
    <h2 style={{margin: 30, textAlign:"center", fontFamily:"Poiret One", fontWeight:"bold" }}>Our Recipe of the Day</h2>
        <div>
        <Card sx={{ display: 'flex', margin:"auto", width:1000 }}>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        image="https://images.pexels.com/photos/8477784/pexels-photo-8477784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="baking"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <h3 style={{color:"#80CBC4", fontFamily:"Poiret One", fontWeight:"bold"}}>{results.title}</h3>
          <h5 style={{color:"#80CBC4", fontFamily:"Poiret One"}}>{results.servings}</h5>
          <p style={{fontFamily:"Poiret One"}}>Ingredients:{results.ingredients}</p>
        <>
      <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"10px"}} onClick={toggleShow} outline color="secondary" size="sm" type='button'>Show Instructions</MDBBtn>
      <MDBCollapse show={showShow}>
          <p style={{fontFamily:"Poiret One"}}>{results.instructions}</p>
      </MDBCollapse>
    </>
          
        </CardContent>
      </Box>
    </Card>
        </div>
        </>
  
  
  );
}

export default RecipeOfTheDay;