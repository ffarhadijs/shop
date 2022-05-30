import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContextProvider/CartContextProvider";

const NavBar = () => {
  const { state } = useContext(CartContext);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className="navbar position-sticky top-0">
      <div className="mx-3">
        <div className="toggle-theme-wrapper">
          <i className="fs-4 bi bi-sun"></i>
          <label className="toggle-theme" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleTheme}
              defaultChecked={defaultDark}
            />
            <div className="slider round"></div>
          </label>
          <i className="fs-4 bi bi-moon-stars"></i>
        </div>
      </div>
      <div>
        <Link to="/" className="text-decoration-none mx-3">
          <p className="fs-5 text-center">Products</p>
        </Link>
      </div>
      <div>
        {state.selectedProducts.length ? (
          <Link to="/cart" className="text-decoration-none mx-3">
            <i className="fs-3 bi bi-cart3"></i>
            <p>{state.totalProducts}</p>
          </Link>
        ) : (
          <i className="fs-3 mx-3 bi bi-cart3"></i>
        )}
      </div>
    </div>
  );
};

export default NavBar;
