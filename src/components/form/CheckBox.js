import React from "react";

const CheckBox = ({ data, value, onChange }) => {
	const { label, name } = data;
	return (
		<div className={`text-field`}>
			<label>
				<input
					type="checkbox"
					name={name}
					checked={value}
					onChange={onChange}
				/>
				{label}
			</label>
		</div>
	);
};

export default CheckBox;
