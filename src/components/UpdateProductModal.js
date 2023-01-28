import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import {  MDBBtn } from 'mdb-react-ui-kit';

function UpdateProductModal(props){
  const { user } = useAuth0();
 // let username = user.email||user.nickname;

  const updateProductInfo = async (e) => {
    e.preventDefault();
    const newProductData = {
      name: e.target.name.value,
      type: e.target.type.value,
      price: e.target.price.value,
      imageUrl: e.target.imageUrl.value,
    };

    const resultsUpdate = await axios.put(`${process.env.REACT_APP_SERVER}/product/${props.itemIndex}`, newProductData);
    props.hideUpdateModal();
    props.updateProducts(resultsUpdate.data)
  };

  return(
    <Modal show={props.show} onHide={props.hideUpdateModal}>
    <Modal.Header closeButton>
      <Modal.Title>Update Product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={updateProductInfo}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.name}
            type="text"
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Type</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.type}
            type="text"
            name="type"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.price}
            type="number" 
            max="10000"
            step="any"
            name="price"
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.imageUrl}
            type="text"
            name="imageUrl"
          />
        </Form.Group>
        <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}}onClick={props.hideUpdateModal} outline color="secondary" size="sm" type='submit'>
    Update Item
    </MDBBtn>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={props.hideUpdateModal} outline color="secondary" size="sm" type='button'>
    Close
    </MDBBtn>
    </Modal.Footer>
  </Modal>
  )
}

export default UpdateProductModal;