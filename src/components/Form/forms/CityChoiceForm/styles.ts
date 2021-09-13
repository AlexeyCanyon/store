import styled, { css } from 'styled-components';
import { colors } from '../../../../styles/defaultTheme';

export const FormContainer = styled.div`
  padding: 60px;
`;

export const FormHeader = styled.h1`
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 40px;
`;

export const SearchInputCSS = css`
  min-width: 550px;

  input {
    height: 50px;
    border-radius: 4px;
    border-color: ${colors.greyColor};
  }

  input + div {
    top: 16px;
  }
`;

export const Separator = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 1px;
  background-color: rgba(180, 180, 180, 0.2);
`;

export const ListCities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const City = styled.p`
  flex-basis: calc((100% / 3) - 20px);
  font-size: 20px;
  line-height: 26px;

  &:hover {
    color: ${colors.mainColor};
    cursor: pointer;
  }
`;