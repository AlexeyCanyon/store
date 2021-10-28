import React, { FC, useState } from 'react';
import type { IPropsListItem, MenuItem } from './types';

export const ListItem: FC<IPropsListItem> = ({ items, visible, onChange, isFirst, children }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  if (!visible) return null;

  const onMouseEnter = (item: MenuItem) => {
    setIsSelected(item.id);
    onChange(item.id);
  };

  const onMouseLeave = () => {
    setIsSelected(null);
    onChange(null);
  };
 
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: isFirst ? 'inittial' : '100%', top: 0, minHeight: '100%' }}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item) => (
        <div
          style={{ display: 'flex', padding: '10px', color: isSelected === item.id ? 'red' : 'initial', border: '1px solid black'  }}
          onMouseEnter={() => onMouseEnter(item)}
          key={`${item.id}-${item.title}`}
        >
          {item.title}
          {isSelected === item.id && <> {children}</>}
        </div>
      ))}
     
    </div>
  );
};
