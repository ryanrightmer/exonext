export interface SearchState {
  searchResults: BasicSearchResult[]
}

export const SEARCH = "SEARCH"; 

export enum StellarClass {
  Any,
  O,
  B,
  A,
  F,
  G,
  K,
  M
}

export type BasicSearchResult = {
  st_dist: number,
  pl_hostname: string,
  pl_name: string,
}

interface SearchAction {
  type: typeof SEARCH;
  filter: {
    minDist: number
    maxDist: number
    stellarClass: StellarClass
  };
}

export type SearchActionTypes = SearchAction;