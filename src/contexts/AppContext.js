import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const AppContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState

  return (
    <StateContext.Provider
      value={{

      }}
    >

        {children}
    </StateContext.Provider>
  );
};
