import * as types from "../actions/types";

const initValues = {
	firstName: "",
	lastName: "",
	title: "",
	country: "",
	city: "",
	street: "",
	number: "",
	email: "",
	phone: "",
	rememberMe: false,
};

const setFormValues = (state = initValues, action) => {
	switch (action.type) {
		case types.SET_FORM_VALUES:
			const key = Object.keys(action.payload)[0];
			return { ...state, [key]: action.payload[key] };
		default:
			return state;
	}
};
export default setFormValues;
