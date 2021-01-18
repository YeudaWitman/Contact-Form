export default {
	text: (value) => {
		//required and alphbetes only
		const letters = /^[A-Za-z]+$/;
		console.log("validate text", value, value.match(letters));
		if (value.length < 1) {
			return false;
		}
		if (value.match(letters) === null) {
			return false;
		}
		return true;
	},

	email: (value) => {
		//required and must be a valid email
		console.log("validate email");
	},
	tel: (value) => {
		//required
		console.log("validate tel");
	},
};
