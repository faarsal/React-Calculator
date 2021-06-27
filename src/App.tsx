import React, { useState } from "react";
import "./App.css";
import CalculatorInputBar from "./components/CalculatorInputBar";
import NumericPad from "./components/NumericPad";
import OperatorPad from "./components/OperatorPad";

function App() {
  const [inputBar, setstate] = useState("");
  let appendText = (newText: string) => {
    setstate(inputBar + newText);
  };
  return (
    <>
      <CalculatorInputBar text={inputBar} />
      <div className="App">
        <NumericPad changeFunction={appendText} />
        <OperatorPad />
      </div>
    </>
  );
}

export default App;
