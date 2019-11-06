import React from "react";
import "./App.css";

const content = (props) => {
    return (
        <div className='App-header Content' >
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    );
}





export default content;