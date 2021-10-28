import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IProps {
  isAuth?: boolean;
  path?: string;
}

export const PrivateRoute: FC<IProps> = ({ isAuth, children, ...rest }) => (
  <Route
    {...rest}
    render={() => isAuth ? children : <Redirect to="/login" />}
  />
);
