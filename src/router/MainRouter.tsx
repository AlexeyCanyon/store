import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from '../pages/MainPage';
import paths from './Paths';
import { GlobalStyle } from '../styles/globalStyles';
import { defaultTheme } from '../styles/defaultTheme';

const MainRouter: FC = () => (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path={paths.root} component={MainPage} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );

export default MainRouter;
