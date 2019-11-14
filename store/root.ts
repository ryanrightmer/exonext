// https://redux.js.org/recipes/usage-with-typescript

import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
});
  
export default rootReducer;