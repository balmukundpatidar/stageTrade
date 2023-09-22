import {
  SET_PLANS
  } from "../constants/actionTypes";
  
  const initialState = {
    plansData : {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_PLANS:
        return {
          ...state,
          plansData: action.payload,
        };
  
      default:
        return state;
    }
  }
  