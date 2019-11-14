import { SEARCH, SearchActionTypes, } from './search.types';
import { Dispatch } from 'redux';
import { AppState } from '../store';

export const login = (file: File) => {
    return (dispatch: Dispatch<SearchActionTypes>, getState: AppState) => {
        dispatch({
            type: SEARCH,
            searchString: 'test'
        });
    };
}