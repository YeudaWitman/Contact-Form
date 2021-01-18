import * as types from "../actions/types";

export const currentStep = (state = 1, action) => {
	switch (action.type) {
		case types.SET_CURRENT_STEP:
			return action.payload;
		default:
			return state;
	}
};

export default currentStep;
