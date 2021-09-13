import styled, { css } from 'styled-components';
import { regularFont } from '../../styles/globalStyles';

export const Container = styled.section(({ theme }) => css`
  height: 70px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.ghostWhite};
`);

export const CityContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CurrentCity = styled.p`
  margin: 0 7px;
`;

export const YoutubeContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 60px
  }
`;

export const YoutubeLink = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 7px;
  }
`;

export const CallOrderContainer = styled.p`
  ${regularFont}
  font-family: 'TT Norm medium';
`;

export const CallOrderButtonCSS = css`
  margin-left: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 210px;
`;

export const DropdownCustom = css`
  top: calc(100% + 20px);
  border-radius: 0;
`;