import React from "react";
import CalculatorButton from "./CalculatorButton";
import { ICalculatorButtonProps } from "./../modals/ICalculatorButtonProps";

let NumericPad = (props: any) => {
  let ButtonsArray: ICalculatorButtonProps[] = [
    {
      text: "1",
    },
    {
      text: "2",
    },
    {
      text: "3",
    },
    {
      text: "4",
    },
    {
      text: "5",
    },
    {
      text: "6",
    },
    {
      text: "7",
    },
    {
      text: "8",
    },
    {
      text: "9",
    },
    {
      text: "0",
      style: {
        width: "200px",
      },
    },
    {
      text: ".",
    },
  ];
  return (
    <div>
      {ButtonsArray.map((button, i) => {
        if (i % 3 === 0 && i !== 0) {
          return (
            <>
              <br />
              <CalculatorButton
                text={button.text}
                style={button.style}
                changeFunction={props.changeFunction}
              />
            </>
          );
        }
        return (
          <CalculatorButton
            text={button.text}
            style={button.style}
            changeFunction={props.changeFunction}
          />
        );
      })}
    </div>
  );
};

export default NumericPad;
