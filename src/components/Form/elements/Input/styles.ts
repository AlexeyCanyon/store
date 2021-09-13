import styled from 'styled-components';
import { colors } from '../../../../styles/defaultTheme';
import { regularFont } from '../../../../styles/globalStyles';
import { IInputProps } from './types';

export const InputContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
`;

export const Input = styled.input<IInputProps>`
  background: none;
  height: 40px;
  width: 100%;
  border: 1px solid ${colors.greyColor};
  border-radius: 6px;
  padding: 10px 15px;
  ${({ customStyle }) => customStyle || undefined};
  ${regularFont}
  font-size: 14px;
  
  &:focus {
    outline: none;
    border: 1px solid ${colors.mainColor};
  }
`;