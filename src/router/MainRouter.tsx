import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import paths from './Paths';
import { GlobalStyle } from '../styles/globalStyles';
import { defaultTheme } from '../styles/defaultTheme';
import MainLayout from '../layouts';
import { MainPage, CatalogPage, PersonalAccountPage } from '../pages';
import PopupManager from '../components/PopupManager';

const MainRouter: FC = () => (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <MainLayout>
              <Route exact path={paths.mainPage} component={MainPage} />
              <Route exact path={paths.catalog} component={CatalogPage} />
              <Route exact path={`${paths.catalog}/:id`}>url params</Route>

              {/* Должен быть защищен от внешнего пользования */}
              <Route path={paths.personalAccount} component={PersonalAccountPage} />
            </MainLayout>
          </Switch>
          <PopupManager />
        </Router>
      </>
    </ThemeProvider>
  );

export default MainRouter;
