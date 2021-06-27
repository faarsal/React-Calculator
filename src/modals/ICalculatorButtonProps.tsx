export interface ICalculatorButtonProps {
  text: string;
  style?: React.CSSProperties;
  changeFunction?: (a: string) => void;
}
