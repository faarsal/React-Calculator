import React, { FC } from "react";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let CalculatorInputBar = (props: any) => {
  let resultfontSize = "48px";
  if (props.result.toString().length > 10) {
    resultfontSize = "24px";
  }
  return (
    <div className="calculatorInput" style={props.style}>
      <div className="inputEquation">{props.text}</div>
      <div className="inputResult" style={{ fontSize: resultfontSize }}>
        {props.result}
      </div>
    </div>
  );
};
export default CalculatorInputBar;
