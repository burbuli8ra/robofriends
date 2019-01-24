import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
	searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			// Update state using Object.assign()
			// return Object.assign({}, state, { searchField: action.payload });

			// Update state using the spread operator
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};