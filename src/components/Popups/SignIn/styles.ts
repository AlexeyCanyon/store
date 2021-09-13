import styled, { css } from 'styled-components';
import { colors } from '../../../styles/defaultTheme';

export const HeaderSignIn = styled.h1`
  font-size: 50px;
  margin-bottom: 24px;
  line-height: initial;
`;

export const HeaderQuestion = styled.p`
  color: ${colors.greyColor};
  font-size: 18px;
`;

export const FormContainer = styled.div`
  margin-top: 42px;
`;

export const LinkButtonCSS = css`
  color: ${colors.mainColor};
`;
