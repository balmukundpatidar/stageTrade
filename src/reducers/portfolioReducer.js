import {
  SET_PORTFOLIO,
  } from "../constants/actionTypes";
  
  const initialState = {
    portfolioData : [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_PORTFOLIO:
        return {
          ...state,
          portfolioData: action.payload,
        };
  
      default:
        return state;
    }
  }
  