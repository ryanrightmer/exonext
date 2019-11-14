import { Action, createStore, applyMiddleware } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThunkAction } from "redux-thunk";

import rootReducer from "./root";

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;

export type GetAppState = () => AppState;

export default function configureStore() {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
