import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";
import CartProduct from "../cartProduct/CartProduct";
import { Button, Modal } from "react-bootstrap";
import { ModalContext } from "../../contexts/modalContextProvider/ModalContextProvider";
import NavBar from "../navBar/NavBar";

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { setShow } = useContext(ModalContext);

  return (
    <>
      <NavBar />
      <div className="container-fluid bg-light">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="col-10 col-sm-8 mx-3">
            {state.selectedProducts.map((product) => (
              <CartProduct key={product.id} productData={product} />
            ))}
          </div>
          <div className="col-10 col-sm-3 border rounded align-self-baseline my-5 mx-3 p-4 bg-white">
            <p>
              <span className="text-primary fw-bold">Total price:</span>{" "}
              {state.totalPrice.toFixed(2)} $
            </p>
            <p>
              <span className="text-primary fw-bold">Total Products:</span>{" "}
              {state.totalProducts}
            </p>
            <div className="d-flex flew-row flex-wrap justify-content-between mx-auto">
              <Link to="/login">
                <Button
                  variant="primary"
                  className="mx-auto my-2"
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                >
                  Check out
                </Button>
              </Link>
              <Button
                variant="outline-primary"
                className="mx-auto my-2"
                onClick={() => setShow(true)}
              >
                clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
