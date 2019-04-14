import Reducers from './index';

describe("reducers", () => {
	test("movies list", () => {
		const initialState = {};
		const action = {
			type: "SET_MOVIES_LIST",
			payload: {
				moviesList: []
			}
		};
		const newState = Reducers.moviesList(initialState, action);
		expect(newState).toEqual({
			moviesList: []
		});
	});

	test("search by", () => {
		const initialState = {};
		const action = {
			type: "SET_SEARCH_BY",
			payload: {
				searchBy: 'title'
			}
		};
		const newState = Reducers.moviesList(initialState, action);
		expect(newState).toEqual({
			searchBy: 'title'
		});
	});
	
});