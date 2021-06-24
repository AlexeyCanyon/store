import React, { FC, useState } from 'react';
import type { IDropdownProps } from './types';
import useClickOutside from '../../utils/hooks/useClickOutside/useClickOutside';

import * as S from './styles';

const Dropdown: FC<IDropdownProps> = ({ children, title, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const dropdown = (
    <S.DropdownContainer>
      {children}
    </S.DropdownContainer>
  );

  return (
    <div ref={ref}>
      <S.ClickableContainer onClick={() => setIsOpen(prevState => !prevState)}>
        {title}
        <S.IconContainer isOpen={isOpen}>
          {icon}
        </S.IconContainer>
      </S.ClickableContainer>
      {isOpen && dropdown}
    </div>
  );
};

export default Dropdown;
