export default function setCurrentSorting(state = [], action) {
    switch (action.type) {
      case 'SET_MOVIES_LIST':
        return action.payload;
      default:
        return state;
    }
}