import React, { useState } from "react";
import "../../app.css";

export default function Block4W2(props) {
	// const [time, setTime] = useState(
	//     Math.round(((5*Number(props.tripLength) - 10)/Number(props.tripLength))*(0.4*Number(props.tripLength) - 1) + 12)
	// )

	// const [travelCost, setTravelCost] = useState(
	//     ((0.4*Number(props.tripLength)*4.5)+(0.6*Number(props.tripLength)*2.3))
	// )

	const [dataBlock, setData] = useState({
		block: "4",
		type1: "",
		type2: "",
		type3: "",
		type4: "",
		type5: "",
		badWeather1: "",
		badWeather2: "",
		badWeather3: "",
		badWeather4: "",
		badWeather5: "",
		ignoredFactor: []
	});

	const [levels, setLevels] = useState({
		level3: {
			time: Math.round(
				((5 * Number(props.tripLength) - 10) / Number(props.tripLength)) *
					(0.4 * Number(props.tripLength) - 1) +
					12 + 1.08*Number(props.tripLength)
			),
			cost:
				Math.round(0.4 * Number(props.tripLength) * 4.5 +
				0.6 * Number(props.tripLength) * 2.3),
			type: "Multi-level Parking",
			pc: 0,
			pms: "Basic information regarding the presence of a Parking lot + Presence of VMS + Directional information "
		},

		level2: {
			time:
				Math.round(
					(((5 * Number(props.tripLength) - 10) / Number(props.tripLength)) *
						(0.4 * Number(props.tripLength) - 1) + 1.08*Number(props.tripLength) +
						12)
				 * 1.05),
			cost:
				Math.round((0.4 * Number(props.tripLength) * 4.5 +
					0.6 * Number(props.tripLength) * 2.3) *
				1.05),
			type:"Underground Parking",
			pc: 20,
			pms: "Basic information regarding the presence of a Parking lot + Presence of VMS"
		},

		level1: {
			time:
				Math.round(
					(((5 * Number(props.tripLength) - 10) / Number(props.tripLength)) *
						(0.4 * Number(props.tripLength) - 1) + 1.08*Number(props.tripLength) +
						12)
				 * 1.1),
			cost:
				Math.round((0.4 * Number(props.tripLength) * 4.5 +
					0.6 * Number(props.tripLength) * 2.3) *
				1.1),
			type: "Surface Parking",
			pc: 40,
			pms: "Basic information regarding the presence of a Parking lot"

		},
	});

	function handleChange(e) {
		var currName = e.target.name;
		var currValue = e.target.value;

		setData(prevValue => {
			switch (currName) {
				case "type1":
					return { ...prevValue, type1: currValue };
				case "type2":
					return { ...prevValue, type2: currValue };
				case "type3":
					return { ...prevValue, type3: currValue };
				case "type4":
					return { ...prevValue, type4: currValue };
				case "type5":
					return { ...prevValue, type5: currValue };
				case "badWeather1":
					return { ...prevValue, badWeather1: currValue };
				case "badWeather2":
					return { ...prevValue, badWeather2: currValue };
				case "badWeather3":
					return { ...prevValue, badWeather3: currValue };
				case "badWeather4":
					return { ...prevValue, badWeather4: currValue };
				case "badWeather5":
					return { ...prevValue, badWeather5: currValue };
			}
		});
	}

	const handleSelect = (e) => {
		let arr = dataBlock.ignoredFactor;

		if (e.target.checked) {
            arr.push(e.target.value);
        }
        else{
            arr = arr.filter(item => item !== e.target.value)
        }

		setData(prevValue => {
			return {...prevValue, ignoredFactor: arr}
		})
    }

	function blockSubmit(){
		props.call(dataBlock)
	}

	return (
		<React.Fragment>
			<h2 className="tableNumber">Choice 1</h2>
			<table>
				<tr>
					<th>Attributes</th>
					<th>Four-Wheeler</th>
					<th>Four-Wheeler Park-and-Ride</th>
				</tr>
				<tr>
					<td>Travel Time (In mins.)</td>
					<td>{5 * Number(props.tripLength) - 10}</td>
					<td>{levels.level3.time}</td>
				</tr>
				<tr>
					<td>Travel Cost (In INR)</td>
					<td>{4.5 * props.tripLength}</td>
					<td>{levels.level1.cost}</td>
				</tr>
				<tr>
					<td>Parking Cost (In INR)</td>
					<td>{props.calc.data.parkingCost}</td>
					<td>{levels.level3.pc}</td>
				</tr>
				<tr>
					<td>Parking Type</td>
					<td>{props.calc.data.parkingType}</td>
					<td>{levels.level2.type}</td>
				</tr>
				<tr>
					<td>Parking Management System</td>
					<td>{props.calc.data.parkingSystem}</td>
					<td>{levels.level3.pms}</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						you would choose to travel by:
					</td>
					<td>
						<label>Four-Wheeler</label>
						<br />
						<input
							type="radio"
							name="type1"
							onChange={handleChange}
							value="DA"
						/>
					</td>
					<td>
						<label>Four-Wheeler Park-and-Ride</label>
						<br />
						<input
							type="radio"
							name="type1"
							onChange={handleChange}
							value="PR"
						/>
					</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						will your choice of mode change if it is a bad weather?
					</td>
					<td>
						<label>Yes</label>
						<br />
						<input
							type="radio"
							name="badWeather1"
							onChange={handleChange}
							value="yes"
						/>
					</td>
					<td>
						<label>No</label>
						<br />
						<input
							type="radio"
							name="badWeather1"
							onChange={handleChange}
							value="no"
						/>
					</td>
				</tr>
			</table>

			<h2 className="tableNumber">Choice 2</h2>
			<table>
				<tr>
					<th>Attributes</th>
					<th>Four-Wheeler</th>
					<th>Four-Wheeler Park-and-Ride</th>
				</tr>
				<tr>
					<td>Travel Time (In mins.)</td>
					<td>{5 * Number(props.tripLength) - 10}</td>
					<td>{levels.level3.time}</td>
				</tr>
				<tr>
					<td>Travel Cost (In INR)</td>
					<td>{4.5 * props.tripLength}</td>
					<td>{levels.level2.cost}</td>
				</tr>
				<tr>
					<td>Parking Cost (In INR)</td>
					<td>{props.calc.data.parkingCost}</td>
					<td>{levels.level2.pc}</td>
				</tr>
				<tr>
					<td>Parking Type</td>
					<td>{props.calc.data.parkingType}</td>
					<td>{levels.level3.type}</td>
				</tr>
				<tr>
					<td>Parking Management System</td>
					<td>{props.calc.data.parkingSystem}</td>
					<td>{levels.level2.pms}</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						you would choose to travel by:
					</td>
					<td>
						<label>Four-Wheeler</label>
						<br />
						<input
							type="radio"
							name="type2"
							onChange={handleChange}
							value="DA"
						/>
					</td>
					<td>
						<label>Four-Wheeler Park-and-Ride</label>
						<br />
						<input
							type="radio"
							name="type2"
							onChange={handleChange}
							value="PR"
						/>
					</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						will your choice of mode change if it is a bad weather?
					</td>
					<td>
						<label>Yes</label>
						<br />
						<input
							type="radio"
							onChange={handleChange}
							name="badWeather2"
							value="yes"
						/>
					</td>
					<td>
						<label>No</label>
						<br />
						<input
							type="radio"
							onChange={handleChange}
							name="badWeather2"
							value="no"
						/>
					</td>
				</tr>
			</table>

			<h2 className="tableNumber">Choice 3</h2>
			<table>
				<tr>
					<th>Attributes</th>
					<th>Four-Wheeler</th>
					<th>Four-Wheeler Park-and-Ride</th>
				</tr>
				<tr>
					<td>Travel Time (In mins.)</td>
					<td>{5 * Number(props.tripLength) - 10}</td>
					<td>{levels.level2.time}</td>
				</tr>
				<tr>
					<td>Travel Cost (In INR)</td>
					<td>{4.5 * props.tripLength}</td>
					<td>{levels.level3.cost}</td>
				</tr>
				<tr>
					<td>Parking Cost (In INR)</td>
					<td>{props.calc.data.parkingCost}</td>
					<td>{levels.level3.pc}</td>
				</tr>
				<tr>
					<td>Parking Type</td>
					<td>{props.calc.data.parkingType}</td>
					<td>{levels.level2.type}</td>
				</tr>
				<tr>
					<td>Parking Management System</td>
					<td>{props.calc.data.parkingSystem}</td>
					<td>{levels.level1.pms}</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						you would choose to travel by:
					</td>
					<td>
						<label>Four-Wheeler</label>
						<br />
						<input
							type="radio"
							name="type3"
							onChange={handleChange}
							value="DA"
						/>
					</td>
					<td>
						<label>Four-Wheeler Park-and-Ride</label>
						<br />
						<input
							type="radio"
							name="type3"
							onChange={handleChange}
							value="PR"
						/>
					</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						will your choice of mode change if it is a bad weather?
					</td>
					<td>
						<label>Yes</label>
						<br />
						<input
							type="radio"
							name="badWeather3"
							onChange={handleChange}
							value="yes"
						/>
					</td>
					<td>
						<label>No</label>
						<br />
						<input
							type="radio"
							name="badWeather3"
							onChange={handleChange}
							value="no"
						/>
					</td>
				</tr>
			</table>

			<h2 className="tableNumber">Choice 4</h2>
			<table>
				<tr>
					<th>Attributes</th>
					<th>Four-Wheeler</th>
					<th>Four-Wheeler Park-and-Ride</th>
				</tr>
				<tr>
					<td>Travel Time (In mins.)</td>
					<td>{5 * Number(props.tripLength) - 10}</td>
					<td>{levels.level1.time}</td>
				</tr>
				<tr>
					<td>Travel Cost (In INR)</td>
					<td>{4.5 * props.tripLength}</td>
					<td>{levels.level2.cost}</td>
				</tr>
				<tr>
					<td>Parking Cost (In INR)</td>
					<td>{props.calc.data.parkingCost}</td>
					<td>{levels.level1.pc}</td>
				</tr>
				<tr>
					<td>Parking Type</td>
					<td>{props.calc.data.parkingType}</td>
					<td>{levels.level1.type}</td>
				</tr>
				<tr>
					<td>Parking Management System</td>
					<td>{props.calc.data.parkingSystem}</td>
					<td>{levels.level3.pms}</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						you would choose to travel by:
					</td>
					<td>
						<label>Four-Wheeler</label>
						<br />
						<input
							type="radio"
							name="type4"
							onChange={handleChange}
							value="DA"
						/>
					</td>
					<td>
						<label>Four-Wheeler Park-and-Ride</label>
						<br />
						<input
							type="radio"
							name="type4"
							onChange={handleChange}
							value="PR"
						/>
					</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						will your choice of mode change if it is a bad weather?
					</td>
					<td>
						<label>Yes</label>
						<br />
						<input
							type="radio"
							name="badWeather4"
							onChange={handleChange}
							value="yes"
						/>
					</td>
					<td>
						<label>No</label>
						<br />
						<input
							type="radio"
							name="badWeather4"
							onChange={handleChange}
							value="no"
						/>
					</td>
				</tr>
			</table>

			<h2 className="tableNumber">Choice 5</h2>
			<table>
				<tr>
					<th>Attributes</th>
					<th>Four-Wheeler</th>
					<th>Four-Wheeler Park-and-Ride</th>
				</tr>
				<tr>
					<td>Travel Time (In mins.)</td>
					<td>{5 * Number(props.tripLength) - 10}</td>
					<td>{levels.level1.time}</td>
				</tr>
				<tr>
					<td>Travel Cost (In INR)</td>
					<td>{4.5 * props.tripLength}</td>
					<td>{levels.level1.cost}</td>
				</tr>
				<tr>
					<td>Parking Cost (In INR)</td>
					<td>{props.calc.data.parkingCost}</td>
					<td>{levels.level2.pc}</td>
				</tr>
				<tr>
					<td>Parking Type</td>
					<td>{props.calc.data.parkingType}</td>
					<td>{levels.level1.type}</td>
				</tr>
				<tr>
					<td>Parking Management System</td>
					<td>{props.calc.data.parkingSystem}</td>
					<td>{levels.level1.pms}</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						you would choose to travel by:
					</td>
					<td>
						<label>Four-Wheeler</label>
						<br />
						<input
							type="radio"
							name="type5"
							onChange={handleChange}
							value="DA"
						/>
					</td>
					<td>
						<label>Four-Wheeler Park-and-Ride</label>
						<br />
						<input
							type="radio"
							name="type5"
							onChange={handleChange}
							value="PR"
						/>
					</td>
				</tr>
				<tr>
					<td>
						Given the above information, if you were to make the same trip that
						you described previously and these were the modes available to you,
						will your choice of mode change if it is a bad weather?
					</td>
					<td>
						<label>Yes</label>
						<br />
						<input
							type="radio"
							name="badWeather5"
							onChange={handleChange}
							value="yes"
						/>
					</td>
					<td>
						<label>No</label>
						<br />
						<input
							type="radio"
							name="badWeather5"
							onChange={handleChange}
							value="no"
						/>
					</td>
				</tr>
			</table>

			<label>
				Which of the following factors did you ignore while stating your
				choices?
			</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="TravelTime"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">Travel Time</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="TravelCost"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">Travel Cost</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="ParkingType"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">Parking Type</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="ParkingCost"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">Parking Cost</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="ParkingManagementSystem"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">Parking Management System</label>
			<br />
			<input
				type="checkbox"
				id="ignoredFactor"
				name="ignoredFactor"
				value="none"
				onChange={handleSelect}
			/>
			<label for="ignoredFactor">None of the Above</label>
			<br />

			{console.log(dataBlock.ignoredFactor)}

			<button className="submitButton" onClick={blockSubmit}>
				Next
			</button>
		</React.Fragment>
	);
}
