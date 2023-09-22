import {
  SET_SIGNALS
  } from "../constants/actionTypes";
  
  const initialState = {
    signalsData : [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_SIGNALS:
        return {
          ...state,
          signalsData: action.payload,
        };
  
      default:
        return state;
    }
  }
  