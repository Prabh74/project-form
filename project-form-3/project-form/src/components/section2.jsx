import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../app.css";
import Block1W2 from "./Two-Wheeler/Block1";
import Block2W2 from "./Two-Wheeler/Block2";
import Block3W2 from "./Two-Wheeler/Block3";
import Block4W2 from "./Two-Wheeler/Block4";
import Block5W2 from "./Two-Wheeler/Block5";
import Block1W4 from "./Four-Wheeler/Block1";
import Block2W4 from "./Four-Wheeler/Block2";
import Block3W4 from "./Four-Wheeler/Block3";
import Block4W4 from "./Four-Wheeler/Block4";
import Block5W4 from "./Four-Wheeler/Block5";

export default function Section2(props) {
	const [data, setData] = useState({
		wheels: props.data.vehicleType,
		block: "",
		tripLength: 0,
		show: false,
	});

	useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		fetch( 'https://surveyformbackend.herokuapp.com/blockCount?vehicleType=' + data.wheels )
        .then( response => response.json() )
        .then( response => {
			setData({...data, block: response.block})
			console.log(data)
			console.log(response)
        } );
	}, []);

	function submit2() {
		console.log(data)
	}

	function handleChange() {
		setData({
			...data,
			tripLength: document.querySelector("input[name = 'tripLength']").value,
			show: true,
		});
	}

    function parentCallback(e){
        props.call({...e, ...data})
        props.nextSection()
    }

	return (
		<main className="main">
			<h1 className="sectionHeading">Stated Choice Survey</h1>
			<label className="formLabel" style={{ display: "inline" }}>
				Trip Length
			</label>
			&nbsp; &nbsp;
			<input
				type="number"
				name="tripLength"
				className="formInput"
				style={{ display: "inline", width: "30vw" }}
				placeholder="Enter the trip length"
			/>
			&nbsp; &nbsp;
			<button onClick={handleChange}>Go</button>
			<br />
			<br />
			{data.show &&
				(data.wheels === "twoWheeler" && (
					data.block === "block1" ? (
						<div>
							<Block1W2 call = {parentCallback} calc={props} tripLength={data.tripLength} />
							<br />
							<br />
						</div>
					) : data.block === "block2" ? (
						<div>
							{console.log("block 2 2wheeler")}
							<Block2W2 call = {parentCallback} calc={props} tripLength={data.tripLength} />
							<br />
							<br />

						</div>
					) : data.block === "block3" ? (
						<div>
							{console.log("block 3 2wheeler")}
							<Block3W2 call = {parentCallback} calc={props} tripLength={data.tripLength} />
							<br />
							<br />

						</div>
					) : data.block === "block4" ? (
						<div>
							{console.log("block 4 2wheeler")}
							<Block4W2 call = {parentCallback} calc={props} tripLength={data.tripLength} />
							<br />
							<br />

						</div>
					) : data.block === "block"?(
						<div>
							<Block5W2 call = {parentCallback} calc={props} tripLength={data.tripLength} />
							{console.log("block 5 2wheeler")}
							<br />
							<br />

						</div>
					): <h1></h1>
				))}
            {data.show && 
                (data.wheels === "fourWheeler" &&(
                 data.block === "block1" ? (
					<div>
						{console.log("block 1 4wheeler")}
						<Block1W4 call = {parentCallback} calc={props} tripLength={data.tripLength} />
						<br />
						<br />
						
					</div>
				) : data.block === "block2" ? (
					<div>
						{console.log("block 2 4wheeler")}
						<Block2W4 call = {parentCallback} calc={props} tripLength={data.tripLength} />
						<br />
						<br />
						
					</div>
				) : data.block === "block3" ? (
					<div>
						<Block3W4 call = {parentCallback} calc={props} tripLength={data.tripLength} />
						{console.log("block 3 4wheeler")}
						<br />
						<br />
						
					</div>
				) : data.block === "block4" ? (
					<div>
						<Block4W4 call = {parentCallback} calc={props} tripLength={data.tripLength} />
						<br />
						{console.log("block 4 4wheeler")}
						<br />
						
					</div>
				) : data.block === "block5"?(
					<div>
						<Block5W4 call = {parentCallback} calc={props} tripLength={data.tripLength} />
						{console.log("block 5 4wheeler")}
						<br />
						<br />
						
					</div>
				): <h1></h1>))}

		</main>
	);
}
