import React, { FC } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import * as S from './styles';

const MainLayout: FC = ({ children }) => (
    <S.MainContainer>
      <Sidebar />
      <Header />
    </S.MainContainer>
  );

export default MainLayout;
