import { useEffect, useState } from "react";
import axios from "axios";
import BasketProducts from "./BasketProducts";
import UpdateBasketModal from "./UpdateBasketModal";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {MDBBtn} from 'mdb-react-ui-kit';

function OurProducts(){
  const [results, setResults] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [index, setIndex] = useState(0);
  const [itemInfo, setItemInfo] = useState({});
  const [updateModalStatus, setUpdateModalStatus] = useState(false);
  const [basketTotal, setBasketTotal] = useState(0);
  const { user } = useAuth0();
  
  
  
  useEffect(() => {
    const getProducts = async () => {
      let username = user.email||user.nickname;
      console.log(process.env.REACT_APP_SERVER);
      let resultProducts = await axios.get(`${process.env.REACT_APP_SERVER}/basket?username=${username}`);
      console.log(resultProducts.data);
      setResults(resultProducts.data);
      setShowItems(true);
      updateBasketTotal(resultProducts);
      };
    getProducts();
  }, []);

  const updateBasketTotal = (array) => {
    let basketTotal = array.data.reduce (function(tot,arr) {
      let itemTotal = arr.price * arr.quantity;
      return tot + itemTotal;
    }, 0);
    console.log(basketTotal);
    setBasketTotal(basketTotal)
  }
  
  const deleteProduct = async (index) => {
    let username = user.email||user.nickname;
    let newProducts = await axios.delete(`${process.env.REACT_APP_SERVER}/basket/${index}?username=${username}`);
    setResults(newProducts.data);
    updateBasketTotal(newProducts);
    console.log(newProducts.data);
  };
  
  const showUpdateModal = async(chosenItem) =>{
    setUpdateModalStatus(true);
    setItemInfo(chosenItem);
    setIndex(chosenItem._id);
  }
  
  const hideUpdateModal = () =>{
    setUpdateModalStatus(false);
  }
  
  const updateProducts = (results) => {
    setResults(results);
  }
  
  
    return(
      <>
        <Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar alt="image" src={user.image} />}
        label={user.email||user.nickname}
        variant="outlined"
        style={{marginLeft:"auto",marginTop:"20px", marginRight:"20px", itemAlign:"right" }}
      />
    </Stack>

    <h2 style={{margin: 10, textAlign:"center" }}>Basket</h2>

          <div
          style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            padding: "4rem",
          }}
        >
          {showItems &&
            results.map((item, index) => (
              <BasketProducts
              key={index}
              item={item}
              deleteProduct={deleteProduct}
              showUpdateModal={showUpdateModal}
            />
            ))}
            {!showItems && <p>No products to show</p>}
  
            <UpdateBasketModal
            show={updateModalStatus}
            hideUpdateModal={hideUpdateModal}
            itemInfo={itemInfo}
            itemIndex={index}
            updateProducts={updateProducts}
            updateBasketTotal={updateBasketTotal}
                      />
        </div>
        <div style={{marginRight: 200, textAlign:"right" }}>
        <h4 >Total: £{basketTotal.toFixed(2)}</h4>
        <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} outline color="secondary" size="sm" type='button'> Place an Order</MDBBtn>
        </div>
      </>
  
    )
  }
  
  export default OurProducts;