import React from "react";
import "./App.css";
import styled from 'styled-components';


const Content = styled.div`
background-color: #000000;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

color: white;
padding: 2rem;

font-size: calc(.2rem + 2vmin);
opacity: 0.8;
margin: 0;
`;


const content = (props) => {
    return (
        <Content >
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
        </Content>
    );
}





export default content;