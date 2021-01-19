import React from "react";

import { useSelector } from "react-redux";

import CheckBox from "./CheckBox";
import SelectField from "./SelectField";
import TextField from "./TextField";

const InputFileds = ({ formFields, onChange, onBlur }) => {
	const formValues = useSelector((state) => state.formValues);

	//iterate over the fields and render the match input type
	return formFields.map((field, i) => {
		const fieldName = formValues[field.name];
		switch (field.type) {
			case "checkbox":
				return (
					<CheckBox
						key={i}
						data={field}
						value={fieldName.value}
						onChange={onChange}
					/>
				);
			case "select":
				return (
					<SelectField
						key={i}
						data={field}
						value={fieldName.value}
						onChange={onChange}
					/>
				);
			default:
				return (
					<TextField
						key={i}
						data={field}
						value={fieldName.value}
						onChange={onChange}
						onBlur={onBlur}
						valid={fieldName.status}
					/>
				);
		}
	});
};

export default InputFileds;
