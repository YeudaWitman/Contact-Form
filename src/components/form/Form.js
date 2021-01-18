import React from "react";

import "./Form.css";

import FormStep from "./FormStep";

const Form = (props) => {
	const { formStep } = props;
	return (
		<div className="form-wrapper">
			<form>
				<FormStep fields={formStep.fields} />
			</form>
		</div>
	);
};

export default Form;
