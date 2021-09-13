import styled from "styled-components";
import { colors } from "../../../../styles/defaultTheme";

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;

  svg path {
    fill: ${colors.greyColor};
  }
`;