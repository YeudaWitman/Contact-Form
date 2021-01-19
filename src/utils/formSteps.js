/**
 * @description Includes all the fields of the form divided to steps/pages.
 *              The app generate each field by his structure.
 */

const formSteps = [
	{
		number: 1,
		title: "Personal",
		icon: "fas fa-user",
		fields: [
			{
				type: "text",
				name: "firstName",
				label: "First Name",
				errMsg: "Must be one word alphabetic",
			},
			{
				type: "text",
				name: "lastName",
				label: "Last Name",
				errMsg: "Must be one word alphabetic",
			},
			{
				type: "text",
				name: "title",
				label: "Title",
				errMsg: "Must be one word alphabetic",
			},
		],
	},
	{
		number: 2,
		title: "Address",
		icon: "fas fa-map",
		fields: [
			{
				type: "select",
				name: "country",
				label: "Country",
				errMsg: "Select one option",
			},
			{
				type: "text",
				name: "city",
				label: "City",
				errMsg: "Must be letters or numbers only",
			},
			{
				type: "text",
				name: "street",
				label: "Street",
				errMsg: "Must be letters or numbers only",
			},
			{
				type: "text",
				name: "number",
				label: "Number",
				errMsg: "Must be one word letters or numbers only",
			},
		],
	},
	{
		number: 3,
		title: "Contactability",
		icon: "fas fa-network-wired",
		fields: [
			{
				type: "email",
				name: "email",
				label: "Email",
				errMsg: "Must be a valid Email",
			},
			{
				type: "tel",
				name: "phone",
				label: "Phone Number",
				errMsg: "Numbers only without hyphen",
			},
			{
				type: "checkbox",
				name: "rememberMe",
				label: "Remember Me",
				errMsg: "Not require",
			},
		],
	},
];
export default formSteps;
