import { BasicSearchResult, SearchState, SearchActionTypes } from './search.types';
import { stat } from 'fs';

export const initialState: SearchState = {
  searchResults: [
    { st_dist: 0, pl_hostname: "Sol", pl_name: "Earth" }
  ]
}

const SearchReducer = (state = initialState, action: SearchActionTypes): SearchState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default SearchReducer;