import React from "react";
import TextField from "./TextField";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import CheckBox from "./CheckBox";
import SelectField from "./SelectField";

const FormStep = (props) => {
	const formValues = useSelector((state) => state.formValues);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		dispatch(actions.setFormValues({ [name]: value }));
	};

	return (
		<div>
			{props.fields.map((field, i) => {
				if (field.type === "checkbox") {
					return (
						<CheckBox
							key={i}
							data={field}
							value={formValues[field.name]}
							onChange={handleInputChange}
						/>
					);
				} else if (field.type === "select") {
					return (
						<SelectField
							key={i}
							data={field}
							value={formValues[field.name]}
							onChange={handleInputChange}
						/>
					);
				} else {
					return (
						<TextField
							key={i}
							data={field}
							value={formValues[field.name]}
							onChange={handleInputChange}
						/>
					);
				}
			})}
		</div>
	);
};

export default FormStep;
