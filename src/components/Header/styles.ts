import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { regularFont } from '../../styles/globalStyles';

export const Header = styled.header`
  height: 120px;
  position: fixed;
  top: 0;
  right: 0;
  left: 90px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 0 20px;
  cursor: pointer;
  position: relative;
`;

export const Toolbar = styled.ul`
  display: flex;
  align-items: baseline;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  line-height: 19px;
  display: inline-flex;
  align-items: center;
`;

export const ToobarItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;

  svg {
    margin-bottom: 5px;
  }
`;

export const DropdownItem = styled.p`
  ${regularFont}
  line-height: 23.6px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
`;