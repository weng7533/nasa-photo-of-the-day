import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from "axios";
import Photo from './photo';
import Content from './content';
import MyButton from './ButtonLeft';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import now from "performance-now";


// const TestingButton = styled.button`

//       background-color: #4CAF50; /* Green */
//       border: none;
//       color: white;
//       padding: 15px 32px;
//       text-align: center;
//       text-decoration: none;
//       display: inline-block;
//       font-size: 16px;
//       margin: 4px 2px;
//       cursor: pointer;
//       background-color: white; 
//       color: black; 
//       border: 2px solid #4CAF50;
//       `;

// const Button2 = styled.button`
//       padding: 6px 10px;
//       margin: 5px;
//       border: none;
//       border-radius: 3px;
//       color: white;

//       ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
//       ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
//       ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
//       ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
//   `;





function App() {
  const [data, Setdata] = useState([]);
  const [pic, setPic] = useState([]);
  const [date, Setdate] = useState(new Date());

  const [number, setNumber] = useState(0);


  console.log(`date ---> ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

  useEffect(() => {

    date.setDate(date.getDate() + number)
    setNumber(0);
    console.log(`number ${number}`)


    axios.get("https://api.nasa.gov/planetary/apod?api_key=2ybV59HuoL6yR2zzBjE26HChHf1BZVKuSjUlCDTB&date=" + `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
      .then(res => {


        Setdata(res.data)


        // const now = new Date();
        // Setdate(now.getDate())
        // console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`)
        // SetRightDate(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);




      })

  }, [number])


  return (

    <div className="App">

      <h1 className="App-header"> Astronomy Picture of the Day </h1>




      <Button color="danger" onClick={() => setNumber(number - 1)}>{`<- Last Day`}</Button>{' '}
      <Button color="danger" onClick={() => setNumber(number + 1)}>{`Next Day ->`}</Button>{' '}

      <Photo pic={data.hdurl} />
      <Content date={data.date} explanation={data.explanation} title={data.title} />

    </div >
  );
}

export default App;
