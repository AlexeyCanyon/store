import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts';
import useGetParameter from '../../utils/hooks/useGetParameter/useGetParameter';
import { POPUP_QUERY, POPUPS } from '../../utils/hooks/useGetPopup/types';

export const MainPage: FC = () => {
  const { setQueryParam } = useGetParameter();

  return (
    <>
      <p>MainPage <Link to="/catalog/aaa">Dashboard</Link></p>
      <button
            type="button"
            onClick={() => {
              setQueryParam(POPUP_QUERY.popup, POPUPS.signIn);
            }}
          >
            opena IN
          </button>
    </>
    );
};
