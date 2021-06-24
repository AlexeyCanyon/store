import styled, { css } from 'styled-components';
import { hexToRgb } from '../../styles/mixins';

export const Sidebar = styled.aside(({ theme }) => css`
  width: 90px;
  border-right: 1px solid rgba(${hexToRgb(theme.greyColor)}, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`);

export const Menu = styled.ul`
`;

export const MenuItem = styled.li(({ theme }) => css`
  padding: 20px 30px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${theme.mainColor};

    svg path {
      fill: ${theme.whiteColor};
    }
  }
`);

export const SubMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  bottom: 0;
  width: 324px;
`;

