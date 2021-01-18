import * as types from "../actions/types";

const countries = (state = [], action) => {
	switch (action.type) {
		case types.GET_COUNTRIES:
			return action.payload;
		default:
			return state;
	}
};

export default countries;
