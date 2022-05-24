import React, { useContext } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { CartContext } from '../../contexts/cartContextProvider/CartContextProvider';
import { ModalContext } from '../../contexts/modalContextProvider/ModalContextProvider';

const ModalBox = () => {
    const {dispatch}=useContext(CartContext)
    const {show,setShow}=useContext(ModalContext)
    const handleClose = () => setShow(false);
    const action = () => {
      handleClose();
      dispatch({ type: "CLEARE" });
    };
    return ( 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure for remove products?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={action}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default ModalBox;