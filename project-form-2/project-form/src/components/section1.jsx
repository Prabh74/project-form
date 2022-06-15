
import React, { useEffect, useState } from "react";
import "../app.css"

export default function Section1(props){

    useEffect(() => {
        const d = new Date()
        let time = d.toLocaleTimeString();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) =>{
               setData(prevValue => {return {...prevValue, latitude: position.coords.latitude}}) 
               setData(prevValue => {return {...prevValue, longitude: position.coords.longitude}}) 
               
        });
        } else {
            alert("Error in finding location");
        }

        setData(prevValue => {return {...prevValue, startTime: time}})
        console.log(data)
    },[])

    const [data, setData] = useState(
        {
            user: "User2",
            origin: "",
            destination: "",
            purpose: "",
            purposeOther: "",
            frequency: "",
            frequencyOther: "",
            vehicleType: "",
            parkingType: "",
            parkingCost: "",
            parkingSystem: "",
            startTime: "",
            latitude: "",
            longitude: ""
        }
    );

    function section1Submit (e){
        props.call(data)
    }

    function handleChange (e) {
        var currName = e.target.name;
        var currValue = e.target.value;
        
        setData(prevValue => {
        switch(currName){
            case "origin": 
                return{...prevValue, origin: currValue}
            
            case "destination": 
                return{...prevValue, destination: currValue}
            
            case "purpose": 
                return{...prevValue, purpose: currValue}
            
            case "frequency": 
                return{...prevValue, frequency: currValue}
            
            case "vehicleType": 
                return{...prevValue, vehicleType: currValue}
            
            case "parkingCost": 
                return{...prevValue, parkingCost: currValue}

            case "parkingType": 
                return{...prevValue, parkingType: currValue}
            
            case "parkingSystem": 
                return{...prevValue, parkingSystem: currValue}
            
            case "purposeOther": 
                return{...prevValue, purposeOther: currValue}

            case "frequencyOther": 
                return{...prevValue, frequencyOther: currValue}
            }
        })
    }

    return(
        <React.Fragment>
            <main className="main">
            <h1 className="sectionHeading">Travel & Parking Information</h1>
            {/* <form method="get" onSubmit={section1Submit}> */}
                <label className="formLabel">Trip Origin</label>
                <input name="origin" className="formInput" type="text" value={data.origin} onChange={handleChange} placeholder="Enter the trip origin" />

                <label className="formLabel">Trip Destination</label>
                <input name="destination" className="formInput" type="text" value={data.destination} onChange={handleChange} placeholder="Enter the trip destination" />
                

                <label className="formLabel">Trip Purpose</label>
                <input name="purpose" className="formInputOption" type="radio" value="work" id="work" onChange={handleChange} />
                    <label for="work">Work</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="educational" id="educational" onChange={handleChange} />
                    <label for="educational">Educational</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="shopping" id="shopping" onChange={handleChange} />
                    <label for="shopping">Shopping</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="social" id="social" onChange={handleChange} />
                    <label for="social">Social Visit/ Religious Places/ Personal</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="medical" id="medical" onChange={handleChange} />
                    <label for="medical">Medical Service/ Hospital</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="recreational" id="recreational" onChange={handleChange} />
                    <label for="recreational">Recreational/ Sightseeing/ Restaurant</label> <br />
                <input name="purpose" className="formInputOption" type="radio" value="otherPurpose" id="otherPurpose" onChange={handleChange} />
                    <label for="otherPurpose">Other:</label>
                

                {data.purpose === "otherPurpose" && <input name="purposeOther" className="formInput" type="text" value={data.purposeOther} onChange={handleChange} />}

                <label className="formLabel">Trip Frequency</label>
                <input name="frequency" className="formInputOption" type="radio" value="daily" id="daily" onChange={handleChange} />
                    <label for="daily">Daily</label> <br />
                <input name="frequency" className="formInputOption" type="radio" value="onWorkingDays" id="onWorkingDays" onChange={handleChange} />
                    <label for="onWorkingDays">On working days</label> <br />
                <input name="frequency" className="formInputOption" type="radio" value="2-3times" id="2-3times" onChange={handleChange} />
                    <label for="2-3times">2-3times/Week</label> <br />
                <input name="frequency" className="formInputOption" type="radio" value="1-3times" id="1-3times" onChange={handleChange} />
                    <label for="1-3times">1-3times/Month</label> <br />
                <input name="frequency" className="formInputOption" type="radio" value="otherFrequency" id="otherFrequency" onChange={handleChange} />
                    <label for="otherFrequency">Other:</label>
                
                {data.frequency === "otherFrequency" && <input name="frequencyOther" className="formInput" type="text" value={data.frequencyOther} onChange={handleChange} />}

                <label className="formLabel">Type of private vehicle mode used most frequently to commute</label>
                <input name="vehicleType" className="formInputOption" type="radio" value="twoWheeler" id="two-wheeler" onChange={handleChange} />
                    <label for="two-wheeler">Two-Wheeler</label> <br />
                <input name="vehicleType" className="formInputOption" type="radio" value="fourWheeler" id="four-wheeler" onChange={handleChange} />
                    <label for="four-wheeler">Four-Wheeler</label> <br />

                <label className="formLabel">Parking Type</label>
                <input name="parkingType" className="formInputOption" type="radio" value="multi-level" id="multi-level" onChange={handleChange} />
                    <label for="multi-level">Multi-level</label> <br />
                <input name="parkingType" className="formInputOption" type="radio" value="underground" id="underground" onChange={handleChange} />
                    <label for="underground">Underground</label> <br />
                <input name="parkingType" className="formInputOption" type="radio" value="surface" id="surface" onChange={handleChange} />
                    <label for="surface">Surface</label> <br />


                <label className="formLabel">Parking Cost</label>
                <input name="parkingCost" className="formInput" type="text" value={data.parkingCost} onChange={handleChange} placeholder="Enter the parking cost"/>
                

                <label className="formLabel">Parking Management System Available</label>
                <input name="parkingSystem" className="formInputOption" type="radio" value="Basic-information-regarding-the-presence-of-a-Parking-lot" id="Basic-information-regarding-the-presence-of-a-Parking-lot" onChange={handleChange} />
                    <label for="Basic-information-regarding-the-presence-of-a-Parking-lot">Basic information regarding the presence of a Parking lot</label> <br />
                <input name="parkingSystem" className="formInputOption" type="radio" value="presence-of-vms" id="presence-of-vms" onChange={handleChange} />
                    <label for="presence-of-vms">Option 1 + Presence of VMS</label> <br />
                <input name="parkingSystem" className="formInputOption" type="radio" value="directional-information" id="directional-information" onChange={handleChange} />
                    <label for="directional-information">Option 1 + Directional information</label> <br />
                <input name="parkingSystem" className="formInputOption" type="radio" value="first-three" id="first-three" onChange={handleChange} />
                    <label for="first-three">A combination of first three options</label> <br />

                <br />
                <button className="submitButton" onClick={section1Submit}>Next</button>
            {/* </form> */}
            </main>
        </React.Fragment>
    )
}
