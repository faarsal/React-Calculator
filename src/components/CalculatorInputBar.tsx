import React, { FC } from "react";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let CalculatorInputBar: FC<ICalculatorButtonProps> = (
  props: ICalculatorButtonProps
) => {
  return (
    <div className="calculatorInput" style={props.style}>
      {props.text}
    </div>
  );
};
export default CalculatorInputBar;
