async function Fetcher(searchStr = '', searchBy, limit) {
    try {
        let reqURI = 'http://react-cdp-api.herokuapp.com/movies';
        if (searchStr.length) reqURI += `?search=${searchStr}&searchBy=${searchBy}`;
        if (limit) reqURI += `&limit=${limit}`;
        let response = await fetch(reqURI);
        if (response.ok) response = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports.Fetcher = Fetcher;