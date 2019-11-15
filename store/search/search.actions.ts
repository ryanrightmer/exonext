import {
  BasicSearchResult,
  SEARCH,
  SearchActionTypes,
  StellarClass
} from "./search.types";
import { Dispatch } from "redux";
import { AppThunk, GetAppState } from "../store";
import axios from "axios";

const baseUrl =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json";

export const exoSearch = async (
  stellarClass: StellarClass,
  minDist: number,
  maxDist: number
) => {
  const columns = "&select=st_dist,pl_hostname,pl_name,st_spstr";
  const filter = `&where=st_dist>${minDist}%20and%20st_dist<${maxDist}%20and%20st_spstr%20like%20%27%25${stellarClass}%25%27`;
  const order = "&order=st_dist";

  const searchUrl = `${baseUrl}${columns}${filter}${order}`;

  console.log(searchUrl);
  const res = await axios.get(searchUrl);

  const data: BasicSearchResult[] = res.data;
  return data;
};

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
