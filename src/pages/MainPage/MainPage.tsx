import React, { FC, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { HOC } from '../../components/Sidebar/HOC';
import { ListItem } from '../../components/Sidebar/MenuItem';
import { MENU_ITEMS } from '../../components/Sidebar/mockData';

import MainLayout from '../../layouts';
import useGetParameter from '../../utils/hooks/useGetParameter/useGetParameter';
import { POPUP_QUERY, POPUPS } from '../../utils/hooks/useGetPopup/types';
import useGetPopup from '../../utils/hooks/useGetPopup/useGetPopup';

interface RedirectProps {
  openLogin?: boolean;
}

export const MainPage: FC<RouteComponentProps<{},{},RedirectProps>> = ({ location }) => {
  const { setQueryParam } = useGetParameter();
  const { isOpened, mountedPopup } = useGetPopup();

  useEffect(() => {
    if (!isOpened && location?.state?.openLogin) {
      console.log('dsadas', location);
      setQueryParam(POPUP_QUERY.popup, POPUPS.signIn);
    }
  }, [isOpened, location, setQueryParam]);

  return (
    <>
    <Link to="/check">check</Link>
      <p>MainPage <Link to="/check">Dashboard</Link></p>
      <button
            type="button"
            onClick={() => {
              setQueryParam(POPUP_QUERY.popup, POPUPS.signIn);
            }}
          >
            opena IN
          </button>

        {/* <div style={{ position: 'relative' }}>
         <HOC Component={ListItem} depth={3} items={MENU_ITEMS} />

        </div> */}
    </>
    );
};
