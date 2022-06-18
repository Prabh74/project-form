import React from "react";
import "../app.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navHeading">Survey Form</h1>
            <div style={{display:"flex", alignItems: "center"}}>
				<p style={{fontSize: "0.5rem", paddingRight: "3vw"}}> Signed In as User3</p>
				<img
					className="navImg"
					src="/Images/IITR logo.png"
					alt="IIT Roorkee's Logo"
				/>
			</div>
        </nav>
    );
}
