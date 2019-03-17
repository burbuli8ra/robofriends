import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from '../constants';
import * as reducers from '../reducers';

let initialSearchState, initialRobotsState;

beforeEach(() => {
	initialSearchState = {
		searchField: ''
	};

	initialRobotsState =  {
		isPending: false,
		robots: [],
		error: ''
	};
});

describe('Reducers', () => {
	it('searchRobots should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual(initialSearchState);
	});

	it('searchRobots should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialSearchState, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({ searchField: 'abc' });
	});

	it('requestRobots should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialRobotsState);
	});

	it('requestRobots should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(initialRobotsState, {
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({
			isPending: true,
			robots: [],
			error: ''
		});
	});

	it('requestRobots should handle REQUEST_ROBOTS_SUCCESS', () => {
		const mockRobots = [{
			id: 1,
			name: 'John Snow',
			username: 'John Snow',
			email: 'johnsnow@gmail.com'
		}];

		expect(reducers.requestRobots(initialRobotsState, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: mockRobots
		})).toEqual({
			isPending: false,
			robots: mockRobots,
			error: ''
		});
	});

	it('requestRobots should handle REQUEST_ROBOTS_FAILED', () => {
		const mockError = 'This is an error';

		expect(reducers.requestRobots(initialRobotsState, {
			type: REQUEST_ROBOTS_FAILED,
			payload: mockError
		})).toEqual({
			isPending: false,
			robots: [],
			error: mockError
		});
	});
});