import {
  SET_TASK
  } from "../constants/actionTypes";
  
  const initialState = {
    taskData : [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_TASK:
        return {
          ...state,
          taskData: action.payload,
        };
  
      default:
        return state;
    }
  }
  