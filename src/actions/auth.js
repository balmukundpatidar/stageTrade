import { USER_LOADED } from "../constants/actionTypes";
import {signIn, signOut} from 'next-auth/react';


export const loginWith = (param) => {
  signIn(param);
}
export const logout = () => {
  signOut();
}

export const setUser = (data) => (dispatch) => {
  dispatch({type:USER_LOADED,payload:data})
}




