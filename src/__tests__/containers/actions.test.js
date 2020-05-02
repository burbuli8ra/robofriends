import configureStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from '../../constants';
import * as actions from '../../containers/actions';

const mockStore = configureStore([thunkMiddleWare]);

afterEach(() => {
	fetchMock.restore();
});

describe('Actions', () => {
	it('setSearchField should handle CHANGE_SEARCH_FIELD', () => {
		const text = 'This is a string';
		const searchFieldAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		};

		expect(actions.setSearchField(text)).toEqual(searchFieldAction);
	});

	it('requestRobots should handle REQUEST_ROBOTS_PENDING', () => {
		const requestRobotsAction = {
			type: REQUEST_ROBOTS_PENDING
		};
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const actionsArray = store.getActions();

		expect(actionsArray[0]).toEqual(requestRobotsAction);
	});

	it('requestRobots should handle REQUEST_ROBOTS_SUCCESS', () => {
		const mockInitialState = {
			robots: []
		};
		const mockRobots = [{
			id: 1,
			name: 'John Snow',
			username: 'John Snow',
			email: 'johnsnow@gmail.com'
		}];
		const mockUrl = 'https://jsonplaceholder.typicode.com/users';
		const requestRobotsActions = [
			{ type: REQUEST_ROBOTS_PENDING },
			{
				type: REQUEST_ROBOTS_SUCCESS,
				payload: mockRobots
			}
		];
		fetchMock.getOnce(mockUrl, mockRobots);
		const store = mockStore(mockInitialState);

		return store.dispatch(actions.requestRobots())
			.then(() => {
				expect(store.getActions()).toEqual(requestRobotsActions);
			});
	});

	it('requestRobots should handle REQUEST_ROBOTS_FAILED', () => {
		const mockInitialState = {
			error: ''
		};
		const mockError = 'This is an error!';
		const mockUrl = 'https://jsonplaceholder.typicode.com/users';
		const requestRobotsActions = [
			{ type: REQUEST_ROBOTS_PENDING },
			{
				type: REQUEST_ROBOTS_FAILED,
				payload: mockError
			}
		];
		fetchMock.getOnce(mockUrl, () => {
			throw new Error(mockError)
		});
		const store = mockStore(mockInitialState);

		return store.dispatch(actions.requestRobots())
			.catch(() => {
				expect(store.getActions()).toEqual(requestRobotsActions);
			});
	});
});