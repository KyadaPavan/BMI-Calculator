import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [bmi, setbmi] = useState();
  const [message, setmessage] = useState("");

  let weightchange = (event) => {
    setweight(event.target.value);
  };

  let heightchange = (event) => {
    setheight(event.target.value);
  };

  let calculation = () => {
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let result = weight / (height * height);
      setbmi(result.toFixed(1));

      if (result < 25) {
        setmessage("You are UnderWeight.");
      } else if (result >= 25 && result <= 30) {
        setmessage("You have Normal Weight.");
      } else {
        setmessage("You are OverWeight.");
      }
    }
  };

  let onrelode = () => {
    setheight("");
    setweight("");
    setbmi("");
    setmessage("");
  };

  return (
    <>
      <div className="maincontainer">
        <div className="bmicontainer">
          <h2 className="title">BMI Calculator</h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={weight}
              onChange={weightchange}
            />
            <label for="floatingInput">Enter Your Weight (in kg)</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={height}
              onChange={heightchange}
            />
            <label for="floatingInput">Enter Your Height (in m)</label>
          </div>

          <div className="buttons">
            <button
              type="button"
              className="btn btn-primary submitbtn"
              onClick={calculation}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-light reloadbtn"
              onClick={onrelode}
            >
              Reload
            </button>
          </div>

          <p className="calcuation">Your BMI is: {bmi}</p>
          <p className="message">{message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
