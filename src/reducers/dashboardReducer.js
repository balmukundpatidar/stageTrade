import {
  SET_DASHBOARD_DATA
  } from "../constants/actionTypes";
  
  const initialState = {
    dashboardData : {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_DASHBOARD_DATA:
        return {
          ...state,
          dashboardData: action.payload,
        };
  
      default:
        return state;
    }
  }
  