import React, { FC, useState, MouseEvent } from "react";
import { IPasswordProps } from "./types";

import * as S from '../Input/styles';
import { IconContainer as StyledIconContainer } from './styles';
import { EyeIcon } from "../../../../assets/icons";

const Password: FC<IPasswordProps> = ({ type: initialType, ...rest }) => {
  const [type, setType] = useState(initialType);

  const onChangeType = (_event: MouseEvent<SVGElement>) => {
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <S.InputContainer>
      <S.Input {...rest} type={type} />
      <StyledIconContainer>
        <EyeIcon onClick={onChangeType} />
      </StyledIconContainer>
      
    </S.InputContainer>
  );
};

export default Password;
