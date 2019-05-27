function getYear(date) {
    return new Date(date).getFullYear();
}

function sortMovies(arr, prop) {
    return arr.sort((a, b) => parseInt(a[prop]) >= parseInt(b[prop]) ? 1 : -1);
}

function scrollTo(gap = 0) {
    window.scrollTo({
        top: gap,
        behavior: "smooth"
    });
} 

export {getYear, sortMovies, scrollTo};