import React, { FC } from 'react';
import { ShevronIcon } from '../../assets/icons';

import { LogoImage } from '../../assets/images';
import Dropdown from '../Dropdown';

import { menuItems, toolbarMenuItems } from './mockData';

import * as S from './styles';

const Header: FC = () => {
  console.log();

  return (
    <S.Header>
      <img src={LogoImage} alt="Logo" />
      <S.Menu>
        {/* Декомпозировать эту часть */}
        {menuItems.map((item, index) => (
          <S.MenuItem key={String(index)}>
            {item.dropdownMenu ? (
              <Dropdown title={item.name} icon={<ShevronIcon />}>
                {item.dropdownMenu.map((dropItem, ind) => (
                  <S.DropdownItem key={String(ind)}>
                    {dropItem.name}
                  </S.DropdownItem>
                ))}
              </Dropdown>
            ) : <S.LinkItem to={item.link}>{item.name}</S.LinkItem>}
          </S.MenuItem>
        ))}
      </S.Menu>
      <S.Toolbar>
        {/* Декомпозировать эту часть */}
        {toolbarMenuItems.map(({ title, icon: Icon }, index) => (
          <S.ToobarItem key={String(index)}>
            <Icon />
            {title}
          </S.ToobarItem>
        ))}
      </S.Toolbar>
    </S.Header>
  );
};

export default Header;
