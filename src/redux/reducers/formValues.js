import * as types from "../actions/types";
import { inputStatus } from "../../utils/globals";

const initValues = {
	firstName: { value: "", status: inputStatus.pristine },
	lastName: { value: "", status: inputStatus.pristine },
	title: { value: "", status: inputStatus.pristine },
	country: { value: "", status: inputStatus.pristine },
	city: { value: "", status: inputStatus.pristine },
	street: { value: "", status: inputStatus.pristine },
	number: { value: "", status: inputStatus.pristine },
	email: { value: "", status: inputStatus.pristine },
	phone: { value: "", status: inputStatus.pristine },
	rememberMe: { value: false, status: inputStatus.pristine },
};
const initValues2 = {
	firstName: { value: "Yeuda", status: inputStatus.valid },
	lastName: { value: "Witman", status: inputStatus.valid },
	title: { value: "mr", status: inputStatus.valid },
	country: { value: "israel", status: inputStatus.valid },
	city: { value: "tel aviv", status: inputStatus.valid },
	street: { value: "herzel", status: inputStatus.valid },
	number: { value: "23", status: inputStatus.valid },
	email: { value: "mail@company.com", status: inputStatus.valid },
	phone: { value: "0541234567", status: inputStatus.valid },
	rememberMe: { value: false, status: inputStatus.valid },
};

const setFormValues = (state = initValues2, action) => {
	switch (action.type) {
		case types.SET_FORM_VALUES:
			const key = Object.keys(action.payload)[0];
			return { ...state, [key]: action.payload[key] };
		default:
			return state;
	}
};

export default setFormValues;
