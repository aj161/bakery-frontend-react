import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import {  MDBBtn } from 'mdb-react-ui-kit';

function AddProductModal(props){
  const { user } = useAuth0();
 // let username = user.email||user.nickname;

  const AddProductInfo = async (e) => {
    e.preventDefault();
    const newProductData = {
      name: e.target.name.value,
      type: e.target.type.value,
      price: e.target.price.value,
      imageUrl: e.target.imageUrl.value,
      code: e.target.code.value,
      quantity: 1
    };

    console.log(newProductData);
    const resultsUpdate = await axios.post(`${process.env.REACT_APP_SERVER}/product`, newProductData);
    props.hideAddModal();
    props.updateProducts(resultsUpdate.data)
  };

  return(
    <Modal show={props.show} onHide={props.hideAddModal}>
    <Modal.Header closeButton>
      <Modal.Title>Add Product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={AddProductInfo}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder={"Enter product name"}
            type="text"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Product type</Form.Label>
          <Form.Control
            placeholder={"Enter product type"}
            type="text"
            name="type"
            required
          />
          </Form.Group>
        <Form.Group controlId="code">
          <Form.Label>Unique Product Code</Form.Label>
          <Form.Control
            placeholder={"Enter product code"}
            type="text"
            name="code"
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            placeholder={"Price"}
            type="number" 
            max="10000"
            step="any"
            name="price"
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Enter Image URL</Form.Label>
          <Form.Control
            placeholder={"Image URL"}
            type="text"
            name="imageUrl"
            required
          />
        </Form.Group>
        <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={props.hideAddModal} outline color="secondary" size="sm" type='submit'>
    Add Item
    </MDBBtn>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={props.hideAddModal} outline color="secondary" size="sm" type='button'>
    Close
    </MDBBtn>
    </Modal.Footer>
  </Modal>
  )
}

export default AddProductModal;