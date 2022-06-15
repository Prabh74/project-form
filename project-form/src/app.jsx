import React, { useState } from "react";
import "./app.css"
// import Navbar from "./components/navbar";
import Terms from "./components/terms";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Navbar from "./components/navbar";
import Thanks from "./components/thanks";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7xS7lh8mSaujGyw-BzheqzZuZehLyN50",
  authDomain: "survey-3f39e.firebaseapp.com",
  projectId: "survey-3f39e",
  storageBucket: "survey-3f39e.appspot.com",
  messagingSenderId: "110356303482",
  appId: "1:110356303482:web:38ebd4e6b7a4abcc20f5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App(){

    // const [section1data , setSection1data] = useState({});
    const [dataStored, setDataStored] = useState({})
    const [currentSection, setCurrentSection] = useState("terms")

    function handleDataNav(){
        setCurrentSection("section1")
        console.log(currentSection)
    }
    
    function handleData1(e){
        console.log(e)
        setDataStored({...e, ...dataStored})
        setCurrentSection("section2")
        console.log(currentSection)
        console.log(dataStored)
    }

    function handleData2(e){
        console.log(e)
        setDataStored({...e, ...dataStored})
        console.log(currentSection)
    }

    function nextSection(){
        setCurrentSection("section3")
    }

    function handleData3 (e){
        setDataStored({...e, ...dataStored})
        console.log(dataStored)
        setCurrentSection("thanks")
    }

    function sendData (){
        console.log(dataStored)
        fetch("https://surveyformbackend.herokuapp.com/submitForm", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataStored)
        })
    }

    return(
        <React.Fragment>
            <Navbar />
            {currentSection === "terms" && <Terms call = {handleDataNav}/>}
            {currentSection === "section1" && <Section1 call = {handleData1}/>}
            {currentSection === "section2" && <Section2 data = {dataStored} call = {handleData2} nextSection = {nextSection}/>}
            {currentSection === "section3" &&  <Section3 call = {handleData3} />}
            {currentSection === "thanks" && <Thanks call={sendData}/>}
        </React.Fragment>

    )
}