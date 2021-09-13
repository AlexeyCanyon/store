import React, { ComponentType, FC } from 'react';
import { useHistory } from 'react-router-dom';
import useClickOutside from '../../utils/hooks/useClickOutside/useClickOutside';
import useGetParameter from '../../utils/hooks/useGetParameter/useGetParameter';
import { EPopup, POPUPS, POPUP_QUERY } from '../../utils/hooks/useGetPopup/types';
import useGetPopup from '../../utils/hooks/useGetPopup/useGetPopup';
import { SignIn } from '../Popups/SignIn/SignIn';
import { SignUp } from '../Popups/SignUp/SignUp';

import * as S from './styles';

const popups: Record<EPopup, ComponentType> = {
  [EPopup.signIn]: SignIn,
  [EPopup.signUp]: SignUp,
};

const PopupManager: FC = () => {
  const { isOpened, mountedPopup } = useGetPopup();
  const history = useHistory();
  const { setQueryParam } = useGetParameter(); 

  const ref = useClickOutside<HTMLDivElement>(() => isOpened && history.goBack());

  if (!mountedPopup) {
    return null;
  }

  const Component = popups[mountedPopup];
  
  return (
    <S.PopupOverlay>
      <S.PopupContainer ref={ref}>
        <Component />
        {/* <button
          type="button"
          onClick={() => {
            setQueryParam(POPUP_QUERY.popup, POPUPS.signUp);
          }}
        >
          UP
        </button>
        <button
          type="button"
          onClick={() => {
            setQueryParam(POPUP_QUERY.popup, POPUPS.signIn);
          }}
        >
          INa
        </button> */}
        {/* <button type="button" onClick={history.goBack}>BACK</button> */}
      </S.PopupContainer>
    </S.PopupOverlay>

  );
};

export default PopupManager;
