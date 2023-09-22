import {
    USER_LOADED
  } from "../constants/actionTypes";
  
  const initialState = {
    userData : {},
    isAuthenticated:false,
    pending: true,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOADED:
        return {
          ...state,
          userData: action.payload,
        };
  
      default:
        return state;
    }
  }
  