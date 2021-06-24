import styled, { css } from 'styled-components';

export const SubMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  width: 324px;
`;

export const SubMenuItem = styled.li(({ theme }) => css`
  height: 60px;

  &:hover {
  background-color: ${theme.mainColor};
  
    svg path {
      fill: ${theme.whiteColor};
    }
  }
`);