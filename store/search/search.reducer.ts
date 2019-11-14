import { SearchState, SearchActionTypes } from './search.types';
import { stat } from 'fs';

export const initialState: SearchState = {

}

const SearchReducer = (state = initialState, action: SearchActionTypes): SearchState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default SearchReducer;