import styled, { css } from 'styled-components';
import { hexToRgb } from '../../styles/mixins';

export const IconWrapper = styled.div(({ theme }) => css`
  padding: 40px 30px;
  border-bottom: 1px solid rgba(${hexToRgb(theme.greyColor)}, 0.3);
`);
