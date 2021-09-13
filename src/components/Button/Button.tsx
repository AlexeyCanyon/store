// TODO: Данный плагин не хочет работать с рест параметрами
/* eslint-disable react/button-has-type */
import React, { FC } from "react";

import * as S from './styles';
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({ children, btnStyle, ...rest }) => {
  console.log();

  return (
    <S.Button btnStyle={btnStyle} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
