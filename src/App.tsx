import React, { useState } from "react";
import "./App.css";
import CalculatorInputBar from "./components/CalculatorInputBar";
import NumericPad from "./components/NumericPad";
import OperatorPad from "./components/OperatorPad";
import OptionBar from "./components/OptionBar";
interface operatorFlag {
  operator: string;
  flag: boolean;
}
let initOperatorFlag: operatorFlag = {
  flag: false,
  operator: "-",
};
function App() {
  const [inputBar, setstate] = useState("");
  const [resolvedValue, setResolvedValue] = useState(0);
  const [operator, setOperatorFlag] = useState<operatorFlag>(initOperatorFlag);

  let appendText = (newText: string) => {
    if (operator.flag) {
      const searchText = inputBar + newText;
      let value2 = searchText.slice(
        searchText.lastIndexOf(operator.operator) + 1
      );

      const newValue = operate(
        resolvedValue,
        parseFloat(value2),
        operator.operator
      );
      console.log(newValue);
      setResolvedValue(newValue);
      setOperatorFlag({ flag: false, operator: "+" });
      setstate(inputBar + newText);
    } else {
      setstate(inputBar + newText);
      const newValue = parseInt(inputBar + newText);
      setResolvedValue(newValue);
    }
  };
  let clearText = (newText: string) => {
    setResolvedValue(0);
    setOperatorFlag(initOperatorFlag);
    setstate("");
  };
  let delText = (newText: string) => {
    setstate(inputBar.slice(0, inputBar.length - 1));
  };
  let signInvert = (newText: string) => {
    if (inputBar[0] === "-") {
      setstate(inputBar.slice(1));
      // setOperatorFlag({ flag: true, operator: "+" });
    } else {
      setstate("-" + inputBar);
      // setOperatorFlag({ flag: true, operator: "-" });
    }
    if (resolvedValue === 0) setResolvedValue(parseInt(inputBar) * -1);
    else setResolvedValue(resolvedValue * -1);
  };
  let operatorAdd = (newOperator: string) => {
    if (operator.flag === true) return;
    let temp = resolvedValue;
    if (resolvedValue === 0) temp = 0;

    setResolvedValue(temp);
    setOperatorFlag({ flag: true, operator: newOperator });

    setstate(inputBar + newOperator);
  };
  let operate = (value1: number, value2: number, op: string): number => {
    console.log(value1, value2, op);
    if (op === "+") return value1 + value2;
    if (op === "-") return value1 - value2;
    if (op === "x") return value1 * value2;
    if (op === "/") return value1 / value2;
    return -111;
  };
  return (
    <>
      <div className="Header">
        <CalculatorInputBar text={inputBar} result={resolvedValue} />
        <OptionBar
          clearText={clearText}
          delText={delText}
          signInvert={signInvert}
        />
      </div>
      <div className="App">
        <NumericPad changeFunction={appendText} />
        <OperatorPad changeFunction={operatorAdd} />
      </div>
    </>
  );
}

export default App;
