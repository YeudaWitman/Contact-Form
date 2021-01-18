import { combineReducers } from "redux";

import step from "./currentStep";
import formValues from "./formValues";
import countries from "./countries";

const rootReducer = combineReducers({
	step,
	formValues,
	countries,
});

export default rootReducer;
