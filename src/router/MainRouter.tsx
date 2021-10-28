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
import { PrivateRoute } from './PrivateRoute';
import LoginPage from '../pages/Login';

const MainRouter: FC = () => (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <MainLayout>
              <Route path={paths.mainPage} component={MainPage} />
              <Route path={paths.catalog} component={CatalogPage} />
              <Route path={`${paths.catalog}/:id`}>url params</Route>
              {/* <Route path="/login" component={LoginPage} /> */}
              {/* Должен быть защищен от внешнего пользования */}
              <PrivateRoute path="/check">
                <PersonalAccountPage />
              </PrivateRoute>
              {/* <Route path={paths.personalAccount} component={PersonalAccountPage} /> */}
            </MainLayout>
          </Switch>
          <PopupManager />
        </Router>
      </>
    </ThemeProvider>
  );

export default MainRouter;
