import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
function App() {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [age, setAge] = useState({
    year: "--",
    month: "--",
    day: "--",
  });

  return (
    <div className="container">
      <div className="card">
        <Form date={date} setDate={setDate} setAge={setAge} />
        <div className="age-result">
          <h1>
            <span>{age.year}</span> years
          </h1>
          <h1>
            <span>{age.month}</span> months
          </h1>
          <h1>
            <span>{age.day}</span> days
          </h1>
        </div>
      </div>
    </div>
  );
}
export default App;
