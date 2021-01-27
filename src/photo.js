import React from "react";
import { tsPropertySignature } from "@babel/types";
import "./App.css";

const photo = (props) => {


    return (

        <img
            src={props.pic}
            style={{
                // position: 'relative',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: 'auto',
                width: '100%',
                // objectFit: 'cover',
            }}
        />

    );
}





export default photo;