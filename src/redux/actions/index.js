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

export const resetForm = () => {
	return {
		type: types.RESET_FORM,
	};
};

export const getCountries = (payload) => {
	return {
		type: types.GET_COUNTRIES,
		payload,
	};
};

export const modal = (payload) => {
	return {
		type: types.MODAL_SHOW,
		payload,
	};
};

export const closeModal = () => {
	return {
		type: types.CLOSE_MODAL,
	};
};
