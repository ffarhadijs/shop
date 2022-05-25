import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";
import { quantity } from "../../helpers/functions/quantity/quantity";
import { shorten } from "../../helpers/functions/shorten/shorten";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="product bg-white p-3 col-5 col-md-3 col-lg-2 m-2 ">
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="productImg my-3 "
          src={productData.image}
          alt={`product${productData.id}`}
        />
      </div>
      <p className="producttext fw-bold font-monospace">
        {shorten(productData.title)}
      </p>
      <p className="productprice fw-bold">price:{productData.price} $</p>
      <div className="productBtns d-flex flex-column mx-auto">
        <Link
          to={`product${productData.id}`}
          className="text-decoration-none my-2 mx-auto"
        >
          <Button variant="outline-primary">Details</Button>
        </Link>
        {quantity(state, productData) == 0 && (
          <Button
            variant="primary"
            className="my-1"
            onClick={() =>
              dispatch({ type: "ADD_PRODUCT", payLoad: productData })
            }
          >
            Add
          </Button>
        )}
        {quantity(state, productData) >= 1 && (
          <Button
            variant="success"
            className="my-1"
            onClick={() => dispatch({ type: "INCREASE", payLoad: productData })}
          >
            Increase
          </Button>
        )}
        <div className="mx-auto">
          {quantity(state, productData) ? (
            <div className="quantityBtn">{quantity(state, productData)}</div>
          ) : null}
        </div>
        {quantity(state, productData) == 1 && (
          <Button
            variant="danger"
            className="my-1"
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
            className="my-1"
            onClick={() => dispatch({ type: "DECREASE", payLoad: productData })}
          >
            Decrease
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
