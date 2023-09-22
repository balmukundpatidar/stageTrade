import {
  SET_TOTAL_BALANCE
  } from "../constants/actionTypes";
  
  const initialState = {
    totalBalance : {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_TOTAL_BALANCE:
        return {
          ...state,
          totalBalance: action.payload,
        };
  
      default:
        return state;
    }
  }
  