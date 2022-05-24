import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/productContextProvider/ProductContextProvider";
import NavBar from "../navBar/NavBar";
import Product from "../product/Product";

const Store = (props) => {
  const products = useContext(ProductsContext);
  return (
    <>
      <NavBar />
      <div className="container-fluid p-4 d-flex flex-row flex-wrap justify-content-between bg-light py-5">
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </>
  );
};

export default Store;
