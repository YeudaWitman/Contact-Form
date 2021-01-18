import React from "react";

const Step = (props) => {
	const active = props.active ? "active" : "";
	//first indicator line not render
	return (
		<>
			{props.step > 1 ? (
				<div className={`indicator-line ${active}`}></div>
			) : null}
			<div className={`step ${active}`}>
				<div className="step-icon">{props.step}</div>
				<p>{props.title}</p>
			</div>
		</>
	);
};

export default Step;
