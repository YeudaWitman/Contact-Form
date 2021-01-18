import React from "react";

const CheckBox = ({ data, value, onChange }) => {
	const { label, name } = data;
	return (
		<div>
			<label>
				{label}
				<input
					type="checkbox"
					name={name}
					checked={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};

export default CheckBox;
