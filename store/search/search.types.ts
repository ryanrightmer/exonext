export interface SearchState {

}

export const SEARCH = "SEARCH";

interface SearchAction {
  type: typeof SEARCH;
  searchString: string;
}

export type SearchActionTypes = SearchAction;