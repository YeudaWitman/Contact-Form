import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import Button from "./Button";

import "./Buttons.css";

const Buttons = (props) => {
	const start = 1; //start to count steps/pages from
	const { end } = props; //the end of steps/pages coming from the array lentgh

	const { currentStep, formValues } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleNext = (e) => {
		dispatch(actions.setStep(currentStep + 1));
	};

	const handlePrev = (e) => {
		dispatch(actions.setStep(currentStep - 1));
	};

	const checkFormValidation = (formValues) => {
		for (const key in formValues) {
			const val = formValues[key];
			if (val.status !== "valid") {
				return false;
			}
		}
		return true;
	};

	const PrevButtonClass = start < currentStep ? "" : "disabled";
	const NextButtonClass = end > currentStep ? "" : "disabled";
	const SendButtonClass = checkFormValidation(formValues) ? "" : "disabled";

	return (
		<div className="buttons-wrapper">
			<Button
				title="back"
				className={PrevButtonClass}
				onClick={handlePrev}
				disabled={start === currentStep}
			/>

			{
				//when the steps is over the "next" changes to "send"
				//the button is disable until the form is valid
				end > currentStep ? (
					<Button
						title="continue"
						className={NextButtonClass}
						onClick={handleNext}
						disabled={end === currentStep}
					/>
				) : (
					<Button
						title="send"
						className={SendButtonClass}
						onClick={props.submit}
						disabled={!checkFormValidation(formValues)}
					/>
				)
			}
		</div>
	);
};

export default Buttons;
