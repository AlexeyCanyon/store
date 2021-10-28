import React, { FC, useEffect, useState } from 'react';

interface IProps {
  Component: React.ComponentType<any>;
  depth: number;
  items: any[];
}

export const HOC: FC<IProps> = ({ Component, depth, items }) => {
  const [selectedIds, setSelectedIds] = useState<(number | null)[]>(Array(depth + 1).fill(null));

  const recursiveRender = (d: number) => {
  
    if (d > depth) return null;

    const getItemsByDepth = () => {
      let currentItems = items;
      if (d === 0) return currentItems;
      if (selectedIds[d - 1] === null) return [];

      for (let i = 0; i < d; i++) {
        const currentSelectedIndex = selectedIds[i];
        currentItems = currentItems.find(item => item.id === currentSelectedIndex).subItems || [];
      };
      
      return currentItems;
    };

    const onChange = (id: number | null) => {
      setSelectedIds((prevState) => prevState.map((item, index) => {
          if (d === index) return id;
          return item;
        }));
    };

    return (
      // eslint-disable-next-line max-len
      <Component visible isFirst={d === 0} onChange={onChange} items={getItemsByDepth()}>{recursiveRender(d + 1)}</Component>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      {recursiveRender(0)}
    </div>
  );
};
