import { css } from "styled-components";
import { colors } from "../../../../styles/defaultTheme";

export const InputCSS = css`
  &:last-child {
    margin-top: 20px;
  }

  input {
    height: 50px;
  }
`;

export const SubmitButtonCSS = css`
  width: 175px;
  height: 40px;
  margin-top: 30px;
`;

export const ForgetPasswordCSS = css`
  color: ${colors.mainColor};
  margin-top: 20px;
  display: block;
`;