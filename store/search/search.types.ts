export interface SearchState {
  searchResults: BasicSearchResult[];
  filter: Filter;
}

export const SEARCH = "SEARCH";

export enum StellarClass {
  Any = "",
  O = "O",
  B = "B",
  A = "A",
  F = "F",
  G = "G",
  K = "K",
  M = "M"
}

export type BasicSearchResult = {
  st_dist: number;
  pl_hostname: string;
  pl_name: string;
  st_spstr: string;
};

type Filter = {
  minDist: number;
  maxDist: number;
  stellarClass: StellarClass;
};

interface SearchAction {
  type: typeof SEARCH;
  filter: Filter;
  searchResults: BasicSearchResult[];
}

export type SearchActionTypes = SearchAction;
