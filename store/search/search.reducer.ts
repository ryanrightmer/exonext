import { SearchState, SearchActionTypes, SEARCH } from "./search.types";
import { BasicSearchResult, StellarClass } from "../../types";
import { stat } from "fs";

export const initialState: SearchState = {
  searchResults: [],
  filter: {
    minDist: 0,
    maxDist: 10,
    stellarClass: StellarClass.Any
  }
};

const SearchReducer = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchResults: [...action.searchResults],
        filter: {
          ...action.filter
        }
      };
    }
    default:
      return state;
  }
};

export default SearchReducer;
