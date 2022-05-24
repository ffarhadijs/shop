import React, { createContext, useReducer } from "react";
import { sum } from "../../helpers/functions/sum/sum";

export const CartContext = createContext();

const initialState = {
  selectedProducts: [],
  totalProducts: 0,
  totalPrice: 0,
  checkOut: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (
        !state.selectedProducts.find(
          (product) => product.id === action.payLoad.id
        )
      ) {
        state.selectedProducts.push({
          ...action.payLoad,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...sum(state.selectedProducts),
        checkOut: false,
      };
    case "REMOVE_PRODUCT":
      const removed = state.selectedProducts.filter(
        (product) => product.id !== action.payLoad.id
      );
      return {
        ...state,
        selectedProducts: [...removed],
        ...sum(removed),
      };
    case "INCREASE":
      const indexI = state.selectedProducts.findIndex(
        (product) => product.id === action.payLoad.id
      );
      state.selectedProducts[indexI].quantity++;
      return {
        ...state,
        ...sum(state.selectedProducts),
      };
    case "DECREASE":
      const indexD = state.selectedProducts.findIndex(
        (product) => product.id === action.payLoad.id
      );
      state.selectedProducts[indexD].quantity--;
      return {
        ...state,
        ...sum(state.selectedProducts),
      };
    case "CHECKOUT":
      return {
        selectedProducts: [],
        totalProducts: 0,
        totalPrice: 0,
        checkOut: true,
      };
    case "CLEARE":
      return {
        selectedProducts: [],
        totalProducts: 0,
        totalPrice: 0,
        checkOut: false,
      };
    default:
      return state;
  }
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
