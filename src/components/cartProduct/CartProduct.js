import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";
import { quantity } from "../../helpers/functions/quantity/quantity";
import { shorten } from "../../helpers/functions/shorten/shorten";
const CartProduct = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="cartproduct row my-5 py-4 border rounded d-flex flex-row flex-wrap align-items-center">
      <img
        src={productData.image}
        className="col-12 col-sm-2 d-flex flex-row flex-wrap justify-content-center mx-auto"
      />
      <h4 className="col-12 col-sm-4 py-3 mx-auto col-md-4 d-flex flex-row flex-wrap justify-content-center text-primary">
        {shorten(productData.title)}
      </h4>
      <div className="col-12 col-sm-2 d-flex flex-row flex-wrap justify-content-center mx-auto">
        <Button variant="success" className="col-auto m-1">
          <h6 className="my-0">{productData.price} $</h6>
        </Button>
        <Button variant="warning" className="col-auto m-1">
          <h6 className="my-0">{productData.quantity}</h6>
        </Button>
      </div>
      <div className="col-12 col-sm-4 d-flex flex-row flex-wrap justify-content-center mx-auto">
        {quantity(state, productData) >= 1 && (
          <Button
            variant="success"
            className="col-6 col-sm-auto m-2"
            onClick={() => dispatch({ type: "INCREASE", payLoad: productData })}
          >
            Increase
          </Button>
        )}
        {quantity(state, productData) == 1 && (
          <Button
            variant="danger"
            className="col-6 col-sm-auto m-2"
            onClick={() =>
              dispatch({ type: "REMOVE_PRODUCT", payLoad: productData })
            }
          >
            Remove
          </Button>
        )}
        {quantity(state, productData) > 1 && (
          <Button
            variant="warning"
            className="m-2"
            onClick={() => dispatch({ type: "DECREASE", payLoad: productData })}
          >
            Decrease
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
