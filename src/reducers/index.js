import { combineReducers } from 'redux';
import currentSorting from './sort-news';
import moviesList from './set-movies';
import searchBy from './set-search-by';
import searchQuery from './set-search-query';

export default combineReducers({
    currentSorting,
    moviesList,
    searchBy,
    searchQuery
});