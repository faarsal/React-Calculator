import React, { FC } from "react";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let CalculatorButton: FC<ICalculatorButtonProps> = (
  props: ICalculatorButtonProps
) => {
  let onButtonClick = () => {
    props.changeFunction && props.changeFunction(props.text);
  };
  return (
    <button
      className="calculatorButton"
      style={props.style}
      onClick={onButtonClick}
    >
      {props.text}
    </button>
  );
};
export default CalculatorButton;
