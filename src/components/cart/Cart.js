import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";
import CartProduct from "../cartProduct/CartProduct";
import { Button } from "react-bootstrap";
import { ModalContext } from "../../contexts/modalContextProvider/ModalContextProvider";
import NavBar from "../navBar/NavBar";
import { Breadcrumb } from "react-bootstrap";

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { setShow } = useContext(ModalContext);

  return (
    <div>
      <NavBar />
      <div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="cart container-fluid">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="col-10 col-lg-8 mx-3">
            {state.selectedProducts.map((product) => (
              <CartProduct key={product.id} productData={product} />
            ))}
          </div>
          <div className="cartbox col-10 col-lg-3 border rounded align-self-baseline my-5 mx-3 p-4">
            <p>
              <span className="text-primary fw-bold">Total price: </span>
              {state.totalPrice.toFixed(2)} $
            </p>
            <p>
              <span className="text-primary fw-bold">Total Products: </span>
              {state.totalProducts}
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-between mx-auto">
              <Link to="/login">
                <Button
                  variant="primary"
                  className="my-2"
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                >
                  Check out
                </Button>
              </Link>
              <Button
                variant="outline-primary"
                className="my-2"
                onClick={() => setShow(true)}
              >
                clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
