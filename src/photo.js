import React from "react";
import { tsPropertySignature } from "@babel/types";
import "./App.css";

const photo = (props) => {


    return (
        <div className="PictureOfTheDay" style={{ backgroundImage: "url(" + props.pic + ")" }}>
            {/* <img src={props.pic} /> */}
        </div>
    );
}





export default photo;