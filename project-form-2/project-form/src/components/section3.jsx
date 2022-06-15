// name
import React, { useState } from "react";
import "../app.css";

export default function Section3(props) {
	const [data3, setData] = useState({
		gender: "",
		genderOther: "",
		ageGroup: "",
		educationalQualification: "",
		occupation: "",
		occupationOther: "",
		monthlyIncome: "",
		twoWheelerOwned: "",
		fourWheelerOwned: "",
		cycleOwned: "",
		endTime: ""
	});

	function section3Submit() {
		const d2 = new Date()
		let time2 = d2.toLocaleTimeString()
		setData(prevValue => {return {...prevValue, endTime: time2}})
	}
	
	if(data3.endTime){
		props.call(data3)
	}
	function handleChange(e) {
		var currName = e.target.name;
		var currValue = e.target.value;

		setData(prevValue => {
			switch (currName) {
				case "gender":
					return { ...prevValue, gender: currValue };

				case "genderOther":
					return { ...prevValue, genderOther: currValue };

				case "ageGroup":
					return { ...prevValue, ageGroup: currValue };

				case "educationalQualification":
					return { ...prevValue, educationalQualification: currValue };

				case "occupation":
					return { ...prevValue, occupation: currValue };

				case "occupationOther":
					return { ...prevValue, occupationOther: currValue };

				case "monthlyIncome":
					return { ...prevValue, monthlyIncome: currValue };

				case "twoWheelerOwned":
					return { ...prevValue, twoWheelerOwned: currValue };
				
                case "fourWheelerOwned":
					return { ...prevValue, fourWheelerOwned: currValue };
				
                case "cycleOwned":
					return { ...prevValue, cycleOwned: currValue };
			}
		});
	}
	return (
		<main className="main">
			<h1 className="sectionHeading">Personal Information</h1>
			<label className="formLabel">Gender</label>
			<input
				name="gender"
				className="formInputOption"
				type="radio"
				value="female"
				id="female"
				onChange={handleChange}
			/>
			<label for="female">Female</label> <br />
			<input
				name="gender"
				className="formInputOption"
				type="radio"
				value="male"
				id="male"
				onChange={handleChange}
			/>
			<label for="male">Male</label> <br />
			<input
				name="gender"
				className="formInputOption"
				type="radio"
				value="other"
				id="other"
				onChange={handleChange}
			/>
			<label for="other">Other</label> <br />
			{data3.gender === "other" && (
				<input
					name="genderOther"
					className="formInput"
					type="text"
					value={data3.genderOther}
					onChange={handleChange}
				/>
			)}
			<label className="formLabel">Age-Group</label>
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="less-than-18"
				id="less-than-18"
				onChange={handleChange}
			/>
			<label for="less-than-18">Less Than 18 Years</label> <br />
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="18-30"
				id="18-30"
				onChange={handleChange}
			/>
			<label for="18-30">18-30 Years</label> <br />
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="30-40"
				id="30-40"
				onChange={handleChange}
			/>
			<label for="30-40">30-40 Years</label> <br />
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="40-50"
				id="40-50"
				onChange={handleChange}
			/>
			<label for="40-50">40-50 Years</label> <br />
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="50-60"
				id="50-60"
				onChange={handleChange}
			/>
			<label for="50-60">50-60 Years</label> <br />
			<input
				name="ageGroup"
				className="formInputOption"
				type="radio"
				value="above60"
				id="above60"
				onChange={handleChange}
			/>
			<label for="above60">Above 60 Years</label> <br />
			<label className="formLabel">Educational Qualification</label>
			<input
				name="educationalQualification"
				className="formInputOption"
				type="radio"
				value="10"
				id="10"
				onChange={handleChange}
			/>
			<label for="10">
				10<sup>th</sup>
			</label>{" "}
			<br />
			<input
				name="educationalQualification"
				className="formInputOption"
				type="radio"
				value="12"
				id="12"
				onChange={handleChange}
			/>
			<label for="12">
				12<sup>th</sup>
			</label>{" "}
			<br />
			<input
				name="educationalQualification"
				className="formInputOption"
				type="radio"
				value="graduation"
				id="graduation"
				onChange={handleChange}
			/>
			<label for="graduation">Graduation</label> <br />
			<input
				name="educationalQualification"
				className="formInputOption"
				type="radio"
				value="postGraduation"
				id="postGraduation"
				onChange={handleChange}
			/>
			<label for="postGraduation">Post-Graduation</label> <br />
			<label className="formLabel">Occupation</label>
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="student"
				id="student"
				onChange={handleChange}
			/>
			<label for="student">Student</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="business"
				id="business"
				onChange={handleChange}
			/>
			<label for="business">Business</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="job"
				id="job"
				onChange={handleChange}
			/>
			<label for="job">Job</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="self-employed"
				id="self-employed"
				onChange={handleChange}
			/>
			<label for="self-employed">Self-Employed</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="looking-for-a-job"
				id="looking-for-a-job"
				onChange={handleChange}
			/>
			<label for="looking-for-a-job">Looking for a job</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="homemaker"
				id="homemaker"
				onChange={handleChange}
			/>
			<label for="homemaker">Homemaker</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="retired"
				id="retired"
				onChange={handleChange}
			/>
			<label for="retired">Retired</label> <br />
			<input
				name="occupation"
				className="formInputOption"
				type="radio"
				value="other"
				id="other"
				onChange={handleChange}
			/>
			<label for="other">Other:</label>
			{data3.occupation === "other" && (
				<input
					className="formInputOption"
					type="text"
					value={data3.occupationOther}
					onChange={handleChange}
				></input>
			)}
			<label className="formLabel">Monthly Family Income</label>
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="less-than-15000"
				id="less-than-15000"
				onChange={handleChange}
			/>
			<label for="less-than-15000">Less than Rs. 15,000</label> <br />
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="15-30"
				id="15-30"
				onChange={handleChange}
			/>
			<label for="15-30">Rs. 15,000 - Rs. 30,000</label> <br />
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="30-50"
				id="30-50"
				onChange={handleChange}
			/>
			<label for="30-50">Rs. 30,000 - Rs. 50,000</label> <br />
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="50-75"
				id="50-75"
				onChange={handleChange}
			/>
			<label for="50-75">Rs. 50,000 - Rs. 75,000</label> <br />
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="75-100"
				id="75-100"
				onChange={handleChange}
			/>
			<label for="75-100">Rs. 75,000 - Rs. 1,00,000</label> <br />
			<input
				name="monthlyIncome"
				className="formInputOption"
				type="radio"
				value="greater-than-100000"
				id="greater-than-100000"
				onChange={handleChange}
			/>
			<label for="greater-than-100000">Greater than Rs. 1,00,000</label> <br />
			<label className="formLabel">Vehicle Ownership</label>
			<table>
				<tr>
					<td> </td>
					<td style={{backgroundColor: "#E5E5E5"}}>0</td>
					<td style={{backgroundColor: "#E5E5E5"}}>1</td>
					<td>2</td>
					<td>&gt;2</td>
				</tr>
				<tr>
					<td>Two-Wheeler</td>
					<td style={{backgroundColor: "#E5E5E5"}}>
						<input className="formInputOption" name="twoWheelerOwned" type="radio" value="0" onChange={handleChange} />
					</td>
					<td style={{backgroundColor: "#E5E5E5"}}>
						<input className="formInputOption" name="twoWheelerOwned" type="radio" value="1" onChange={handleChange} />
					</td>
					<td>
						<input className="formInputOption" name="twoWheelerOwned" type="radio" value="2" onChange={handleChange} />
					</td>
					<td>
						<input className="formInputOption" name="twoWheelerOwned" type="radio" value="greater than 2" onChange={handleChange} />
					</td>
				</tr>
				<tr>
					<td>Four-Wheeler</td>
					<td style={{backgroundColor: "#E5E5E5"}}><input className="formInputOption" name="fourWheelerOwned" type="radio" value="0" onChange={handleChange} /></td>
					<td style={{backgroundColor: "#E5E5E5"}}><input className="formInputOption" name="fourWheelerOwned" type="radio" value="1" onChange={handleChange} /></td>
					<td><input className="formInputOption" name="fourWheelerOwned" type="radio" value="2" onChange={handleChange} /></td>
					<td><input className="formInputOption" name="fourWheelerOwned" type="radio" value="greater than 2" onChange={handleChange} /></td>
				</tr>
				<tr>
					<td>Cycle</td>
					<td style={{backgroundColor: "#E5E5E5"}}><input className="formInputOption" name="cycleOwned" type="radio" value="0" onChange={handleChange} /></td>
					<td style={{backgroundColor: "#E5E5E5"}}><input className="formInputOption" name="cycleOwned" type="radio" value="1" onChange={handleChange} /></td>
					<td><input className="formInputOption" name="cycleOwned" type="radio" value="2" onChange={handleChange} /></td>
					<td><input className="formInputOption" name="cycleOwned" type="radio" value="greater than 2" onChange={handleChange} /></td>
				</tr>
			</table>
			<button className="submitButton" onClick={section3Submit}>
				Submit
			</button>
		</main>
	);
}
