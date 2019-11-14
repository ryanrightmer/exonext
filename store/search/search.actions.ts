import {
  BasicSearchResult,
  SEARCH,
  SearchActionTypes,
  StellarClass
} from "./search.types";
import { Dispatch } from "redux";
import { AppThunk, GetAppState } from "../store";

const baseUrl =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json";

export const search = (
  stellarClass: StellarClass,
  minDist: number,
  maxDist: number
): AppThunk => {
  return async (
    dispatch: Dispatch<SearchActionTypes>,
    getState: GetAppState
  ) => {
    console.log("SEARCHING");
    const columns = "&select=st_dist,pl_hostname,pl_name";
    const filter = `&where=st_dist>${minDist}%20and%20st_dist<${maxDist}&20and%20st_spstr%20like%20%27%25${stellarClass}%25%27`;
    const order = "&order=st_dist";

    const res = await fetch(`${baseUrl}${columns}${filter}${order}`);
    const data: BasicSearchResult[] = await res.json();

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
