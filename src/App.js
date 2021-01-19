import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./App.css";
import * as actions from "./redux/actions";

import ProgressBar from "./components/progressBar/ProgressBar";
import Form from "./components/form/Form";
import Buttons from "./components/buttons/Buttons";

import formSteps from "./utils/formSteps"; //imports all the fields divided to groups
import Modal from "./components/modal/Modal";

const App = () => {
	//manage state
	const { currentStep, formValues, modal } = useSelector((state) => state);
	const dispatch = useDispatch();

	//returns the current group by number
	const formStep = formSteps.find((val) => val.number === currentStep);

	const handleSubmitForm = (e) => {
		let type = "success"; //variable to define modal type [success, warning, error]
		const URL = "http://localhost:4000/";
		axios
			.post(URL, formValues)
			.then((res) => {
				// handle success
				if (res.data.status === 422) {
					type = "warning";
				}
				dispatch(actions.modal(type));
			})
			.catch((error) => {
				// handle error
				type = "error";
				dispatch(actions.modal(type));
			});
	};

	return (
		<div className="app">
			<ProgressBar steps={formSteps} currentStep={currentStep} />
			<Form formStep={formStep} />
			<Buttons end={formSteps.length} submit={handleSubmitForm} />
			{modal.show ? <Modal type={modal.type} /> : ""}
		</div>
	);
};

export default App;
