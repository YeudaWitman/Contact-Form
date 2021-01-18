import React from "react";

const Step = (props) => {
	const active = props.active ? "active" : "";
	const { step } = props;

	return (
		<>
			{
				step.number > 1 ? (
					<div className={`indicator-line ${active}`}></div>
				) : null /*do not render the first indicator line*/
			}
			<div className={`step ${active}`}>
				<div className="step-icon">
					<i className={step.icon}></i>
				</div>
				<p>{step.title}</p>
			</div>
		</>
	);
};

export default Step;
