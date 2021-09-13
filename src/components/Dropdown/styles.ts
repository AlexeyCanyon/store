/* eslint-disable no-unused-vars */
import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';
// TODO
import { EArrowPosition, IDropdownProps, IStyledIconProps } from './types';

const getArrow = (arrow: EArrowPosition, theme: DefaultTheme): FlattenSimpleInterpolation => {
  if (arrow) {
    return css`
     &::before {
      content: '';
      position: absolute;
      top: -10px;
      border-bottom: 10px solid ${theme.whiteColor};
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
    `;
  }

  return undefined;
};

export const DropdownContainer = styled.div<Partial<IDropdownProps>>(({ theme, arrow, customStyle }) => css`
  cursor: default;
  position: absolute;
  top: calc(100% + 10px);
  left: ${() => arrow === EArrowPosition.end ? '74%' : 0 };
  z-index: 1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.whiteColor};

  ${getArrow(arrow, theme)}

  ${customStyle}
`);

export const IconContainer = styled.span<IStyledIconProps>`
  transform: ${({ isOpen }) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};;
  margin-left: 4px;
  display: inline-flex;
  transition: inherit;
`;

export const ClickableContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;