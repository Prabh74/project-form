import React, { useEffect } from "react";

export default function Thanks (props){
    function reload(){
        window.location.reload()
    }

    useEffect(()=> {
        props.call();
        console.log("done")
    }, [])

    return(
        <section className="main">
            <h1>Thank You for filling the form</h1>
            <button onClick={reload} className="submitButton" >New Response</button>
        </section>
    )
}