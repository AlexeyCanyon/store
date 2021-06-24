import React, { FC, useState, MouseEvent, useEffect } from 'react';

import type { ISubMenuProps } from './types';

import * as S from './styles';
import { IMenuItem } from '../Sidebar/types';
import { MENU_ITEMS } from '../Sidebar/mockData';

const SubMenuSidebar: FC<ISubMenuProps> = ({ subItems }) => {
  // TODO: стейт должен быть вложенным
  const [currentID, setCurrentID] = useState<number | null>(null);

  const [selectingIDs, setSelectingIDs] = useState<number[]>([]);

  // const subMenu = (items: any, depth: number) => {
  //   console.log();

  //   return (
  //     <S.SubMenu>
  //       {items.map((item: any, index: number) => (
  //         <S.SubMenuItem key={String(i)}>
  //           {item.title}
  //           {index === currentID && (
  //             <S.SubMenu>
  //               {subItem.subItems.map((sItem, ind) => (
  //                 <S.SubMenuItem key={String(ind)}>
  //                   {sItem.title}
  //                 </S.SubMenuItem>
  //               ))}
  //             </S.SubMenu>
  //           )}
  //         </S.SubMenuItem>
  //       ))}
  //     </S.SubMenu>
  //   );
  // };

  const getSubItems = (depth: number) => {
    let currentItem;
    let index = depth; // 1
    let items = MENU_ITEMS;

    while (index > 0) {
      if (selectingIDs.length === 2) {
        console.log();
      }
      currentItem = items.find(item => item.id === selectingIDs[index - 1]); 
      items = currentItem.subItems;
      index -= 1;
    }

    return items;
  };

  const onMouseLeave = (depth: number) => {
    console.log(depth, 'onMouseLeave', selectingIDs.length);
    // setSelectingIDs(prevState => prevState.slice(0, -1));
  };

  const onMouseEnter = (id: number) => {
    console.log(id, 'enter');
    setSelectingIDs(prevState => [...prevState, id]);
  };

  const renderSubMenu = (depth: number, start: number = 0) => {
    if (start > depth) return null;

    const subElements = getSubItems(start);

    return (
      <S.SubMenu>
        {subElements.map((item: IMenuItem, index: number) => (
          <S.SubMenuItem
            key={String(index)}
            onMouseLeave={()=> onMouseLeave(start)}
            onMouseEnter={() => onMouseEnter(item.id)}
          >
            {item.title}
            {renderSubMenu(depth, start + 1)}
          </S.SubMenuItem>
        ))}
      </S.SubMenu>
    );
  };

  useEffect(() => {
    console.log(selectingIDs);
  }, [selectingIDs]);

   return (
    // <S.SubMenu>
    //   {subItems.map((item, index) => (
    //     <S.SubMenuItem
    //       onMouseLeave={event => onMouseLeave(event, index)}
    //       onMouseEnter={event => onMouseEnter(event, index)}
    //       key={String(index)}
    //     >
    //       {item.title}
    //       {index === currentID && (
    //          <S.SubMenu>
    //           {item.subItems.map((subItem, i) => (
    //             <S.SubMenuItem key={String(i)}           onMouseLeave={event => onMouseLeave(event, i)}
    //             onMouseEnter={event => onMouseEnter(event, index)}>
    //               {subItem.title}
    //               {index === currentID && (
    //                 <S.SubMenu>
    //                   {subItem.subItems.map((sItem, ind) => (
    //                     <S.SubMenuItem           onMouseLeave={event => onMouseLeave(event, ind)}
    //                     onMouseEnter={event => onMouseEnter(event, index)} key={String(ind)}>
    //                       {sItem.title}
    //                     </S.SubMenuItem>
    //                   ))}
    //                 </S.SubMenu>
    //               )}
    //             </S.SubMenuItem>
    //           ))}
    //         </S.SubMenu>
    //       )}
    //     </S.SubMenuItem>
    //   ))}
    // </S.SubMenu>
    <>
      {renderSubMenu(selectingIDs.length)}
    </>
   );
};

export default SubMenuSidebar;
