import { InputHTMLAttributes } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  customStyle?: FlattenSimpleInterpolation;
}
