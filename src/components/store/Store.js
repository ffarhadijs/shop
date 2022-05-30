import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/productContextProvider/ProductContextProvider";
import Slider from "../slider/Slider";
import NavBar from "../navBar/NavBar";
import Product from "../product/Product";
import { Breadcrumb } from "react-bootstrap";
const Store = (props) => {
  const product = useContext(ProductsContext);

  return (
    <>
      <NavBar />
      <Slider />
      <div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="store container-fluid p-4 d-flex flex-row flex-wrap justify-content-between py-5">
        {product.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </>
  );
};

export default Store;
