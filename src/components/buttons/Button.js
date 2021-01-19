import React from "react";

const Button = ({ title, className, onClick, disabled }) => {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{title}
		</button>
	);
};

export default Button;
