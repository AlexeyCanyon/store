import styled from 'styled-components';
import { colors } from '../../styles/defaultTheme';

import { EButtonStyles, IButtonProps } from './types';

const getColor = ({ btnStyle, btnColor }: IButtonProps) => {
  if (btnStyle === EButtonStyles.primary) {
    return colors.whiteColor;
  }

  return btnColor ? colors[btnColor] : colors.blackColor ;
};

const getBackgroundColor = ({ btnStyle, btnColor }: IButtonProps) => {
  if (btnStyle === EButtonStyles.default || btnStyle === EButtonStyles.link) {
    return 'transparent';
  }

  return btnColor ? colors[btnColor] : 'transparent';
};

const getBorderColor = ({ btnStyle, btnColor }: IButtonProps) => {
  const borderWidth = btnStyle === EButtonStyles.default ? '1px' : 0;
  const borderColor = btnColor ? colors[btnColor] : 'transparent';

  return  `${borderWidth} solid ${borderColor}`;
  
};

export const Button = styled.button<IButtonProps>`
  font-size: 16px;
  color: ${props => getColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  border: ${props => getBorderColor(props)};
  border-radius: ${({ btnRadius }) => btnRadius || '4px'};
  ${({ customStyle }) => customStyle || undefined};
`;