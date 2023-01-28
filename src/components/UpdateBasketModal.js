import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import {  MDBBtn } from 'mdb-react-ui-kit';

function UpdateBasketModal(props){
  const { user } = useAuth0();
  let username = user.email||user.nickname;

  const updateProductQuantity = async (e) => {
    e.preventDefault();
    const newProductData = {
      username: username,
      quantity: e.target.quantity.value,
    };

    const resultsUpdate = await axios.put(`${process.env.REACT_APP_SERVER}/basket/${props.itemIndex}`, newProductData);
    props.updateBasketTotal(resultsUpdate);
    props.hideUpdateModal();
    props.updateProducts(resultsUpdate.data)
  };

  return(
    <Modal show={props.show} onHide={props.hideUpdateModal}>
    <Modal.Header closeButton>
      <Modal.Title>Update Product Quantity</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={updateProductQuantity}>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.quantity}
            type="number" 
            max="10000"
            step="any"
            name="quantity"
          />
        </Form.Group>
        <MDBBtn style={{borderRadius:"10px", backgroundColor:"#a3cbc1", color:"grey", padding:"6px"}} onClick={props.hideUpdateModal} outline color="secondary" size="sm" type='submit'>
    Update Item
    </MDBBtn>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <MDBBtn onClick={props.hideUpdateModal} outline color="secondary" size="sm" type='button'>
    Close
    </MDBBtn>
    </Modal.Footer>
  </Modal>
  )
}

export default UpdateBasketModal;