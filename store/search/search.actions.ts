import { SEARCH, SearchActionTypes } from "./search.types";
import { BasicSearchResult, StellarClass } from "../../types";
import { Dispatch } from "redux";
import { AppThunk, GetAppState } from "../store";
import { exoSearch } from "../../utils/exoplanet-api-utils";

export const search = (
  stellarClass: StellarClass,
  minDist: number,
  maxDist: number
): AppThunk => {
  return async (
    dispatch: Dispatch<SearchActionTypes>,
    getState: GetAppState
  ) => {
    const data = await exoSearch(stellarClass, minDist, maxDist);

    dispatch({
      type: SEARCH,
      filter: {
        minDist,
        maxDist,
        stellarClass
      },
      searchResults: data
    });
  };
};
