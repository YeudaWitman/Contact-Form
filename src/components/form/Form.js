import React from "react";
import { useDispatch } from "react-redux";

import * as actions from "../../redux/actions";
import { inputStatus } from "../../utils/globals";
import validation from "../../utils/validation";

import "./Form.css";

import InputFiled from "./InputFileds";

const Form = (props) => {
	const { formStep } = props;
	const formFields = formStep.fields; //extract fields for the current step

	const dispatch = useDispatch();

	const validateInput = (input) => {
		const { type, name, value } = input;

		console.log(`type: [${type}], name: [${name}], value: [${value}]`);

		let status = inputStatus.invalid; //init status to invalid

		//validate input by type dynamicly
		if (validation[type](value, name)) {
			status = inputStatus.valid;
		}
		//dispatch the results
		//name is dynamic key of the state - by field name
		dispatch(actions.setFormValues({ [name]: { value, status } }));
	};

	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		dispatch(
			//name is dynamic key of the state - by field name
			//by default "status" get "invalid" until onBlur is activate
			actions.setFormValues({ [name]: { value, status: inputStatus.valid } })
		);
	};

	//sub component to sperate the view from logic
	return (
		<div className="form-wrapper">
			<form>
				<InputFiled
					formFields={formFields}
					onBlur={validateInput}
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};

export default Form;
