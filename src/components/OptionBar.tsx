import React from "react";
import CalculatorButton from "./CalculatorButton";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let OptionBar = (props: any) => {
  let ButtonsArray: ICalculatorButtonProps[] = [
    {
      text: "C",
      style: {
        backgroundColor: "green",
      },
      changeFunction: props.clearText,
    },
    {
      text: "+/-",
      style: {
        backgroundColor: "green",
      },
      changeFunction: props.signInvert,
    },
    {
      text: "%",
      style: {
        backgroundColor: "green",
      },
    },
    {
      text: ".",
      style: {
        backgroundColor: "green",
      },
      changeFunction: props.delText,
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
              changeFunction={button.changeFunction}
            />
          </>
        );
      })}
    </div>
  );
};

export default OptionBar;
