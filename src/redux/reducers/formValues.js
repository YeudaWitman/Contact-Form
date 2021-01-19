import * as types from "../actions/types";
import { inputStatus } from "../../utils/globals";

const initValues = {
	firstName: { value: "", status: inputStatus.pristine },
	lastName: { value: "", status: inputStatus.pristine },
	title: { value: "", status: inputStatus.pristine },
	country: { value: "israel", status: inputStatus.valid },
	city: { value: "", status: inputStatus.pristine },
	street: { value: "", status: inputStatus.pristine },
	number: { value: "", status: inputStatus.pristine },
	email: { value: "", status: inputStatus.pristine },
	phone: { value: "", status: inputStatus.pristine },
	rememberMe: { value: false, status: inputStatus.valid },
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
