import Reducers from './index';

import initialState from '../initialState';

describe("reducers", () => {
	test("movies list", () => {
		const action = {
			type: "SET_MOVIES_LIST",
			payload: {
				moviesList: []
			}
		};
		const newState = Reducers(initialState, action);
		expect(newState).toEqual({
			...initialState,
			moviesList: []
		});
	});

	test("search by", () => {
		const action = {
			type: "SET_SEARCH_BY",
			payload: {
				searchBy: 'title'
			}
		};
		const newState = Reducers(initialState, action);
		expect(newState).toEqual({
			...initialState,
			searchBy: 'title'
		});
	});

	test("search query", () => {
		const action = {
			type: "SET_SEARCH_BY",
			payload: {
				searchQuery: 'title'
			}
		};
		const newState = Reducers(initialState, action);
		expect(newState).toEqual({
			...initialState,
			searchQuery: 'title'
		});
	});

	test("current sorting", () => {
		const action = {
			type: "SET_SEARCH_BY",
			payload: {
				currentSorting: 'title'
			}
		};
		const newState = Reducers(initialState, action);
		expect(newState).toEqual({
			...initialState,
			currentSorting: 'title'
		});
	});
});