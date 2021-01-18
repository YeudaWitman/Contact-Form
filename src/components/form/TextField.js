import React from "react";

const TextField = ({ data, value, onChange }) => {
	const { label, type, name } = data;

	return (
		<div>
			<label>
				{label}
				<input type={type} name={name} value={value} onChange={onChange} />
			</label>
		</div>
	);
};

export default TextField;
