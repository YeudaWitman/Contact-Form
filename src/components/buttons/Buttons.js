import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import "./Buttons.css";

const Buttons = (props) => {
	const { start, end } = props;
	const currentStep = useSelector((state) => state.step);
	const dispatch = useDispatch();

	const handleNext = (e) => {
		dispatch(actions.setStep(currentStep + 1));
	};

	const handlePrev = (e) => {
		dispatch(actions.setStep(currentStep - 1));
	};

	return (
		<div className="buttons-wrapper">
			{start < currentStep ? <button onClick={handlePrev}>PREV</button> : null}
			{end > currentStep ? <button onClick={handleNext}>NEXT</button> : null}
		</div>
	);
};

export default Buttons;
