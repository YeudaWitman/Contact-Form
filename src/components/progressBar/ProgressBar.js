import React from "react";

import Step from "./Step";
import "./ProgressBar.css";

const ProgressBar = (props) => {
	const { steps, currentStep } = props;
	return (
		<div className="wrapper">
			<div className="step-indicator">
				{steps.map((step, i) => {
					const active = step.step <= currentStep ? true : false; //indicate wich step is active
					return (
						<Step key={i} step={step.step} title={step.title} active={active} />
					);
				})}
			</div>
		</div>
	);
};

export default ProgressBar;
