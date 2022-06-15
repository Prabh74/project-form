import React from "react";

export default function Terms(props) {
	return (
		<main className="main">
			<h1 className="sectionHeading">
				Stated Choice Experiment Survey of Choice Riders towards their Choice of
				Preferred Mode of Travel in Delhi
			</h1>
			The undersigned is conducting a Stated Choice Survey of Choice riders in
			Delhi to identify their preferred mode of travel when provided with
			scenarios consisting of two alternative modes, <b>Personal Vehicle</b> and 
			<b> Park-and-Ride (P&R)</b>, as a part of her doctoral research. The survey also
			aims at identifying the possible modal shift of Choice riders from
			personal vehicles towards P&R. <b>P&R is a facility which helps the users to
			use private vehicles like car or bike etc. for a portion of the journey,
			park them in a parking lot near any public transport stop and take the
			public mode of travel like metro, bus etc. for the remaining portion of
			the journey.</b>
			<br />
			<br />
			We are interested in your valuable responses towards choice-making of
			modes for daily commute by evaluating the provided alternatives in terms
			of the identified factors and their levels. Your efforts in spending a
			little part of your precious time to fill the questionnaire will be highly
			appreciated. Your responses will not be misused and solely used for
			academic purposes.
			<br />
			<br />
			For any further query, feel free to contact the undersigned:
			<br />
			Manaswinee Kar, Research Scholar, IIT Roorkee,
			<br />
			Email ID: mkar@ce.iitr.ac.in
			<br />
			<br />
			<button className="submitButton" onClick={props.call}>
				Continue
			</button>
		</main>
	);
}
