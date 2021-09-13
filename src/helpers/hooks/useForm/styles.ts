import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../styles/defaultTheme';

export const LabelField = styled.div`
  margin-bottom: 10px;
  color: ${colors.blackColor};
`;

export const FieldContainer = styled.div<{ customStyle: FlattenSimpleInterpolation }>`
  ${({ customStyle }) => customStyle || undefined};
`;