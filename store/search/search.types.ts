import { BasicSearchResult, StellarClass } from "../../types";

export interface SearchState {
  searchResults: BasicSearchResult[];
  filter: Filter;
}

export const SEARCH = "SEARCH";

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
