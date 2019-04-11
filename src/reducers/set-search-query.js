export default function setCurrentSorting(state = '', action) {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.payload;
        default:
            return state;
    }
}