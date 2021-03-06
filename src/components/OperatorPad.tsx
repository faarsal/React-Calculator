import React from "react";
import CalculatorButton from "./CalculatorButton";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let OperatorPad = (props: any) => {
  let ButtonsArray: ICalculatorButtonProps[] = [
    {
      text: "/",
      style: {
        backgroundColor: "green",
      },
    },
    {
      text: "x",
      style: {
        backgroundColor: "green",
      },
    },
    {
      text: "-",
      style: {
        backgroundColor: "green",
      },
    },
    {
      text: "+",
      style: {
        backgroundColor: "green",
      },
    },
  ];
  return (
    <div>
      {ButtonsArray.map((button, i) => {
        return (
          <>
            <CalculatorButton
              text={button.text}
              style={button.style}
              changeFunction={props.changeFunction}
            />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default OperatorPad;
