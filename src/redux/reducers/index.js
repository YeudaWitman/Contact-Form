import { combineReducers } from "redux";

import currentStep from "./currentStep";
import formValues from "./formValues";
import countries from "./countries";

const rootReducer = combineReducers({
	currentStep,
	formValues,
	countries,
});

export default rootReducer;
