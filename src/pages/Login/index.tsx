import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useGetParameter from '../../utils/hooks/useGetParameter/useGetParameter';
import { POPUP_QUERY, POPUPS } from '../../utils/hooks/useGetPopup/types';

interface IProps {
  a?: string;
}

const LoginPage: FC<RouteComponentProps<IProps>> = (props) => {
  console.log(props);
  // const { setQueryParam } = useGetParameter();
  
  // useEffect(() => {
  //   setQueryParam(POPUP_QUERY.popup, POPUPS.signIn);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return null;
};

export default LoginPage;
