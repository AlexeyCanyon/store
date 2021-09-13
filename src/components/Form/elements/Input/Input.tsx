import React, { FC } from 'react';
import { EyeIcon } from '../../../../assets/icons';

import * as S from './styles';
import { IInputProps } from './types';

const Input: FC<IInputProps> = ({ icon: Icon, type, ...rest }) => {
  console.log();
  
  return (
    <S.InputContainer>
      <S.Input {...rest}  />
      {Icon && <S.IconContainer><Icon /></S.IconContainer>}
      {type === 'password' && <EyeIcon onClick={() => alert('dsa')} />}
    </S.InputContainer>
  );
};

export default Input;
