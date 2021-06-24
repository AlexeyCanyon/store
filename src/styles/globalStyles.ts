import { createGlobalStyle, css } from "styled-components";
import { TTNormsBold, TTNormsRegular, TTNormsMedium } from '../assets/fonts/index';

export const mediumFont = css`
    font-family: 'TT Norm medium';
    font-size: 16px;
    line-height: 16px;
    font-style: normal;
    color: ${({ theme }) => theme.blackColor};
`;

export const regularFont = css`
   font-family: 'TT Norm regular';
    font-size: 20px;
    line-height: 24px;
    font-style: normal;
    color: ${({ theme }) => theme.blackColor};
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TT Norm bold'; 
    font-weight: bold;
    src: url(${TTNormsBold}) format('woff');
  }

  @font-face {
    font-family: 'TT Norm regular'; 
    font-weight: 400;
    src: url(${TTNormsRegular}) format('woff');
  }

  @font-face {
    font-family: 'TT Norm medium'; 
    font-weight: bold;
    src: url(${TTNormsMedium}) format('woff');
  }

  body {
    margin: 0;
    ${mediumFont}
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    color: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  input, select, textarea, button {
    font-family:inherit;
    font-size: inherit;
    font-style: inherit;
    color: inherit;
    line-height: inherit;
    transition: all 0.3s;
  }
`;
