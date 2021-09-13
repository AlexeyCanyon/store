import { ButtonHTMLAttributes } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { EColors } from "../../styles/types";

export enum EButtonStyles {
  link = 'link',
  default = 'default',
  primary = 'primary'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: EButtonStyles;
  btnColor?: EColors;
  btnRadius?: number;
  customStyle?: FlattenSimpleInterpolation;
}