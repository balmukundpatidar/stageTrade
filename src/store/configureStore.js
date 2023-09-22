import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers';
import loggerMiddleware from './middleware';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  // Create the store without Redux DevTools extension
  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
}
