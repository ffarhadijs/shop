import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Detail from "./components/detail/Detail";
import Store from "./components/store/Store";
import CartContextProvider from "./contexts/cartContextProvider/CartContextProvider";
import ProductContextProvider from "./contexts/productContextProvider/ProductContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login/Login";
import ModalContextProvider from "./contexts/modalContextProvider/ModalContextProvider";
import NotFound from "./components/notFound/NotFound";
import ModalBox from "./components/modal/ModalBox";

function App() {
  return (
    <div className="p-0 m-0">
      <BrowserRouter>
        <ProductContextProvider>
          <CartContextProvider>
            <ModalContextProvider>
              <ModalBox />
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Store />} />
                <Route path="/product:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ModalContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
