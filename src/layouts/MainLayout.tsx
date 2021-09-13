import React, { FC } from 'react';
import CallOrderBar from '../components/CallOrderBar';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import * as S from './styles';

const MainLayout: FC = ({ children }) => (
    <S.MainContainer>
      <Sidebar />
      <Header />
      <S.Content>
        <CallOrderBar />
        {children}
      </S.Content>
    </S.MainContainer>
  );

export default MainLayout;
