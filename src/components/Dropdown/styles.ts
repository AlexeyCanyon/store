/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
// TODO
import type { IStyledIconProps } from './types';

export const DropdownContainer = styled.div(({ theme }) => css`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.whiteColor};
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