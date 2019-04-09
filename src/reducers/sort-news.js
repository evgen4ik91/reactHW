export default function sortNews(state = 'genre', action) {
  switch (action.type) {
    case 'SORT_NEWS_LIST':
      return state
    default:
      return state;
  }
}