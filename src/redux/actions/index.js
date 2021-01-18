import * as types from "./types";

export const setStep = (payload) => {
	return {
		type: types.SET_CURRENT_STEP,
		payload,
	};
};

export const setFormValues = (payload) => {
	return {
		type: types.SET_FORM_VALUES,
		payload,
	};
};
