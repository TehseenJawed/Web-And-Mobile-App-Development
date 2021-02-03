import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [greeting, setGreetings]=useState({})
  useEffect(()=>{
    fetch('/.netlify/functions/hello?name=from Serverless Function')
    .then((row)=> row.json())
    .then((data)=> setGreetings(data))
  },[])
  return (
    <div className="App">
      <h1>{greeting.message}</h1>
    </div>
  );
}

export default App;
