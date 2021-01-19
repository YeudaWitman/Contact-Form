import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, resetForm, setStep } from "../../redux/actions";
import Button from "../buttons/Button";
import "./Modal.css";

const Modal = ({ type }) => {
	const dispatch = useDispatch();

	let modalContent = {
		success: {
			heading: "Success",
			message: "Form successfully sent",
		},
		warning: {
			heading: "Form validation failed!",
			message: "One or more fields hve an error.",
		},
		error: {
			heading: "Form submission failed!",
			message: "Please try agan later.",
		},
	};

	const handeClose = () => {
		dispatch(closeModal());
		dispatch(resetForm());
		dispatch(setStep(1));
	};

	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className={`modal-header ${type}`}>
					<h3>{modalContent[type].heading}</h3>
				</div>
				<div className="modal-body">
					<p>{modalContent[type].message}</p>
				</div>
				<div className="modal-footer">
					<Button
						title="close"
						className={""}
						onClick={handeClose}
						disabled={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
