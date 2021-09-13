import styled from "styled-components";
import { colors } from "../../styles/defaultTheme";

export const PopupContainer = styled.div`
  position: fixed;
  padding: 60px;
  background: red;
  top: 50%;
  left: 50%;
  background: ${colors.whiteColor};
  transform: translate(-50%, -50%);
  width: 620px
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(48, 48, 48, 0.7);
`;