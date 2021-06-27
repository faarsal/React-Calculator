import React from "react";
import CalculatorButton from "./CalculatorButton";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let OperatorPad = () => {
  let ButtonsArray: ICalculatorButtonProps[] = [
    {
      text: "/",
      style: {
        backgroundColor: "red",
      },
    },
    {
      text: "x",
      style: {
        backgroundColor: "red",
      },
    },
    {
      text: "-",
      style: {
        backgroundColor: "red",
      },
    },
    {
      text: "+",
      style: {
        backgroundColor: "red",
      },
    },
  ];
  return (
    <div>
      {ButtonsArray.map((button, i) => {
        return (
          <>
            <CalculatorButton text={button.text} style={button.style} />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default OperatorPad;
