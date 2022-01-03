import { createContext, useContext as UC } from "react";

const Context = createContext([[], () => {}]);

export const useContext = () => UC(Context);

export default Context;

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
