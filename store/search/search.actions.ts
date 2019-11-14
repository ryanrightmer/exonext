import { SEARCH, SearchActionTypes, } from './search.types';
import { Dispatch } from 'redux';
import { AppState } from '../store';

enum StellarClass {
  Any,
  M
}

export const login = (stellarClass: StellarClass, minDist: number, maxDist: number) => {
    return (dispatch: Dispatch<SearchActionTypes>, getState: AppState) => {
        dispatch({
            type: SEARCH,
            searchString: 'test'
        });
    };
}