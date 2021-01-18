import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import "./Buttons.css";

const Buttons = (props) => {
	const start = 1;
	const { end } = props;

	const { currentStep, formValues } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleNext = (e) => {
		dispatch(actions.setStep(currentStep + 1));
	};

	const handlePrev = (e) => {
		dispatch(actions.setStep(currentStep - 1));
	};

	const PrevButtonClass = start < currentStep ? "" : "disabled";
	const NextButtonClass = end > currentStep ? "" : "disabled";

	const checkFormValidation = (formValues) => {
		for (const key in formValues) {
			// console.log(key, formValues[key]);
		}
	};

	checkFormValidation(formValues);
	return (
		<div className="buttons-wrapper">
			<button
				className={PrevButtonClass}
				onClick={handlePrev}
				disabled={!!PrevButtonClass}
			>
				back
			</button>
			<button
				className={NextButtonClass}
				onClick={handleNext}
				disabled={!!NextButtonClass}
			>
				continue
			</button>
		</div>
	);
};

export default Buttons;
