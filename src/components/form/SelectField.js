import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import * as actions from "../../redux/actions";

const SelectField = ({ data, value, onChange }) => {
	const { label, name } = data;
	const countriesList = useSelector((state) => state.countries);
	const dispatch = useDispatch();

	useEffect(() => {
		const COUNTRIES_URL = "http://localhost:4000/countries";
		axios
			.get(COUNTRIES_URL)
			.then((res) => {
				// handle success
				dispatch(actions.getCountries(res.data.countries));
			})
			.catch((error) => {
				// handle error
				console.log(error);
			})
			.then(() => {
				// always executed
			});
	}, [dispatch]);

	return (
		<div className="text-field">
			<label>
				{label}
				<select name={name} onChange={onChange} value={value}>
					{countriesList.map((val, i) => {
						return (
							<option key={i} value={val}>
								{val}
							</option>
						);
					})}
				</select>
			</label>
		</div>
	);
};

export default SelectField;
