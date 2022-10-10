import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  
  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div>
          <input
            type="number"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in cm"
          />
        </div>  
        <div>
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
        </div>
          <button onClick={handleBmi}>Calculate</button>
        <div>  
          <hr></hr>
          <h1>Your BMI is:</h1>
          <h1>{bmi}</h1>
          <h2>You are: {info}</h2>
        </div>  
      </div>  
    </div> 
  );
};

export default App;