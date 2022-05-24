import React, { createContext, useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { getApi } from "../../services/api/Api";
export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setProduct(await getApi());
    };
    fetchApi();
  }, []);

  return (
    <div>
      {product.length?<ProductsContext.Provider value={product}>
      {props.children}
    </ProductsContext.Provider>:<Loader/>}
   
    </div>
  );
};

export default ProductContextProvider;
