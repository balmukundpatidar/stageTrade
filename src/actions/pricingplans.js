import config from "@/config";
import * as api from '../pages/api/api';
import * as actionTypes from "../constants/actionTypes";


export const getPlans = (payload) => (dispatch) => {
    const endPoint = "./jsondata/pricingplans.json"
      api
      .get(`${config.BASE_URL}/${endPoint}`)
      .then((res) => {
      
          dispatch({
              type: actionTypes.SET_PLANS,
              payload: res.data.data,
            });
      })
      .catch((error) => {
        console.log(error);
     
        
      });
  }