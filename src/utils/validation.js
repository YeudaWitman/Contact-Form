const validation = {
	text: (value, name) => {
		//required and alphbetes only
		const letters = /^[A-Za-z]+$/;
		const lettersAndNums = /^[A-Za-z0-9]*$/;
		const lettersAndNumsAndSpaces = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
		if (value.length < 1) {
			return false;
		}

		switch (name) {
			case "number":
				return validateMatch(value, lettersAndNums);
			case "street":
			case "city":
				return validateMatch(value, lettersAndNumsAndSpaces);
			default:
				return validateMatch(value, letters);
		}
	},

	email: (value) => {
		//required and must be a valid email
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return validateMatch(String(value).toLowerCase(), re);
	},

	tel: (value) => {
		//required and numbers only
		const numbersOnly = /^[0-9]*$/;

		if (value.length < 1) {
			return false;
		}

		return validateMatch(value, numbersOnly);
	},
};

const validateMatch = (value, reg) => {
	if (value.match(reg) === null) {
		return false;
	}
	return true;
};

export default validation;
