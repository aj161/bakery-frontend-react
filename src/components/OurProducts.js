import { useEffect, useState } from "react";
import axios from "axios";
import AddProductModal from "./AddProductModal";
import ProductV2 from "./ProductV2";
import UpdateProductModal from "./UpdateProductModal";
import {  MDBBtn } from 'mdb-react-ui-kit';
import { useAuth0 } from "@auth0/auth0-react";


function OurProducts(){
  const [results, setResults] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [index, setIndex] = useState(0);
  const [itemInfo, setItemInfo] = useState({});
  const [updateModalStatus, setUpdateModalStatus] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);
  const { user } = useAuth0();
  const [admin, setAdmin] = useState(false);
  
  
  useEffect(() => {
    const getProducts = async () => {
      //let username = user.email||user.nickname;
      console.log(process.env.REACT_APP_SERVER);
      let resultProducts = await axios.get(`${process.env.REACT_APP_SERVER}/products`);
      //let resultProducts = await axios.get(`http://localhost:3001/products`);
      console.log(resultProducts.data);
      setResults(resultProducts.data);
      setShowItems(true);
    };
    getProducts();
  }, []);

  const deleteProduct = async (index) => {
    //let username = user.email||user.nickname;
    let newProducts = await axios.delete(`${process.env.REACT_APP_SERVER}/product/${index}`);
    setResults(newProducts.data);
  };
  
  const showUpdateModal = async(chosenItem) =>{
    setUpdateModalStatus(true);
    setItemInfo(chosenItem);
    setIndex(chosenItem._id);
  }
  
  const hideUpdateModal = () =>{
    setUpdateModalStatus(false);
  }

  const showAddModal = async(chosenItem) =>{
    setAddModalStatus(true);
  }
  
  const hideAddModal = () =>{
    setAddModalStatus(false);
  }
  
  const updateProducts = (results) => {
    setResults(results);
  }
  
  const addToBasket = async (chosenItem)=> {
    let username = user.email||user.nickname;
    chosenItem.username = username;
    console.log(chosenItem);
        await axios.post(`${process.env.REACT_APP_SERVER}/basket`,chosenItem);
  }
  
    return(
      <>
      <div style={{justifyContent:"flex-end", display:"flex"}}>
      {admin && 
      <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px", margin:"20px"}} onClick={()=> setAddModalStatus(true)} outline color="secondary" size="sm" type='button'>
      Add new product
      </MDBBtn>
      }
      </div>

      <h1 style={{fontFamily:"Poiret One", textAlign:"center", paddingTop:30, fontWeight:"bold"}}>Our Products</h1>
      <div
          style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            padding: "4rem",
            justifyContent: "center"
          }}
        >
          {showItems &&
            results.map((item, index) => (
              <ProductV2
              key={index}
              item={item}
              deleteProduct={deleteProduct}
              showUpdateModal={showUpdateModal}
              addToBasket={addToBasket}
              setAdmin={setAdmin}
            />
            ))}
            {!showItems && <p>Loading products...</p>}
  
            <UpdateProductModal
            show={updateModalStatus}
            hideUpdateModal={hideUpdateModal}
            itemInfo={itemInfo}
            itemIndex={index}
            updateProducts={updateProducts}
                      />

            <AddProductModal
            show={addModalStatus}
            hideAddModal={hideAddModal}
            updateProducts={updateProducts}
                      />
        </div>
      </>
  
    )
  }
  
  export default OurProducts;