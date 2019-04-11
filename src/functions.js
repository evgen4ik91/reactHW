module.exports.getYear = function getYear(date) {
    return new Date(date).getFullYear();
}

module.exports.sortMovies = function sortMovies(arr, prop) {
    return arr.sort((a, b) => parseInt(a[prop]) >= parseInt(b[prop]) ? 1 : -1);
}