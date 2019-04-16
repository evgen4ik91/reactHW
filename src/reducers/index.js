import initialState from '../initialState';

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SET_SEARCH_BY':
            return {
                ...state,
                searchBy: action.payload
            };
        case 'SET_MOVIES_LIST':
            return {
                ...state,
                moviesList: action.payload
            };
        case 'SET_CURRENT_SORTING':
            return {
                ...state,
                currentSorting: action.payload
            };
        default:
            return state;
    }
}