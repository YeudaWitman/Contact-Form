import React from "react";
import TextField from "./TextField";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../redux/actions";
import { inputStatus } from "../../utils/globals";
import validation from "../../utils/validation";

import "./Form.css";

import CheckBox from "./CheckBox";
import SelectField from "./SelectField";

const Form = (props) => {
	const { formStep } = props;
	const formFields = formStep.fields;

	const formValues = useSelector((state) => state.formValues);
	const dispatch = useDispatch();

	const validateInput = (input) => {
		const { type, name, value } = input;

		console.log(`type: [${type}], name: [${name}], value: [${value}]`);

		let status = inputStatus.invalid; //init status to invalid

		//validate input by type dynamicly
		if (validation[type](value)) {
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

	//iterate over the fields and render the match input type
	return (
		<div className="form-wrapper">
			<form>
				{formFields.map((field, i) => {
					switch (field.type) {
						case "checkbox":
							return (
								<CheckBox
									key={i}
									data={field}
									value={formValues[field.name].value}
									onChange={handleInputChange}
								/>
							);
						case "select":
							return (
								<SelectField
									key={i}
									data={field}
									value={formValues[field.name].value}
									onChange={handleInputChange}
								/>
							);
						default:
							return (
								<TextField
									key={i}
									data={field}
									value={formValues[field.name].value}
									onChange={handleInputChange}
									onBlur={validateInput}
									valid={formValues[field.name].status}
								/>
							);
					}
				})}
			</form>
		</div>
	);
};

export default Form;
