import { useSelector } from "react-redux";
import "./App.css";

import ProgressBar from "./components/progressBar/ProgressBar";
import Form from "./components/form/Form";
import Buttons from "./components/buttons/Buttons";

const formSteps = [
	{
		step: 1,
		title: "Personal",
		fields: [
			{ type: "text", name: "firstName", label: "First Name" },
			{ type: "text", name: "lastName", label: "Last Name" },
			{ type: "text", name: "title", label: "Title" },
		],
	},
	{
		step: 2,
		title: "Address",
		fields: [
			{ type: "select", name: "country", label: "Country" },
			{ type: "text", name: "city", label: "City" },
			{ type: "text", name: "street", label: "Street" },
			{ type: "text", name: "number", label: "Number" },
		],
	},
	{
		step: 3,
		title: "Contactability",
		fields: [
			{ type: "email", name: "email", label: "Email" },
			{ type: "tel", name: "phone", label: "Phone Number" },
			{ type: "checkbox", name: "rememberMe", label: "Remember Me" },
		],
	},
];

const App = () => {
	const currentStep = useSelector((state) => state.step);
	const formStep = formSteps.find((val) => val.step === currentStep);

	return (
		<div className="app">
			<ProgressBar steps={formSteps} currentStep={currentStep} />
			<Form formStep={formStep} />
			<Buttons start={1} end={formSteps.length} />
		</div>
	);
};

export default App;