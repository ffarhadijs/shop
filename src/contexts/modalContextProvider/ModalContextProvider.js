import React, { createContext, useContext, useState } from "react";
export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [show, setShow] = useState(false);


  return (
    <div>
      <ModalContext.Provider value={{ show, setShow }}>
        {props.children}
      </ModalContext.Provider>

      
    </div>
  );
};

export default ModalContextProvider;
