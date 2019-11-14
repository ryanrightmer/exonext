export interface SearchState {
  searchResults: BasicSearchResult[]
}

export const SEARCH = "SEARCH";

export type BasicSearchResult = {
  st_dist: number,
  pl_hostname: string,
  pl_name: string,
}

interface SearchAction {
  type: typeof SEARCH;
  searchString: string;
}

export type SearchActionTypes = SearchAction;