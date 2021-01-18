import React from "react";

const SelectField = ({ data, value, onChange }) => {
	const { label, name } = data;
	return (
		<div>
			<label>
				{label}
				<select name={name} onChange={onChange} value={value}>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
			</label>
		</div>
	);
};

export default SelectField;
