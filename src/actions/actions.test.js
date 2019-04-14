import setMoviesList from './set-movies';

test("set movies", () => {
	const payload = [];
	const action = setMoviesList(payload);
	expect(action).toEqual({
		payload: payload,
		type: "SET_MOVIES_LIST"
	});
});