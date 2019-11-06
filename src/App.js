import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from './photo';
import Content from './content';

function App() {
  const [data, Setdata] = useState([]);
  const [pic, setPic] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=2ybV59HuoL6yR2zzBjE26HChHf1BZVKuSjUlCDTB")
      .then(res => {
        console.log(res);
        Setdata(res.data)
      })

  }, [])

  return (
    <div className="App">

      <h1 className="App-header"> Astronomy Picture of the Day </h1>
      <Photo pic={data.hdurl} />

      <Content date={data.date} explanation={data.explanation} title={data.title} />

    </div >
  );
}

export default App;
