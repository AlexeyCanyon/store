import React, { FC, MouseEvent, useState } from 'react';
import SidebarSearchButton from '../SidebarSearchButton';
import SubMenuSidebar from '../SubMenuSidebar';
import { MENU_ITEMS } from './mockData';

import * as S from './styles';

const Sidebar: FC = () => {
  const [currentID, setCurrentID] = useState<number | null>(null);
  
  return (
    <S.Sidebar>
      <SidebarSearchButton />
      <S.Menu>
        {MENU_ITEMS.map(({ icon: Icon, subItems }, index) => (
          <S.MenuItem
            onMouseLeave={() => setCurrentID(null)}
            onMouseEnter={() => setCurrentID(index)}
            key={String(index)}
          >
            <Icon />
            {index === currentID && (
              <SubMenuSidebar subItems={subItems} />
            )}
          </S.MenuItem>
        ))}
      </S.Menu>
      {currentID}
    </S.Sidebar>
  );
};

export default Sidebar;
