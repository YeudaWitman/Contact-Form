import { combineReducers } from "redux";

import step from "./currentStep";
import formValues from "./formValues";

const rootReducer = combineReducers({
	step,
	formValues,
});

export default rootReducer;
