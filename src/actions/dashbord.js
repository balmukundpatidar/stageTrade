import config from "@/config";
import * as api from '../pages/api/api';
import * as actionTypes from "../constants/actionTypes";

export const formatDateToMonthDay = (date) => {
  const options = { month: 'long', day: 'numeric' };
  return date ? date.toLocaleDateString(undefined, options) : date;
}

export const getDashboardData = (payload) => (dispatch) => {
    const endPoint = "./jsondata/dashboard.json"
      api
      .get(`${config.BASE_URL}/${endPoint}`)
      .then((res) => {
      
          dispatch({
              type: actionTypes.SET_DASHBOARD_DATA,
              payload: res.data.data,
            });
      })
      .catch((error) => {
        console.log(error);
     
        
      });
  }

  export const signalsList = (payload) => (dispatch) => {
    const endPoint = "./jsondata/signals.json"
      api
      .get(`${config.BASE_URL}/${endPoint}`)
      .then((res) => {
        console.log(res);
          dispatch({
              type: actionTypes.SET_SIGNALS,
              payload: res.data.data,
            });
      })
      .catch((error) => {
        console.log(error);
     
        
      });
  }

  export const taskList = (payload) => (dispatch) => {
    const endPoint = "./jsondata/tasklist.json"
      api
      .get(`${config.BASE_URL}/${endPoint}`)
      .then((res) => {
      
          dispatch({
              type: actionTypes.SET_TASK,
              payload: res.data.data,
            });
      })
      .catch((error) => {
        console.log(error);
     
        
      });
  }

  export const pastPerformance = (payload) => (dispatch) => {
    const endPoint = "./jsondata/pastperformance.json"
      api
      .get(`${config.BASE_URL}/${endPoint}`)
      .then((res) => {
      
          dispatch({
              type: actionTypes.SET_PERFORMANCE,
              payload: res.data.data,
            });
      })
      .catch((error) => {
        console.log(error);
     
        
      });
  }

  export const getPortfolioList = () => (dispatch) => {
    const endPoint = "./jsondata/portfolio.json";
    api
    .get(`${config.BASE_URL}/${endPoint}`)
    .then((res) => {
    
        dispatch({
            type: actionTypes.SET_PORTFOLIO,
            payload: res.data.data,
          });
    })
    .catch((error) => {
      console.log(error);
   
      
    });
}
  
export const getTotalBalance = () => (dispatch) => {
  const endPoint = "./jsondata/totalbalance.json";
  api
  .get(`${config.BASE_URL}/${endPoint}`)
  .then((res) => {
  
      dispatch({
          type: actionTypes.SET_TOTAL_BALANCE,
          payload: res.data.data.totalBalance,
        });
  })
  .catch((error) => {
    console.log(error);
 
    
  });
}







  