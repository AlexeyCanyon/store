import { ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export enum EArrowPosition {
  start = 'start',
  end = 'end'
}

export type IDropdownProps = {
  title: string | ReactNode
  icon?: ReactNode
  arrow?: EArrowPosition;
  customStyle?: FlattenSimpleInterpolation;
};

export type IStyledIconProps = {
  isOpen: boolean;
};
