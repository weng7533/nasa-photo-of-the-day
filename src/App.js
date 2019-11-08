import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from "axios";
import Photo from './photo';
import Content from './content';
import MyButton from './ButtonLeft';
import { Progress } from 'reactstrap';
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
  const [date, Setdate] = useState();
  const [rightDate, SetRightDate] = useState(`2019-10-07`);


  let now = new Date();
  now.setDate(now.getDate() - 5);
  console.log(`---> ${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);

  useEffect(() => {


    SetRightDate(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);
    console.log(`rightDate => ${rightDate}`)
    axios.get("https://api.nasa.gov/planetary/apod?api_key=2ybV59HuoL6yR2zzBjE26HChHf1BZVKuSjUlCDTB&date=" + rightDate)
      .then(res => {

        console.log(res);
        console.log(`data date -> ${res.data.date}`)
        Setdata(res.data)


        // const now = new Date();
        // Setdate(now.getDate())
        // console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`)
        // SetRightDate(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);
        console.log(rightDate);



      })

  }, [])

  return (
    <div className="App">
      {/* <TestingButton>Nice One</TestingButton>
      <Button2 type="primary" >testing</Button2> */}
      <h1 className="App-header"> Astronomy Picture of the Day </h1>
      <MyButton pic={data.hdurl} />
      <Photo pic={data.hdurl} />
      <Content date={data.date} explanation={data.explanation} title={data.title} />

    </div >
  );
}

export default App;
