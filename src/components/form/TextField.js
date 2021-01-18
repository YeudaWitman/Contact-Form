import React from "react";

const TextField = ({ data, value, onChange, onBlur, valid }) => {
	const { label, type, name } = data;

	return (
		<div className={`text-field ${valid}`}>
			<label>
				{label}
				<br />
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={(e) => onBlur(e.target)}
					placeholder={`Type Your ${label}`}
				/>
			</label>
			<br />
			<small>{valid === "invalid" ? "invalid" : ""}</small>
		</div>
	);
};

export default TextField;
