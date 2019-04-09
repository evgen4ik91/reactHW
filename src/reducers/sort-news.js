export default function setCurrentSorting(state = '', action) {
  switch (action.type) {
    case 'SET_CURRENT_SORTING':
      return action.payload;
    default:
      return state;
  }
}