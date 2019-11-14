import {
  BasicSearchResult,
  SEARCH,
  SearchActionTypes,
  StellarClass
} from "./search.types";
import { Dispatch } from "redux";
import { AppState } from "../store";

const baseUrl =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json";

export const search = (
  stellarClass: StellarClass,
  minDist: number,
  maxDist: number
) => {
  return async (dispatch: Dispatch<SearchActionTypes>, getState: AppState) => {
    const columns = "&select=st_dist,pl_hostname,pl_name";
    const filter = `&where=st_dist>${minDist}%20and%20st_dist<${maxDist}`;
    const order = "&order=st_dist";

    const res = await fetch(`${baseUrl}${columns}${filter}${order}`);
    const data: BasicSearchResult[] = await res.json();

    dispatch({
      type: SEARCH,
      filter: {
        minDist,
        maxDist,
        stellarClass
      }
    });
  };
};
