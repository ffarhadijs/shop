import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";
import shopping from "../../assets/shopping30.png";

const NavBar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className="navbar bg-light position-sticky top-0">
      <Link to="/" className="text-decoration-none mx-3">
        <p className="fs-5 text-body">Products</p>
      </Link>
      <h1 className="text-center"> Fake Store</h1>
      {state.selectedProducts.length ? (
        <Link to="/cart" className="text-decoration-none mx-3">
          <img src={shopping} alt='shop basket'/>
          <span className="text-body">{state.totalProducts}</span>
        </Link>
      ) : (
        <img className="mx-3" src={shopping} alt='shop basket'/>
      )}
    </div>
  );
};

export default NavBar;
