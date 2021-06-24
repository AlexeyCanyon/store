import { ReactNode } from "react";

export type IDropdownProps = {
  title: string | ReactNode
  icon?: ReactNode
};

export type IStyledIconProps = {
  isOpen: boolean;
};
