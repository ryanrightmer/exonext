import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root';

const middlewares = [thunk];

export type AppState = ReturnType<typeof rootReducer>;

export const initializeStore = (initializeState: AppState) => {
  
}