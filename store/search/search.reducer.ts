import {
  BasicSearchResult,
  SearchState,
  SearchActionTypes,
  SEARCH,
  StellarClass
} from "./search.types";
import { stat } from "fs";

export const initialState: SearchState = {
  searchResults: [{ st_dist: 0, pl_hostname: "Sol", pl_name: "Earth" }],
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
