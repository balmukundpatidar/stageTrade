import {
  SET_PERFORMANCE,
  } from "../constants/actionTypes";
  
  const initialState = {
    performanceData : [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_PERFORMANCE:
        return {
          ...state,
          performanceData: action.payload,
        };
  
      default:
        return state;
    }
  }
  