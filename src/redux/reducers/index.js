import { combineReducers } from "redux";

import currentStep from "./currentStep";
import formValues from "./formValues";
import countries from "./countries";
import modal from "./modal";

const rootReducer = combineReducers({
	currentStep,
	formValues,
	countries,
	modal,
});

export default rootReducer;
