import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/productContextProvider/ProductContextProvider";
import NavBar from "../navBar/NavBar";
import { Breadcrumb } from "react-bootstrap";

const Detail = (props) => {
  const products = useContext(ProductsContext);
  const id = useParams().id;
  const product = products[id - 1];
  return (
    <div>
      <NavBar />
      <div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Detail</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="detail container-fluid ">
        <div className="detailbox container mx-auto row border rounded p-4 d-flex flex-row flex-wrap align-items-center">
          <div className="col-12 col-sm-4 px-4">
            <img
              src={product.image}
              alt={"currentProduct"}
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-sm-8">
            <h3 className="py-3 text-primary">{product.title}</h3>
            <p className="py-3">{product.description}</p>
            <h5 className="pb-3">
              <span className="text-warning">category: </span>
              {product.category}
            </h5>
            <div className="d-flex flex-row flex-wrap justify-content-between">
              <Button variant={"success"} className=" fw-bold">
                {product.price} $
              </Button>
              <Link to="/">
                <Button variant="outline-primary">go back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
