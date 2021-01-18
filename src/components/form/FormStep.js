import React from "react";
import TextField from "./TextField";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { inputStatus } from "../../utils/globals";

import CheckBox from "./CheckBox";
import SelectField from "./SelectField";

const FormStep = (props) => {
	const formValues = useSelector((state) => state.formValues);
	const dispatch = useDispatch();

	const validateInput = (input) => {
		const { type, name, value } = input;
		console.log(`type: [${type}], name: [${name}], value: [${value}]`);
		if (value.length < 1) {
			console.log("validate:", "small");
			dispatch(
				actions.setFormValues({
					[name]: { value, status: inputStatus.invalid },
				})
			);
		}
		return true;
	};

	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		dispatch(
			actions.setFormValues({ [name]: { value, status: inputStatus.valid } })
		);
	};

	return (
		<div>
			{props.fields.map((field, i) => {
				if (field.type === "checkbox") {
					return (
						<CheckBox
							key={i}
							data={field}
							value={formValues[field.name].value}
							onChange={handleInputChange}
						/>
					);
				} else if (field.type === "select") {
					return (
						<SelectField
							key={i}
							data={field}
							value={formValues[field.name].value}
							onChange={handleInputChange}
						/>
					);
				} else {
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
		</div>
	);
};

export default FormStep;
