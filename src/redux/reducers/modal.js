import * as types from "../actions/types";

const initState = {
	show: false,
	type: "success",
};
export const modal = (state = initState, action) => {
	switch (action.type) {
		case types.MODAL_SHOW:
			return {
				type: action.payload,
				show: true,
			};
		case types.CLOSE_MODAL:
			return initState;
		default:
			return state;
	}
};

export default modal;
